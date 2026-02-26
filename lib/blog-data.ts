export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  author: string;
  authorTitle: string;
  authorInitials: string;
  authorColor: string;
  publishedAt: string; // ISO date string
  readTime: number; // minutes
  featured?: boolean;
  tags: string[];
  metaDescription: string;
  coverImage: string;
  coverAlt: string;
  content: BlogSection[];
}

export interface BlogSection {
  type: "paragraph" | "heading" | "subheading" | "list" | "tip" | "quote" | "cta";
  text?: string;
  items?: string[];
  author?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "bridal-makeup-tips-mangalore",
    title: "5 Bridal Makeup Tips from Our CIDESCO-Certified Artists in Mangalore",
    excerpt:
      "Your wedding day deserves flawless makeup that lasts from the morning ceremonies to the evening reception. Our CIDESCO-certified artists share their top secrets for brides in Mangalore.",
    category: "Bridal",
    categorySlug: "bridal",
    author: "Chetana Shetty",
    authorTitle: "CIDESCO Certified Beautician & Founder",
    authorInitials: "CS",
    authorColor: "#5f1e42",
    publishedAt: "2026-01-15",
    readTime: 6,
    featured: true,
    tags: [
      "bridal makeup Mangalore",
      "CIDESCO certified",
      "Tulu wedding makeup",
      "bridal tips",
      "wedding day beauty",
    ],
    metaDescription:
      "Expert bridal makeup tips from CIDESCO-certified artists at Chetana's Beauty in Mangalore. Learn long-lasting techniques for Tulu, Catholic & Hindu weddings.",
    coverImage:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    coverAlt:
      "Bridal makeup artist applying elegant makeup to a bride on her wedding day",
    content: [
      {
        type: "paragraph",
        text: "A bride's wedding day is one of the most photographed moments of her life — and great makeup needs to hold up through morning rituals, afternoon ceremonies, evening receptions, and everything in between. As CIDESCO-certified artists who have worked with hundreds of brides across Tulu, Catholic, and Hindu weddings in Mangalore, we have refined our techniques to ensure your look stays fresh from sunrise to midnight.",
      },
      {
        type: "heading",
        text: "1. Prep Your Skin at Least 30 Days Before",
      },
      {
        type: "paragraph",
        text: "The single biggest factor in how your makeup looks on the day is your skin's texture and hydration going in. Start a consistent pre-bridal skin routine at least a month before — ideally, book our Pre-Bridal Package that includes targeted facials, de-tanning, and pigmentation treatments. Even skin tone means less foundation needed, which means more natural-looking photos.",
      },
      {
        type: "heading",
        text: "2. Use a Primer Matched to Your Skin Type",
      },
      {
        type: "paragraph",
        text: "Mangalore's coastal humidity is the enemy of longevity. Primer is non-negotiable. For oily skin, use a mattifying, pore-filling primer. For dry skin, choose a hydrating, luminous base. For combination skin, apply mattifying primer on the T-zone and hydrating primer on the cheeks. This creates the 'grip' that keeps foundation in place through a full ceremony day.",
      },
      {
        type: "heading",
        text: "3. Layer Foundation Thin and Build Coverage",
      },
      {
        type: "paragraph",
        text: "Amateur mistake: applying one thick layer of foundation. Professional technique: applying two to three thin, buildable layers, setting each with a light dusting of translucent powder before adding the next. This prevents the cakey, mask-like finish that looks unflattering in close-up photography.",
      },
      {
        type: "heading",
        text: "4. Set Everything with a Long-Wear Setting Spray",
      },
      {
        type: "paragraph",
        text: "After your complete look is done — foundation, contouring, eye makeup, lips — seal it all with a professional-grade setting spray. Hold the bottle 30–40 cm away and mist in a figure-eight motion. This melds all product layers together and creates a water-resistant shield against tears, sweat, and Mangalore's sea breeze.",
      },
      {
        type: "heading",
        text: "5. Touch-Up Kit: What to Carry in Your Bridal Bag",
      },
      {
        type: "list",
        items: [
          "Blotting papers (not powder compact — it disturbs professional work)",
          "Travel-size setting spray for mid-day refresh",
          "Your exact lip colour for reapplication after meals",
          "A small concealer that matches your foundation shade",
          "Cotton swabs for fixing smudges without disturbing eye makeup",
        ],
      },
      {
        type: "tip",
        text: "Do a full bridal makeup trial at least 2 weeks before your wedding. This gives time to adjust anything — shade, style, lash type — without the pressure of the actual day.",
      },
      {
        type: "quote",
        text: "A bride should feel like the most beautiful version of herself, not a different person. Our goal is always enhancement, not transformation.",
        author: "Chetana Shetty, Founder",
      },
      {
        type: "cta",
        text: "Book your bridal consultation on WhatsApp and let us create your perfect wedding day look.",
      },
    ],
  },

  {
    slug: "skin-care-routine-mangalore-humid-climate",
    title: "The Complete Skin Care Routine for Mangalore's Humid Climate",
    excerpt:
      "Living by the sea means your skin faces unique challenges — excess humidity, sun exposure, and salt air. Here's the exact routine our skin specialists recommend for Mangalorean skin.",
    category: "Skin Care",
    categorySlug: "skin-care",
    author: "Divya Rai",
    authorTitle: "Senior Skin Care Specialist",
    authorInitials: "DR",
    authorColor: "#b8860b",
    publishedAt: "2026-01-28",
    readTime: 7,
    featured: false,
    tags: [
      "skin care Mangalore",
      "humid climate skin routine",
      "tan removal",
      "pigmentation treatment",
      "oily skin Mangaluru",
    ],
    metaDescription:
      "A dermatologist-approved skin care routine for Mangalore's humid coastal climate. Tips for oily skin, tan removal, and pigmentation from Chetana's Beauty experts.",
    coverImage:
      "https://images.unsplash.com/photo-1556228578-8e89c23a1b09?auto=format&fit=crop&w=1200&q=80",
    coverAlt:
      "Woman applying skin care serum as part of a morning beauty routine",
    content: [
      {
        type: "paragraph",
        text: "Mangalore sits at the edge of the Arabian Sea — beautiful, yes, but the combination of 70–90% year-round humidity, strong UV radiation, and salt air creates very specific skin challenges. Standard skin care advice from international brands or Delhi-based influencers rarely applies here. We have treated thousands of Mangalorean clients and developed a locally-tuned approach that actually works.",
      },
      {
        type: "heading",
        text: "Morning Routine (The 5-Step Coastal Protocol)",
      },
      {
        type: "subheading",
        text: "Step 1: Gentle Gel Cleanser",
      },
      {
        type: "paragraph",
        text: "Avoid harsh foaming cleansers that strip skin of natural oils. In high humidity, your skin will overcompensate by producing even more oil. A gentle, pH-balanced gel cleanser cleans without disrupting the skin barrier.",
      },
      {
        type: "subheading",
        text: "Step 2: Vitamin C Serum (Non-Negotiable)",
      },
      {
        type: "paragraph",
        text: "UV exposure in coastal Karnataka is intense year-round. A Vitamin C serum in the morning neutralises free radicals from sun damage, brightens existing pigmentation, and prepares skin to accept sunscreen better. Apply 3–4 drops and wait 60 seconds before the next step.",
      },
      {
        type: "subheading",
        text: "Step 3: Lightweight Moisturiser",
      },
      {
        type: "paragraph",
        text: "Many Mangalorean clients skip moisturiser thinking 'my skin is already oily from the humidity.' This is the most common mistake we see. Humidity is external moisture — it does not replace your skin's internal hydration. Use a water-based, oil-free gel moisturiser. Hydrated skin looks plumper, has fewer pores, and holds makeup better.",
      },
      {
        type: "subheading",
        text: "Step 4: SPF 50+ Sunscreen (Every Single Day)",
      },
      {
        type: "paragraph",
        text: "Mangalore receives direct sunlight with a UV Index of 8–11 for most of the year. SPF is not optional. Use a broad-spectrum SPF 50+ that is labelled non-comedogenic (won't clog pores). Apply generously — most people apply 20–30% of the required amount and wonder why they're still getting tanned.",
      },
      {
        type: "heading",
        text: "Evening Routine: Repair and Replenish",
      },
      {
        type: "list",
        items: [
          "Double cleanse: Oil cleanser first, then gentle gel cleanser to remove SPF and makeup fully",
          "Exfoliate 2x per week with a gentle AHA toner (glycolic or lactic acid) — never physical scrubs",
          "Niacinamide serum for pore reduction and oil control",
          "Retinol (start with 0.025% and build up) for cell turnover and pigmentation correction",
          "Rich night cream — your skin repairs itself while you sleep, give it the tools",
        ],
      },
      {
        type: "heading",
        text: "Salon Treatments That Supercharge Your Home Routine",
      },
      {
        type: "paragraph",
        text: "Home care is maintenance. Professional treatments are transformation. For coastal skin, we recommend the following schedule: a hydrating facial once a month during pre-monsoon and post-monsoon months, tan removal treatment after major beach or outdoor events, and a pigmentation-targeted treatment (our Gold Glow Facial or Meso-Brightening Facial) once per quarter.",
      },
      {
        type: "tip",
        text: "Never use physical scrubs on Mangalorean skin — the humid climate already causes micro-inflammation. Chemical exfoliants (AHAs/BHAs) are gentler and significantly more effective.",
      },
      {
        type: "cta",
        text: "Book a skin consultation to get a personalised routine designed for your skin type and our local climate.",
      },
    ],
  },

  {
    slug: "keratin-treatment-vs-straightening",
    title: "Keratin Treatment vs Hair Straightening: Which Is Right for You?",
    excerpt:
      "Two of our most-requested services — but they work very differently and suit different hair types. Our senior hair stylists break down everything you need to know before booking.",
    category: "Hair Care",
    categorySlug: "hair-care",
    author: "Priya Nayak",
    authorTitle: "Senior Hair Stylist & Colouring Specialist",
    authorInitials: "PN",
    authorColor: "#8b4b6b",
    publishedAt: "2026-02-05",
    readTime: 8,
    featured: false,
    tags: [
      "keratin treatment Mangalore",
      "hair straightening Mangaluru",
      "frizzy hair Mangalore",
      "hair smoothening",
      "best hair salon Mangalore",
    ],
    metaDescription:
      "Keratin treatment vs hair straightening — which should you choose? Chetana's Beauty hair specialists explain the difference, cost, longevity, and which suits your hair type.",
    coverImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    coverAlt:
      "Hair stylist working on smooth, glossy hair in a professional salon setting",
    content: [
      {
        type: "paragraph",
        text: "We get asked this question every single week: 'Should I get a keratin treatment or straightening?' Both aim to tame frizz and create smoother hair, but they work through completely different mechanisms, last different amounts of time, and are suited to different hair types and lifestyles. Here is everything you need to know to make the right decision.",
      },
      {
        type: "heading",
        text: "How Each Treatment Works",
      },
      {
        type: "subheading",
        text: "Keratin Treatment (Smoothening)",
      },
      {
        type: "paragraph",
        text: "Keratin is a protein naturally found in your hair. Over time, humidity, heat styling, and chemical processing break down this protein, causing frizz and dull texture. A keratin treatment replenishes this lost protein by coating each hair strand with a keratin-rich formula that is then heat-sealed in. It does not change your hair's natural bond structure — it works with your hair's existing pattern, just smoother and more manageable.",
      },
      {
        type: "subheading",
        text: "Chemical Straightening (Relaxer/Rebonding)",
      },
      {
        type: "paragraph",
        text: "Chemical straightening (rebonding) works by breaking the natural disulfide bonds in your hair using a strong alkaline chemical, then restructuring them in a straight position. This permanently alters your hair's natural structure. The result is pin-straight hair — but the process is more intense, and the long-term health impact needs careful consideration.",
      },
      {
        type: "heading",
        text: "Head-to-Head Comparison",
      },
      {
        type: "list",
        items: [
          "Longevity: Keratin lasts 3–5 months | Rebonding lasts until hair grows out (permanent at treated length)",
          "Result: Keratin = smooth, frizz-free with natural movement | Rebonding = poker-straight, no movement",
          "Hair health: Keratin strengthens hair | Rebonding weakens the hair shaft over time",
          "Suitability for Mangalore: Keratin handles humidity very well | Rebonding can revert in extreme humidity",
          "Maintenance: Keratin requires sulphate-free shampoo | Rebonded hair requires more intensive conditioning",
          "Cost: Keratin is typically more affordable | Rebonding costs more and needs protein treatments",
        ],
      },
      {
        type: "heading",
        text: "Who Should Choose Keratin?",
      },
      {
        type: "paragraph",
        text: "Keratin is ideal for you if: your hair is naturally wavy or mildly curly and you want to reduce frizz without losing all texture; you colour or bleach your hair regularly (keratin is safe for coloured hair, rebonding is not); you want a treatment you can repeat every few months; or you live an active lifestyle and don't want to avoid water and sweat for 3 days post-treatment.",
      },
      {
        type: "heading",
        text: "Who Should Choose Rebonding?",
      },
      {
        type: "paragraph",
        text: "Rebonding may suit you if: your hair is very coarse or tightly curly and you genuinely want completely straight hair; you are willing to commit to the maintenance it requires; your hair has not been chemically processed recently; and you understand this is a permanent change that needs growing out rather than fading.",
      },
      {
        type: "tip",
        text: "In Mangalore's humidity, keratin consistently outperforms rebonding for long-term results. Rebonded hair is more prone to reverting at the roots in high humidity — something our clients report frequently after monsoon season.",
      },
      {
        type: "quote",
        text: "We always tell clients: tell us your lifestyle, not just what you want the hair to look like. The best treatment is the one that works for how you actually live.",
        author: "Priya Nayak, Senior Hair Stylist",
      },
      {
        type: "cta",
        text: "Not sure which is right for your hair? Chat with our hair specialists on WhatsApp for a free consultation before booking.",
      },
    ],
  },

  {
    slug: "pre-bridal-packages-what-to-book-and-when",
    title: "Pre-Bridal Packages: What to Book and When (Your Complete Timeline)",
    excerpt:
      "Most brides start their pre-bridal prep too late. With the right timeline, you can walk into your wedding with your best skin, hair, and confidence. Here is the exact schedule our bridal team recommends.",
    category: "Bridal",
    categorySlug: "bridal",
    author: "Chetana Shetty",
    authorTitle: "CIDESCO Certified Beautician & Founder",
    authorInitials: "CS",
    authorColor: "#5f1e42",
    publishedAt: "2026-02-12",
    readTime: 7,
    featured: false,
    tags: [
      "pre-bridal package Mangalore",
      "bridal skin care schedule",
      "wedding preparation Mangaluru",
      "bridal glow",
      "pre-wedding beauty routine",
    ],
    metaDescription:
      "Complete pre-bridal beauty timeline for brides in Mangalore. When to book facials, hair treatments, waxing, and trial sessions at Chetana's Beauty for your best wedding look.",
    coverImage:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80",
    coverAlt:
      "Bride in a beautiful white dress preparing for her wedding ceremony",
    content: [
      {
        type: "paragraph",
        text: "Great bridal beauty is not about a single makeover session the morning of your wedding — it is the result of months of careful preparation. Over years of working with brides from across Mangalore, Udupi, and visiting NRI families from Dubai and the Gulf, we have developed a reliable month-by-month timeline that ensures every bride arrives at her ceremony looking truly radiant.",
      },
      {
        type: "heading",
        text: "6 Months Before: Start the Foundation",
      },
      {
        type: "list",
        items: [
          "Book your first consultation — discuss skin concerns (pigmentation, acne scars, uneven tone)",
          "Begin a customised facial series: deep cleansing + hydration facials monthly",
          "Start tan removal sessions if needed (results take 3–4 sittings)",
          "Book your bridal makeup artist — peak season dates (Oct–Feb) fill up fast in Mangalore",
          "Get a hair health assessment — begin protein treatments if hair is damaged",
        ],
      },
      {
        type: "heading",
        text: "3 Months Before: Intensify Treatments",
      },
      {
        type: "list",
        items: [
          "Chemical peels or brightening treatments for pigmentation and dark spots",
          "Begin threading / waxing on a regular schedule so your skin adapts",
          "Eyebrow shaping consultation — establish the shape you want before the wedding",
          "Hair spa and deep conditioning if you plan to colour your hair",
          "Discuss specific bridal look references — save inspo photos to your phone",
        ],
      },
      {
        type: "heading",
        text: "6–8 Weeks Before: The Critical Window",
      },
      {
        type: "paragraph",
        text: "This is the most important phase. Any major treatment needs at least 6 weeks before the wedding to allow skin to fully settle and for you to evaluate and adjust if needed.",
      },
      {
        type: "list",
        items: [
          "Full bridal makeup trial — test foundation shade, eye look, lip colour, and lash style",
          "Hair trial — decide on your bridal hairstyle (up-do, waves, flowers placement)",
          "Final keratin or smoothening treatment if desired",
          "Gold facial or premium brightening treatment",
          "Full body wax + underarm / bikini area treatments",
        ],
      },
      {
        type: "heading",
        text: "1 Week Before: Final Polish",
      },
      {
        type: "list",
        items: [
          "Hydrating facial only — nothing new or experimental this week",
          "Manicure and pedicure (with a gel top coat for longevity)",
          "Eyebrow threading touch-up",
          "Blowout or hair setting",
          "Rest well — sleep and hydration are real beauty treatments",
        ],
      },
      {
        type: "heading",
        text: "Day Before: Keep It Simple",
      },
      {
        type: "list",
        items: [
          "Light moisturising facial or gua sha massage — avoid any extractions",
          "Remove nail polish if doing fresh gel on the day",
          "Head massage for stress relief",
          "Sleep early — 8 hours of sleep is worth any face mask",
        ],
      },
      {
        type: "tip",
        text: "Never try a new product or treatment within 2 weeks of your wedding. If you react, you need time to recover. Everything experimental should be done by the 6-week mark.",
      },
      {
        type: "cta",
        text: "Book your pre-bridal consultation today — especially if your wedding is within 6 months. Premium slots for Mangalore wedding season fill up quickly.",
      },
    ],
  },

  {
    slug: "nail-art-trends-2025-mangalore",
    title: "Nail Art Trends for 2025: From Mangalorean Weddings to Everyday Chic",
    excerpt:
      "Nail art has evolved from a niche luxury to an everyday expression of personal style. Our nail specialists share the trends that are dominating salons in Mangalore this year.",
    category: "Nails",
    categorySlug: "nails",
    author: "Ananya Kamath",
    authorTitle: "Nail Art Specialist",
    authorInitials: "AK",
    authorColor: "#4a7a8b",
    publishedAt: "2026-02-20",
    readTime: 5,
    featured: false,
    tags: [
      "nail art Mangalore",
      "nail trends 2025",
      "nail extensions Mangaluru",
      "gel nails Mangalore",
      "bridal nails Mangalore",
    ],
    metaDescription:
      "Top nail art trends for 2025 from Chetana's Beauty nail specialists in Mangalore. From minimalist gel nails to elaborate bridal nail art for Tulu and Catholic weddings.",
    coverImage:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
    coverAlt:
      "Close-up of elegant nail art with intricate floral design in soft pink tones",
    content: [
      {
        type: "paragraph",
        text: "2025 is the year nail art finally moved beyond trendy Instagram aesthetics into genuinely wearable, expressive designs that work with real life — real jobs, real housework, real Mangalorean weather. Our nail art specialists have been tracking what clients are asking for, and we are seeing some genuinely beautiful trends emerge.",
      },
      {
        type: "heading",
        text: "Trend 1: Quiet Luxury Nails",
      },
      {
        type: "paragraph",
        text: "Neutral nudes, soft creams, and milky whites in long-lasting gel — this trend is everywhere and for good reason. Quiet luxury nails look polished and put-together without screaming for attention. They suit every skin tone when you find the right nude for your undertone (our specialists will help with this). These are our most-booked everyday nails right now.",
      },
      {
        type: "heading",
        text: "Trend 2: Gold and Rust Tones for Wedding Season",
      },
      {
        type: "paragraph",
        text: "For Mangalorean weddings — Tulu, Catholic, and Hindu alike — warm gold, rust orange, and deep terracotta are having a massive moment. These tones complement silk sarees, Kanjeevaram, and traditional jewellery beautifully. We are doing a lot of gold chrome gel with subtle nail art accents for brides and bridesmaids alike.",
      },
      {
        type: "heading",
        text: "Trend 3: Minimal French Variations",
      },
      {
        type: "paragraph",
        text: "The classic French manicure is back, but reinvented. Coloured tips (dusty rose, deep burgundy, even olive green), double French lines, and reverse French designs are all trending. The updated French is elegant enough for office environments but interesting enough for events and weddings. Gel formulation means it lasts 3–4 weeks without chips.",
      },
      {
        type: "heading",
        text: "Trend 4: Floral Nail Art (With a Modern Twist)",
      },
      {
        type: "paragraph",
        text: "Florals in nail art are nothing new — but 2025 florals are different: less pastel, more tonal. Think a deep burgundy nail with darker burgundy roses painted in a matte-on-glossy finish. Or cream nails with tiny white daisies that look almost three-dimensional. These are time-intensive but genuinely stunning for weddings and special occasions.",
      },
      {
        type: "heading",
        text: "Trend 5: Matching Pedicure Moments",
      },
      {
        type: "paragraph",
        text: "The biggest shift we are seeing: clients investing as much care in their pedicure as their manicure. Open-toed heels in Mangalorean weather means your feet are always visible — and a beautifully done gel pedicure with even a simple French or minimal art elevates any look significantly.",
      },
      {
        type: "list",
        items: [
          "Gel nails last 3–4 weeks — ideal for long travel or wedding seasons",
          "Nail extensions (acrylic or gel) can be shaped to any length from square to almond to coffin",
          "Always request nail prep and cuticle care — the base quality determines how long art lasts",
          "Avoid hand sanitiser directly on gel nails — use lotion immediately after to prevent drying",
          "For Mangalore humidity: gel consistently outperforms regular polish which smudges within days",
        ],
      },
      {
        type: "tip",
        text: "Book bridal nail art at least 2–3 days before your wedding so any minor adjustments can be made, and the gel has fully cured and settled.",
      },
      {
        type: "quote",
        text: "Nails are one of the first things people notice when they hold your hand to congratulate you. They deserve the same attention as your outfit.",
        author: "Ananya Kamath, Nail Art Specialist",
      },
      {
        type: "cta",
        text: "Browse our nail services or message us on WhatsApp to book your nail appointment or bridal nail consultation.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((p) => p.featured);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getBlogPost(currentSlug);
  if (!current) return blogPosts.slice(0, limit);
  return blogPosts
    .filter((p) => p.slug !== currentSlug && p.categorySlug === current.categorySlug)
    .concat(blogPosts.filter((p) => p.slug !== currentSlug && p.categorySlug !== current.categorySlug))
    .slice(0, limit);
}

export const blogCategories = [
  { label: "All", slug: "all" },
  { label: "Bridal", slug: "bridal" },
  { label: "Skin Care", slug: "skin-care" },
  { label: "Hair Care", slug: "hair-care" },
  { label: "Nails", slug: "nails" },
];
