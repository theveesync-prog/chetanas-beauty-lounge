export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
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
}

export const blogPosts: BlogPost[] = [
  {
    slug: "bridal-makeup-tips-mangalore",
    title: "5 Bridal Makeup Tips from Our CIDESCO-Certified Artists in Mangalore",
    excerpt:
      "Your wedding day deserves makeup that lasts from the morning ceremonies to the evening reception. Our CIDESCO-certified artists share their top tips for brides in Mangalore.",
    category: "Bridal",
    categorySlug: "bridal",
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
    coverImage: "/images/hero/hero-editorial-3.webp",
    coverAlt: "Bridal hairstyling with a feather headpiece, close-up beauty look",
    content: [
      {
        type: "paragraph",
        text: "A bride's wedding day is one of the most photographed days of her life, and the makeup needs to hold up through morning rituals, afternoon ceremonies and an evening reception without a single touch-up disaster. We're CIDESCO-certified artists who've worked with hundreds of brides across Tulu, Catholic and Hindu weddings in Mangalore, and over the years we've settled on a handful of techniques that keep a look fresh from sunrise to midnight.",
      },
      {
        type: "heading",
        text: "1. Prep Your Skin at Least 30 Days Before",
      },
      {
        type: "paragraph",
        text: "The single biggest factor in how your makeup looks on the day is your skin's texture and hydration going in. Start a consistent pre-bridal skin routine at least a month before, ideally with our Pre-Bridal Package, which includes targeted facials, de-tanning and pigmentation treatments. Even skin tone means less foundation needed, and that means more natural-looking photos.",
      },
      {
        type: "heading",
        text: "2. Use a Primer Matched to Your Skin Type",
      },
      {
        type: "paragraph",
        text: "Mangalore's coastal humidity is the enemy of longevity, so primer isn't optional. For oily skin, use a mattifying, pore-filling primer. For dry skin, choose a hydrating, luminous base. For combination skin, apply mattifying primer on the T-zone and hydrating primer on the cheeks. This creates the grip that keeps foundation in place through a full ceremony day.",
      },
      {
        type: "heading",
        text: "3. Layer Foundation Thin and Build Coverage",
      },
      {
        type: "paragraph",
        text: "A common mistake is applying one thick layer of foundation. The professional way is two or three thin, buildable layers, each set with a light dusting of translucent powder before the next goes on. This avoids the cakey, mask-like finish that shows up unflattering in close-up photography.",
      },
      {
        type: "heading",
        text: "4. Set Everything with a Long-Wear Setting Spray",
      },
      {
        type: "paragraph",
        text: "Once your look is complete, foundation, contouring, eye makeup and lips all done, seal it with a professional-grade setting spray. Hold the bottle 30 to 40 cm away and mist in a figure-eight motion. This melds the product layers together and creates a water-resistant shield against tears, sweat and Mangalore's sea breeze.",
      },
      {
        type: "heading",
        text: "5. Touch-Up Kit: What to Carry in Your Bridal Bag",
      },
      {
        type: "list",
        items: [
          "Blotting papers, not a powder compact, which can disturb professional work",
          "Travel-size setting spray for a mid-day refresh",
          "Your exact lip colour for reapplication after meals",
          "A small concealer that matches your foundation shade",
          "Cotton swabs for fixing smudges without disturbing eye makeup",
        ],
      },
      {
        type: "tip",
        text: "Do a full bridal makeup trial at least 2 weeks before your wedding. That gives you time to adjust the shade, style or lash type without the pressure of the actual day.",
      },
      {
        type: "quote",
        text: "A bride should feel like the most beautiful version of herself, not a different person. Our goal is always enhancement, not transformation.",
      },
      {
        type: "cta",
        text: "Book your bridal consultation on WhatsApp and let us create your wedding day look.",
      },
    ],
  },

  {
    slug: "skin-care-routine-mangalore-humid-climate",
    title: "The Complete Skin Care Routine for Mangalore's Humid Climate",
    excerpt:
      "Living by the sea means your skin faces its own set of challenges: humidity, sun exposure and salt air. Here's the routine our skin specialists actually recommend for Mangalorean skin.",
    category: "Skin Care",
    categorySlug: "skin-care",
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
    coverImage: "/images/salon/salon-mirror-stations.webp",
    coverAlt: "Salon treatment stations at Chetana's Beauty Lounge, Mangalore",
    content: [
      {
        type: "paragraph",
        text: "Mangalore sits at the edge of the Arabian Sea, and it's beautiful, but the combination of 70 to 90% year-round humidity, strong UV radiation and salt air creates some very specific skin challenges. Generic skin care advice from international brands or Delhi-based influencers rarely holds up here. We've treated thousands of Mangalorean clients over the years and built an approach that's tuned to this climate specifically.",
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
        text: "Avoid harsh foaming cleansers that strip skin of its natural oils. In high humidity, your skin will overcompensate by producing even more oil. A gentle, pH-balanced gel cleanser cleans without disrupting the skin barrier.",
      },
      {
        type: "subheading",
        text: "Step 2: Vitamin C Serum (Non-Negotiable)",
      },
      {
        type: "paragraph",
        text: "UV exposure in coastal Karnataka is intense year-round. A Vitamin C serum in the morning neutralises free radicals from sun damage, brightens existing pigmentation and preps skin to accept sunscreen better. Apply 3 to 4 drops and wait about a minute before the next step.",
      },
      {
        type: "subheading",
        text: "Step 3: Lightweight Moisturiser",
      },
      {
        type: "paragraph",
        text: "A lot of our clients skip moisturiser, thinking their skin is already oily from the humidity. It's the most common mistake we see. Humidity is moisture in the air, not moisture in your skin, and one doesn't replace the other. Use a water-based, oil-free gel moisturiser instead. Hydrated skin looks plumper, shows fewer pores and holds makeup better.",
      },
      {
        type: "subheading",
        text: "Step 4: SPF 50+ Sunscreen (Every Single Day)",
      },
      {
        type: "paragraph",
        text: "Mangalore gets direct sunlight with a UV Index of 8 to 11 for most of the year, so SPF is not optional. Use a broad-spectrum SPF 50+ labelled non-comedogenic, meaning it won't clog pores. Apply generously. Most people apply only 20 to 30% of the required amount and then wonder why they're still tanning.",
      },
      {
        type: "heading",
        text: "Evening Routine: Repair and Replenish",
      },
      {
        type: "list",
        items: [
          "Double cleanse: oil cleanser first, then a gentle gel cleanser to fully remove SPF and makeup",
          "Exfoliate twice a week with a gentle AHA toner (glycolic or lactic acid), and skip physical scrubs entirely",
          "Niacinamide serum for pore reduction and oil control",
          "Retinol, starting at 0.025% and building up, for cell turnover and pigmentation correction",
          "A rich night cream, since your skin does most of its repair work while you sleep",
        ],
      },
      {
        type: "heading",
        text: "Salon Treatments That Supercharge Your Home Routine",
      },
      {
        type: "paragraph",
        text: "Home care is maintenance. Professional treatments do the heavier lifting. For coastal skin, we recommend a hydrating facial once a month during the pre-monsoon and post-monsoon months, a tan removal treatment after major beach or outdoor events, and a pigmentation-targeted treatment, such as our Gold Glow Facial or Meso-Brightening Facial, once a quarter.",
      },
      {
        type: "tip",
        text: "Skip physical scrubs on Mangalorean skin. The humid climate already causes micro-inflammation, and chemical exfoliants (AHAs or BHAs) are gentler and work better anyway.",
      },
      {
        type: "cta",
        text: "Book a skin consultation to get a routine designed for your skin type and our local climate.",
      },
    ],
  },

  {
    slug: "keratin-treatment-vs-straightening",
    title: "Keratin Treatment vs Hair Straightening: Which Is Right for You?",
    excerpt:
      "These are two of our most-requested services, but they work in completely different ways and suit different hair types. Our senior stylists break down what you need to know before booking.",
    category: "Hair Care",
    categorySlug: "hair-care",
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
      "Keratin treatment vs hair straightening: which should you choose? Chetana's Beauty hair specialists explain the difference, cost, longevity, and which suits your hair type.",
    coverImage: "/images/gallery/gallery-hair-color-transformation.webp",
    coverAlt: "Hair stylist working with a client in the salon at Chetana's Beauty Lounge",
    content: [
      {
        type: "paragraph",
        text: "We get asked this question every single week: should I get a keratin treatment or straightening? Both aim to tame frizz and create smoother hair, but they work through completely different mechanisms, last different amounts of time, and suit different hair types and lifestyles. Here's what you need to know to make the right call.",
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
        text: "Keratin is a protein naturally found in your hair. Over time, humidity, heat styling and chemical processing break down this protein, causing frizz and dull texture. A keratin treatment replenishes the lost protein by coating each hair strand with a keratin-rich formula that's then heat-sealed in. It doesn't change your hair's natural bond structure. It works with your hair's existing pattern, just smoother and more manageable.",
      },
      {
        type: "subheading",
        text: "Chemical Straightening (Relaxer/Rebonding)",
      },
      {
        type: "paragraph",
        text: "Chemical straightening, or rebonding, works by breaking the natural disulfide bonds in your hair using a strong alkaline chemical, then restructuring them in a straight position. This permanently alters your hair's natural structure. The result is pin-straight hair, but the process is more intense, and the long-term health impact needs careful thought.",
      },
      {
        type: "heading",
        text: "Head-to-Head Comparison",
      },
      {
        type: "list",
        items: [
          "Longevity: keratin lasts 3 to 5 months, while rebonding lasts until the hair grows out, effectively permanent at the treated length",
          "Result: keratin gives smooth, frizz-free hair with natural movement; rebonding gives poker-straight hair with no movement at all",
          "Hair health: keratin actually strengthens hair over time, while rebonding weakens the hair shaft",
          "Suitability for Mangalore: keratin handles humidity well, while rebonding can revert at the roots in extreme humidity",
          "Maintenance: keratin needs a sulphate-free shampoo, while rebonded hair needs more intensive conditioning",
          "Cost: keratin is usually the more affordable option; rebonding costs more and often needs added protein treatments",
        ],
      },
      {
        type: "heading",
        text: "Who Should Choose Keratin?",
      },
      {
        type: "paragraph",
        text: "Keratin tends to suit you if your hair is naturally wavy or mildly curly and you want less frizz without losing your natural texture. It's also the safer choice if you colour or bleach your hair regularly, since rebonding isn't recommended on coloured hair. And if you live an active lifestyle and don't want to avoid water and sweat for three days after a treatment, keratin fits better too.",
      },
      {
        type: "heading",
        text: "Who Should Choose Rebonding?",
      },
      {
        type: "paragraph",
        text: "Rebonding tends to suit you if your hair is very coarse or tightly curly and you genuinely want it poker-straight. It works best when you're willing to commit to the maintenance, your hair hasn't been chemically processed recently, and you understand this is a permanent change you'll need to grow out rather than one that simply fades.",
      },
      {
        type: "tip",
        text: "In Mangalore's humidity, keratin consistently outperforms rebonding over the long run. Rebonded hair tends to revert at the roots in high humidity, something we hear about from clients often after monsoon season.",
      },
      {
        type: "quote",
        text: "We always tell clients: tell us your lifestyle, not just what you want the hair to look like. The best treatment is the one that works for how you actually live.",
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
      "Most brides start their pre-bridal prep too late. With the right timeline, you can walk into your wedding with your best skin, hair and confidence. Here's the schedule our bridal team recommends.",
    category: "Bridal",
    categorySlug: "bridal",
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
    coverImage: "/images/hero/hero-editorial-2.webp",
    coverAlt: "Bridal hairstyling and makeup session at Chetana's Beauty Lounge",
    content: [
      {
        type: "paragraph",
        text: "Great bridal beauty isn't about a single makeover session on the morning of your wedding. It's the result of months of careful preparation. Over years of working with brides from across Mangalore, Udupi, and visiting NRI families from Dubai and the Gulf, we've put together a month-by-month timeline that helps every bride arrive at her ceremony looking genuinely radiant.",
      },
      {
        type: "heading",
        text: "6 Months Before: Start the Foundation",
      },
      {
        type: "list",
        items: [
          "Book your first consultation to discuss skin concerns like pigmentation, acne scars or uneven tone",
          "Begin a customised facial series: deep cleansing and hydration facials monthly",
          "Start tan removal sessions if needed, results usually take 3 to 4 sittings",
          "Book your bridal makeup artist early, since peak season dates (October to February) fill up fast in Mangalore",
          "Get a hair health assessment and begin protein treatments if hair is damaged",
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
          "Begin threading and waxing on a regular schedule so your skin has time to adapt",
          "Have an eyebrow shaping consultation to settle on the shape you want before the wedding",
          "Hair spa and deep conditioning if you plan to colour your hair",
          "Start saving reference photos of the bridal look you want for your consultation",
        ],
      },
      {
        type: "heading",
        text: "6–8 Weeks Before: The Critical Window",
      },
      {
        type: "paragraph",
        text: "This is the most important phase. Any major treatment needs at least 6 weeks before the wedding, so your skin has time to fully settle and you can evaluate and adjust if needed.",
      },
      {
        type: "list",
        items: [
          "Full bridal makeup trial to test your foundation shade, eye look, lip colour and lash style",
          "Hair trial to decide on your bridal hairstyle, whether that's an up-do, waves or flower placement",
          "Final keratin or smoothening treatment if desired",
          "Gold facial or premium brightening treatment",
          "Full body wax plus underarm and bikini area treatments",
        ],
      },
      {
        type: "heading",
        text: "1 Week Before: Final Polish",
      },
      {
        type: "list",
        items: [
          "A hydrating facial only, nothing new or experimental this week",
          "Manicure and pedicure with a gel top coat for longevity",
          "Eyebrow threading touch-up",
          "Blowout or hair setting",
          "Rest well. Sleep and hydration do more for your skin than any treatment",
        ],
      },
      {
        type: "heading",
        text: "Day Before: Keep It Simple",
      },
      {
        type: "list",
        items: [
          "A light moisturising facial or gua sha massage, but skip any extractions this close to the day",
          "Remove nail polish if doing fresh gel on the day",
          "Head massage for stress relief",
          "Sleep early. Eight hours of rest does more than any face mask",
        ],
      },
      {
        type: "tip",
        text: "Never try a new product or treatment within 2 weeks of your wedding. If you react, you need time to recover, so anything experimental should be done by the 6-week mark.",
      },
      {
        type: "cta",
        text: "Book your pre-bridal consultation today, especially if your wedding is within 6 months. Premium slots for Mangalore wedding season fill up quickly.",
      },
    ],
  },

  {
    slug: "nail-art-trends-2025-mangalore",
    title: "Nail Art Trends for 2025: From Mangalorean Weddings to Everyday Chic",
    excerpt:
      "Nail art has evolved from a niche luxury into an everyday expression of personal style. Our nail specialists share the trends dominating salons in Mangalore this year.",
    category: "Nails",
    categorySlug: "nails",
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
    coverImage: "/images/gallery/gallery-pedicure-care.webp",
    coverAlt: "Pedicure and nail care session at Chetana's Beauty Lounge",
    content: [
      {
        type: "paragraph",
        text: "2025 has been the year nail art moved past trendy Instagram aesthetics into designs that actually work with real life: real jobs, real housework, real Mangalorean weather. Our nail specialists have been paying attention to what clients keep asking for, and a few genuinely nice trends have emerged.",
      },
      {
        type: "heading",
        text: "Trend 1: Quiet Luxury Nails",
      },
      {
        type: "paragraph",
        text: "Neutral nudes, soft creams and milky whites in long-lasting gel are everywhere right now, and for good reason. Quiet luxury nails look polished and put-together without shouting for attention, and they suit every skin tone once you find the right nude for your undertone, which our specialists can help with. These are our most-booked everyday nails at the moment.",
      },
      {
        type: "heading",
        text: "Trend 2: Gold and Rust Tones for Wedding Season",
      },
      {
        type: "paragraph",
        text: "For Mangalorean weddings, Tulu, Catholic and Hindu alike, warm gold, rust orange and deep terracotta are having a real moment. These tones sit beautifully against silk sarees, Kanjeevaram and traditional jewellery. We're doing a lot of gold chrome gel with subtle nail art accents for brides and bridesmaids alike.",
      },
      {
        type: "heading",
        text: "Trend 3: Minimal French Variations",
      },
      {
        type: "paragraph",
        text: "The classic French manicure is back, but reinvented. Coloured tips in dusty rose, deep burgundy or olive green, double French lines, and reverse French designs are all trending. The updated French is elegant enough for office environments but interesting enough for events and weddings, and the gel formulation means it lasts 3 to 4 weeks without chipping.",
      },
      {
        type: "heading",
        text: "Trend 4: Floral Nail Art (With a Modern Twist)",
      },
      {
        type: "paragraph",
        text: "Florals in nail art aren't new, but 2025's florals are different: less pastel, more tonal. Think a deep burgundy nail with darker burgundy roses in a matte-on-glossy finish, or cream nails with tiny white daisies that look almost three-dimensional. These take time to do, but they're genuinely stunning for weddings and special occasions.",
      },
      {
        type: "heading",
        text: "Trend 5: Matching Pedicure Moments",
      },
      {
        type: "paragraph",
        text: "The biggest shift we've noticed is clients putting as much care into their pedicure as their manicure. Open-toed heels in Mangalorean weather mean your feet are on show most of the time, and a well-done gel pedicure, even with something as simple as a French tip, lifts the whole look.",
      },
      {
        type: "list",
        items: [
          "Gel nails last 3 to 4 weeks, which makes them ideal for travel or wedding season",
          "Nail extensions (acrylic or gel) can be shaped to any length, from square to almond to coffin",
          "Always ask for proper nail prep and cuticle care, since the base quality is what determines how long the art lasts",
          "Avoid applying hand sanitiser directly on gel nails, and use lotion right after to stop them drying out",
          "In Mangalore's humidity, gel consistently outperforms regular polish, which tends to smudge within days",
        ],
      },
      {
        type: "tip",
        text: "Book bridal nail art at least 2 to 3 days before your wedding so any minor adjustments can be made and the gel has fully cured and settled.",
      },
      {
        type: "quote",
        text: "Nails are one of the first things people notice when they hold your hand to congratulate you. They deserve the same attention as your outfit.",
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
