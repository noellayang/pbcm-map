/* =========================================================
   INSTITUTION DIRECTORY DATA
   ========================================================= */

const INSTITUTIONS = [
  {
    id: "ubc",
    name: "University of British Columbia",
    shortName: "UBC",
    type: "university",
    city: "Vancouver",
    province: "BC",
    coordinates: { lat: 49.2606, lng: -123.246 },
    stage: "implemented",
    stageLabel: "Implementation underway",
    initiative: "Canadian University-supported initiative",
    image:
      "https://images.spaicelabs.com/images/flus6j8v/production/fbb07b3efe502c9f5f53301aee35738e9f3531f9-1920x1080.jpg?rect=420%2C0%2C1080%2C1080&w=3840&fm=webp&q=75&fit=max",

    headline:
      "UBC is putting food at the centre of its climate plans.",

    stats: [
      {
        value: "50%",
        label: "Food-emissions reduction target"
      },
      {
        value: "2030",
        label: "Target year"
      }
    ],

    plantBasedPercent: null,

    summary:
      "UBC is turning climate commitments into changes across campus food service. Through its Climate Action Plan 2030, the university is introducing climate-friendly procurement guidelines and helping students understand the impact of the food they choose.",

    achievements: [
      "Adopted climate-friendly food-system procurement guidelines",
      "Set a goal to cut food-related greenhouse-gas emissions by 50% by 2030",
      "Introduced climate labels that make the impact of menu choices easier to understand",
      "Made food procurement part of the university’s wider climate strategy"
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
    initiative: "Canadian University-supported initiative",
    image:
      "https://www.kaplanpathways.com/tachyon/sites/4/2023/05/header-uvic.jpg?resize=750%2C560&crop=690px%2C0px%2C750px%2C560px",

    headline:
      "Students and faculties are helping turn ambitious campus targets into action.",

    stats: [
      {
        value: "50%",
        label: "Food-emissions reduction target"
      },
      {
        value: "60%",
        label: "Plant-based menu default target"
      }
    ],

    plantBasedPercent: null,

    summary:
      "UVic has set bold goals for the future of campus food. Its Climate and Sustainability Action Plan 2030 calls for lower food-related emissions and more plant-based defaults, while faculty-level projects are already showing what that change can look like.",

    achievements: [
      "Set a goal to reduce food-related greenhouse-gas emissions by 50% by 2030",
      "Committed to making plant-based choices the default on 60% of campus menus",
      "Put plant-based defaults into practice within the Faculty of Law",
      "Started building support for participation across more faculties"
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
    initiative: "Canadian University-supported initiative",
    image:
      "https://www.uwo.ca/img/about/bnr/about_western_mobile.jpg",

    headline:
      "Nearly half of Western’s residence dining cycle is already plant-based.",

    stats: [
      {
        value: "46%",
        label: "Reported plant-based offerings"
      },
      {
        value: "Residence dining",
        label: "Area of progress"
      }
    ],

    plantBasedPercent: 46,

    summary:
      "Plant-based food is becoming a meaningful part of everyday residence dining at Western. The university reports that approximately 46% of offerings in its residence dining cycle are now plant-based.",

    achievements: [
      "Reached approximately 46% plant-based offerings within the residence dining cycle",
      "Made plant-based choices a regular part of residence dining rather than a limited add-on"
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
    initiative: "Canadian University-supported initiative",
    image:
      "https://www.concordia.ca/news/stories/2018/06/07/3-global-rankings-confirm-concordias-place-among-the-worlds-leading-institutions/_jcr_content/top-image.img.768.medium.jpg/1536174173428.jpg",

    headline:
      "Plant-based choices are gaining real visibility across Concordia dining.",

    stats: [
      {
        value: "42%",
        label: "Reported vegan options"
      },
      {
        value: "24%",
        label: "Reported vegetarian options"
      }
    ],

    plantBasedPercent: 42,

    summary:
      "Concordia students are seeing more plant-forward choices in everyday campus dining. Reported menus include substantial vegan and vegetarian offerings, alongside stronger promotion of plant-based milk.",

    achievements: [
      "Reached approximately 42% reported vegan dining options",
      "Reached approximately 24% reported vegetarian dining options",
      "Made plant-based milk more visible across campus food service"
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
    initiative: "Canadian University-supported initiative",
    image:
      "https://photos.applyboard.com/school_photos/000/014/138/photos/optimized/University-of-Waterloo-Campus-Aerial-July2020.webp?1659723993",

    headline:
      "Waterloo is bringing food into the bigger sustainability conversation.",

    stats: [
      {
        value: "Growing",
        label: "Vegan menu availability"
      },
      {
        value: "In progress",
        label: "Plant-forward procurement work"
      }
    ],

    plantBasedPercent: null,

    summary:
      "The University of Waterloo is beginning to treat food as an important part of campus sustainability. Planning and procurement work are moving forward while vegan choices continue to grow across campus.",

    achievements: [
      "Brought food systems into institutional sustainability planning",
      "Started advancing plant-forward procurement work",
      "Continued expanding vegan menu choices"
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
    initiative: "Canadian University-supported initiative",
    image:
      "https://www.uoguelph.ca/_next/image?url=https%3A%2F%2Fapi.liveugconthub.uoguelph.dev%2Fsites%2Fdefault%2Ffiles%2F2025-01%2Fjohnston-green-aerials-5.jpg&w=3840&q=75",

    headline:
      "Plant-forward choices are already part of everyday campus life at Guelph.",

    stats: [
      {
        value: "Campus-wide",
        label: "Vegan and vegetarian availability"
      },
      {
        value: "Available now",
        label: "Current menu access"
      }
    ],

    plantBasedPercent: null,

    summary:
      "Students at the University of Guelph can find vegan and vegetarian options across campus food-service locations, making plant-forward eating part of the regular campus experience.",

    achievements: [
      "Made vegan and vegetarian choices available across campus",
      "Built plant-forward options into regular hospitality services"
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
    initiative: "Vancouver Coastal Health-supported initiative",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrHMOUbr7FFeXYcoF94NEWtYukkXZQSDVTPjfEicNhlalguaDgLyrFEtUw&s=10",

    headline:
      "A hospital menu pilot showed how patient care and planetary health can move together.",

    stats: [
      {
        value: "20+",
        label: "Plant-rich dishes piloted"
      },
      {
        value: "One team",
        label: "Clinicians, chefs and food staff"
      }
    ],

    plantBasedPercent: null,

    summary:
      "Vancouver General Hospital brought clinicians, dietitians, chefs, food-service staff, and sustainability specialists together to create more plant-rich patient meals. The pilot introduced more than 20 dishes and kept successful options on the menu.",

    achievements: [
      "Piloted more than 20 new plant-rich patient dishes",
      "United physicians, dietitians, chefs, food-service teams, and sustainability specialists",
      "Kept successful dishes in service after the pilot",
      "Connected nourishing patient meals with lower-carbon healthcare"
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
    initiative: "Plant-Based Cities Movement-supported initiative",
    image:
      "https://victoriabuzz.com/wp-content/uploads/2020/12/saanich-peninsula-hospital.jpg",

    headline:
      "A physician-led team is beginning to build momentum for plant-forward hospital food.",

    stats: [
      {
        value: "Physician-led",
        label: "Local initiative"
      },
      {
        value: "Early stage",
        label: "Planning and collaboration"
      }
    ],

    plantBasedPercent: null,

    summary:
      "A physician-led effort at Saanich Peninsula Hospital is opening conversations about more plant-forward options for staff and patients. Resource-sharing and early planning support are helping the team build a practical foundation for future change.",

    achievements: [
      "Opened early conversations about staff and patient food",
      "Began sharing practical ideas for food-service improvements",
      "Connected the local team with planning resources and support"
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
    coordinates: { lat: 49.32, lng: -123.07 },
    stage: "motion-passed",
    stageLabel: "Motion passed",
    initiative: "Plant-Based Cities Movement-supported initiative",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWlyxzyam8JQVGhJt8pjL9jrX42RhVxCLbDIRN8X85BQ&s=10",

    headline:
      "North Vancouver has made plant-based food a municipal purchasing priority.",

    stats: [
      {
        value: "May 2024",
        label: "Motion adopted"
      },
      {
        value: "Municipal events",
        label: "Food purchasing priority"
      }
    ],

    plantBasedPercent: null,

    summary:
      "The District of North Vancouver has taken a formal step toward making plant-based food more common at municipal meetings, events, and functions. Its 2024 motion connects public purchasing with health, climate action, biodiversity, and responsible resource use.",

    achievements: [
      "Passed a formal plant-forward food procurement motion",
      "Prioritized plant-based options when municipal food is purchased or funded",
      "Connected food purchasing with public health, climate, biodiversity, and resource use",
      "Created a clear municipal commitment that future work can build on"
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
    id: "vancouver",
    name: "City of Vancouver",
    shortName: "Vancouver",
    type: "city",
    city: "Vancouver",
    province: "BC",
    coordinates: { lat: 49.2827, lng: -123.1207 },
    stage: "motion-passed",
    stageLabel: "Motion passed; staff work ongoing",
    initiative: "Vancouver Humane Society-supported initiative",
    image:
      "https://images.squarespace-cdn.com/content/v1/574512d92eeb81676262d877/1676606109508-D5LZABVB2L934NF4ZPUG/2023-Vancouver-Aerial-Skyline-Photography-Copyright-Photographer-Ian-Kobylanski-31.jpg",

    headline:
      "Vancouver is exploring how public food purchasing can cut both costs and emissions.",

    stats: [
      {
        value: "2021",
        label: "Council motion passed"
      },
      {
        value: "Ongoing",
        label: "Lower-emission procurement work"
      }
    ],

    plantBasedPercent: null,

    summary:
      "Vancouver City Council asked staff to examine how a shift toward more plant-based purchasing could reduce costs and greenhouse-gas emissions. The City has continued working toward lower-emission food procurement while considering equity, public demand, and the realities of different food-service settings.",

    achievements: [
      "Approved a formal review of plant-based municipal procurement",
      "Evaluated purchasing scenarios proposed by the Vancouver Humane Society",
      "Linked food purchasing with climate action, costs, and emissions tracking",
      "Committed to continuing lower-emission procurement work",
      "Explored stronger methods for measuring and reporting food-related emissions"
    ],

    resources: [
      {
        label: "Vancouver City Council motion",
        url: "https://council.vancouver.ca/20211102/documents/b5.pdf"
      },
      {
        label: "2023 staff status update",
        url: "https://vancouver.ca/files/cov/2023-09-20-council-memo-plant-based-procurement-motion-status-update-rts.pdf"
      }
    ],

    lastUpdated: "2023-11-07",
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
    initiative:
      "Plant-Based Cities Movement and Greener By Default-supported initiative",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlO_YGsOFcm7uT4zCxdMPkJm6Qu4jgdWGU4B1Imcq4HUFHgd4NZ_-7w-Y&s=10",

    headline:
      "Saanich is testing how plant-forward procurement can work in practice.",

    stats: [
      {
        value: "1 year",
        label: "Municipal pilot"
      },
      {
        value: "In development",
        label: "Policy and measurement tools"
      }
    ],

    plantBasedPercent: null,

    summary:
      "Saanich has moved from conversation into hands-on testing. Staff training, cross-department support, and a one-year pilot are helping the District understand how plant-forward food can become a practical part of municipal purchasing and food service.",

    achievements: [
      "Built support within the municipal Sustainability Department",
      "Hosted a Greener by Default workshop for managers and staff",
      "Launched a one-year pilot to test feasibility and participation",
      "Started developing policy options and ways to measure food-related emissions"
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
    initiative: "Plant-Based Cities Movement-supported initiative",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTATUOAM8ovnNGVTPT6PM5ZBJt0NY4qv3ELZ6U_qmi4YTGH-qdofUiZBGk&s=10",

    headline:
      "A community presentation helped move plant-forward food onto Burnaby’s agenda.",

    stats: [
      {
        value: "April 2025",
        label: "Council direction issued"
      },
      {
        value: "Next step",
        label: "Staff review and follow-up"
      }
    ],

    plantBasedPercent: null,

    summary:
      "After hearing evidence from the Plant-Based Cities Movement, Burnaby City Council directed staff to explore more plant-forward options at City facilities and better ways to help residents understand sustainable food choices.",

    achievements: [
      "Brought food-related emissions and municipal climate action before the Environment Committee",
      "Secured Council direction for staff to explore more plant-forward options",
      "Encouraged better public information about sustainable food choices",
      "Opened the door for follow-up on implementation and food-service practices"
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
    initiative: "Plant-Based Cities Movement-supported initiative",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhklyQfCY6U8e4jf54sjNFCST_90zAiNwI_pcfDFNOJaFjAWrEErL8PFD&s=10",

    headline:
      "Brampton has opened the door to a major increase in plant-based municipal food.",

    stats: [
      {
        value: "August 2022",
        label: "Council motion approved"
      },
      {
        value: "City-wide review",
        label: "Food sourcing and facilities"
      }
    ],

    plantBasedPercent: null,

    summary:
      "Brampton City Council directed the City to review its food sourcing and consider a substantial increase in plant-based options at municipal facilities and events.",

    achievements: [
      "Approved a formal review of municipal food sourcing",
      "Connected food-service decisions with climate impacts",
      "Documented vegan and vegetarian choices at concessions and events",
      "Raised plant-based expectations in conversations with future vendors"
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
    initiative: "Plant-Based Cities Movement-supported initiative",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69qOrp0juP07gCE-54R7UKaOKsGqyp-5jvlRLOkS4Eg&s=10",

    headline:
      "Halton is connecting healthier food, lower waste, and climate action.",

    stats: [
      {
        value: "July 2023",
        label: "Regional motion passed"
      },
      {
        value: "Regional facilities",
        label: "Focus of menu review"
      }
    ],

    plantBasedPercent: null,

    summary:
      "Halton Regional Council asked staff to explore more plant-based food at Regional facilities and events. The work brings healthy eating, Canada’s Food Guide, food-waste reduction, and climate action into one practical conversation.",

    achievements: [
      "Approved a formal review of plant-based food options",
      "Connected plant-forward food with health and climate goals",
      "Introduced new plant-based salads and sandwiches at Halton Regional Centre",
      "Started updating corporate healthy-food guidance"
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
    coordinates: { lat: 44.2312, lng: -76.486 },
    stage: "motion-passed",
    stageLabel: "Motion passed",
    initiative: "Plant-Based Cities Movement-supported initiative",
    image:
      "https://www.visitkingston.ca/media/transforms/headers/_960x540_crop_center-center_none_ns/header-getting-to-kington.jpg",

    headline:
      "A strong Council vote put plant-rich food on Kingston’s municipal agenda.",

    stats: [
      {
        value: "10–3",
        label: "Council vote"
      },
      {
        value: "October 2024",
        label: "Motion approved"
      }
    ],

    plantBasedPercent: null,

    summary:
      "Kingston City Council backed a broader role for plant-rich food in municipal purchasing, public education, and community collaboration. The motion connects local food decisions with both climate goals and Canada’s Food Guide.",

    achievements: [
      "Passed the motion with a 10–3 Council vote",
      "Prioritized plant-rich food at municipal facilities and events",
      "Connected municipal food policy with health and climate objectives",
      "Included public education and community collaboration in the path forward"
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
    initiative:
      "Sustainable Food Transition Coalition and Plant-Based Cities Movement-supported initiative",
    image:
      "https://www.bonjourquebec.com/sites/default/files/styles/square/public/2022-06/Montreal-Tourisme-Montreal-H_0.jpg.webp?itok=jirDA_c8",

    headline:
      "Montréal has made one of Canada’s boldest municipal food commitments.",

    stats: [
      {
        value: "75%",
        label: "Vegetarian food commitment"
      },
      {
        value: "65",
        label: "Councillors supporting the motion"
      }
    ],

    plantBasedPercent: 75,

    summary:
      "Montréal unanimously committed to serving at least 75% vegetarian food at City-organized events and aligning municipal procurement with the Planetary Health Diet. The commitment is now supported by internal coordination and responsible purchasing work.",

    achievements: [
      "Won unanimous support from 65 councillors",
      "Committed to at least 75% vegetarian food at City-organized events",
      "Joined the C40 Good Food Cities Declaration",
      "Created an internal food committee to coordinate implementation",
      "Started developing responsible food-purchasing guidance"
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
    coordinates: { lat: 43.532, lng: -80.224 },
    stage: "implemented",
    stageLabel: "Plant-based menu implemented",
    initiative: "Canadian University-supported initiative",
    image:
      "https://www.earthscapeplay.com/wp-content/uploads/2025/09/guelph-ontario-childcare-outdoor-play-area-trike-loop-log-cl.jpg",

    headline:
      "Plant-forward change is starting with some of Guelph’s youngest learners.",

    stats: [
      {
        value: "Implemented",
        label: "Plant-based menu"
      },
      {
        value: "Early learning",
        label: "Setting for change"
      }
    ],

    plantBasedPercent: null,

    summary:
      "The University of Guelph Child Care and Learning Centre introduced a plant-based menu to reduce its food-related carbon footprint. The project shows that practical food-system change can begin in early-learning environments too.",

    achievements: [
      "Introduced a plant-based menu in an early-childhood setting",
      "Connected everyday meals with carbon-footprint reduction",
      "Created a practical example of plant-forward food in child care"
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
    attribution:
      "&copy; OpenStreetMap contributors &copy; CARTO"
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

    return ["http:", "https:"].includes(url.protocol)
      ? url.href
      : "#";
  } catch {
    return "#";
  }
}

function formatPercentage(value) {
  return Number.isFinite(value)
    ? `${value}%`
    : "Not reported";
}

function formatDate(value) {
  if (!value) return "Not reported";

  const date = new Date(`${value}T12:00:00`);

  if (Number.isNaN(date.getTime())) {
    return "Not reported";
  }

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
  return INSTITUTIONS.find(
    (institution) => institution.id === id
  );
}

function typeColor(type) {
  const variableNames = {
    university: "--university",
    hospital: "--hospital",
    city: "--city",
    other: "--other"
  };

  const variableName =
    variableNames[type] ?? "--other";

  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
}

function getDrawerWidth() {
  const measuredWidth =
    drawer.getBoundingClientRect().width;

  if (measuredWidth > 0) {
    return measuredWidth;
  }

  const cssWidth = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--drawer-width");

  const parsedWidth = Number.parseFloat(cssWidth);

  return Number.isFinite(parsedWidth)
    ? parsedWidth
    : 350;
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
  listElement.innerHTML = institutions
    .map(
      (institution) => `
        <button
          class="institution-card ${
            institution.id === selectedInstitutionId
              ? "is-selected"
              : ""
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
              <strong>
                ${escapeHtml(institution.name)}
              </strong>

              <span>
                ${escapeHtml(institution.city)},
                ${escapeHtml(institution.province)}
                ·
                ${escapeHtml(
                  TYPE_LABELS[institution.type] ?? "Institution"
                )}
              </span>
            </span>

            <span
              class="stage-badge stage-${escapeHtml(institution.stage)}"
            >
              ${escapeHtml(institution.stageLabel)}
            </span>
          </span>
        </button>
      `
    )
    .join("");

  listElement
    .querySelectorAll(".institution-card")
    .forEach((card) => {
      card.addEventListener("click", () => {
        selectInstitution(card.dataset.institutionId);
      });
    });

  const noun =
    institutions.length === 1
      ? "result"
      : "results";

  resultCountElement.textContent =
    `${institutions.length} ${noun}`;

  headerCountElement.textContent =
    INSTITUTIONS.length;

  emptyStateElement.hidden =
    institutions.length !== 0;
}

/* =========================================================
   MARKERS
   ========================================================= */

function clearMarkers() {
  markers.forEach((marker) => {
    marker.removeFrom(map);
  });

  markers.clear();
}

function renderMarkers(institutions) {
  clearMarkers();

  institutions.forEach((institution) => {
    const marker = L.marker(
      [
        institution.coordinates.lat,
        institution.coordinates.lng
      ],
      {
        icon: createInstitutionIcon(institution),
        title: institution.name,
        riseOnHover: true,
        keyboard: true
      }
    );

    marker.bindTooltip(
      `
        <strong>
          ${escapeHtml(institution.name)}
        </strong>

        <span>
          ${escapeHtml(institution.city)},
          ${escapeHtml(institution.province)}
          ·
          ${escapeHtml(
            TYPE_LABELS[institution.type] ?? "Institution"
          )}
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

function applyFilters({
  updateMapView = true
} = {}) {
  const normalizedSearch =
    searchTerm.trim().toLowerCase();

  visibleInstitutions = INSTITUTIONS.filter(
    (institution) => {
      const matchesType =
        activeType === "all" ||
        institution.type === activeType;

      const statText = (institution.stats ?? [])
        .flatMap((stat) => [
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
        institution.initiative,
        institution.headline,
        institution.summary,
        ...statText,
        ...(institution.achievements ?? [])
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return (
        matchesType &&
        searchableText.includes(normalizedSearch)
      );
    }
  );

  renderInstitutionList(visibleInstitutions);
  renderMarkers(visibleInstitutions);

  if (
    selectedInstitutionId &&
    !visibleInstitutions.some(
      (institution) =>
        institution.id === selectedInstitutionId
    )
  ) {
    selectedInstitutionId = null;
    closeProfileDrawer();
  }

  if (
    !updateMapView ||
    visibleInstitutions.length === 0
  ) {
    return;
  }

  if (visibleInstitutions.length === 1) {
    focusInstitutionOnVisibleMap(
      visibleInstitutions[0],
      9,
      false
    );

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
          .map(
            (achievement) => `
              <li>
                ${escapeHtml(achievement)}
              </li>
            `
          )
          .join("")
      : `
          <li class="empty-value">
            No public achievements reported.
          </li>
        `;

  const resources =
    institution.resources?.length
      ? institution.resources
          .map(
            (resource) => `
              <a
                class="profile-resource"
                href="${escapeHtml(safeUrl(resource.url))}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  ${escapeHtml(resource.label)}
                </span>

                <span
                  class="resource-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            `
          )
          .join("")
      : `
          <p class="empty-value">
            No public sources currently listed.
          </p>
        `;

  const profileImage = institution.image
    ? `
        <figure class="profile-image">
          <img
            src="${escapeHtml(institution.image)}"
            alt=""
            loading="lazy"
          >
        </figure>
      `
    : "";

  const profileHeadline = institution.headline
    ? `
        <p class="profile-headline">
          ${escapeHtml(institution.headline)}
        </p>
      `
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
                  <strong>
                    ${escapeHtml(stat.value)}
                  </strong>

                  <span>
                    ${escapeHtml(stat.label)}
                  </span>
                </div>
              `
            )
            .join("")}
        </section>
      `
    : "";

  const plantBasedDetail =
    Number.isFinite(institution.plantBasedPercent)
      ? `
          <div>
            <dt>Plant-based offering</dt>

            <dd>
              ${escapeHtml(
                formatPercentage(
                  institution.plantBasedPercent
                )
              )}
            </dd>
          </div>
        `
      : "";

  drawerContent.innerHTML = `
    <article class="institution-profile">
      ${profileImage}

      <header class="profile-header">
        <div class="profile-classification">
          <span
            class="drawer-type-icon"
            style="--type-color:${typeColor(institution.type)}"
            aria-hidden="true"
          >
            ${TYPE_ICONS[institution.type] ?? TYPE_ICONS.other}
          </span>

          <span>
            ${escapeHtml(
              TYPE_LABELS[institution.type] ?? "Institution"
            )}
          </span>
        </div>

        <h2 id="drawer-name">
          ${escapeHtml(institution.name)}
        </h2>

        <p class="profile-location">
          ${escapeHtml(institution.city)},
          ${escapeHtml(institution.province)}
        </p>

        ${
          institution.initiative
            ? `
                <p class="profile-initiative">
                  ${escapeHtml(institution.initiative)}
                </p>
              `
            : ""
        }
      </header>

      ${profileHeadline}

      ${profileStats}

      <div class="profile-body">
        <section
          class="profile-introduction"
          aria-labelledby="profile-summary-heading"
        >
          <h3 id="profile-summary-heading">
            The story so far
          </h3>

          <p>
            ${escapeHtml(institution.summary)}
          </p>
        </section>

        <section
          class="profile-content-section"
          aria-labelledby="profile-highlights-heading"
        >
          <h3 id="profile-highlights-heading">
            What they’ve achieved
          </h3>

          <ul class="profile-highlights">
            ${achievements}
          </ul>
        </section>

        <section
          class="profile-content-section"
          aria-labelledby="profile-details-heading"
        >
          <h3 id="profile-details-heading">
            At a glance
          </h3>

          <dl class="profile-details">
            <div>
              <dt>Current status</dt>

              <dd>
                ${escapeHtml(institution.stageLabel)}
              </dd>
            </div>

            ${plantBasedDetail}

            <div>
              <dt>Last reviewed</dt>

              <dd>
                ${escapeHtml(
                  formatDate(institution.lastUpdated)
                )}
              </dd>
            </div>

            <div>
              <dt>Source review</dt>

              <dd>
                ${
                  institution.verified
                    ? "Public sources reviewed"
                    : "Review pending"
                }
              </dd>
            </div>
          </dl>
        </section>

        <section
          class="profile-content-section profile-sources"
          aria-labelledby="profile-sources-heading"
        >
          <h3 id="profile-sources-heading">
            Explore the sources
          </h3>

          <div class="profile-resource-list">
            ${resources}
          </div>
        </section>
      </div>
    </article>
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

function focusInstitutionOnVisibleMap(
  institution,
  zoom,
  accountForDrawer = true
) {
  const latLng = L.latLng(
    institution.coordinates.lat,
    institution.coordinates.lng
  );

  if (
    isMobileLayout() ||
    !accountForDrawer
  ) {
    map.flyTo(latLng, zoom, {
      animate: true,
      duration: 0.45
    });

    return;
  }

  const mapWidth = map
    .getContainer()
    .getBoundingClientRect()
    .width;

  const drawerWidth = getDrawerWidth();

  const visibleMapWidth = Math.max(
    mapWidth - drawerWidth,
    240
  );

  const projectedMarker =
    map.project(latLng, zoom);

  const fullMapCentreX =
    mapWidth / 2;

  const desiredMarkerX =
    visibleMapWidth / 2;

  const centreShift =
    fullMapCentreX - desiredMarkerX;

  const projectedCentre =
    projectedMarker.add([centreShift, 0]);

  const adjustedCentre =
    map.unproject(projectedCentre, zoom);

  map.flyTo(adjustedCentre, zoom, {
    animate: true,
    duration: 0.5
  });
}

/* =========================================================
   SELECTION
   ========================================================= */

function setSelectedCard(id) {
  document
    .querySelectorAll(".institution-card")
    .forEach((card) => {
      card.classList.toggle(
        "is-selected",
        card.dataset.institutionId === id
      );
    });
}

function updateSelectedMarker(
  previousId,
  nextId
) {
  if (previousId) {
    const previousMarker =
      markers.get(previousId);

    previousMarker
      ?.getElement()
      ?.querySelector(".institution-marker")
      ?.classList.remove("is-selected");
  }

  const nextMarker =
    markers.get(nextId);

  nextMarker
    ?.getElement()
    ?.querySelector(".institution-marker")
    ?.classList.add("is-selected");
}

function selectInstitution(id) {
  const institution =
    getInstitutionById(id);

  if (!institution) return;

  const previousId =
    selectedInstitutionId;

  selectedInstitutionId = id;

  setSelectedCard(id);

  updateSelectedMarker(
    previousId,
    id
  );

  openProfileDrawer(institution);

  window.requestAnimationFrame(() => {
    const targetZoom = Math.max(
      map.getZoom(),
      8
    );

    focusInstitutionOnVisibleMap(
      institution,
      targetZoom,
      true
    );
  });

  document
    .querySelector(
      `[data-institution-id="${CSS.escape(id)}"]`
    )
    ?.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
}

/* =========================================================
   SIDEBAR
   ========================================================= */

function setSidebarCollapsed(collapsed) {
  if (isMobileLayout()) return;

  sidebarCollapsed = collapsed;

  directoryApp.classList.toggle(
    "sidebar-collapsed",
    collapsed
  );

  sidebarToggle.setAttribute(
    "aria-expanded",
    String(!collapsed)
  );

  sidebarOpen.hidden = !collapsed;

  window.setTimeout(() => {
    map.invalidateSize();
  }, 190);
}

/* =========================================================
   RESET
   ========================================================= */

function resetDirectory() {
  searchInput.value = "";
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

  applyFilters({
    updateMapView: false
  });

  map.flyTo(
    CANADA_VIEW.center,
    CANADA_VIEW.zoom,
    {
      animate: true,
      duration: 0.5
    }
  );
}

/* =========================================================
   EVENTS
   ========================================================= */

searchInput.addEventListener(
  "input",
  (event) => {
    searchTerm = event.target.value;
    applyFilters();
  }
);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeType = button.dataset.type;

    filterButtons.forEach((item) => {
      item.classList.toggle(
        "active",
        item === button
      );
    });

    applyFilters();
  });
});

resetViewButton?.addEventListener(
  "click",
  resetDirectory
);

sidebarToggle?.addEventListener(
  "click",
  () => {
    setSidebarCollapsed(
      !sidebarCollapsed
    );
  }
);

sidebarOpen?.addEventListener(
  "click",
  () => {
    setSidebarCollapsed(false);
  }
);

drawerClose?.addEventListener(
  "click",
  closeProfileDrawer
);

mobileScrim?.addEventListener(
  "click",
  closeProfileDrawer
);

document.addEventListener(
  "keydown",
  (event) => {
    if (event.key === "Escape") {
      closeProfileDrawer();
    }
  }
);

window.addEventListener(
  "resize",
  () => {
    map.invalidateSize();

    if (isMobileLayout()) {
      directoryApp.classList.remove(
        "sidebar-collapsed"
      );

      sidebarOpen.hidden = true;
    } else {
      directoryApp.classList.toggle(
        "sidebar-collapsed",
        sidebarCollapsed
      );

      sidebarOpen.hidden =
        !sidebarCollapsed;
    }
  }
);

/* =========================================================
   INITIAL RENDER
   ========================================================= */

renderTypeLegend();
renderInstitutionList(INSTITUTIONS);
renderMarkers(INSTITUTIONS);

headerCountElement.textContent =
  INSTITUTIONS.length;

window.setTimeout(() => {
  map.invalidateSize();
  applyFilters();
}, 0);