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
  image: string;
  priceRange: string;
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
    image: "/products/permobil-m3.jpg",
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
    image: "/products/quickie-q50.jpg",
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
    image: "/products/tilite-aero.jpg",
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
    image: "/products/roho-cushion.jpg",
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
    image: "/products/pride-gogo.jpg",
    priceRange: "$1,200 – $1,800",
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
    image: "/products/drive-nitro.jpg",
    priceRange: "$180 – $240",
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
