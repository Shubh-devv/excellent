export const selectedWork = [
  {
    category: "Government",
    title: "Taj Mahotsava",
    blurb:
      "Multi-night cultural festival production — full stage, sound and gate branding for headliners Sunidhi Chauhan, Shreya Ghoshal and Shankar-Ehsaan-Loy.",
    tone: "deep",
  },
  {
    category: "Corporate",
    title: "Hero Honda — 2 Crore Celebration",
    blurb:
      "A six-city bike-a-thon celebration tour across Lucknow, Gorakhpur, Allahabad, Aligarh, Jhansi & Meerut.",
    tone: "charcoal",
  },
  {
    category: "Campaign",
    title: "Siggnature Reach Campaign",
    blurb:
      "Multi-city saturation outdoor coverage — hoardings, cube units, shop boards and shutter branding across UP & Uttarakhand.",
    tone: "warm",
  },
  {
    category: "Government",
    title: "Deva Mahotsav",
    blurb:
      "Daler Mehandi, Shweta & Sraddha Pandit, Sabri Bros. and a full Russian dance troupe across a multi-night ground activation.",
    tone: "charcoal",
  },
  {
    category: "Corporate",
    title: "Plastindia Gala Night",
    blurb:
      "A Mumbai gala build for the Plastindia Foundation — full stage design featuring Vishal-Shekhar and Laser Girl.",
    tone: "deep",
  },
  {
    category: "Corporate",
    title: "EARTH Udaan",
    blurb:
      "Corporate conference production at Taj, Lucknow — red-carpet arrival, stage design and 500+ seat auditorium setup.",
    tone: "warm",
  },
];

export const mediaMix = [
  {
    letter: "A",
    title: "Brand Builders",
    items: ["Hoardings", "Unipoles", "Gantries", "FOBs"],
  },
  {
    letter: "B",
    title: "Mobile Media",
    items: ["LED Vans", "Bus & Auto Branding", "Metro & Rail"],
  },
  {
    letter: "C",
    title: "On / In Shop",
    items: ["Signage", "Neons", "POS Displays"],
  },
  {
    letter: "D",
    title: "Print & Fabrication",
    items: ["Large Format", "UV Printing", "Offset", "Screen"],
  },
  {
    letter: "E",
    title: "Events & Festivals",
    items: ["Gate Branding", "Stall Display", "Stage Production"],
  },
  {
    letter: "F",
    title: "Digital",
    items: ["SEO", "Social Media", "PPC", "WhatsApp Marketing"],
  },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const social = [
  { label: "Facebook", handle: "/EEnetworks", href: "https://facebook.com/EEnetworks" },
  { label: "Instagram", handle: "/EEnetworks", href: "https://instagram.com/EEnetworks" },
  { label: "Pinterest", handle: "/EEnetworks", href: "https://pinterest.com/EEnetworks" },
  { label: "Twitter", handle: "/EEnetworkss", href: "https://twitter.com/EEnetworkss" },
];

// PLACEHOLDER — no real phone number was in the source profile PDF.
// Replace with the real business number before launch.
export const phone = {
  display: "+91 00000 00000",
  href: "tel:+910000000000",
};

export const stats = [
  { value: "23+", label: "Years in Business" },
  { value: "6+", label: "Cities Covered" },
  { value: "100+", label: "Brands Served" },
  { value: "2002", label: "Established" },
];

export const serviceTags = [
  "Outdoor Advertising",
  "BTL Activation",
  "ATL & TTL",
  "Branding & Printing",
  "Corporate Events",
  "Government Events",
  "Sports Branding",
  "Digital Marketing",
  "Corporate Gifting",
  "Festival Coverage",
];

export const pillars = [
  {
    title: "Outdoor Media",
    desc: "Billboards, unipoles, gantries, FOBs, bus shelters, LED vans, kiosks, wall paintings and every format of brand-builder, reminder and mobile media across UP & Uttarakhand.",
    href: "/services#outdoor",
  },
  {
    title: "Branding & Printing",
    desc: "In-house large-format and conventional printing — solvent, eco-solvent, latex, UV, offset, screen and foil — backed by our own laser-cutting and CNC production setup.",
    href: "/services#printing",
  },
  {
    title: "Event & Promotion",
    desc: "Government mahotsavs, corporate launches, road shows, mobile display units and on-ground activations delivered end to end, from concept to stage.",
    href: "/services#events",
  },
  {
    title: "Sports & Digital",
    desc: "Stadium branding for national cricket venues alongside SEO, social media, PPC, SMS blasts and WhatsApp marketing for a complete 360° reach.",
    href: "/services#digital",
  },
  {
    title: "Corporate Gifting",
    desc: "Home appliances, electronics, incentive schemes and premium gifting solutions sourced and branded for corporate reward programs.",
    href: "/services#gifting",
  },
];

export const presence = [
  "Delhi",
  "Noida",
  "Ghaziabad",
  "Kanpur",
  "Lucknow",
  "Allahabad",
  "Uttar Pradesh",
  "Uttarakhand",
];

export const clients = [
  "Vodafone", "Airtel", "Reliance", "Tata Indicom", "Idea", "Telenor", "Woodland", "fbb",
  "Biba", "Hero Honda", "Zee TV", "Big TV", "Knorr Bremse", "Soch", "UltraTech", "ITC",
  "Cotto Tiles", "Impact", "Hughes", "Siemens", "JK Tyre", "RSPL", "Ciena", "HP",
  "UOP Honeywell", "Canara HSBC", "Bernama", "Satya Group", "LG", "Jio Studios", "Aircel",
  "NDTV India", "Sony", "AIPMA", "Suzuki", "Red Chief", "Zomato", "Tata Docomo",
  "Big Bazaar", "Earth", "Anand", "Denso", "Chevrolet", "Kotak", "TVS", "Mukta A2",
  "Lava Mobiles", "Science Safari", "Reliance Digital", "Blue Star", "Dalmia Cement",
  "Times of India", "Travelport", "HCL", "Polixel", "Standard Chartered", "Honda",
  "Jockey", "Paras", "Colston", "Creora", "Cendant", "Q-railing", "Ghadi Detergent",
  "Mycem", "Nextra Developers", "Yaarah", "Intenze", "Optum", "Landmark",
  "Rajiv Gandhi Cancer Institute", "Lifestyle",
];

// Maps a subset of `clients` to a logo file in public/Company. Names without
// an entry fall back to a text card in ClientFlipGrid.
export const clientLogos: Record<string, string> = {
  Vodafone: "Vodafone.jpg",
  Airtel: "Airtel.png",
  Reliance: "Reliance.png",
  "Tata Indicom": "tata indicom.jpg",
  Idea: "Idea.png",
  Telenor: "telenor.png",
  Woodland: "woodland.jpg",
  fbb: "Fbb.jpg",
  Biba: "BIBA.png",
  "Hero Honda": "honda hero.png",
  "Zee TV": "Zee Tv.jpg",
  "Big TV": "big tv.png",
  "Knorr Bremse": "knorr bremse.jpg",
  ITC: "ITC.svg",
  Siemens: "Siemens.svg",
  "JK Tyre": "JK Tyre.png",
  HP: "HP.svg",
  "Canara HSBC": "Canara HSBC.jpg",
  LG: "LG.svg",
  "NDTV India": "NDTV India.svg",
  Suzuki: "Suzuki.svg",
  Zomato: "Zomato.svg",
  Chevrolet: "Chevrolet.png",
  Travelport: "Travelport.svg",
  HCL: "HCL.svg",
  "Standard Chartered": "Standard Chartered.svg",
  Honda: "Honda.svg",
  Optum: "Optum.svg",
  Aircel: "Aircel.svg",
  "Blue Star": "Blue Star.svg",
  Ciena: "Ciena.svg",
  Denso: "Denso.svg",
  Hughes: "Hughes.svg",
  Kotak: "Kotak.svg",
  "Lava Mobiles": "Lava Mobiles.svg",
  "Reliance Digital": "Reliance Digital.svg",
  Sony: "Sony.svg",
  TVS: "TVS.svg",
  "Times of India": "Times of India.svg",
  UltraTech: "UltraTech.svg",
  Landmark: "Landmark.png",
  "Tata Docomo": "Tata Docomo.png",
  "Mukta A2": "Mukta A2.jpg",
  Anand: "Anand.png",
  "UOP Honeywell": "UOP Honeywell.png",
  "Red Chief": "Red Chief.png",
  "Rajiv Gandhi Cancer Institute": "Rajiv Gandhi Cancer Institute.png",
  AIPMA: "AIPMA.png",
  Soch: "Soch.png",
  RSPL: "RSPL.png",
  "Big Bazaar": "Big bazar.png",
  Colston: "Colston.jpeg",
  "Dalmia Cement": "Dalmia Cement.jpg",
  Earth: "Earth.avif",
  "Jio Studios": "Jio Studio.jpg",
  Lifestyle: "Lifestyle.png",
  Mycem: "Mycem.png",
  Paras: "Paras.jpg",
  Impact: "impact.jpg",
  Yaarah: "yaarah.webp",
  "Cotto Tiles": "Cotto tiles.png",
  "Ghadi Detergent": "Ghadi.png",
  "Satya Group": "Satya Group.jpg",
  Cendant: "cendant.svg",
  "Q-railing": "Q-ralling.jpg",
  Creora: "creora.png",
  Intenze: "intenze.png",
  Jockey: "Jockey.avif",
  Bernama: "bernama.jpg",
  "Nextra Developers": "nextra developers.png",
  Polixel: "polixel.png",
};

export const outdoorCategories = [
  {
    title: "Brand Builders",
    items: ["Bill Boards / Hoardings", "Unipoles", "Flag Poles", "Gantries", "FOB (Foot Over Bridge)", "Front Facades", "Drop Downs", "LED Video Walls"],
  },
  {
    title: "Reminders",
    items: ["Bus Shelters", "Guard Railings", "Kiosks", "Traffic Consoles", "Traffic Stands", "Wall Paintings", "Shutter Painting", "Cloth Banners (Fastoons)", "Poly Fab Banners", "Flute Boards", "Framed Flex Banners"],
  },
  {
    title: "Mobile Medias",
    items: ["Activity Van / Canter", "Matador, Tata Ace, Swaraj Mazda (LED Vans)", "Toto (Battery Rickshaw)", "Auto Rickshaw Back Panel", "Minibus Back Panel", "Buses (Full Body)", "Tram", "Local & Metro Train", "Volvo Buses", "Taxi Branding"],
  },
  {
    title: "On / In Shop",
    items: ["Signage", "Neons", "Crystal LED", "GSB, ACP, Steel Letter", "One Way Vision Film", "Stickers, Posters, Danglers, Buntings", "Cut Out Display, Inflatables", "LED Running Display", "Dealer Board", "Translite Films"],
  },
  {
    title: "Schemes & Gifts",
    items: ["Incentive Schemes", "Lottery / Recharge Coupons", "Scratch Cards", "Privileged Customer Cards", "Key Chains, Pen Drives", "Caps, T-Shirts, Wallets", "Home Appliances, LED TVs, Laptops"],
  },
];

export const atlTtl = [
  { title: "ATL", items: ["TVC", "In-Cinema & Multiplex Screens", "Radio (FM & Aakashvani)", "Newspapers", "Magazines", "In-Flight Magazines"] },
  { title: "TTL", items: ["Corporate Events", "Corporate Promotions", "Government Events"] },
  { title: "Digital", items: ["Website Promotion (SEO)", "Social Media Management", "Mobile Banner Ads", "YouTube Promotions", "PPC Campaigns", "Mass SMS Blast", "Mass WhatsApp"] },
];

export const printing = [
  { title: "Large Format", items: ["Solvent", "Eco Solvent", "Latex", "Digital", "UV (Any Surface)", "Inkjet", "Sublimable"] },
  { title: "Conventional", items: ["Offset", "Screen", "Metallic", "Foil", "Flexo", "Rotogravure"] },
];

export const sportsEvents = [
  "Stadium Branding",
  "Score Board",
  "Side Boundary Fencings",
  "Player Cloth Branding",
  "Sports Equipment Branding",
  "Checkered Boards",
];

export const festivalCoverage = [
  "Overhead Gates",
  "Stall Display",
  "Giant Hoardings",
  "'L' Shape Welcome Gates",
  "Pillar Gates",
  "Product Display",
  "Revolving Boards",
  "Award Ceremony",
  "Road Indicators",
  "Framed Flex",
];

export const govtEvents = [
  {
    title: "Allahabad Mahotsav",
    artists: ["Sunidhi Chauhan", "Kailash Kher", "Daler Mehandi", "Pt. Shiv Kumar Sharma", "Raju Srivastava"],
  },
  {
    title: "Lucknow Mahotsav",
    artists: ["Sunidhi Chauhan", "Kailash Kher", "Daler Mehandi", "Shivmani"],
  },
  {
    title: "Bulandshahar Mahotsav",
    artists: ["Abhijeet Bhattacharya", "Raju Shrivastava", "Sanobar Kabeer", "Sweta Menon", "Mohini Singh"],
  },
  {
    title: "Deva Mahotsav",
    artists: ["Daler Mehandi", "Shweta Pandit", "Sraddha Pandit", "Sabri Bros.", "Russian Dance Troupe", "Raju Shrivastava", "Manoj Tiwari"],
  },
  {
    title: "Taj Mahotsava",
    artists: ["Sunidhi Chauhan", "Shankar-Ehsaan-Loy", "Kuldeep Sharma", "Shreya Ghoshal", "Jassi", "Raja Hasan", "Sumedha", "Laser Girl"],
  },
];

export const corporateEvents = [
  {
    client: "Hero Honda",
    occasion: "2 Crore Celebration — 2007",
    venue: "Lucknow, Gorakhpur, Allahabad, Aligarh, Jhansi & Meerut",
  },
  {
    client: "Plastindia Foundation",
    occasion: "Gala Night for Plastindia '09",
    venue: "Mumbai — featuring Vishal-Shekhar, Laser Girl, Sathya",
  },
  {
    client: "AIPMA",
    occasion: "Launch & Gala Nite — 8th Plastivision Exhibition & Seminar",
    venue: "Hotel Sahara Star & SRPF, Mumbai",
  },
  {
    client: "Reliance Mobile",
    occasion: "“Let's Meet M.S. Dhoni” fan activation",
    venue: "Reliance Mobile stores",
  },
  {
    client: "EARTH",
    occasion: "EARTH Udaan corporate conference",
    venue: "Taj, Lucknow — 20 Dec 2013",
  },
];

export const cityMedia = [
  { city: "Delhi, Noida & Ghaziabad", desc: "FOBs, metro pillar branding, bus shelters, unipoles and gantry sites across the NCR arterial roads." },
  { city: "Kanpur", desc: "Home-market density — hoardings, LED units and roundabout takeovers across the city's key traffic junctions." },
  { city: "Lucknow", desc: "Premium high-street and highway sites, mall facades and metro station branding." },
  { city: "Allahabad", desc: "Legacy hoarding network across the old city and Sangam corridor, including Mahotsav ground activations." },
];

export const reachCampaign = {
  brand: "Siggnature — Finest Pan Masala",
  desc: "A multi-city reach campaign spanning hoardings, cube units, shop boards and shutter branding across UP, Uttarakhand and beyond — sustained brand-recall through saturation outdoor coverage.",
};

export const transitBranding = [
  "Full-body bus branding",
  "Auto-rickshaw back panels",
  "Toto (battery rickshaw) branding",
  "Metro station platform branding",
  "Tram & local train branding",
];

export const setup = [
  "Laser cutting & CNC routing",
  "Large-format solvent & eco-solvent printers",
  "In-house flex, vinyl & ACP fabrication",
  "Dedicated fleet for LED van & MDU activations",
];

export const services = [
  { title: "Outdoor Advertising", desc: "Hoardings, unipoles, gantries, bus shelters, LED vans and every mobile & static media format." },
  { title: "Branding & Printing", desc: "Large-format and conventional printing with in-house production and fabrication." },
  { title: "Corporate & Government Events", desc: "Mahotsavs, product launches, gala nights and stage-managed celebrity events." },
  { title: "Sports Branding", desc: "Stadium, scoreboard and boundary branding for national cricket venues." },
  { title: "Digital Marketing", desc: "SEO, social media, PPC, mass SMS and WhatsApp marketing." },
  { title: "Corporate Gifting", desc: "Sourced, branded incentive and reward products for corporate programs." },
];
