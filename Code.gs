/**
 * Lighting Up Canada — Google Sheets admin backend
 *
 * Replace SPREADSHEET_ID, add Admin.html, run setupWorkbook() once,
 * then deploy as a Google Apps Script web app.
 */

const CONFIG = {
  SPREADSHEET_ID: "1j1hx6pL6WoBBiZyx0b9cM3GZVYwE0mQs5PzFR14gACs",
  REVIEW_SHEET: "Review Queue",
  PUBLISHED_SHEET: "Published Records",
  ARCHIVE_SHEET: "Rejected Archive"
};

const HEADERS = [
  "Record ID",
  "Date submitted",
  "Submitted by",
  "Quarter",
  "Review status",
  "Approval status",
  "Reviewer",
  "Review date",
  "Reviewer notes",
  "Institution name",
  "Short name",
  "Institution type",
  "City",
  "Province/Territory",
  "Latitude",
  "Longitude",
  "Coordinates approximate?",
  "Progress stage",
  "Stage label",
  "Headline",
  "Summary",
  "Achievements",
  "Organizations involved",
  "Action announced date",
  "Action approved date",
  "Implementation start date",
  "Implementation/completion date",
  "Target date",
  "Source publication date",
  "Year implemented",
  "Previous value",
  "New value",
  "Unit of measurement",
  "Comparison period",
  "Concrete change identified",
  "New this quarter?",
  "Existing record ID",
  "Primary source URL",
  "Secondary source URL",
  "Additional source URLs",
  "Evidence excerpt or summary",
  "Why this qualifies",
  "Potential concerns",
  "Ready for map?",
  "Last updated",
  "Verified?"
];

function doGet() {
  return HtmlService
    .createTemplateFromFile("Admin")
    .evaluate()
    .setTitle("Lighting Up Canada Admin");
}

function setupWorkbook() {
  const ss = getSpreadsheet_();

  [CONFIG.REVIEW_SHEET, CONFIG.PUBLISHED_SHEET, CONFIG.ARCHIVE_SHEET]
    .forEach((name) => ensureSheet_(ss, name));

  applyValidations_(ss.getSheetByName(CONFIG.REVIEW_SHEET));

  return "Workbook setup complete.";
}

function submitEntry(form) {
  validateSubmission_(form);

  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const sheet = getSpreadsheet_().getSheetByName(CONFIG.REVIEW_SHEET);
    const now = new Date();
    const record = {
      "Record ID": Utilities.getUuid(),
      "Date submitted": now,
      "Submitted by":
        Session.getActiveUser().getEmail()
        || form.submittedBy
        || "Signed-in user",
      "Quarter": form.quarter || currentQuarter_(),
      "Review status": "Not reviewed",
      "Approval status": "Pending",
      "Institution name": form.name,
      "Short name": form.shortName || form.name,
      "Institution type": form.type,
      "City": form.city,
      "Province/Territory": form.province,
      "Latitude": Number(form.latitude),
      "Longitude": Number(form.longitude),
      "Coordinates approximate?": yesNo_(form.coordinatesApproximate),
      "Progress stage": form.stage,
      "Stage label": form.stageLabel,
      "Headline": form.headline,
      "Summary": form.summary,
      "Achievements": cleanLines_(form.achievements),
      "Organizations involved": cleanLines_(form.organizationsInvolved),
      "Action announced date": form.actionAnnouncedDate,
      "Action approved date": form.actionApprovedDate,
      "Implementation start date": form.implementationStartDate,
      "Implementation/completion date": form.implementationDate,
      "Target date": form.targetDate,
      "Source publication date": form.sourcePublicationDate,
      "Year implemented": form.yearImplemented,
      "Previous value": form.previousValue,
      "New value": form.newValue,
      "Unit of measurement": form.measurementUnit,
      "Comparison period": form.comparisonPeriod,
      "Concrete change identified": form.concreteChange,
      "New this quarter?": yesNo_(form.newThisQuarter),
      "Existing record ID": form.existingRecordId,
      "Primary source URL": form.primarySource,
      "Secondary source URL": form.secondarySource,
      "Additional source URLs": cleanLines_(form.additionalSources),
      "Evidence excerpt or summary": form.evidence,
      "Why this qualifies": form.qualificationReason,
      "Potential concerns": form.concerns,
      "Ready for map?": "No",
      "Last updated": now,
      "Verified?": "No"
    };

    sheet.appendRow(toRow_(record));

    return {
      ok: true,
      recordId: record["Record ID"],
      message: "Entry added to the Review Queue."
    };
  } finally {
    lock.releaseLock();
  }
}

function getReviewEntries() {
  const sheet = getSpreadsheet_().getSheetByName(CONFIG.REVIEW_SHEET);

  if (sheet.getLastRow() < 2) return [];

  return sheet
    .getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length)
    .getValues()
    .map(fromRow_)
    .reverse()
    .slice(0, 200);
}

function updateReviewDecision(payload) {
  const sheet = getSpreadsheet_().getSheetByName(CONFIG.REVIEW_SHEET);
  const rowNumber = findRow_(sheet, payload.recordId);

  if (!rowNumber) throw new Error("Record not found.");

  const record = fromRow_(
    sheet.getRange(rowNumber, 1, 1, HEADERS.length).getValues()[0]
  );

  record["Review status"] = payload.reviewStatus;
  record["Approval status"] = payload.approvalStatus;
  record["Reviewer"] =
    Session.getActiveUser().getEmail()
    || payload.reviewer
    || "Signed-in reviewer";
  record["Review date"] = new Date();
  record["Reviewer notes"] = payload.notes || "";
  record["Verified?"] =
    payload.reviewStatus === "Evidence confirmed" ? "Yes" : "No";
  record["Ready for map?"] =
    payload.reviewStatus === "Evidence confirmed"
    && payload.approvalStatus === "Approved"
      ? "Yes"
      : "No";
  record["Last updated"] = new Date();

  sheet
    .getRange(rowNumber, 1, 1, HEADERS.length)
    .setValues([toRow_(record)]);

  if (record["Approval status"] === "Approved") {
    upsert_(CONFIG.PUBLISHED_SHEET, record);
  }

  if (record["Approval status"] === "Rejected") {
    upsert_(CONFIG.ARCHIVE_SHEET, record);
  }

  return { ok: true, message: "Review decision saved." };
}

function getApprovedJson() {
  const sheet = getSpreadsheet_().getSheetByName(CONFIG.PUBLISHED_SHEET);

  if (sheet.getLastRow() < 2) return "[]";

  const records = sheet
    .getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length)
    .getValues()
    .map(fromRow_)
    .filter((record) =>
      record["Approval status"] === "Approved"
      && record["Ready for map?"] === "Yes"
    )
    .map(toMapRecord_);

  return JSON.stringify(records, null, 2);
}

function toMapRecord_(record) {
  const resources = [];

  if (record["Primary source URL"]) {
    resources.push({
      label: "Primary source",
      url: record["Primary source URL"]
    });
  }

  if (record["Secondary source URL"]) {
    resources.push({
      label: "Secondary source",
      url: record["Secondary source URL"]
    });
  }

  String(record["Additional source URLs"] || "")
    .split(/\r?\n/)
    .map((value) => value.trim())
    .filter(Boolean)
    .forEach((url, index) => resources.push({
      label: `Additional source ${index + 1}`,
      url
    }));

  const achievements = String(record["Achievements"] || "")
    .split(/\r?\n/)
    .map((value) => value.replace(/^[-•]\s*/, "").trim())
    .filter(Boolean);

  const organizations = String(record["Organizations involved"] || "")
    .split(/\r?\n|;/)
    .map((value) => value.trim())
    .filter(Boolean);

  const year = Number(record["Year implemented"]);

  return {
    id: slugify_(
      record["Existing record ID"]
      || record["Institution name"]
      || record["Record ID"]
    ),
    name: record["Institution name"],
    shortName: record["Short name"] || record["Institution name"],
    type: record["Institution type"],
    city: record["City"],
    province: record["Province/Territory"],
    coordinates: {
      lat: Number(record["Latitude"]),
      lng: Number(record["Longitude"])
    },
    coordinatesApproximate:
      record["Coordinates approximate?"] === "Yes",
    stage: record["Progress stage"],
    stageLabel: record["Stage label"],
    yearImplemented: Number.isFinite(year) && year > 0 ? year : null,
    timeframe: [
      record["Action approved date"],
      record["Implementation/completion date"],
      record["Target date"]
    ]
      .filter(Boolean)
      .map(formatDate_)
      .join(" | "),
    headline: record["Headline"],
    stats: buildStats_(record),
    summary: record["Summary"],
    achievements,
    organizationsInvolved: organizations,
    resources,
    lastUpdated: formatDate_(record["Last updated"]),
    verified: record["Verified?"] === "Yes"
  };
}

function buildStats_(record) {
  const stats = [];

  if (record["New value"]) {
    stats.push({
      value: String(record["New value"]),
      label:
        String(record["Unit of measurement"] || "")
        || "Documented target or result"
    });
  }

  if (record["Year implemented"]) {
    stats.push({
      value: String(record["Year implemented"]),
      label: "Year documented"
    });
  }

  return stats;
}

function ensureSheet_(ss, name) {
  let sheet = ss.getSheetByName(name);

  if (!sheet) sheet = ss.insertSheet(name);

  sheet
    .getRange(1, 1, 1, HEADERS.length)
    .setValues([HEADERS])
    .setFontWeight("bold")
    .setBackground("#dceaf8")
    .setWrap(true);

  sheet.setFrozenRows(1);

  if (!sheet.getFilter()) {
    sheet.getRange(1, 1, Math.max(sheet.getMaxRows(), 2), HEADERS.length)
      .createFilter();
  }
}

function applyValidations_(sheet) {
  const columns = Object.fromEntries(
    HEADERS.map((header, index) => [header, index + 1])
  );
  const rowCount = Math.max(sheet.getMaxRows() - 1, 999);

  validation_(
    sheet,
    columns["Institution type"],
    rowCount,
    ["city", "university", "hospital", "government", "other"]
  );

  validation_(
    sheet,
    columns["Progress stage"],
    rowCount,
    ["outreach", "active", "motion-passed", "implemented"]
  );

  validation_(
    sheet,
    columns["Review status"],
    rowCount,
    [
      "Not reviewed",
      "Source opened",
      "Evidence confirmed",
      "Needs clarification",
      "Rejected"
    ]
  );

  validation_(
    sheet,
    columns["Approval status"],
    rowCount,
    ["Pending", "Approved", "Rejected", "Hold"]
  );

  [
    "Coordinates approximate?",
    "New this quarter?",
    "Ready for map?",
    "Verified?"
  ].forEach((header) => {
    validation_(sheet, columns[header], rowCount, ["Yes", "No"]);
  });
}

function validation_(sheet, column, rowCount, values) {
  const rule = SpreadsheetApp
    .newDataValidation()
    .requireValueInList(values, true)
    .setAllowInvalid(false)
    .build();

  sheet.getRange(2, column, rowCount, 1).setDataValidation(rule);
}

function upsert_(sheetName, record) {
  const sheet = getSpreadsheet_().getSheetByName(sheetName);
  const rowNumber = findRow_(sheet, record["Record ID"]);

  if (rowNumber) {
    sheet
      .getRange(rowNumber, 1, 1, HEADERS.length)
      .setValues([toRow_(record)]);
  } else {
    sheet.appendRow(toRow_(record));
  }
}

function findRow_(sheet, recordId) {
  if (sheet.getLastRow() < 2) return 0;

  const match = sheet
    .getRange(2, 1, sheet.getLastRow() - 1, 1)
    .createTextFinder(String(recordId))
    .matchEntireCell(true)
    .findNext();

  return match ? match.getRow() : 0;
}

function validateSubmission_(form) {
  const required = [
    ["name", "Institution name"],
    ["type", "Institution type"],
    ["city", "City"],
    ["province", "Province/Territory"],
    ["latitude", "Latitude"],
    ["longitude", "Longitude"],
    ["stage", "Progress stage"],
    ["headline", "Headline"],
    ["summary", "Summary"],
    ["primarySource", "Primary source"],
    ["evidence", "Evidence"],
    ["qualificationReason", "Reason for inclusion"]
  ];

  const missing = required
    .filter(([key]) => !String(form[key] || "").trim())
    .map(([, label]) => label);

  if (missing.length) {
    throw new Error(`Missing required fields: ${missing.join(", ")}.`);
  }

  if (!/^https?:\/\//i.test(form.primarySource)) {
    throw new Error("Primary source must begin with http:// or https://.");
  }

  const lat = Number(form.latitude);
  const lng = Number(form.longitude);

  if (!Number.isFinite(lat) || lat < -90 || lat > 90) {
    throw new Error("Latitude must be between -90 and 90.");
  }

  if (!Number.isFinite(lng) || lng < -180 || lng > 180) {
    throw new Error("Longitude must be between -180 and 180.");
  }
}

function getSpreadsheet_() {
  if (
    !CONFIG.SPREADSHEET_ID
    || CONFIG.SPREADSHEET_ID === "PASTE_GOOGLE_SHEET_ID_HERE"
  ) {
    throw new Error("Set CONFIG.SPREADSHEET_ID in Code.gs.");
  }

  return SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
}

function toRow_(record) {
  return HEADERS.map((header) => record[header] ?? "");
}

function fromRow_(row) {
  return Object.fromEntries(
    HEADERS.map((header, index) => [header, row[index]])
  );
}

function cleanLines_(value) {
  return String(value || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
}

function yesNo_(value) {
  return value === true
    || value === "true"
    || value === "Yes"
      ? "Yes"
      : "No";
}

function currentQuarter_() {
  const now = new Date();
  return `${now.getFullYear()} Q${Math.floor(now.getMonth() / 3) + 1}`;
}

function slugify_(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatDate_(value) {
  if (!value) return null;

  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) return String(value);

  return Utilities.formatDate(
    date,
    Session.getScriptTimeZone(),
    "yyyy-MM-dd"
  );
}
