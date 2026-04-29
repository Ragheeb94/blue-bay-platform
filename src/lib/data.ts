export type ProductCategory =
  | "power-wheelchairs"
  | "manual-wheelchairs"
  | "seating-positioning"
  | "power-scooters"
  | "walkers-rollators"
  | "transfer-aids"
  | "accessories";

export interface Product {
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  image: string;  // Unsplash URL
  priceRange: string;
  price?: number;
  requiresConsultation: boolean;
  isFeatured?: boolean;
  badges: string[];
  goodFor: string[];
  notIdealFor: string[];
  specs: { label: string; value: string }[];
  description: string;
  crtRequired: boolean;
}

export const products: Product[] = [
  {
    slug: "permobil-m3-corpus",
    name: "Permobil M3 Corpus",
    brand: "Permobil",
    category: "power-wheelchairs",
    categoryLabel: "Power Wheelchairs",
    tagline: "Advanced power wheelchair for complex rehab needs",
    image: "https://images.unsplash.com/photo-1619992174810-3b90e10a0acf?w=600&q=80&fit=crop",
    priceRange: "Contact for Quote",
    requiresConsultation: true,
    isFeatured: true,
    badges: ["CRT Required", "Insurance Eligible", "Custom Build"],
    goodFor: [
      "Users with limited upper body strength",
      "Indoor and outdoor environments",
      "Long daily usage (8+ hours)",
      "Those needing advanced seating systems",
    ],
    notIdealFor: [
      "First-time wheelchair users without evaluation",
      "Primarily outdoor rough terrain only",
    ],
    specs: [
      { label: "Drive System", value: "Front-wheel drive" },
      { label: "Max Speed", value: "6 mph" },
      { label: "Range", value: "Up to 14.9 miles" },
      { label: "Weight Capacity", value: "300 lbs" },
      { label: "Seat Width", value: "12\"–22\" (custom)" },
      { label: "Water Resistance", value: "Weather-resistant (not waterproof)" },
      { label: "Tilt", value: "0°–55° power tilt" },
      { label: "Recline", value: "90°–170° power recline" },
    ],
    description:
      "The Permobil M3 Corpus is designed for complex rehab users who need highly configurable seating and reliable everyday mobility. Pairing it with the right seating system is critical — our specialists match you to the exact configuration for your body and lifestyle.",
    crtRequired: true,
  },
  {
    slug: "quickie-q50-r",
    name: "Quickie Q50 R",
    brand: "Quickie",
    category: "power-wheelchairs",
    categoryLabel: "Power Wheelchairs",
    tagline: "Rear-wheel drive for active community mobility",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop",
    priceRange: "Contact for Quote",
    requiresConsultation: true,
    isFeatured: true,
    badges: ["CRT Required", "Insurance Eligible"],
    goodFor: [
      "Active community users",
      "Outdoor and indoor use",
      "Users who prefer rear-wheel drive stability",
    ],
    notIdealFor: [
      "Very tight indoor spaces",
      "Users needing maximum tilt/recline",
    ],
    specs: [
      { label: "Drive System", value: "Rear-wheel drive" },
      { label: "Max Speed", value: "6.2 mph" },
      { label: "Range", value: "Up to 16 miles" },
      { label: "Weight Capacity", value: "300 lbs" },
      { label: "Seat Width", value: "12\"–22\" (custom)" },
      { label: "Water Resistance", value: "Weather-resistant (not waterproof)" },
    ],
    description:
      "The Quickie Q50 R offers a natural driving feel for users who spend significant time in the community. Its rear-wheel drive provides predictable handling and excellent outdoor performance.",
    crtRequired: true,
  },
  {
    slug: "tilite-aero-z",
    name: "TiLite Aero Z",
    brand: "TiLite",
    category: "manual-wheelchairs",
    categoryLabel: "Manual Wheelchairs",
    tagline: "Ultra-lightweight titanium rigid frame",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80&fit=crop",
    priceRange: "Contact for Quote",
    requiresConsultation: true,
    isFeatured: true,
    badges: ["CRT Required", "Ultralight", "Custom Fit"],
    goodFor: [
      "Active manual wheelchair users",
      "Those who self-propel regularly",
      "Users prioritizing minimal weight",
      "Frequent travel",
    ],
    notIdealFor: [
      "Users who cannot self-propel",
      "Those needing a tilt-in-space system",
    ],
    specs: [
      { label: "Frame Material", value: "Titanium" },
      { label: "Weight", value: "From 13.7 lbs" },
      { label: "Weight Capacity", value: "300 lbs" },
      { label: "Seat Width", value: "10\"–20\" (custom)" },
      { label: "Back Height", value: "Fully adjustable" },
    ],
    description:
      "The TiLite Aero Z is a fully customized, ultra-lightweight titanium rigid frame wheelchair. Every dimension is configured to your exact measurements and propulsion style during your clinical evaluation.",
    crtRequired: true,
  },
  {
    slug: "roho-quadtro-select",
    name: "ROHO Quadtro Select",
    brand: "ROHO",
    category: "seating-positioning",
    categoryLabel: "Seating & Positioning",
    tagline: "Air-cell cushion for pressure injury prevention",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80&fit=crop",
    priceRange: "Contact for Quote",
    requiresConsultation: false,
    badges: ["Pressure Relief", "Insurance Eligible"],
    goodFor: [
      "Users at risk for pressure injuries",
      "Long daily sitting time",
      "Post-surgical recovery",
      "Users with sensation loss",
    ],
    notIdealFor: [
      "Users needing lateral stability support",
      "Very active self-propellers (can affect efficiency)",
    ],
    specs: [
      { label: "Type", value: "Air cell (interconnected)" },
      { label: "Cover", value: "Moisture-resistant, washable" },
      { label: "Water Resistance", value: "Cover is moisture-resistant — cushion itself is not waterproof" },
      { label: "Sizes", value: "Multiple widths/depths available" },
      { label: "Cell Height", value: "2\" or 4\" available" },
    ],
    description:
      "The ROHO Quadtro Select uses individual air cells to offload pressure across bony prominences. Proper inflation and fit are essential — our team sets this up as part of your seating evaluation.",
    crtRequired: false,
  },
  {
    slug: "pride-go-go-elite",
    name: "Pride Go-Go Elite Traveller",
    brand: "Pride",
    category: "power-scooters",
    categoryLabel: "Power Scooters",
    tagline: "Lightweight travel scooter for everyday independence",
    image: "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?w=600&q=80&fit=crop",
    priceRange: "$1,200 – $1,800",
    price: 1500,
    requiresConsultation: false,
    isFeatured: false,
    badges: ["Ready to Ship", "Travel-Friendly"],
    goodFor: [
      "Short-distance community errands",
      "Travelers and frequent flyers",
      "Users with mild to moderate mobility limitations",
      "Indoor use (malls, airports)",
    ],
    notIdealFor: [
      "Full-time daily mobility device",
      "Rough outdoor terrain",
      "Users over 300 lbs",
    ],
    specs: [
      { label: "Disassembles", value: "Yes — 4 pieces, heaviest 27 lbs" },
      { label: "Max Speed", value: "3.7 mph" },
      { label: "Range", value: "Up to 9.5 miles" },
      { label: "Weight Capacity", value: "300 lbs" },
      { label: "Water Resistance", value: "Not waterproof — avoid rain" },
    ],
    description:
      "The Go-Go Elite Traveller is one of the most popular travel scooters for good reason — it disassembles quickly into airline-friendly pieces without tools. Best for supplemental, not primary, mobility.",
    crtRequired: false,
  },
  {
    slug: "drive-nitro-rollator",
    name: "Drive Nitro Euro Style Rollator",
    brand: "Drive Medical",
    category: "walkers-rollators",
    categoryLabel: "Walkers & Rollators",
    tagline: "Sleek, lightweight rollator for active users",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=600&q=80&fit=crop",
    priceRange: "$180 – $240",
    price: 210,
    requiresConsultation: false,
    badges: ["Ready to Ship", "Lightweight"],
    goodFor: [
      "Active older adults",
      "Indoor and outdoor use on smooth surfaces",
      "Users who need occasional seated rest",
    ],
    notIdealFor: ["Rough outdoor terrain", "Users needing full weight-bearing support"],
    specs: [
      { label: "Frame Material", value: "Aluminum" },
      { label: "Weight", value: "13.2 lbs" },
      { label: "Seat Height", value: "Adjustable" },
      { label: "Weight Capacity", value: "300 lbs" },
      { label: "Folds", value: "Yes" },
    ],
    description:
      "The Nitro's lightweight frame and loop-lock brakes make it one of the most intuitive rollators for everyday use. Available in multiple colors.",
    crtRequired: false,
  },

  // ─── Direct-purchase power wheelchairs ──────────────────────────────────
  {
    slug: "pride-jazzy-ultra-light",
    name: "Pride Jazzy Ultra Light",
    brand: "Pride Mobility",
    category: "power-wheelchairs",
    categoryLabel: "Power Wheelchairs",
    tagline: "Folding carbon fiber powerchair — airline-approved battery",
    image: "https://images.unsplash.com/photo-1619992174810-3b90e10a0acf?w=600&q=80&fit=crop",
    priceRange: "$3,400",
    price: 3400,
    requiresConsultation: false,
    isFeatured: true,
    badges: ["Ready to Ship", "Travel-Friendly", "Lightweight"],
    goodFor: [
      "Frequent travelers and commuters",
      "Users needing a foldable chair for transport",
      "Indoor and light outdoor use",
    ],
    notIdealFor: [
      "Heavy outdoor terrain",
      "Users needing tilt or recline systems",
    ],
    specs: [
      { label: "Weight Capacity", value: "300 lbs" },
      { label: "Max Speed", value: "3.69 mph" },
      { label: "Range", value: "Up to 8 miles" },
      { label: "Weight (no battery)", value: "33 lbs" },
      { label: "Battery", value: "10Ah Lithium (airline-approved)" },
      { label: "Frame", value: "Carbon fiber, foldable" },
    ],
    description:
      "The Pride Jazzy Ultra Light is a premium folding power wheelchair with a carbon fiber frame that folds in seconds. Airline-approved lithium battery and a total weight under 35 lbs make it the go-to travel chair.",
    crtRequired: false,
  },
  {
    slug: "golden-ally-gp303",
    name: "Golden Ally Power Wheelchair",
    brand: "Golden Technologies",
    category: "power-wheelchairs",
    categoryLabel: "Power Wheelchairs",
    tagline: "Smart folding powerchair with app control and pneumatic tires",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop",
    priceRange: "$4,090",
    price: 4090,
    requiresConsultation: false,
    isFeatured: true,
    badges: ["Ready to Ship", "Insurance Eligible"],
    goodFor: [
      "Indoor and outdoor community use",
      "Users who want smart device connectivity",
      "Active users needing outdoor-ready tires",
    ],
    notIdealFor: [
      "Very tight indoor spaces",
      "Users requiring complex seating systems",
    ],
    specs: [
      { label: "Weight Capacity", value: "330 lbs" },
      { label: "Max Speed", value: "5 mph" },
      { label: "Range", value: "9 miles" },
      { label: "Drive Wheels", value: "10\" pneumatic" },
      { label: "Battery", value: "12Ah Lithium (airline-approved)" },
      { label: "App Control", value: "Smart Control Mobile App" },
    ],
    description:
      "The Golden Ally combines a foldable, portable design with the durability of pneumatic rear tires for outdoor performance. USB charging ports, LED lighting, and Smart App control set it apart as a tech-forward daily driver.",
    crtRequired: false,
  },

  // ─── Direct-purchase scooters ────────────────────────────────────────────
  {
    slug: "pride-gogo-carbon-sc25",
    name: "Pride Go-Go Carbon 4-Wheel Scooter",
    brand: "Pride Mobility",
    category: "power-scooters",
    categoryLabel: "Power Scooters",
    tagline: "Foldable carbon fiber travel scooter — 35 lbs, airline-ready",
    image: "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?w=600&q=80&fit=crop",
    priceRange: "$3,720",
    price: 3720,
    requiresConsultation: false,
    badges: ["Ready to Ship", "Travel-Friendly", "Lightweight"],
    goodFor: [
      "Frequent travelers and airport navigation",
      "Users needing a lightweight fold-and-go scooter",
      "Everyday errands and community outings",
    ],
    notIdealFor: [
      "Primary full-time mobility device",
      "Rough outdoor terrain or steep grades",
    ],
    specs: [
      { label: "Weight Capacity", value: "300 lbs" },
      { label: "Total Weight", value: "39 lbs (with battery)" },
      { label: "Max Speed", value: "3.7 mph" },
      { label: "Range", value: "Up to 10 miles" },
      { label: "Battery", value: "24V 12Ah Lithium (airline-approved)" },
      { label: "Frame", value: "Carbon fiber, foldable" },
    ],
    description:
      "The Go-Go Carbon is Pride's flagship travel scooter — an ultra-light carbon fiber body that folds down without tools, weighing just 35 lbs without the battery. Perfect for air travel and active lifestyles.",
    crtRequired: false,
  },
  {
    slug: "amylior-gs100-scooter",
    name: "Amylior GS 100 Travel Scooter",
    brand: "Amylior",
    category: "power-scooters",
    categoryLabel: "Power Scooters",
    tagline: "Compact 4-wheel travel scooter with S-Drive controls",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80&fit=crop",
    priceRange: "$1,895",
    price: 1895,
    requiresConsultation: false,
    badges: ["Ready to Ship"],
    goodFor: [
      "Short to medium distance community trips",
      "Users who need quick-release disassembly",
      "Indoor malls, medical appointments, errands",
    ],
    notIdealFor: [
      "Rough outdoor terrain",
      "Users requiring high-speed travel",
    ],
    specs: [
      { label: "Weight Capacity", value: "300 lbs" },
      { label: "Max Speed", value: "4.4 mph" },
      { label: "Turning Radius", value: "39\"" },
      { label: "Tires", value: "4 × 8\" solid" },
      { label: "Battery", value: "2 × 22Ah sealed lead-acid" },
      { label: "Controls", value: "S-Drive electronic system" },
    ],
    description:
      "The Amylior GS 100 is a well-rounded compact travel scooter with quick-release disassembly for easy loading. Its S-Drive controller and LED lighting make it a capable everyday companion for moderate mobility needs.",
    crtRequired: false,
  },

  // ─── Direct-purchase manual wheelchairs ──────────────────────────────────
  {
    slug: "drive-blue-streak",
    name: "Drive Blue Streak Wheelchair",
    brand: "Drive Medical",
    category: "manual-wheelchairs",
    categoryLabel: "Manual Wheelchairs",
    tagline: "Sturdy, affordable manual wheelchair with flip-back arms",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80&fit=crop",
    priceRange: "$425",
    price: 425,
    requiresConsultation: false,
    badges: ["Ready to Ship"],
    goodFor: [
      "Home and facility use",
      "Part-time manual wheelchair users",
      "Caregivers pushing a loved one",
    ],
    notIdealFor: [
      "Active self-propellers needing a lightweight chair",
      "Bariatric users over 250 lbs",
    ],
    specs: [
      { label: "Weight Capacity", value: "250 lbs" },
      { label: "Product Weight", value: "41 lbs" },
      { label: "Seat Depth", value: "16\"" },
      { label: "Folded Width", value: "12.5\"" },
      { label: "Tires", value: "Solid rubber" },
    ],
    description:
      "The Drive Blue Streak is a reliable everyday manual wheelchair at an accessible price. Flip-back desk-length armrests, push-to-lock wheel locks, and solid rubber tires make it a practical choice for daily home use.",
    crtRequired: false,
  },

  // ─── Direct-purchase rollators / walkers ─────────────────────────────────
  {
    slug: "humancare-nexus3-rollator",
    name: "HumanCare neXus 3 Rollator",
    brand: "HumanCare",
    category: "walkers-rollators",
    categoryLabel: "Walkers & Rollators",
    tagline: "Cable-free push-to-lock rollator — indoor and outdoor",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=600&q=80&fit=crop",
    priceRange: "$398",
    price: 398,
    requiresConsultation: false,
    badges: ["Ready to Ship", "Lightweight"],
    goodFor: [
      "Active older adults needing stability support",
      "Indoor and outdoor use on varied surfaces",
      "Users who need occasional seated rest",
    ],
    notIdealFor: [
      "Users needing full weight-bearing support",
      "Very rough terrain or trails",
    ],
    specs: [
      { label: "Weight Capacity", value: "250 lbs" },
      { label: "Product Weight", value: "13 lbs" },
      { label: "Wheel Size", value: "8\"" },
      { label: "Brake System", value: "Push-to-lock (cable-free)" },
      { label: "Seat Size", value: "16\" × 9.5\"" },
    ],
    description:
      "The HumanCare neXus 3 stands out with its cable-free push-to-lock brake system — fewer parts to break, easier to use. Cross-folds flat for transport and storage. Available in Super Low, Low, and Standard seat heights.",
    crtRequired: false,
  },
  {
    slug: "bios-deluxe-walker",
    name: "BIOS Deluxe Folding Walker with Wheels",
    brand: "BIOS Medical",
    category: "walkers-rollators",
    categoryLabel: "Walkers & Rollators",
    tagline: "Lightweight 2-wheel folding walker for indoor and outdoor support",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=600&q=80&fit=crop",
    priceRange: "$110",
    price: 110,
    requiresConsultation: false,
    badges: ["Ready to Ship"],
    goodFor: [
      "Users needing light gait support",
      "Post-surgery or rehabilitation walking aid",
      "Indoor home use",
    ],
    notIdealFor: [
      "Users needing full rollator with seat",
      "Outdoor use on uneven surfaces",
    ],
    specs: [
      { label: "Wheels", value: "2-wheel front" },
      { label: "Folds", value: "Yes — flat fold" },
      { label: "Legs", value: "Height-adjustable" },
    ],
    description:
      "The BIOS Deluxe Folding Walker is a simple, reliable walking aid with two front wheels for smooth gliding. Folds flat for easy storage. Ideal as a post-surgical recovery aid or light daily support.",
    crtRequired: false,
  },

  // ─── Cushions & Seating ──────────────────────────────────────────────────
  {
    slug: "drive-balanced-aire-cushion",
    name: "Drive Balanced Aire Cushion",
    brand: "Drive Medical",
    category: "seating-positioning",
    categoryLabel: "Seating & Positioning",
    tagline: "Adjustable air-cell cushion for pressure injury prevention",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80&fit=crop",
    priceRange: "$395 – $445",
    price: 395,
    requiresConsultation: false,
    badges: ["Pressure Relief", "Insurance Eligible"],
    goodFor: [
      "Users at risk for pressure injuries",
      "Long daily sitting time (4+ hours)",
      "Post-surgical recovery",
      "Users with sensation loss",
    ],
    notIdealFor: [
      "Users needing lateral posture support",
      "Bariatric users over 500 lbs",
    ],
    specs: [
      { label: "Weight Capacity", value: "500 lbs" },
      { label: "Air Cells", value: "Flexible, interconnected, independent" },
      { label: "Cover", value: "Fluid-resistant stretch top, non-skid bottom" },
      { label: "Heights", value: "2\" or 4\"" },
      { label: "Inflation", value: "Hand pump included" },
    ],
    description:
      "The Drive Balanced Aire uses interconnected air cells to deeply immerse and offload pressure from bony prominences. Adjustable by hand pump, washable cover, and includes a repair kit. Meets flammability standard TB117.",
    crtRequired: false,
  },
  {
    slug: "bios-coccyx-gel-cushion",
    name: "BIOS Coccyx Gel Cushion",
    brand: "BIOS Medical",
    category: "seating-positioning",
    categoryLabel: "Seating & Positioning",
    tagline: "Coccyx cut-out design with high-density foam and gel insert",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80&fit=crop",
    priceRange: "$79",
    price: 79,
    requiresConsultation: false,
    badges: ["Pressure Relief", "Ready to Ship"],
    goodFor: [
      "Office or wheelchair users with tailbone discomfort",
      "Post-coccyx surgery recovery",
      "Extended sitting on firm surfaces",
    ],
    notIdealFor: [
      "Users needing clinical-grade pressure mapping",
      "Full-time skin protection for wound prevention",
    ],
    specs: [
      { label: "Dimensions", value: "16\" × 18\" × 3\"" },
      { label: "Core", value: "High-density foam with gel pad insert" },
      { label: "Cover", value: "Navy fleece top, machine washable" },
      { label: "Coccyx Cut-out", value: "Yes" },
    ],
    description:
      "The BIOS Coccyx Gel Cushion relieves tailbone and lower spine pressure with a targeted coccyx cut-out and gel insert. Machine-washable fleece cover included. A practical everyday comfort upgrade for any seat.",
    crtRequired: false,
  },

  // ─── Transfer Aids ───────────────────────────────────────────────────────
  {
    slug: "drive-sliding-transfer-bench",
    name: "Drive Folding Sliding Transfer Bench",
    brand: "Drive Medical",
    category: "transfer-aids",
    categoryLabel: "Transfer Aids",
    tagline: "Sliding seat transfer bench for safe bathtub entry and exit",
    image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=600&q=80&fit=crop",
    priceRange: "$320",
    price: 320,
    requiresConsultation: false,
    badges: ["Ready to Ship"],
    goodFor: [
      "Users who cannot step over a bathtub edge",
      "Caregivers assisting with bathing transfers",
      "Post-surgery bathing safety",
    ],
    notIdealFor: [
      "Walk-in shower stalls",
      "Bariatric users over 300 lbs",
    ],
    specs: [
      { label: "Weight Capacity", value: "300 lbs" },
      { label: "Seat Dimensions", value: "22.5\" W × 18.5\" D" },
      { label: "Height Range", value: "21\" – 25\" adjustable" },
      { label: "Sliding Direction", value: "Left and right" },
      { label: "Suction Cups", value: "Extra-large, non-slip" },
    ],
    description:
      "The Drive Folding Sliding Transfer Bench lets users transfer into and out of the bathtub while remaining seated. Reversible backrest, locking slide mechanism, suction cups, safety belt, and removable soap dish included. Folds flat for storage.",
    crtRequired: false,
  },
];

export interface QuizStep {
  id: string;
  question: string;
  subtitle?: string;
  options: {
    id: string;
    label: string;
    description?: string;
    icon?: string;
    tags?: string[];
  }[];
}

export const quizSteps: QuizStep[] = [
  {
    id: "who",
    question: "Who are you looking for equipment for?",
    subtitle: "This helps us tailor our recommendations and next steps.",
    options: [
      {
        id: "myself",
        label: "For myself",
        description: "I'm looking for equipment for my own mobility needs",
        icon: "user",
      },
      {
        id: "family",
        label: "For a family member or loved one",
        description: "I'm a caregiver helping someone I care for",
        icon: "heart",
      },
      {
        id: "patient",
        label: "For my patient",
        description: "I'm an OT, PT, or other clinician",
        icon: "stethoscope",
      },
    ],
  },
  {
    id: "need",
    question: "What is the primary mobility challenge?",
    subtitle: "Select the one that best describes the main need.",
    options: [
      {
        id: "indoor-mobility",
        label: "Getting around indoors",
        description: "Navigating home, apartment, or care facility",
        tags: ["power-wheelchairs", "manual-wheelchairs", "walkers-rollators"],
      },
      {
        id: "community-mobility",
        label: "Getting around in the community",
        description: "Errands, appointments, outdoor activities",
        tags: ["power-wheelchairs", "power-scooters", "manual-wheelchairs"],
      },
      {
        id: "seating-comfort",
        label: "Seating, comfort & pressure relief",
        description: "Prolonged sitting, positioning, or skin integrity",
        tags: ["seating-positioning", "power-wheelchairs"],
      },
      {
        id: "transfers",
        label: "Getting in/out of bed, car, or chair",
        description: "Safe transfers with or without assistance",
        tags: ["transfer-aids"],
      },
      {
        id: "multiple",
        label: "Multiple needs",
        description: "Complex situation — I'd rather talk to an expert",
        tags: ["power-wheelchairs", "seating-positioning"],
      },
    ],
  },
  {
    id: "environment",
    question: "Where will the equipment be used most?",
    options: [
      {
        id: "home",
        label: "Primarily at home",
        description: "Mostly indoor use",
      },
      {
        id: "community",
        label: "Primarily in the community",
        description: "Outdoors, errands, travel",
      },
      {
        id: "both",
        label: "Both — home and community",
        description: "Needs to work in all environments",
      },
    ],
  },
  {
    id: "insurance",
    question: "Do you have insurance coverage?",
    subtitle: "Complex rehab equipment is often covered. We handle the paperwork.",
    options: [
      {
        id: "medicare",
        label: "Medicare or Medicaid",
        description: "Many of our products are covered",
      },
      {
        id: "private",
        label: "Private / employer insurance",
        description: "Coverage varies by plan — we'll verify",
      },
      {
        id: "self-pay",
        label: "Self-pay",
        description: "Paying out of pocket",
      },
      {
        id: "unsure",
        label: "Not sure",
        description: "We can help you figure this out",
      },
    ],
  },
];

export const categoryRecommendations: Record<
  string,
  { categories: ProductCategory[]; headline: string; note: string }
> = {
  "indoor-mobility-home": {
    categories: ["power-wheelchairs", "manual-wheelchairs", "walkers-rollators"],
    headline: "Indoor Mobility Solutions",
    note: "For home use, we focus on maneuverability and seating comfort.",
  },
  "community-mobility-community": {
    categories: ["power-wheelchairs", "power-scooters"],
    headline: "Community Mobility Solutions",
    note: "We'll match you to equipment that handles outdoor terrain reliably.",
  },
  "seating-comfort-both": {
    categories: ["seating-positioning", "power-wheelchairs"],
    headline: "Seating & Positioning Systems",
    note: "Proper seating evaluation prevents long-term complications.",
  },
  default: {
    categories: ["power-wheelchairs", "manual-wheelchairs", "seating-positioning"],
    headline: "Recommended for You",
    note: "Based on your answers, here are the most relevant product categories.",
  },
};

export const testimonials = [
  {
    quote:
      "The evaluation process was thorough and clearly explained. The seating and positioning recommendations improved my comfort and daily function significantly.",
    author: "Client Family Member",
    role: "Seating & positioning consult",
    rating: 5,
  },
  {
    quote:
      "Responsive service and reliable follow-through. The team coordinated well with our clinician and handled the insurance details professionally.",
    author: "Referring OT",
    role: "OT/PT collaboration",
    rating: 5,
  },
  {
    quote:
      "Clear guidance on power mobility options and setup. Programming and fit were addressed carefully — I felt heard throughout the process.",
    author: "Client",
    role: "Powerchair setup",
    rating: 5,
  },
  {
    quote:
      "As a physical therapist, I appreciate their clinical approach. They understand seating and positioning at a level most vendors don't.",
    author: "Physical Therapist",
    role: "Referral partner",
    rating: 5,
  },
];

export const trustStats = [
  { value: "22+", label: "Years of experience" },
  { value: "5,000+", label: "Clients served" },
  { value: "98%", label: "Insurance verification rate" },
  { value: "48hr", label: "Average quote turnaround" },
];

export const trackingSteps = [
  {
    id: "referral",
    label: "Referral Received",
    description: "We've received your request and assigned a specialist.",
  },
  {
    id: "insurance",
    label: "Insurance Verification",
    description: "Verifying your coverage and benefits with your insurance provider.",
  },
  {
    id: "evaluation",
    label: "Clinical Evaluation",
    description: "Your specialist is reviewing the clinical documentation.",
  },
  {
    id: "order",
    label: "Equipment Ordered",
    description: "Your custom equipment has been ordered from the manufacturer.",
  },
  {
    id: "build",
    label: "Custom Build & QC",
    description: "The equipment is being built and quality-checked to your specifications.",
  },
  {
    id: "delivery",
    label: "Delivery & Setup",
    description: "Your equipment is ready for delivery and in-person fitting.",
  },
];
