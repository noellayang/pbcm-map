/*
  Canadian Plant-Forward Directory
  --------------------------------
  This file contains:
  1. The temporary institution dataset
  2. Leaflet map setup
  3. Institution type markers
  4. Search and filtering
  5. Directory cards
  6. Google Maps-style profile drawer

  Replace or expand INSTITUTIONS when your final reviewed data is ready.
*/

"use strict";

/* =========================================================
   DATA
   ========================================================= */
const INSTITUTIONS = [
  {
    id: "ubc",
    name: "University of British Columbia",
    shortName: "UBC",
    type: "university",
    city: "Vancouver",
    province: "BC",
    coordinates: { lat: 49.2606, lng: -123.2460 },
    stage: "implemented",
    stageLabel: "Implementation underway",
    score: null,
    plantBasedPercent: null,
    summary:
      "The University of British Columbia is implementing climate-friendly food-system procurement guidelines through its Climate Action Plan 2030, including a target to reduce food-related greenhouse-gas emissions by 50% by 2030.",
    achievements: [
      "Adopted climate-friendly food-system procurement guidelines",
      "Established a 2030 target to reduce food-related greenhouse-gas emissions by 50%",
      "Introduced climate-friendly food labels to communicate the environmental impacts of menu choices",
      "Integrated food procurement into the University’s broader institutional climate strategy"
    ],
    resources: [
      {
        label: "Climate-Friendly Food Systems Procurement Guidelines",
        url: "https://planning.ubc.ca/sustainability/sustainability-action-plans/climate-action-plan-2030/food-systems/climate-friendly-food-systems-procurement-guidelines"
      },
      {
        label: "UBC Climate-Friendly Food Labels",
        url: "https://food.ubc.ca/climate-friendly-food-labels/"
      }
    ],
    lastUpdated: "2026-06-09",
    verified: true
  },

  {
    id: "uvic",
    name: "University of Victoria",
    shortName: "UVic",
    type: "university",
    city: "Victoria",
    province: "BC",
    coordinates: { lat: 48.4634, lng: -123.3117 },
    stage: "active",
    stageLabel: "Active campus outreach",
    score: null,
    plantBasedPercent: null,
    summary:
      "The University of Victoria’s Climate and Sustainability Action Plan 2030 includes targets to reduce food-related greenhouse-gas emissions by 50% and make plant-based choices the default on 60% of campus menus by 2030. Faculty-level outreach and implementation work are continuing.",
    achievements: [
      "Established a 2030 target for a 50% reduction in food-related greenhouse-gas emissions",
      "Established a target for plant-based defaults on 60% of campus menus",
      "Demonstrated faculty-level adoption through a plant-based default initiative in the Faculty of Law",
      "Began outreach aimed at expanding participation across additional faculties"
    ],
    resources: [],
    lastUpdated: "2026-06-09",
    verified: false
  },

  {
    id: "western",
    name: "Western University",
    shortName: "Western",
    type: "university",
    city: "London",
    province: "ON",
    coordinates: { lat: 43.0096, lng: -81.2737 },
    stage: "active",
    stageLabel: "Reported menu progress",
    score: null,
    plantBasedPercent: 46,
    summary:
      "Western University residence dining services report that approximately 46% of offerings within the residence dining cycle are plant-based.",
    achievements: [
      "Approximately 46% of residence dining-cycle offerings are reported as plant-based",
      "Plant-based availability has been incorporated into residence dining operations"
    ],
    resources: [],
    lastUpdated: "2026-06-09",
    verified: false
  },

  {
    id: "concordia",
    name: "Concordia University",
    shortName: "Concordia",
    type: "university",
    city: "Montréal",
    province: "QC",
    coordinates: { lat: 45.4972, lng: -73.5789 },
    stage: "active",
    stageLabel: "Reported menu progress",
    score: null,
    plantBasedPercent: 42,
    summary:
      "Concordia University dining menus reportedly include approximately 42% vegan and 24% vegetarian options, alongside increased visibility and promotion of plant-based milk.",
    achievements: [
      "Approximately 42% of dining options are reported as vegan",
      "Approximately 24% of dining options are reported as vegetarian",
      "Plant-based milk has received greater visibility in campus food service"
    ],
    resources: [],
    lastUpdated: "2026-06-09",
    verified: false
  },

  {
    id: "waterloo-university",
    name: "University of Waterloo",
    shortName: "Waterloo",
    type: "university",
    city: "Waterloo",
    province: "ON",
    coordinates: { lat: 43.4723, lng: -80.5449 },
    stage: "active",
    stageLabel: "Sustainability integration",
    score: null,
    plantBasedPercent: null,
    summary:
      "The University of Waterloo is increasingly integrating food systems into sustainability planning and procurement while continuing to expand vegan offerings.",
    achievements: [
      "Food systems have been incorporated into institutional sustainability planning",
      "Plant-forward procurement work is reported as underway",
      "Vegan menu offerings continue to expand"
    ],
    resources: [],
    lastUpdated: "2026-06-09",
    verified: false
  },

  {
    id: "guelph-university",
    name: "University of Guelph",
    shortName: "U of G",
    type: "university",
    city: "Guelph",
    province: "ON",
    coordinates: { lat: 43.5305, lng: -80.2262 },
    stage: "active",
    stageLabel: "Campus options available",
    score: null,
    plantBasedPercent: null,
    summary:
      "The University of Guelph reports that vegan and vegetarian options are readily available across campus food-service locations.",
    achievements: [
      "Vegan and vegetarian choices are available across campus",
      "Plant-forward options have been incorporated into campus hospitality services"
    ],
    resources: [
      {
        label: "University of Guelph Hospitality Services",
        url: "https://hospitality.uoguelph.ca/"
      }
    ],
    lastUpdated: null,
    verified: true
  },

  {
    id: "vancouver-general-hospital",
    name: "Vancouver General Hospital",
    shortName: "VGH",
    type: "hospital",
    city: "Vancouver",
    province: "BC",
    coordinates: { lat: 49.2612, lng: -123.1233 },
    stage: "implemented",
    stageLabel: "Menu pilot completed",
    score: null,
    plantBasedPercent: null,
    summary:
      "Vancouver General Hospital launched a planetary-health menu pilot that introduced more than 20 patient dishes emphasizing plant proteins, whole grains, fruits, and vegetables.",
    achievements: [
      "Piloted more than 20 new plant-rich patient menu items",
      "Brought together physicians, dietitians, chefs, food-service staff, and sustainability specialists",
      "Retained successful menu items following the pilot",
      "Connected patient nutrition with lower-carbon healthcare food service"
    ],
    resources: [
      {
        label: "Vancouver Coastal Health pilot overview",
        url: "https://www.vch.ca/en/news/vancouver-general-hospital-pilots-new-plant-rich-menu-items-health-patients-and-planet"
      }
    ],
    lastUpdated: "2026-06-05",
    verified: true
  },

  {
    id: "saanich-peninsula-hospital",
    name: "Saanich Peninsula Hospital",
    shortName: "SPH",
    type: "hospital",
    city: "Saanich",
    province: "BC",
    coordinates: { lat: 48.5949, lng: -123.4085 },
    stage: "active",
    stageLabel: "Initial collaboration",
    score: null,
    plantBasedPercent: null,
    summary:
      "A physician-led initiative is exploring opportunities to strengthen plant-forward food offerings for hospital staff and patients, with early resource-sharing and planning support from the Plant-Based Cities Movement.",
    achievements: [
      "Opened initial discussions regarding staff and patient food offerings",
      "Shared preliminary ideas for food-service improvements",
      "Identified opportunities for resource-sharing and planning support"
    ],
    resources: [],
    lastUpdated: "2026-06-01",
    verified: false
  },

  {
    id: "district-north-vancouver",
    name: "District of North Vancouver",
    shortName: "District of North Vancouver",
    type: "city",
    city: "North Vancouver",
    province: "BC",
    coordinates: { lat: 49.3200, lng: -123.0700 },
    stage: "motion-passed",
    stageLabel: "Motion passed",
    score: null,
    plantBasedPercent: null,
    summary:
      "On May 6, 2024, District of North Vancouver Council passed a motion directing the District to prioritize plant-based food options when food is purchased or funded for municipal meetings, events, and functions.",
    achievements: [
      "Council adopted a formal plant-forward food procurement motion",
      "Plant-based options were identified as a priority for District-purchased or funded food",
      "The motion connected municipal purchasing with public health, climate action, biodiversity, and responsible resource use",
      "Established a formal municipal commitment to plant-forward procurement"
    ],
    resources: [
      {
        label: "District council meetings and minutes",
        url: "https://www.dnv.org/your-government/council-meetings-and-minutes"
      }
    ],
    lastUpdated: "2024-05-06",
    verified: true
  },

  {
    id: "saanich",
    name: "District of Saanich",
    shortName: "Saanich",
    type: "city",
    city: "Saanich",
    province: "BC",
    coordinates: { lat: 48.4593, lng: -123.3767 },
    stage: "implemented",
    stageLabel: "Pilot and policy work",
    score: null,
    plantBasedPercent: null,
    summary:
      "The District of Saanich has advanced plant-forward food procurement through staff engagement, training, and a one-year pilot project examining the feasibility and uptake of prioritizing plant-based food in municipal purchasing and food service.",
    achievements: [
      "Secured support from the Sustainability Department for plant-forward procurement work",
      "Hosted a Greener by Default workshop for municipal managers and staff",
      "Launched a one-year pilot project to assess feasibility and participation",
      "Began developing policy options and procedures for measuring food-related greenhouse-gas emissions"
    ],
    resources: [],
    lastUpdated: null,
    verified: false
  },

  {
    id: "burnaby",
    name: "City of Burnaby",
    shortName: "Burnaby",
    type: "city",
    city: "Burnaby",
    province: "BC",
    coordinates: { lat: 49.2488, lng: -122.9805 },
    stage: "motion-passed",
    stageLabel: "Motion passed; follow-up needed",
    score: null,
    plantBasedPercent: null,
    summary:
      "Burnaby City Council directed staff in April 2025 to explore opportunities to increase plant-forward food options at City facilities and improve public information about sustainable food choices. The direction followed a Plant-Based Cities Movement presentation to the Environment Committee on March 31, 2025.",
    achievements: [
      "Presented evidence on food-related greenhouse-gas emissions and municipal climate action to the Environment Committee",
      "Secured Council direction for staff to examine additional plant-forward options at City facilities",
      "Encouraged the City to identify new ways to inform patrons about sustainable food choices",
      "Initiated follow-up regarding food-service practices and implementation progress"
    ],
    resources: [
      {
        label: "Burnaby Environment Committee presentation record",
        url: "https://pub-burnaby.escribemeetings.com/filestream.ashx?DocumentId=81350"
      }
    ],
    lastUpdated: "2026-06-05",
    verified: true
  },

  {
    id: "brampton",
    name: "City of Brampton",
    shortName: "Brampton",
    type: "city",
    city: "Brampton",
    province: "ON",
    coordinates: { lat: 43.7315, lng: -79.7624 },
    stage: "motion-passed",
    stageLabel: "Motion passed",
    score: null,
    plantBasedPercent: null,
    summary:
      "Brampton City Council approved a motion in August 2022 directing the City to evaluate food sourcing and consider a substantial increase in plant-based options at municipal facilities and events.",
    achievements: [
      "Council approved a formal plant-forward food-sourcing review",
      "Connected food-service decisions with climate impacts",
      "Reported vegan and vegetarian options in municipal concessions and events",
      "Included plant-based requirements in discussions regarding future vendors"
    ],
    resources: [],
    lastUpdated: "2024-07-17",
    verified: false
  },

  {
    id: "halton-region",
    name: "Halton Region",
    shortName: "Halton Region",
    type: "city",
    city: "Oakville",
    province: "ON",
    coordinates: { lat: 43.4675, lng: -79.6877 },
    stage: "motion-passed",
    stageLabel: "Motion passed",
    score: null,
    plantBasedPercent: null,
    summary:
      "Halton Regional Council passed a motion on July 12, 2023 directing staff to evaluate opportunities to increase plant-based food options at Regional facilities and events. The motion connected healthy eating, Canada’s Food Guide, food-waste reduction, and climate action.",
    achievements: [
      "Regional Council approved a formal review of plant-based food options",
      "Connected plant-forward food service with healthy eating and food-related climate impacts",
      "Reported new plant-based salads and sandwiches at Halton Regional Centre",
      "Began updating corporate healthy-food guidance to encourage greater consideration of plant-based choices"
    ],
    resources: [
      {
        label: "Halton Regional Council meeting record",
        url: "https://edmweb.halton.ca/OnBaseAgendaOnline/Documents/ViewDocument/REGULAR_MEETING_OF_REGIONAL_COUNCIL_17-23_4418_Minutes_2023-07-12_9_30_00_AM.pdf?meetingId=4418&documentType=Minutes&itemId=undefined&publishId=undefined&isSection=false"
      }
    ],
    lastUpdated: "2024-06-30",
    verified: true
  },

  {
    id: "kingston",
    name: "City of Kingston",
    shortName: "Kingston",
    type: "city",
    city: "Kingston",
    province: "ON",
    coordinates: { lat: 44.2312, lng: -76.4860 },
    stage: "motion-passed",
    stageLabel: "Motion passed",
    score: null,
    plantBasedPercent: null,
    summary:
      "Kingston City Council approved a motion supporting increased plant-rich and plant-based procurement, public awareness, and collaboration on lower-carbon municipal food practices.",
    achievements: [
      "Council approved the motion by a 10–3 vote in October 2024",
      "Prioritized plant-rich procurement at municipal facilities and events",
      "Connected food policy with Canada’s Food Guide and climate objectives",
      "Included public education and community collaboration in the motion"
    ],
    resources: [
      {
        label: "Kingston motion record",
        url: "https://pub-cityofkingston.escribemeetings.com/filestream.ashx?DocumentId=9046"
      }
    ],
    lastUpdated: "2024-10-15",
    verified: true
  },

  {
    id: "montreal",
    name: "Ville de Montréal",
    shortName: "Montréal",
    type: "city",
    city: "Montréal",
    province: "QC",
    coordinates: { lat: 45.5019, lng: -73.5674 },
    stage: "motion-passed",
    stageLabel: "Major commitment passed",
    score: null,
    plantBasedPercent: 75,
    summary:
      "Montréal unanimously committed in May 2022 to offer at least 75% vegetarian food at City-organized events and align municipal food procurement with the Planetary Health Diet.",
    achievements: [
      "Unanimous motion supported by 65 councillors",
      "Committed to a minimum of 75% vegetarian food at City-organized events",
      "Committed to the C40 Good Food Cities Declaration",
      "Established an internal food committee to coordinate implementation",
      "Began developing responsible food-purchasing guidance"
    ],
    resources: [
      {
        label: "Montréal council minutes",
        url: "https://ville.montreal.qc.ca/documents/Adi_Public/CM/CM_PV_ORDI_2022-05-16_13h00_FR.pdf"
      }
    ],
    lastUpdated: "2023-12-31",
    verified: true
  },

  {
    id: "child-learning-centre",
    name: "University of Guelph Child Care and Learning Centre",
    shortName: "Child Care and Learning Centre",
    type: "other",
    city: "Guelph",
    province: "ON",
    coordinates: { lat: 43.5320, lng: -80.2240 },
    stage: "implemented",
    stageLabel: "Plant-based menu implemented",
    score: null,
    plantBasedPercent: null,
    summary:
      "The University of Guelph Child Care and Learning Centre introduced a plant-based menu initiative designed to reduce its food-related carbon footprint in an early-learning setting.",
    achievements: [
      "Introduced a plant-based menu in an early-childhood learning environment",
      "Connected food-service changes with institutional carbon-footprint reduction",
      "Demonstrated plant-forward menu implementation in a child-care setting"
    ],
    resources: [
      {
        label: "University of Guelph initiative overview",
        url: "https://news.uoguelph.ca/2022/10/u-of-gs-child-care-and-learning-centre-cuts-carbon-footprint-through-plant-based-menu/"
      }
    ],
    lastUpdated: "2022-10-01",
    verified: true
  }
];


/* =========================================================
   ICONS AND DISPLAY CONSTANTS
   ========================================================= */

const TYPE_ICONS = {
  university: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2 8.4 12 3l10 5.4-10 5.4L2 8.4Zm4 3.5v4.2c0 1.6 2.7 3.1 6 3.1s6-1.5 6-3.1v-4.2L12 15l-6-3.1Z"/>
    </svg>
  `,
  hospital: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z"/>
    </svg>
  `,
  city: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 21V8l5-3v4l6-4v4l5-2v14h-4v-5h-3v5H4Zm3-9v2h2v-2H7Zm0 4v2h2v-2H7Zm5-4v2h2v-2h-2Z"/>
    </svg>
  `,
  other: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 9 9-9 9-9-9 9-9Z"/>
    </svg>
  `
};

const TYPE_LABELS = {
  university: "University",
  hospital: "Hospital",
  city: "Municipality",
  other: "Other"
};

const TYPE_COLORS = {
  university: "--university",
  hospital: "--hospital",
  city: "--city",
  other: "--other"
};

const CANADA_VIEW = {
  center: [56.3, -106.3],
  zoom: 4
};

/* =========================================================
   DOM AND STATE
   ========================================================= */

const directoryApp = document.getElementById("directory-app");
const listElement = document.getElementById("institution-list");
const emptyStateElement = document.getElementById("empty-state");
const resultCountElement = document.getElementById("result-count");
const headerCountElement = document.getElementById("header-count");
const searchInput = document.getElementById("institution-search");
const filterButtons = [...document.querySelectorAll(".filter-chip")];

const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarOpen = document.getElementById("sidebar-open");

const drawer = document.getElementById("profile-drawer");
const drawerContent = document.getElementById("drawer-content");
const drawerClose = document.getElementById("drawer-close");
const mobileScrim = document.getElementById("mobile-scrim");
const typeLegendElement = document.getElementById("type-legend");

let activeType = "all";
let searchTerm = "";
let selectedInstitutionId = null;
let visibleInstitutions = [...INSTITUTIONS];
let sidebarCollapsed = false;

const markers = new Map();

/* =========================================================
   MAP
   ========================================================= */

const map = L.map("map", {
  center: CANADA_VIEW.center,
  zoom: CANADA_VIEW.zoom,
  minZoom: 3,
  maxZoom: 18,
  zoomControl: true,
  scrollWheelZoom: false
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

/* =========================================================
   HELPERS
   ========================================================= */

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeUrl(value = "") {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "#";
  } catch {
    return "#";
  }
}

function formatPercentage(value) {
  return Number.isFinite(value) ? `${value}%` : "Not reported";
}

function formatScore(value) {
  return Number.isFinite(value) ? `${value}/100` : "Not scored";
}

function formatDate(value) {
  if (!value) return "Not reported";

  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return "Not reported";

  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

function isMobileLayout() {
  return window.matchMedia("(max-width: 680px)").matches;
}

function getInstitutionById(id) {
  return INSTITUTIONS.find((institution) => institution.id === id);
}

function typeColor(type) {
  const variableNames = {
    university: "--university",
    hospital: "--hospital",
    city: "--city",
    other: "--other"
  };

  const variableName = variableNames[type] ?? "--other";

  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
}

function createInstitutionIcon(institution) {
  return L.divIcon({
    className: "institution-marker-wrapper",
    html: `
      <div
        class="institution-marker"
        style="--type-color:${typeColor(institution.type)}"
        aria-hidden="true"
      >
        ${TYPE_ICONS[institution.type] ?? TYPE_ICONS.other}
      </div>
    `,
    iconSize: [42, 42],
    iconAnchor: [21, 21],
    tooltipAnchor: [0, -24]
  });
}

/* =========================================================
   LEGEND
   ========================================================= */

function renderTypeLegend() {
  typeLegendElement.innerHTML = Object.entries(TYPE_LABELS)
    .map(([type, label]) => `
      <span>
        <i
          class="legend-type-icon"
          style="--type-color:${typeColor(type)}"
          aria-hidden="true"
        >
          ${TYPE_ICONS[type] ?? TYPE_ICONS.other}
        </i>
        ${escapeHtml(label)}
      </span>
    `)
    .join("");
}

/* =========================================================
   DIRECTORY
   ========================================================= */

function renderInstitutionList(institutions) {
  listElement.innerHTML = institutions
    .map((institution) => `
      <button
        class="institution-card ${
          institution.id === selectedInstitutionId ? "is-selected" : ""
        }"
        data-institution-id="${escapeHtml(institution.id)}"
        type="button"
        aria-label="View ${escapeHtml(institution.name)}"
      >
        <span
          class="card-icon"
          style="--type-color:${typeColor(institution.type)}"
          aria-hidden="true"
        >
          ${TYPE_ICONS[institution.type] ?? TYPE_ICONS.other}
        </span>

        <span class="card-content">
          <span class="card-heading">
            <strong>${escapeHtml(institution.name)}</strong>
            <span>
              ${escapeHtml(institution.city)}, ${escapeHtml(institution.province)}
              · ${escapeHtml(TYPE_LABELS[institution.type] ?? "Institution")}
            </span>
          </span>

          <span class="stage-badge stage-${escapeHtml(institution.stage)}">
            ${escapeHtml(institution.stageLabel)}
          </span>
        </span>
      </button>
    `)
    .join("");

  listElement.querySelectorAll(".institution-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectInstitution(card.dataset.institutionId);
    });
  });

  const noun = institutions.length === 1 ? "result" : "results";
  resultCountElement.textContent = `${institutions.length} ${noun}`;
  headerCountElement.textContent = INSTITUTIONS.length;
  emptyStateElement.hidden = institutions.length !== 0;
}

/* =========================================================
   MARKERS
   ========================================================= */

function clearMarkers() {
  markers.forEach((marker) => marker.removeFrom(map));
  markers.clear();
}

function renderMarkers(institutions) {
  clearMarkers();

  institutions.forEach((institution) => {
    const marker = L.marker(
      [institution.coordinates.lat, institution.coordinates.lng],
      {
        icon: createInstitutionIcon(institution),
        title: institution.name,
        riseOnHover: true,
        keyboard: true
      }
    );

    marker.bindTooltip(
      `
        <strong>${escapeHtml(institution.name)}</strong>
        <span>
          ${escapeHtml(institution.city)}, ${escapeHtml(institution.province)}
          · ${escapeHtml(TYPE_LABELS[institution.type] ?? "Institution")}
        </span>
      `,
      {
        direction: "top",
        offset: [0, -6],
        className: "institution-tooltip",
        opacity: 1
      }
    );

    marker.on("click", () => {
      selectInstitution(institution.id);
    });

    marker.addTo(map);
    markers.set(institution.id, marker);

    if (institution.id === selectedInstitutionId) {
      marker
        .getElement()
        ?.querySelector(".institution-marker")
        ?.classList.add("is-selected");
    }
  });
}
/* =========================================================
   FILTERS
   ========================================================= */

function applyFilters({ updateMapView = true } = {}) {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  visibleInstitutions = INSTITUTIONS.filter((institution) => {
    const matchesType =
      activeType === "all" || institution.type === activeType;

    const searchableText = [
      institution.name,
      institution.shortName,
      institution.city,
      institution.province,
      institution.summary,
      institution.stageLabel,
      ...(institution.achievements ?? [])
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return matchesType && searchableText.includes(normalizedSearch);
  });

  renderInstitutionList(visibleInstitutions);
  renderMarkers(visibleInstitutions);

  if (!updateMapView || visibleInstitutions.length === 0) return;

  if (visibleInstitutions.length === 1) {
    focusInstitutionOnVisibleMap(visibleInstitutions[0], 9, false);
    return;
  }

  const bounds = L.latLngBounds(
    visibleInstitutions.map((institution) => [
      institution.coordinates.lat,
      institution.coordinates.lng
    ])
  );

  map.fitBounds(bounds, {
    padding: [42, 42],
    maxZoom: 8,
    animate: true,
    duration: 0.45
  });
}

/* =========================================================
   PROFILE
   ========================================================= */

function renderProfileDrawer(institution) {
  const achievements =
    institution.achievements?.length
      ? institution.achievements
          .map((achievement) => `<li>${escapeHtml(achievement)}</li>`)
          .join("")
      : `<li class="empty-value">No achievements reported.</li>`;

  const resources =
    institution.resources?.length
      ? institution.resources
          .map((resource) => `
            <a
              class="resource-card"
              href="${escapeHtml(safeUrl(resource.url))}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>${escapeHtml(resource.label)}</span>
              <span aria-hidden="true">↗</span>
            </a>
          `)
          .join("")
      : `<p class="empty-value">No public resources listed.</p>`;

  drawerContent.innerHTML = `
    <div class="drawer-hero">
      <div class="drawer-type">
        <span
          class="drawer-type-icon"
          style="--type-color:${typeColor(institution.type)}"
          aria-hidden="true"
        >
          ${TYPE_ICONS[institution.type] ?? TYPE_ICONS.other}
        </span>
        ${escapeHtml(TYPE_LABELS[institution.type] ?? "Institution")}
      </div>

      <h2 id="drawer-name">${escapeHtml(institution.name)}</h2>
      <p class="drawer-location">
        ${escapeHtml(institution.city)}, ${escapeHtml(institution.province)}
      </p>

      <span class="stage-badge stage-${escapeHtml(institution.stage)}">
        ${escapeHtml(institution.stageLabel)}
      </span>
    </div>

    <section class="drawer-section">
      <h3>Overview</h3>
      <p class="drawer-summary">${escapeHtml(institution.summary)}</p>
    </section>

    <section class="drawer-section">
      <h3>Key achievements</h3>
      <ul class="achievement-list">${achievements}</ul>
    </section>

    <section class="drawer-section">
      <h3>Reported progress</h3>
      <dl class="fact-list">
        <div>
          <dt>Plant-based offering</dt>
          <dd>${escapeHtml(formatPercentage(institution.plantBasedPercent))}</dd>
        </div>
        <div>
          <dt>Overall score</dt>
          <dd>${escapeHtml(formatScore(institution.score))}</dd>
        </div>
        <div>
          <dt>Last updated</dt>
          <dd>${escapeHtml(formatDate(institution.lastUpdated))}</dd>
        </div>
        <div>
          <dt>Source review</dt>
          <dd>${institution.verified ? "Public source verified" : "Pending review"}</dd>
        </div>
      </dl>
    </section>

    <section class="drawer-section">
      <h3>Sources and resources</h3>
      <div class="resource-list">${resources}</div>
    </section>
  `;
}

function openProfileDrawer(institution) {
  renderProfileDrawer(institution);
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");

  if (isMobileLayout()) {
    mobileScrim.hidden = false;
  }
}

function closeProfileDrawer() {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  mobileScrim.hidden = true;
}

/* =========================================================
   MAP POSITIONING
   ========================================================= */

function focusInstitutionOnVisibleMap(institution, zoom, accountForDrawer = true) {
  const latLng = L.latLng(
    institution.coordinates.lat,
    institution.coordinates.lng
  );

  if (isMobileLayout() || !accountForDrawer) {
    map.flyTo(latLng, zoom, {
      animate: true,
      duration: 0.45
    });
    return;
  }

  const mapWidth = map.getContainer().getBoundingClientRect().width;
  const drawerWidth = drawer.getBoundingClientRect().width || 390;
  const visibleMapWidth = Math.max(mapWidth - drawerWidth, 240);

  /*
    Place the selected marker at the centre of the visible map area,
    not at the centre of the full map behind the drawer.
  */
  const projectedMarker = map.project(latLng, zoom);
  const fullMapCentreX = mapWidth / 2;
  const desiredMarkerX = visibleMapWidth / 2;
  const centreShift = fullMapCentreX - desiredMarkerX;

  const projectedCentre = projectedMarker.add([centreShift, 0]);
  const adjustedCentre = map.unproject(projectedCentre, zoom);

  map.flyTo(adjustedCentre, zoom, {
    animate: true,
    duration: 0.5
  });
}

/* =========================================================
   SELECTION
   ========================================================= */

function setSelectedCard(id) {
  document.querySelectorAll(".institution-card").forEach((card) => {
    card.classList.toggle(
      "is-selected",
      card.dataset.institutionId === id
    );
  });
}

function updateSelectedMarker(previousId, nextId) {
  if (previousId) {
    const previousMarker = markers.get(previousId);
    const previousElement = previousMarker?.getElement();

    previousElement
      ?.querySelector(".institution-marker")
      ?.classList.remove("is-selected");
  }

  const nextMarker = markers.get(nextId);
  const nextElement = nextMarker?.getElement();

  nextElement
    ?.querySelector(".institution-marker")
    ?.classList.add("is-selected");
}

function selectInstitution(id) {
  const institution = getInstitutionById(id);
  if (!institution) return;

  const previousId = selectedInstitutionId;
  selectedInstitutionId = id;

  setSelectedCard(id);
  updateSelectedMarker(previousId, id);
  openProfileDrawer(institution);

  window.requestAnimationFrame(() => {
    const targetZoom = Math.max(map.getZoom(), 8);
    focusInstitutionOnVisibleMap(institution, targetZoom, true);
  });

  document
    .querySelector(`[data-institution-id="${CSS.escape(id)}"]`)
    ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* =========================================================
   SIDEBAR
   ========================================================= */

function setSidebarCollapsed(collapsed) {
  if (isMobileLayout()) return;

  sidebarCollapsed = collapsed;
  directoryApp.classList.toggle("sidebar-collapsed", collapsed);
  sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
  sidebarOpen.hidden = !collapsed;

  window.setTimeout(() => {
    map.invalidateSize();
  }, 190);
}

/* =========================================================
   EVENTS
   ========================================================= */

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  applyFilters();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeType = button.dataset.type;

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    applyFilters();
  });
});

document.getElementById("reset-view").addEventListener("click", () => {
  searchInput.value = "";
  searchTerm = "";
  activeType = "all";
  selectedInstitutionId = null;

  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.type === "all");
  });

  closeProfileDrawer();
  applyFilters({ updateMapView: false });

  map.flyTo(CANADA_VIEW.center, CANADA_VIEW.zoom, {
    animate: true,
    duration: 0.5
  });
});

sidebarToggle.addEventListener("click", () => {
  setSidebarCollapsed(!sidebarCollapsed);
});

sidebarOpen.addEventListener("click", () => {
  setSidebarCollapsed(false);
});

drawerClose.addEventListener("click", closeProfileDrawer);
mobileScrim.addEventListener("click", closeProfileDrawer);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProfileDrawer();
});

window.addEventListener("resize", () => {
  map.invalidateSize();

  if (isMobileLayout()) {
    directoryApp.classList.remove("sidebar-collapsed");
    sidebarOpen.hidden = true;
  } else {
    directoryApp.classList.toggle("sidebar-collapsed", sidebarCollapsed);
    sidebarOpen.hidden = !sidebarCollapsed;
  }
});

/* =========================================================
   INITIAL RENDER
   ========================================================= */

renderTypeLegend();
renderInstitutionList(INSTITUTIONS);
renderMarkers(INSTITUTIONS);
headerCountElement.textContent = INSTITUTIONS.length;

window.setTimeout(() => {
  map.invalidateSize();
  applyFilters();
}, 0);
