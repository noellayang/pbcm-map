# Lighting Up Canada: Google Sheets admin and JSON map data

## Public map files

Place these files in the same GitHub Pages folder:

- `index.html`
- `map.html`
- `style.css`
- `script.js`
- `institutions.json`

The revised `script.js` loads records from `./institutions.json`, so map data is no longer embedded inside JavaScript.

Do not test by double-clicking `map.html` and opening it through `file://`. Use GitHub Pages or a local web server because browsers may block `fetch()` for local files.

## Google Sheets admin setup

1. Upload `PBCM_Map_Admin_Database.xlsx` to Google Drive and open it in Google Sheets.
2. Copy the spreadsheet ID from:
   `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
3. In Google Sheets, choose **Extensions → Apps Script**.
4. Replace the default script with `Code.gs`.
5. Add a new HTML file named exactly `Admin`, then paste in `Admin.html`.
6. Replace `PASTE_GOOGLE_SHEET_ID_HERE` in `Code.gs`.
7. Run `setupWorkbook()` once and approve permissions.
8. Choose **Deploy → New deployment → Web app**.
9. Restrict access to the appropriate PBCM reviewers.

## Workflow

1. A researcher submits a candidate through the admin page.
2. The record enters `Review Queue` with Pending status.
3. A reviewer opens the source and records a decision.
4. Only `Evidence confirmed` + `Approved` records become map-ready.
5. The reviewer downloads `institutions.json`.
6. Replace the website's old `institutions.json` and commit it to GitHub.

The first version intentionally keeps a manual export and GitHub commit as the final publication checkpoint. This prevents a form submission from immediately changing the public map.

## Important migration note

The included `institutions.json` contains the current 62 map records. The starter spreadsheet contains those records in `Published Records` so future exports preserve the existing map rather than replacing it with only newly approved entries.
