export interface Service {
  name: string;
  description: string;
  price: string;
  duration: string;
  bestseller?: boolean;
}

export interface ServiceCategory {
  slug: string;
  label: string;
  tagline: string;
  icon: string;
  services: Service[];
}

export const WHATSAPP_BASE =
  "https://wa.me/919845292411?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Chetana%27s%20Beauty%20Lounge%20for%20";

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "hair-care",
    label: "Hair Care",
    tagline: "Healthy, gorgeous hair starts here",
    icon: "✂️",
    services: [
      {
        name: "Hair Cut & Style",
        description: "Precision cut tailored to your face shape, finished with a blowout.",
        price: "₹400",
        duration: "45 min",
        bestseller: true,
      },
      {
        name: "Blowout & Style",
        description: "Professional blow-dry with round brushing for salon-smooth results.",
        price: "₹500",
        duration: "45 min",
        bestseller: true,
      },
      {
        name: "Deep Conditioning Treatment",
        description: "Intensive moisture mask to restore shine and softness to dry hair.",
        price: "₹600",
        duration: "60 min",
      },
      {
        name: "Global Hair Colour",
        description: "Full head single-process colour using premium, ammonia-free products.",
        price: "₹1,200",
        duration: "90 min",
        bestseller: true,
      },
      {
        name: "Highlights (Partial)",
        description: "Sun-kissed highlights framing the face for a natural, radiant look.",
        price: "₹1,800",
        duration: "2 hrs",
      },
      {
        name: "Keratin Smoothing Treatment",
        description: "Banish frizz for up to 3 months with a professional keratin treatment.",
        price: "₹3,500",
        duration: "2.5 hrs",
      },
    ],
  },
  {
    slug: "body-care",
    label: "Body Care",
    tagline: "Relax, refresh, and glow from head to toe",
    icon: "🌿",
    services: [
      {
        name: "Full Body Massage",
        description: "Relaxing Swedish massage to melt away tension and improve circulation.",
        price: "₹1,500",
        duration: "60 min",
        bestseller: true,
      },
      {
        name: "Back & Shoulder Massage",
        description: "Targeted deep-tissue relief for aches and stress in the upper body.",
        price: "₹800",
        duration: "30 min",
      },
      {
        name: "Body Scrub",
        description: "Exfoliating scrub to remove dead skin and leave you silky smooth.",
        price: "₹1,200",
        duration: "60 min",
        bestseller: true,
      },
      {
        name: "Full Body Waxing",
        description: "Smooth, long-lasting hair removal using soft and hard wax techniques.",
        price: "₹1,800",
        duration: "90 min",
      },
      {
        name: "Half Leg Waxing",
        description: "Quick, precise waxing for knees-down smoothness.",
        price: "₹400",
        duration: "25 min",
        bestseller: true,
      },
      {
        name: "Eyebrow Threading",
        description: "Expert threading for perfectly shaped brows that frame your face.",
        price: "₹50",
        duration: "10 min",
        bestseller: true,
      },
    ],
  },
  {
    slug: "skin-care",
    label: "Skin Care",
    tagline: "Reveal your most radiant skin",
    icon: "✨",
    services: [
      {
        name: "Basic Facial",
        description: "Cleanse, exfoliate, and hydrate for an instant glow and smoother texture.",
        price: "₹800",
        duration: "60 min",
        bestseller: true,
      },
      {
        name: "Gold Facial",
        description: "Luxury 24K gold-infused facial to firm, brighten, and rejuvenate skin.",
        price: "₹1,500",
        duration: "75 min",
        bestseller: true,
      },
      {
        name: "Pearl Facial",
        description: "Pearl extract facial that adds luminosity and evens out skin tone.",
        price: "₹1,200",
        duration: "60 min",
      },
      {
        name: "Cleanup",
        description: "A quick but thorough deep cleanse with extraction and a brightening mask.",
        price: "₹400",
        duration: "30 min",
        bestseller: true,
      },
      {
        name: "D-Tan Pack",
        description: "Effective de-tanning treatment to reverse sun damage and restore fairness.",
        price: "₹600",
        duration: "45 min",
      },
      {
        name: "Anti-Acne Treatment",
        description: "Targeted treatment to calm breakouts, reduce inflammation, and clear pores.",
        price: "₹1,000",
        duration: "60 min",
      },
    ],
  },
  {
    slug: "bridal",
    label: "Bridal Services",
    tagline: "Look breathtaking on your most special day",
    icon: "👰",
    services: [
      {
        name: "Bridal Makeup",
        description: "Full glam bridal look with airbrush foundation, eye artistry, and long-wear finish.",
        price: "₹8,000",
        duration: "3 hrs",
        bestseller: true,
      },
      {
        name: "Engagement Makeup",
        description: "Radiant, polished look for your engagement ceremony — sophisticated and photo-ready.",
        price: "₹4,500",
        duration: "2 hrs",
        bestseller: true,
      },
      {
        name: "Reception Look",
        description: "Elegant evening glam with dramatic eyes and a flawless base for your reception.",
        price: "₹5,500",
        duration: "2.5 hrs",
      },
      {
        name: "Pre-Bridal Package",
        description: "Multi-session prep covering facials, waxing, threading & body treatments over 4 weeks.",
        price: "₹12,000",
        duration: "4 sessions",
        bestseller: true,
      },
      {
        name: "Mehendi Application",
        description: "Intricate bridal mehendi designs using fresh, aromatic henna.",
        price: "₹2,500",
        duration: "2 hrs",
      },
      {
        name: "Saree Draping",
        description: "Expert draping in your preferred regional style — perfectly pleated every time.",
        price: "₹800",
        duration: "30 min",
      },
    ],
  },
  {
    slug: "nails",
    label: "Nails",
    tagline: "From classic to creative — nails that wow",
    icon: "💅",
    services: [
      {
        name: "Basic Manicure",
        description: "File, buff, cuticle care, and a classic polish of your choice.",
        price: "₹300",
        duration: "30 min",
        bestseller: true,
      },
      {
        name: "Basic Pedicure",
        description: "Soak, scrub, file, and polish for happy, soft feet.",
        price: "₹400",
        duration: "45 min",
        bestseller: true,
      },
      {
        name: "French Manicure",
        description: "Timeless white-tip French finish for an elegant, clean look.",
        price: "₹500",
        duration: "45 min",
      },
      {
        name: "Gel Nails",
        description: "Long-lasting gel colour that stays chip-free for up to 2 weeks.",
        price: "₹800",
        duration: "60 min",
        bestseller: true,
      },
      {
        name: "Nail Art (per nail)",
        description: "Custom designs — florals, ombre, stones, foils, and more.",
        price: "₹50/nail",
        duration: "Varies",
      },
      {
        name: "Acrylic Extensions",
        description: "Strong, sculpted acrylic extensions in any length and shape you desire.",
        price: "₹1,200",
        duration: "90 min",
      },
    ],
  },
  {
    slug: "for-kids",
    label: "For Kids",
    tagline: "Fun, gentle treatments designed for little ones",
    icon: "🎀",
    services: [
      {
        name: "Kids Hair Cut (Under 12)",
        description: "A fun, stress-free haircut in a child-friendly environment.",
        price: "₹200",
        duration: "20 min",
        bestseller: true,
      },
      {
        name: "Kids Hair Wash & Dry",
        description: "Gentle wash with kid-safe products, finished with a soft blowout.",
        price: "₹150",
        duration: "20 min",
      },
      {
        name: "Kids Hair Styling",
        description: "Braids, buns, curls — whatever style your little one wants for their special day.",
        price: "₹250",
        duration: "20 min",
        bestseller: true,
      },
      {
        name: "Kids Party Makeup",
        description: "Gentle, hypoallergenic makeup for a magical party-ready look.",
        price: "₹500",
        duration: "30 min",
        bestseller: true,
      },
      {
        name: "Kids Basic Manicure",
        description: "File, buff, and a fun pop of colour — safe and non-toxic polish only.",
        price: "₹150",
        duration: "20 min",
      },
      {
        name: "Kids Mehendi",
        description: "Simple, playful henna designs kids will love — using natural henna.",
        price: "₹200",
        duration: "20 min",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}
