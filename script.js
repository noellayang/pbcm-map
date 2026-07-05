/* =========================================================
   LIGHTING UP CANADA — PUBLIC MAP DATA
   Generated from the expanded PBCM workbook.

   PUBLICATION RULE:
   Only entries with at least one usable public source and a
   sufficiently clear institutional outcome are included in
   INSTITUTIONS.

   Coordinates are draft city/campus-centre coordinates and
   should be verified before final publication.
   ========================================================= */

let INSTITUTIONS = [];

/*
  Internal research leads intentionally not rendered on the
  public map. These need a stronger source and/or a clearer
  documented outcome before publication.
*/
const UNPUBLISHED_RESEARCH_LEADS = [
  {
    "id": "nanaimo",
    "name": "Nanaimo",
    "shortName": "Nanaimo",
    "type": "city",
    "city": "Nanaimo",
    "province": "BC",
    "coordinates": {
      "lat": 49.16181,
      "lng": -123.93399
    },
    "coordinatesApproximate": true,
    "stage": "active",
    "stageLabel": "Initiative documented",
    "yearImplemented": null,
    "timeframe": null,
    "headline": "Sent letters to  the Mayor and Council in 2025. Received and answer from 2 councillors ( Ben Geselbrecht and Paul Manly) saying that there was likely little interest in this initiative but talking to the sustainability staff may be helpful. Met the Sustainabilty Manager at the 2025 Nanaimo Climate Hub. Subsequently set two letters to him (David Stewart) with basic information  and stats. He passed me on to Jennifer Gal, the Supply Chain Management point person. Two letters have been sent to her with no reply. David Stewart did add  that eating a plant-based diet as a good way for individuals to reduce their climate footprint.",
    "stats": [],
    "summary": "Sent letters to  the Mayor and Council in 2025. Received and answer from 2 councillors ( Ben Geselbrecht and Paul Manly) saying that there was likely little interest in this initiative but talking to the sustainability staff may be helpful. Met the Sustainabilty Manager at the 2025 Nanaimo Climate Hub. Subsequently set two letters to him (David Stewart) with basic information  and stats. He passed me on to Jennifer Gal, the Supply Chain Management point person. Two letters have been sent to her with no reply. David Stewart did add  that eating a plant-based diet as a good way for individuals to reduce their climate footprint.",
    "achievements": [],
    "organizationsInvolved": [
      "Letters sent and climate stats provided"
    ],
    "resources": [],
    "lastUpdated": null,
    "verified": false,
    "holdReason": "No usable public source in the spreadsheet"
  },
  {
    "id": "saanich",
    "name": "Saanich",
    "shortName": "Saanich",
    "type": "city",
    "city": "Vancouver",
    "province": "BC",
    "coordinates": {
      "lat": 49.27573,
      "lng": -123.10856
    },
    "coordinatesApproximate": true,
    "stage": "implemented",
    "stageLabel": "Implemented",
    "yearImplemented": null,
    "timeframe": null,
    "headline": "Saanich Sustainability department agreed that prioritizing plant based foods when using public money to buy food or hiring food vendors and contracting food service in the region. Saanich hosted a workshop by Greener by Default and launched a one year pilot project to test uptake and feasibility. Policy development is underway and GHG measurement procedures being developed.",
    "stats": [],
    "summary": "Saanich Sustainability department agreed that prioritizing plant based foods when using public money to buy food or hiring food vendors and contracting food service in the region. Saanich hosted a workshop by Greener by Default and launched a one year pilot project to test uptake and feasibility. Policy development is underway and GHG measurement procedures being developed.",
    "achievements": [],
    "organizationsInvolved": [
      "Plant-Based Cities Movement, Greener By Default provided workshop and support for managers and staff"
    ],
    "resources": [],
    "lastUpdated": null,
    "verified": false,
    "holdReason": "No usable public source in the spreadsheet"
  },
  {
    "id": "victoria",
    "name": "Victoria",
    "shortName": "Victoria",
    "type": "city",
    "city": "Victoria",
    "province": "BC",
    "coordinates": {
      "lat": 48.42193,
      "lng": -123.34957
    },
    "coordinatesApproximate": true,
    "stage": "active",
    "stageLabel": "Initiative documented",
    "yearImplemented": null,
    "timeframe": null,
    "headline": "Numerous letters have been sent to the mayor and councilors regarding the GHG savings to be gained by prioritizing plant based purchasing, one councilor responded and advised we try to contact  Victoria Urban Food Table which is an advisory committee but we did not receive a reply to two letters. Another letter has been sent to Laura Berndt, Victoria's Manager of Energy and Climate Action. No reply so far.",
    "stats": [],
    "summary": "Numerous letters have been sent to the mayor and councilors regarding the GHG savings to be gained by prioritizing plant based purchasing, one councilor responded and advised we try to contact  Victoria Urban Food Table which is an advisory committee but we did not receive a reply to two letters. Another letter has been sent to Laura Berndt, Victoria's Manager of Energy and Climate Action. No reply so far.",
    "achievements": [],
    "organizationsInvolved": [],
    "resources": [],
    "lastUpdated": "2026-06-01",
    "verified": false,
    "holdReason": "No usable public source in the spreadsheet"
  },
  {
    "id": "brampton",
    "name": "Brampton",
    "shortName": "Brampton",
    "type": "other",
    "city": "Toronto",
    "province": "ON",
    "coordinates": {
      "lat": 43.65426,
      "lng": -79.39923
    },
    "coordinatesApproximate": true,
    "stage": "motion-passed",
    "stageLabel": "Policy or motion adopted",
    "yearImplemented": 2022,
    "timeframe": "Passed August 10, 2022",
    "headline": "Municipal Plant-Forward Motion",
    "stats": [
      {
        "value": "2022",
        "label": "Year documented"
      }
    ],
    "summary": "Passed August 10, 2022 City of Brampton Counciil",
    "achievements": [
      "Increase plant-based and sustainable food options within municipal food services",
      "Recognize the environmental and climate impacts associated with food systems",
      "Encourage healthier and lower-carbon food choices",
      "Advance sustainable municipal food procurement practices"
    ],
    "organizationsInvolved": [
      "Plant-Based Cities Movement. https://www.kingstonist.com/news/opinion-plant-based-cities-movement-leading-the-way-to-a-sustainable-future/"
    ],
    "resources": [],
    "lastUpdated": "2022-08-10",
    "verified": false,
    "holdReason": "No usable public source in the spreadsheet"
  },
  {
    "id": "saanich-peninsula-hospital",
    "name": "Saanich Peninsula Hospital",
    "shortName": "Saanich Peninsula Hospital",
    "type": "hospital",
    "city": "Vancouver",
    "province": "BC",
    "coordinates": {
      "lat": 49.29427,
      "lng": -123.10982
    },
    "coordinatesApproximate": true,
    "stage": "active",
    "stageLabel": "Initiative documented",
    "yearImplemented": null,
    "timeframe": null,
    "headline": "Physician Nikki Del Bel reached out to see if PBCM could be helpful in making a shift in food offerings for staff and patients. Initial emails have been exchanged and Nikki has shared the ideas they have and PMBC has offered to attend a metting to connect and show some of the resources we can provide.",
    "stats": [],
    "summary": "Physician Nikki Del Bel reached out to see if PBCM could be helpful in making a shift in food offerings for staff and patients. Initial emails have been exchanged and Nikki has shared the ideas they have and PMBC has offered to attend a metting to connect and show some of the resources we can provide.",
    "achievements": [],
    "organizationsInvolved": [
      "PBCM email and text so far"
    ],
    "resources": [],
    "lastUpdated": "2026-06-01",
    "verified": false,
    "holdReason": "No usable public source in the spreadsheet"
  },
  {
    "id": "western-university",
    "name": "Western University",
    "shortName": "Western University",
    "type": "university",
    "city": "Toronto",
    "province": "ON",
    "coordinates": {
      "lat": 43.64255,
      "lng": -79.37614
    },
    "coordinatesApproximate": true,
    "stage": "active",
    "stageLabel": "Initiative documented",
    "yearImplemented": null,
    "timeframe": null,
    "headline": "Western University: residence dining services report that approximately 46% of menu offerings within the residence dining cycle are plant-based",
    "stats": [
      {
        "value": "46%",
        "label": "Documented target or result"
      }
    ],
    "summary": "Western University: residence dining services report that approximately 46% of menu offerings within the residence dining cycle are plant-based",
    "achievements": [],
    "organizationsInvolved": [
      "Canadian University"
    ],
    "resources": [],
    "lastUpdated": "2026-06-09",
    "verified": false,
    "holdReason": "No usable public source in the spreadsheet"
  },
  {
    "id": "concordia-university",
    "name": "Concordia University",
    "shortName": "Concordia University",
    "type": "university",
    "city": "Concordia University",
    "province": "",
    "coordinates": {
      "lat": 56.12799,
      "lng": -106.35575
    },
    "coordinatesApproximate": true,
    "stage": "active",
    "stageLabel": "Initiative documented",
    "yearImplemented": null,
    "timeframe": null,
    "headline": "Concordia University: dining menus include approximately 42% vegan and 24% vegetarian options, alongside increased visibility and promotion of plant-based milk",
    "stats": [
      {
        "value": "42%",
        "label": "Documented target or result"
      }
    ],
    "summary": "Concordia University: dining menus include approximately 42% vegan and 24% vegetarian options, alongside increased visibility and promotion of plant-based milk",
    "achievements": [],
    "organizationsInvolved": [
      "Canadian University"
    ],
    "resources": [],
    "lastUpdated": "2026-06-09",
    "verified": false,
    "holdReason": "No usable public source in the spreadsheet"
  },
  {
    "id": "university-of-waterloo",
    "name": "University of Waterloo",
    "shortName": "University of Waterloo",
    "type": "university",
    "city": "University of Waterloo",
    "province": "",
    "coordinates": {
      "lat": 56.12766,
      "lng": -106.35092
    },
    "coordinatesApproximate": true,
    "stage": "active",
    "stageLabel": "Initiative documented",
    "yearImplemented": null,
    "timeframe": null,
    "headline": "University of Waterloo: food systems increasingly integrated into sustainability planning and procurement with continued expansion of vegan offerings,",
    "stats": [],
    "summary": "University of Waterloo: food systems increasingly integrated into sustainability planning and procurement with continued expansion of vegan offerings,",
    "achievements": [],
    "organizationsInvolved": [
      "Canadian University"
    ],
    "resources": [],
    "lastUpdated": "2026-06-09",
    "verified": false,
    "holdReason": "No usable public source in the spreadsheet"
  },
  {
    "id": "university-of-victoria",
    "name": "University of Victoria",
    "shortName": "University of Victoria",
    "type": "university",
    "city": "Vancouver",
    "province": "BC",
    "coordinates": {
      "lat": 49.27908,
      "lng": -123.11091
    },
    "coordinatesApproximate": true,
    "stage": "active",
    "stageLabel": "Commitment in progress",
    "yearImplemented": null,
    "timeframe": null,
    "headline": "UVic: Climate and Sustainability Action Plan 2030 targets a 50% reduction in food-related GHG emissions and plant-based defaults on 60% of campus menus by 2030 (p. 15).",
    "stats": [
      {
        "value": "50%",
        "label": "Documented target or result"
      }
    ],
    "summary": "UVic: Climate and Sustainability Action Plan 2030 targets a 50% reduction in food-related GHG emissions and plant-based defaults on 60% of campus menus by 2030 (p. 15).",
    "achievements": [],
    "organizationsInvolved": [
      "Canadian University"
    ],
    "resources": [],
    "lastUpdated": "2026-06-09",
    "verified": false,
    "holdReason": "No usable public source in the spreadsheet"
  },
  {
    "id": "university-of-alberta",
    "name": "University of Alberta",
    "shortName": "University of Alberta",
    "type": "university",
    "city": "Edmonton",
    "province": "AB",
    "coordinates": {
      "lat": 53.54679,
      "lng": -113.48103
    },
    "coordinatesApproximate": true,
    "stage": "active",
    "stageLabel": "Initiative documented",
    "yearImplemented": null,
    "timeframe": "Current | University of Alberta",
    "headline": "Plant-Based Food Included in a Broader Sustainable Dining Program",
    "stats": [],
    "summary": "The current accomplishment is improved institutional access and visibility; a quantified menu or procurement commitment has not yet been located.",
    "achievements": [
      "Identifies plant-based foods within the university’s sustainable and health-conscious dining information.",
      "Provides students with guidance for finding plant-based meals across campus.",
      "Places dietary inclusion alongside responsible sourcing and food-service sustainability.",
      "Establishes a base from which a measurable protein-diversification target could be developed."
    ],
    "organizationsInvolved": [],
    "resources": [
      {
        "label": "Public source 1",
        "url": "https://www.ualberta.ca/en/dining-services/sustainability/index.html"
      }
    ],
    "lastUpdated": "2026-06-27",
    "verified": true,
    "holdReason": "Source does not yet establish a clear public outcome"
  },
  {
    "id": "university-of-manitoba",
    "name": "University of Manitoba",
    "shortName": "University of Manitoba",
    "type": "university",
    "city": "Winnipeg",
    "province": "MB",
    "coordinates": {
      "lat": 49.89346,
      "lng": -97.14094
    },
    "coordinatesApproximate": true,
    "stage": "active",
    "stageLabel": "Commitment in progress",
    "yearImplemented": null,
    "timeframe": "2014–2015 onward | University of Manitoba",
    "headline": "Campus Food System Baseline Created to Guide Future Action",
    "stats": [],
    "summary": "This is a strategic foundation rather than a confirmed plant-based outcome; later implementation records are still needed.",
    "achievements": [
      "Completed a detailed assessment of food purchasing, operations, governance and campus food-system opportunities.",
      "Established a Campus Food Strategy process involving students, staff and food-service stakeholders.",
      "Identified sustainable procurement and healthier campus food as areas for coordinated institutional action.",
      "Created the evidence base needed for future menu and protein-diversification commitments."
    ],
    "organizationsInvolved": [],
    "resources": [
      {
        "label": "Public source 1",
        "url": "https://umanitoba.ca/sustainability/sites/sustainability/files/2020-09/Food%20at%20the%20University%20of%20Manitoba.pdf"
      }
    ],
    "lastUpdated": "2015-01-01",
    "verified": true,
    "holdReason": "Source does not yet establish a clear public outcome"
  },
  {
    "id": "queens-university",
    "name": "Queen's University",
    "shortName": "Queen's University",
    "type": "university",
    "city": "Kingston",
    "province": "ON",
    "coordinates": {
      "lat": 44.23447,
      "lng": -76.47435
    },
    "coordinatesApproximate": true,
    "stage": "implemented",
    "stageLabel": "Implemented",
    "yearImplemented": null,
    "timeframe": "Current | Queen’s University",
    "headline": "Vegetarian and Vegan Choices Available Across Campus Food Locations",
    "stats": [],
    "summary": "The achievement is broad access, but no measurable expansion target or animal-product purchasing reduction has yet been identified.",
    "achievements": [
      "Provides a university guide identifying vegetarian and vegan choices throughout campus food service.",
      "Makes plant-based dietary access visible across multiple locations rather than at a single outlet.",
      "Supports students seeking lower-impact, ethical or dietary-inclusive meals.",
      "Creates an operational base for a future campus-wide menu target or procurement commitment."
    ],
    "organizationsInvolved": [],
    "resources": [
      {
        "label": "Public source 1",
        "url": "https://www.queensu.ca/food/Guide-Vegetarian-Vegan"
      }
    ],
    "lastUpdated": "2026-06-27",
    "verified": true,
    "holdReason": "Source does not yet establish a clear public outcome"
  },
  {
    "id": "university-of-ottawa",
    "name": "University of Ottawa",
    "shortName": "University of Ottawa",
    "type": "university",
    "city": "Ottawa",
    "province": "ON",
    "coordinates": {
      "lat": 45.41303,
      "lng": -75.68748
    },
    "coordinatesApproximate": true,
    "stage": "active",
    "stageLabel": "Initiative documented",
    "yearImplemented": 2023,
    "timeframe": "Reported 2023 | University of Ottawa",
    "headline": "University Plant-Based Dining Work Shared Through a National Initiative",
    "stats": [
      {
        "value": "2023",
        "label": "Year documented"
      }
    ],
    "summary": "The presentation is encouraging evidence of activity, but its exact commitments must be recovered before public-map publication.",
    "achievements": [
      "Presented campus plant-based dining work through the Canadian University Initiative.",
      "Contributed institutional experience to a national network seeking to expand plant-based university food.",
      "Created a public indication that campus food-service teams are engaged in protein diversification.",
      "Provides a strong lead for uncovering a formal policy, menu target or implementation result."
    ],
    "organizationsInvolved": [
      "Canadian University Initiative"
    ],
    "resources": [
      {
        "label": "Public source 1",
        "url": "https://plantbasedcities.org/canadian-university-initiative/"
      }
    ],
    "lastUpdated": "2023-01-01",
    "verified": true,
    "holdReason": "Source does not yet establish a clear public outcome"
  },
  {
    "id": "universit-de-montr-al",
    "name": "Université de Montréal",
    "shortName": "Université de Montréal",
    "type": "university",
    "city": "Montréal",
    "province": "QC",
    "coordinates": {
      "lat": 45.50354,
      "lng": -73.57677
    },
    "coordinatesApproximate": true,
    "stage": "active",
    "stageLabel": "Initiative documented",
    "yearImplemented": 2022,
    "timeframe": "Reported 2022 | Université de Montréal",
    "headline": "French-Language Campus Plant-Based Work Shared Nationally",
    "stats": [
      {
        "value": "2022",
        "label": "Year documented"
      }
    ],
    "summary": "The presentation demonstrates engagement, while the specific institutional win still requires source verification.",
    "achievements": [
      "Participated in the Canadian University Initiative by presenting institutional plant-based food work.",
      "Added a major French-language university voice to national campus food-system discussions.",
      "Signalled active consideration of plant-forward dining within a large urban university.",
      "Provides a lead for identifying formal procurement, menu or sustainability accomplishments in French-language records."
    ],
    "organizationsInvolved": [
      "Canadian University Initiative"
    ],
    "resources": [
      {
        "label": "Public source 1",
        "url": "https://plantbasedcities.org/canadian-university-initiative/"
      }
    ],
    "lastUpdated": "2022-01-01",
    "verified": true,
    "holdReason": "Source does not yet establish a clear public outcome"
  },
  {
    "id": "university-of-new-brunswick",
    "name": "University of New Brunswick",
    "shortName": "University of New Brunswick",
    "type": "university",
    "city": "Fredericton",
    "province": "NB",
    "coordinates": {
      "lat": 45.97117,
      "lng": -66.64669
    },
    "coordinatesApproximate": true,
    "stage": "implemented",
    "stageLabel": "Implemented",
    "yearImplemented": null,
    "timeframe": "Current | University of New Brunswick",
    "headline": "Campus-Grown Food Expanded Through 12 Free-Food Planters",
    "stats": [],
    "summary": "This is a meaningful plant-food and food-security accomplishment, although it is not yet a documented dining protein shift.",
    "achievements": [
      "Operates 12 planters across the Fredericton and Saint John campuses that provide food to the university community.",
      "Uses campus land to support food access, hands-on sustainability and local food-system engagement.",
      "Connects students and staff with plant foods grown directly on campus.",
      "Demonstrates a practical, community-serving sustainable-food initiative across two campuses."
    ],
    "organizationsInvolved": [],
    "resources": [
      {
        "label": "Public source 1",
        "url": "https://www.unb.ca/initiatives/sustainability/get-involved/food.html"
      }
    ],
    "lastUpdated": "2026-06-27",
    "verified": true,
    "holdReason": "Source does not yet establish a clear public outcome"
  },
  {
    "id": "memorial-university-of-newfoundland",
    "name": "Memorial University of Newfoundland",
    "shortName": "Memorial University of Newfoundland",
    "type": "university",
    "city": "St. John's",
    "province": "NL",
    "coordinates": {
      "lat": 47.55486,
      "lng": -52.71609
    },
    "coordinatesApproximate": true,
    "stage": "implemented",
    "stageLabel": "Implemented",
    "yearImplemented": null,
    "timeframe": "Current | Memorial University of Newfoundland",
    "headline": "Sustainable Sourcing and Food-Waste Action Embedded in Campus Operations",
    "stats": [],
    "summary": "The current win is broader sustainable-food management; a measurable plant-based transition has not yet been identified.",
    "achievements": [
      "Publishes institutional food-system sustainability work involving local sourcing and responsible purchasing.",
      "Uses food-service partnerships to advance waste reduction and more sustainable campus operations.",
      "Establishes food procurement as part of the university’s sustainability agenda.",
      "Provides a platform for future plant-forward menu and protein-purchasing targets."
    ],
    "organizationsInvolved": [],
    "resources": [
      {
        "label": "Public source 1",
        "url": "https://www.mun.ca/sustainability/initiatives/food-systems/"
      }
    ],
    "lastUpdated": "2026-06-27",
    "verified": true,
    "holdReason": "Source does not yet establish a clear public outcome"
  }
];



/* =========================================================
   PROFILE IMAGES — VERIFIED, UNIQUE, NON-LOGO
   =========================================================

   Image policy:
   1. Prefer an explicit image object supplied in institutions.json.
   2. Accept only image kinds that represent an initiative, dining system,
      institution, facility, campus, or community.
   3. Reject likely logos, crests, seals, favicons, avatars, and wordmarks.
   4. Never reuse the same photographic URL for two institutions.
   5. When no approved photograph is available, use a unique location-based
      visual generated from the institution's coordinates. This is more honest
      than showing an unrelated stock-food photograph and guarantees that no
      two records share the same fallback image.

   The map deliberately does not scrape source pages, call Microlink, or query
   Wikipedia at click time. Those requests caused slow and inconsistent loads.
*/

const APPROVED_IMAGE_KINDS = new Set([
  "initiative",
  "dining",
  "food-service",
  "campus",
  "institution",
  "facility",
  "community"
]);

const LOGO_OR_TEXT_IMAGE_PATTERNS = [
  /logo/i,
  /wordmark/i,
  /brandmark/i,
  /crest/i,
  /seal/i,
  /favicon/i,
  /emblem/i,
  /coat[-_ ]?of[-_ ]?arms/i,
  /social[-_ ]?avatar/i,
  /profile[-_ ]?picture/i
];

/*
  These reviewed photographs are institution- or community-specific.
  They are not treated as initiative photographs unless the source record
  explicitly says so.
*/
const CURATED_PROFILE_IMAGES = {
  "vancouver": {
    url: "https://images.squarespace-cdn.com/content/v1/574512d92eeb81676262d877/1676606109508-D5LZABVB2L934NF4ZPUG/2023-Vancouver-Aerial-Skyline-Photography-Copyright-Photographer-Ian-Kobylanski-31.jpg",
    kind: "community",
    alt: "Aerial view of Vancouver",
    credit: "City view of Vancouver",
    source: "https://vancouver.ca/"
  },
  "kingston": {
    url: "https://www.visitkingston.ca/media/transforms/headers/_960x540_crop_center-center_none_ns/header-getting-to-kington.jpg",
    kind: "community",
    alt: "Waterfront and cityscape in Kingston, Ontario",
    credit: "Tourism Kingston",
    source: "https://www.visitkingston.ca/"
  },
  "montr-al": {
    url: "https://www.bonjourquebec.com/sites/default/files/styles/square/public/2022-06/Montreal-Tourisme-Montreal-H_0.jpg.webp?itok=jirDA_c8",
    kind: "community",
    alt: "City view of Montréal, Québec",
    credit: "Bonjour Québec",
    source: "https://www.bonjourquebec.com/"
  },
  "university-of-british-columbia": {
    url: "https://images.spaicelabs.com/images/flus6j8v/production/fbb07b3efe502c9f5f53301aee35738e9f3531f9-1920x1080.jpg?rect=420%2C0%2C1080%2C1080&w=1600&fm=webp&q=72&fit=max",
    kind: "campus",
    alt: "University of British Columbia campus",
    credit: "University of British Columbia campus photograph",
    source: "https://www.ubc.ca/"
  },
  "university-of-guelph": {
    url: "https://www.uoguelph.ca/_next/image?url=https%3A%2F%2Fapi.liveugconthub.uoguelph.dev%2Fsites%2Fdefault%2Ffiles%2F2025-01%2Fjohnston-green-aerials-5.jpg&w=1600&q=72",
    kind: "campus",
    alt: "University of Guelph campus and Johnston Green",
    credit: "University of Guelph",
    source: "https://www.uoguelph.ca/"
  },
  "child-learning-center": {
    url: "https://www.earthscapeplay.com/wp-content/uploads/2025/09/guelph-ontario-childcare-outdoor-play-area-trike-loop-log-cl.jpg",
    kind: "facility",
    alt: "Outdoor learning and play area at a child-care facility",
    credit: "Earthscape",
    source: "https://www.earthscapeplay.com/"
  }
};

const profileImageDetailsCache = new Map();
const profileImagePreloadCache = new Map();
const reservedPhotoUrls = new Map();

function isProbablyLogoOrTextImage(url) {
  return LOGO_OR_TEXT_IMAGE_PATTERNS.some(
    (pattern) => pattern.test(String(url ?? ""))
  );
}

function isSupportedImageUrl(url) {
  return (
    /^https?:\/\//i.test(url)
    || url.startsWith("./")
    || url.startsWith("../")
    || url.startsWith("assets/")
    || url.startsWith("/assets/")
    || url.startsWith("data:image/")
  );
}

function normalizeImageCandidate(candidate, institution) {
  if (!candidate) return null;

  const details = typeof candidate === "string"
    ? {
        url: candidate,
        kind: institution.imageKind,
        alt: institution.imageAlt,
        credit: institution.imageCredit,
        source: institution.imageSource,
        position: institution.imagePosition
      }
    : candidate;

  const url = String(details?.url ?? "").trim();
  const kind = String(details?.kind ?? "").trim().toLowerCase();

  if (
    !url
    || !isSupportedImageUrl(url)
    || !APPROVED_IMAGE_KINDS.has(kind)
    || isProbablyLogoOrTextImage(url)
  ) {
    return null;
  }

  return {
    url,
    kind,
    alt: details.alt || institution.name,
    credit: details.credit || "",
    source: details.source || "",
    position: details.position || "center",
    verified: details.verified === true
  };
}

function reserveUniquePhoto(candidate, institution) {
  if (!candidate) return null;

  const absoluteUrl = candidate.url.startsWith("data:image/")
    ? candidate.url
    : new URL(candidate.url, window.location.href).href;

  const existingOwner = reservedPhotoUrls.get(absoluteUrl);

  if (existingOwner && existingOwner !== institution.id) {
    console.warn(
      `Duplicate profile image rejected for ${institution.name}; `
      + `already assigned to ${existingOwner}.`
    );
    return null;
  }

  reservedPhotoUrls.set(absoluteUrl, institution.id);
  return candidate;
}

function hashString(value) {
  return Array.from(String(value ?? "")).reduce(
    (hash, character) =>
      ((hash << 5) - hash + character.charCodeAt(0)) >>> 0,
    2166136261
  );
}

function locationVisualDetails(institution) {
  const seed = hashString(institution.id);
  const latitude = Number(institution.coordinates?.lat ?? 0);
  const longitude = Number(institution.coordinates?.lng ?? 0);

  const hueA = seed % 360;
  const hueB = (hueA + 38 + (seed % 71)) % 360;
  const x = 18 + (Math.abs(longitude * 7.13) % 64);
  const y = 18 + (Math.abs(latitude * 5.71) % 58);
  const lineOffset = seed % 37;

  /*
    The SVG contains no institution name or logo. It is a unique,
    coordinate-derived geographic visual used only when a reviewed
    institution/initiative photograph is unavailable.
  */
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="hsl(${hueA} 34% 20%)"/>
          <stop offset="1" stop-color="hsl(${hueB} 42% 11%)"/>
        </linearGradient>
        <radialGradient id="light">
          <stop offset="0" stop-color="rgba(255,255,255,.36)"/>
          <stop offset=".35" stop-color="rgba(179,201,56,.18)"/>
          <stop offset="1" stop-color="rgba(255,255,255,0)"/>
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="18"/>
        </filter>
      </defs>
      <rect width="1200" height="700" fill="url(#bg)"/>
      <g fill="none" stroke="rgba(255,255,255,.10)" stroke-width="3">
        <path d="M-80 ${90 + lineOffset} C230 20 370 220 640 122 S1020 20 1300 168"/>
        <path d="M-70 ${260 + lineOffset} C180 160 380 380 690 245 S1030 155 1290 330"/>
        <path d="M-50 ${470 + lineOffset} C250 350 450 610 760 465 S1050 370 1290 535"/>
        <path d="M${140 + lineOffset} -40 C70 180 310 275 198 520 S180 760 390 800"/>
        <path d="M${525 + lineOffset} -60 C420 170 690 260 585 500 S570 720 790 800"/>
        <path d="M${900 + lineOffset} -40 C790 170 1070 290 960 520 S950 720 1150 790"/>
      </g>
      <circle cx="${x * 12}" cy="${y * 7}" r="170" fill="url(#light)" filter="url(#glow)"/>
      <circle cx="${x * 12}" cy="${y * 7}" r="34" fill="#b3c938" opacity=".96"/>
      <circle cx="${x * 12}" cy="${y * 7}" r="58" fill="none" stroke="rgba(255,255,255,.86)" stroke-width="5"/>
      <circle cx="${x * 12}" cy="${y * 7}" r="88" fill="none" stroke="rgba(179,201,56,.38)" stroke-width="3"/>
      <g fill="rgba(255,255,255,.12)">
        <circle cx="${170 + seed % 180}" cy="${120 + seed % 70}" r="11"/>
        <circle cx="${860 + seed % 190}" cy="${130 + seed % 130}" r="8"/>
        <circle cx="${760 + seed % 120}" cy="${520 + seed % 80}" r="13"/>
        <circle cx="${260 + seed % 100}" cy="${500 + seed % 90}" r="7"/>
      </g>
    </svg>
  `;

  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    kind: "location",
    alt: `Location-based visual for ${institution.name} in ${institution.city}, ${institution.province}`,
    credit: "Lighting Up Canada location visual",
    source: "",
    position: "center",
    verified: false
  };
}

function profileImageDetails(institution) {
  if (profileImageDetailsCache.has(institution.id)) {
    return profileImageDetailsCache.get(institution.id);
  }

  const explicitImage = reserveUniquePhoto(
    normalizeImageCandidate(institution.image, institution),
    institution
  );

  const curatedImage = explicitImage
    ? null
    : reserveUniquePhoto(
        normalizeImageCandidate(
          CURATED_PROFILE_IMAGES[institution.id],
          institution
        ),
        institution
      );

  const selected = explicitImage
    ?? curatedImage
    ?? locationVisualDetails(institution);

  profileImageDetailsCache.set(institution.id, selected);
  return selected;
}

function preloadProfileImage(institution) {
  if (profileImagePreloadCache.has(institution.id)) {
    return profileImagePreloadCache.get(institution.id);
  }

  const details = profileImageDetails(institution);

  const promise = new Promise((resolve) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(details);
    image.onerror = () => {
      const fallback = locationVisualDetails(institution);

      if (fallback.url === details.url) {
        resolve(fallback);
        return;
      }

      const fallbackImage = new Image();
      fallbackImage.decoding = "async";
      fallbackImage.onload = () => resolve(fallback);
      fallbackImage.onerror = () => resolve(fallback);
      fallbackImage.src = fallback.url;
    };
    image.src = details.url;
  });

  profileImagePreloadCache.set(institution.id, promise);
  return promise;
}

async function hydrateProfileImage(institution) {
  const figure = drawerContent?.querySelector(".profile-image");
  const image = figure?.querySelector("img");

  if (!figure || !image) return;

  figure.classList.add("is-loading");
  const resolved = await preloadProfileImage(institution);

  if (
    !resolved
    || selectedInstitutionId !== institution.id
    || !drawerContent?.contains(figure)
  ) {
    return;
  }

  const finishLoading = () => {
    figure.classList.remove("is-loading");
  };

  const useFallback = () => {
    const fallback = locationVisualDetails(institution);
    image.alt = fallback.alt;
    image.style.objectPosition = fallback.position;
    image.addEventListener("load", finishLoading, { once: true });
    image.addEventListener("error", finishLoading, { once: true });
    image.src = fallback.url;
  };

  image.alt = resolved.alt;
  image.style.objectPosition = resolved.position;
  image.addEventListener("load", finishLoading, { once: true });
  image.addEventListener("error", useFallback, { once: true });

  const resolvedAbsoluteUrl = resolved.url.startsWith("data:image/")
    ? resolved.url
    : new URL(resolved.url, window.location.href).href;

  if (image.src !== resolvedAbsoluteUrl) {
    image.src = resolved.url;
  } else if (image.complete) {
    if (image.naturalWidth > 0) {
      finishLoading();
    } else {
      useFallback();
    }
  }
}

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
  government: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 2 8v2h20V8L12 3ZM4 12v7H2v2h20v-2h-2v-7h-3v7h-3v-7h-4v7H7v-7H4Z"/>
    </svg>
  `,
  other: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 9 9-9 9-9-9 9-9Z"/>
    </svg>
  `
};

const TYPE_LABELS = {
  university: "Educational institution",
  hospital: "Healthcare institution",
  city: "Municipality",
  government: "Government or public body",
  other: "Other institution"
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
const resetViewButton = document.getElementById("reset-view");

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

L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  {
    subdomains: "abcd",
    maxZoom: 20,
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO"
  }
).addTo(map);

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

function formatYear(value) {
  return Number.isInteger(value) ? String(value) : "Not reported";
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
    government: "--government",
    other: "--other"
  };

  const variableName = variableNames[type] ?? "--other";

  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
}

function getDrawerWidth() {
  const measuredWidth = drawer?.getBoundingClientRect().width ?? 0;
  if (measuredWidth > 0) return measuredWidth;

  const cssWidth = getComputedStyle(document.documentElement)
    .getPropertyValue("--drawer-width");

  const parsedWidth = Number.parseFloat(cssWidth);
  return Number.isFinite(parsedWidth) ? parsedWidth : 350;
}

function createInstitutionIcon(institution) {
  return L.divIcon({
    className: "institution-marker-wrapper",
    html: `
      <div
        class="institution-marker marker-${escapeHtml(institution.type)}"
        style="--type-color:${typeColor(institution.type)}"
        aria-hidden="true"
      >
        <span class="marker-glow"></span>
        <span class="marker-face">
          ${TYPE_ICONS[institution.type] ?? TYPE_ICONS.other}
        </span>
        <span class="marker-base"></span>
      </div>
    `,
    iconSize: [48, 54],
    iconAnchor: [24, 47],
    tooltipAnchor: [0, -42]
  });
}

/* =========================================================
   LEGEND
   ========================================================= */

function renderTypeLegend() {
  if (!typeLegendElement) return;

  typeLegendElement.innerHTML = Object.entries(TYPE_LABELS)
    .map(
      ([type, label]) => `
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
      `
    )
    .join("");
}

/* =========================================================
   DIRECTORY
   ========================================================= */

function renderInstitutionList(institutions) {
  if (!listElement) return;

  listElement.innerHTML = institutions
    .map(
      (institution) => `
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
                ${escapeHtml(institution.city)},
                ${escapeHtml(institution.province)}
                ·
                ${escapeHtml(TYPE_LABELS[institution.type] ?? "Institution")}
              </span>
            </span>

            <span class="stage-badge stage-${escapeHtml(institution.stage)}">
              ${escapeHtml(institution.stageLabel)}
            </span>
          </span>
        </button>
      `
    )
    .join("");

  listElement.querySelectorAll(".institution-card").forEach((card) => {
    const institution = getInstitutionById(card.dataset.institutionId);

    card.addEventListener("pointerenter", () => {
      if (institution) preloadProfileImage(institution);
    }, { once: true });

    card.addEventListener("focus", () => {
      if (institution) preloadProfileImage(institution);
    }, { once: true });

    card.addEventListener("click", () => {
      selectInstitution(card.dataset.institutionId);
    });
  });

  const noun = institutions.length === 1 ? "result" : "results";

  if (resultCountElement) {
    resultCountElement.textContent = `${institutions.length} ${noun}`;
  }

  if (headerCountElement) {
    headerCountElement.textContent = INSTITUTIONS.length;
  }

  if (emptyStateElement) {
    emptyStateElement.hidden = institutions.length !== 0;
  }
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
          ${escapeHtml(institution.city)},
          ${escapeHtml(institution.province)}
          ·
          ${escapeHtml(TYPE_LABELS[institution.type] ?? "Institution")}
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

    const statText = (institution.stats ?? []).flatMap((stat) => [
      stat.value,
      stat.label
    ]);

    const searchableText = [
      institution.name,
      institution.shortName,
      institution.city,
      institution.province,
      institution.type,
      TYPE_LABELS[institution.type],
      institution.stageLabel,
      institution.headline,
      institution.summary,
      institution.timeframe,
      institution.yearImplemented,
      ...(institution.organizationsInvolved ?? []),
      ...statText,
      ...(institution.achievements ?? [])
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return matchesType && searchableText.includes(normalizedSearch);
  });

  renderInstitutionList(visibleInstitutions);
  renderMarkers(visibleInstitutions);

  if (
    selectedInstitutionId &&
    !visibleInstitutions.some(
      (institution) => institution.id === selectedInstitutionId
    )
  ) {
    selectedInstitutionId = null;
    closeProfileDrawer();
  }

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
  if (!drawerContent) return;

  const achievements = institution.achievements?.length
    ? institution.achievements
        .map((achievement) => `<li>${escapeHtml(achievement)}</li>`)
        .join("")
    : `<li class="empty-value">No public outcomes reported.</li>`;

  const resources = institution.resources?.length
    ? institution.resources
        .map(
          (resource) => `
            <a
              class="profile-resource"
              href="${escapeHtml(safeUrl(resource.url))}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>${escapeHtml(resource.label)}</span>
              <span class="resource-arrow" aria-hidden="true">↗</span>
            </a>
          `
        )
        .join("")
    : `<p class="empty-value">No public sources currently listed.</p>`;

  const initialImage = profileImageDetails(institution);

  const profileImage = `
    <figure
      class="profile-image is-loading"
      style="--type-color:${escapeHtml(typeColor(institution.type))};"
    >
      <img
        src="${escapeHtml(initialImage.url)}"
        alt="${escapeHtml(initialImage.alt)}"
        loading="eager"
        decoding="async"
        fetchpriority="high"
        style="object-position:${escapeHtml(initialImage.position)};"
      >
    </figure>
  `;

  const profileHeadline = institution.headline
    ? `<p class="profile-headline">${escapeHtml(institution.headline)}</p>`
    : "";

  const profileStats = institution.stats?.length
    ? `
        <section
          class="profile-stat-grid"
          aria-label="Initiative highlights"
        >
          ${institution.stats
            .map(
              (stat) => `
                <div class="profile-stat">
                  <strong>${escapeHtml(stat.value)}</strong>
                  <span>${escapeHtml(stat.label)}</span>
                </div>
              `
            )
            .join("")}
        </section>
      `
    : "";

  const timeframeDetail = institution.timeframe
    ? `
        <div>
          <dt>Date or timeframe</dt>
          <dd>${escapeHtml(institution.timeframe)}</dd>
        </div>
      `
    : "";

  const yearDetail = Number.isInteger(institution.yearImplemented)
    ? `
        <div>
          <dt>Year implemented</dt>
          <dd>${escapeHtml(formatYear(institution.yearImplemented))}</dd>
        </div>
      `
    : "";

  const organizationsDetail = institution.organizationsInvolved?.length
    ? `
        <div>
          <dt>Organizations involved</dt>
          <dd>${escapeHtml(institution.organizationsInvolved.join(", "))}</dd>
        </div>
      `
    : "";

  drawerContent.innerHTML = `
    <article class="institution-profile">
      ${profileImage}

      <header class="profile-header">
        <h2 id="drawer-name">${escapeHtml(institution.name)}</h2>

        <p class="profile-classification">
          ${escapeHtml(TYPE_LABELS[institution.type] ?? "Institution")}
        </p>

        <p class="profile-location">
          ${escapeHtml(institution.city)},
          ${escapeHtml(institution.province)}
        </p>
      </header>

      ${profileHeadline}
      ${profileStats}

      <div class="profile-body">
        <section
          class="profile-introduction"
          aria-labelledby="profile-summary-heading"
        >
          <h3 id="profile-summary-heading">The initiative</h3>
          <p>${escapeHtml(institution.summary)}</p>
        </section>

        <section
          class="profile-content-section"
          aria-labelledby="profile-highlights-heading"
        >
          <h3 id="profile-highlights-heading">What changed</h3>
          <ul class="profile-highlights">${achievements}</ul>
        </section>

        <section
          class="profile-content-section"
          aria-labelledby="profile-details-heading"
        >
          <h3 id="profile-details-heading">At a glance</h3>

          <dl class="profile-details">
            <div>
              <dt>Current status</dt>
              <dd>${escapeHtml(institution.stageLabel)}</dd>
            </div>

            ${yearDetail}
            ${timeframeDetail}
            ${organizationsDetail}

            <div>
              <dt>Last reviewed</dt>
              <dd>${escapeHtml(formatDate(institution.lastUpdated))}</dd>
            </div>

            <div>
              <dt>Source review</dt>
              <dd>
                ${
                  institution.verified
                    ? "Public source included"
                    : "Source review pending"
                }
              </dd>
            </div>
          </dl>
        </section>

        <section
          class="profile-content-section profile-sources"
          aria-labelledby="profile-sources-heading"
        >
          <h3 id="profile-sources-heading">Original sources</h3>
          <div class="profile-resource-list">${resources}</div>
        </section>
      </div>
    </article>
  `;

  hydrateProfileImage(institution);
}

function openProfileDrawer(institution) {
  renderProfileDrawer(institution);

  drawer?.classList.add("is-open");
  drawer?.setAttribute("aria-hidden", "false");

  if (isMobileLayout() && mobileScrim) {
    mobileScrim.hidden = false;
  }
}

function closeProfileDrawer() {
  drawer?.classList.remove("is-open");
  drawer?.setAttribute("aria-hidden", "true");

  if (mobileScrim) {
    mobileScrim.hidden = true;
  }
}

/* =========================================================
   MAP POSITIONING
   ========================================================= */

function focusInstitutionOnVisibleMap(
  institution,
  zoom,
  accountForDrawer = true
) {
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
  const drawerWidth = getDrawerWidth();
  const visibleMapWidth = Math.max(mapWidth - drawerWidth, 240);

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
    markers
      .get(previousId)
      ?.getElement()
      ?.querySelector(".institution-marker")
      ?.classList.remove("is-selected");
  }

  markers
    .get(nextId)
    ?.getElement()
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
    ?.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
}

/* =========================================================
   SIDEBAR AND RESET
   ========================================================= */

function setSidebarCollapsed(collapsed) {
  if (isMobileLayout()) return;

  sidebarCollapsed = collapsed;

  directoryApp?.classList.toggle("sidebar-collapsed", collapsed);
  sidebarToggle?.setAttribute("aria-expanded", String(!collapsed));

  if (sidebarOpen) {
    sidebarOpen.hidden = !collapsed;
  }

  window.setTimeout(() => {
    map.invalidateSize();
  }, 190);
}

function resetDirectory() {
  if (searchInput) searchInput.value = "";

  searchTerm = "";
  activeType = "all";
  selectedInstitutionId = null;

  filterButtons.forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.type === "all"
    );
  });

  closeProfileDrawer();
  applyFilters({ updateMapView: false });

  map.flyTo(CANADA_VIEW.center, CANADA_VIEW.zoom, {
    animate: true,
    duration: 0.5
  });
}

/* =========================================================
   EVENTS
   ========================================================= */

searchInput?.addEventListener("input", (event) => {
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

resetViewButton?.addEventListener("click", resetDirectory);

sidebarToggle?.addEventListener("click", () => {
  setSidebarCollapsed(!sidebarCollapsed);
});

sidebarOpen?.addEventListener("click", () => {
  setSidebarCollapsed(false);
});

drawerClose?.addEventListener("click", closeProfileDrawer);
mobileScrim?.addEventListener("click", closeProfileDrawer);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProfileDrawer();
});

window.addEventListener("resize", () => {
  map.invalidateSize();

  if (isMobileLayout()) {
    directoryApp?.classList.remove("sidebar-collapsed");
    if (sidebarOpen) sidebarOpen.hidden = true;
  } else {
    directoryApp?.classList.toggle(
      "sidebar-collapsed",
      sidebarCollapsed
    );

    if (sidebarOpen) {
      sidebarOpen.hidden = !sidebarCollapsed;
    }
  }
});

/* =========================================================
   INITIAL RENDER
   ========================================================= */

const DATA_URL = "./institutions.json";

function showDataLoadError(error) {
  console.error("Unable to load institution data:", error);

  if (listElement) {
    listElement.innerHTML = `
      <div class="data-error">
        <strong>Institution data could not be loaded.</strong>
        <p>
          Confirm that <code>institutions.json</code> is in the same folder
          as <code>map.html</code> and <code>script.js</code>.
        </p>
      </div>
    `;
  }

  if (resultCountElement) {
    resultCountElement.textContent = "Data unavailable";
  }
}


function renderInitialMapWhenReady(attempt = 0) {
  const startInitialRender = () => {
    const mapContainer = map.getContainer();
    const { width, height } = mapContainer.getBoundingClientRect();
    const layoutReady = width > 0 && height > 0;

    if (!layoutReady && attempt < 30) {
      window.requestAnimationFrame(() => {
        renderInitialMapWhenReady(attempt + 1);
      });
      return;
    }

    /*
      Wait for two paint frames after the page grid becomes measurable.
      This gives Leaflet the final map dimensions before custom div-icon
      markers are created.
    */
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        map.invalidateSize({
          pan: false,
          animate: false,
          debounceMoveend: true
        });

        visibleInstitutions = [...INSTITUTIONS];
        renderInstitutionList(visibleInstitutions);
        renderMarkers(visibleInstitutions);

        map.setView(CANADA_VIEW.center, CANADA_VIEW.zoom, {
          animate: false
        });

        map.invalidateSize({
          pan: false,
          animate: false,
          debounceMoveend: true
        });

        if (listElement) {
          listElement.setAttribute("aria-busy", "false");
        }
      });
    });
  };

  if (map._loaded) {
    startInitialRender();
  } else {
    map.whenReady(startInitialRender);
  }
}

async function loadInstitutionData() {
  const response = await fetch(DATA_URL, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(
      `Failed to load ${DATA_URL}: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new TypeError("institutions.json must contain a JSON array.");
  }

  const invalidEntries = data.filter(
    (institution) =>
      !institution
      || typeof institution.id !== "string"
      || typeof institution.name !== "string"
      || !institution.coordinates
      || !Number.isFinite(Number(institution.coordinates.lat))
      || !Number.isFinite(Number(institution.coordinates.lng))
  );

  if (invalidEntries.length) {
    throw new TypeError(
      `${invalidEntries.length} institution record(s) are missing required fields.`
    );
  }

  INSTITUTIONS = data;

  renderTypeLegend();
  renderInstitutionList(INSTITUTIONS);

  if (headerCountElement) {
    headerCountElement.textContent = INSTITUTIONS.length;
  }

  /*
    Leaflet is created before the async JSON request finishes. On some page
    loads, the grid and map container have not completed their first usable
    layout when the initial markers are added. Leaflet then positions those
    marker elements using a stale/zero container size. A later directory
    action works because it clears and recreates the markers after layout.

    Wait until the map has measurable dimensions, invalidate Leaflet's cached
    size, and only then perform the first marker render.
  */
  renderInitialMapWhenReady();
}

loadInstitutionData().catch(showDataLoadError);

