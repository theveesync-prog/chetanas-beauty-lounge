export interface Service {
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  price: string;
  originalPrice?: string;
  onSale?: boolean;
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
        slug: "hair-cut-and-style",
        description: "Precision cut tailored to your face shape, finished with a blowout.",
        longDescription:
          "Our signature hair cut and style begins with a thorough one-on-one consultation to understand your face shape, hair texture, and lifestyle. Your stylist then delivers a precision cut engineered to flatter your features, followed by a professional blowout that leaves your hair silky, full-bodied, and salon-smooth. Whether you want a bold new look or a refined update to your current style, we ensure you walk out feeling completely transformed.",
        price: "₹400",
        duration: "45 min",
        bestseller: true,
      },
      {
        name: "Blowout & Style",
        slug: "blowout-and-style",
        description: "Professional blow-dry with round brushing for salon-smooth results.",
        longDescription:
          "A blowout is the fastest way to elevate everyday hair. Our professionals use a round brush and a high-quality blow-dryer to create volume, smoothness, and a lasting finish that air-drying simply cannot achieve. Perfect before a special event, photoshoot, or any day you want to look your best, the blowout treatment leaves your hair bouncy, frizz-free, and beautifully styled.",
        price: "₹500",
        duration: "45 min",
        bestseller: true,
      },
      {
        name: "Deep Conditioning Treatment",
        slug: "deep-conditioning-treatment",
        description: "Intensive moisture mask to restore shine and softness to dry hair.",
        longDescription:
          "Mangalore's coastal humidity and sun exposure can strip moisture from even healthy hair. Our deep conditioning treatment uses a professional-grade, penetrating mask packed with keratin proteins, amino acids, and botanical oils. Applied to every strand, it repairs damage, replenishes moisture, and restores natural elasticity — leaving your hair softer, shinier, and more manageable for weeks. Ideal for colour-treated, heat-damaged, or naturally dry hair types.",
        price: "₹450",
        originalPrice: "₹600",
        onSale: true,
        duration: "60 min",
      },
      {
        name: "Global Hair Colour",
        slug: "global-hair-colour",
        description: "Full head single-process colour using premium, ammonia-free products.",
        longDescription:
          "A full global colour transforms your look from root to tip with a rich, even tone. We use premium ammonia-free, nourishing colour products that minimize damage while delivering vivid, long-lasting results. Before we begin, your colourist will guide you through shade selection and strand-test to ensure the final result matches your vision. The treatment includes a colour-protective conditioning rinse to lock in brilliance and extend the life of your new colour.",
        price: "₹1,200",
        duration: "90 min",
        bestseller: true,
      },
      {
        name: "Highlights (Partial)",
        slug: "highlights-partial",
        description: "Sun-kissed highlights framing the face for a natural, radiant look.",
        longDescription:
          "Partial highlights are expertly placed around the face and crown to mimic the natural lightening effect of the sun. The result is a bright, dimensional look that adds depth and movement without a full-colour commitment. We use foil or balayage technique based on your preference, and finish with a toning gloss to ensure seamless blending and a radiant shine throughout.",
        price: "₹1,800",
        duration: "2 hrs",
      },
      {
        name: "Keratin Smoothing Treatment",
        slug: "keratin-smoothing-treatment",
        description: "Banish frizz for up to 3 months with a professional keratin treatment.",
        longDescription:
          "Mangalore's tropical climate is beautiful — but it's relentless on hair. Our professional keratin smoothing treatment penetrates the hair shaft, filling in the protein gaps that cause frizz and roughness. The result is dramatically smoother, shinier, and more manageable hair that lasts up to 3 months. The treatment is safe for all hair types and colours, and significantly reduces blow-dry time in your daily routine. A true investment in effortless hair.",
        price: "₹3,500",
        duration: "2.5 hrs",
      },
      // ── Menu additions ──────────────────────────────────────
      {
        name: "1 Level Cut",
        slug: "1-level-cut",
        description: "A single-length haircut for a clean, uniform finish all around.",
        price: "₹500",
        duration: "30 min",
      },
      {
        name: "Hair Trim",
        slug: "hair-trim",
        description: "Tidy up split ends and reshape without losing length.",
        price: "₹600",
        duration: "20 min",
      },
      {
        name: "Haircut by Stylist with Wash",
        slug: "haircut-by-stylist-with-wash",
        description: "Personalised cut by a senior stylist, including a relaxing wash and blow-dry.",
        price: "₹850",
        duration: "60 min",
        bestseller: true,
      },
      {
        name: "Haircut by Senior Stylist with Wash",
        slug: "haircut-by-senior-stylist-with-wash",
        description: "Expert precision cut by our most senior stylist with a thorough wash and finish.",
        price: "₹1,500",
        duration: "75 min",
      },
      {
        name: "Fringes & Bands",
        slug: "fringes-and-bands",
        description: "Precise fringe trimming and face-framing layers to refresh your look.",
        price: "₹350",
        duration: "20 min",
      },
      {
        name: "Hairwash, Conditioning & Blast Dry",
        slug: "hairwash-conditioning-blast-dry",
        description: "Thorough wash with conditioning treatment, finished with a quick blast dry.",
        price: "₹750",
        duration: "45 min",
        bestseller: true,
      },
      {
        name: "Ironing",
        slug: "hair-ironing",
        description: "Flat-iron straightening for sleek, polished hair with a smooth finish.",
        price: "₹1,000",
        duration: "45 min",
      },
      {
        name: "Root Touchup (½ inch) + Wash",
        slug: "root-touchup-half-inch",
        description: "Colour refresh for ½ inch of new growth, includes a wash and conditioning rinse.",
        price: "₹1,100",
        duration: "60 min",
      },
      {
        name: "Root Touchup Long Growth (1 inch) + Wash",
        slug: "root-touchup-long-growth",
        description: "Colour touchup for 1 inch of regrowth for a seamless, even result.",
        price: "₹1,400",
        duration: "75 min",
      },
      {
        name: "Root Touchup Extra Long (2.5 inch) + Wash",
        slug: "root-touchup-extra-long",
        description: "Colour coverage for 2.5 inches of new growth — ideal for long gaps between appointments.",
        price: "₹2,200",
        duration: "90 min",
      },
      {
        name: "Root Touchup Ammonia Free + Wash",
        slug: "root-touchup-ammonia-free",
        description: "Gentle, ammonia-free root colour for sensitive scalps with a nourishing wash.",
        price: "₹1,800",
        duration: "60 min",
      },
      {
        name: "Root Touchup Fashion Colour + Wash",
        slug: "root-touchup-fashion-colour",
        description: "Bold fashion shade root touchup — vivid, trend-forward colour with a wash finish.",
        price: "₹2,500",
        duration: "75 min",
      },
      {
        name: "Balayage / Creative Colour",
        slug: "balayage-creative-colour",
        description: "Hand-painted balayage or creative colour technique for a natural, sun-kissed gradient.",
        price: "₹3,000+",
        duration: "3 hrs",
        bestseller: true,
      },
      {
        name: "Single Streak",
        slug: "single-streak",
        description: "One bold or blended streak — perfect for a subtle pop of colour.",
        price: "₹450+",
        duration: "30 min",
      },
      {
        name: "Global Highlights",
        slug: "global-highlights",
        description: "Full-head highlights for all-over dimension, brightness, and texture.",
        price: "₹2,000+",
        duration: "2 hrs",
      },
      {
        name: "Pre-Lightening Per Streak",
        slug: "pre-lightening-per-streak",
        description: "Individual streak pre-lightening to prepare hair for vivid or fashion colour.",
        price: "₹300",
        duration: "30 min",
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
        slug: "full-body-massage",
        description: "Relaxing Swedish massage to melt away tension and improve circulation.",
        longDescription:
          "Our full body Swedish massage uses long, flowing strokes and targeted pressure to release deep-seated muscle tension, improve blood circulation, and restore your body's natural balance. Performed by trained therapists using warm, aromatic oils, the 60-minute session covers the back, shoulders, legs, arms, and neck — leaving you in a state of deep calm and physical ease. Perfect for stress relief, post-event recovery, or simply a well-deserved indulgence.",
        price: "₹1,500",
        duration: "60 min",
        bestseller: true,
      },
      {
        name: "Back & Shoulder Massage",
        slug: "back-and-shoulder-massage",
        description: "Targeted deep-tissue relief for aches and stress in the upper body.",
        longDescription:
          "Long hours at a desk, carrying heavy bags, or simply the stress of daily life can knot up the back and shoulder muscles. Our focused back and shoulder massage uses firm, targeted strokes to work out tension, increase mobility, and ease chronic aches. The therapist identifies problem areas and applies deep-tissue techniques where needed, finishing with soothing strokes that leave you noticeably lighter.",
        price: "₹800",
        duration: "30 min",
      },
      {
        name: "Body Scrub",
        slug: "body-scrub",
        description: "Exfoliating scrub to remove dead skin and leave you silky smooth.",
        longDescription:
          "Our indulgent body scrub treatment combines a professional-grade exfoliant — rich in natural sugar crystals, coconut husk, or sea salt — with nourishing botanical oils to buff away dead skin cells, unclog pores, and reveal the fresh, glowing skin beneath. Followed by a warm rinse and a hydrating body butter application, the treatment leaves your skin visibly smoother, softer, and radiant. Ideal before a special event or as a monthly maintenance ritual.",
        price: "₹1,200",
        duration: "60 min",
        bestseller: true,
      },
      {
        name: "Full Body Waxing",
        slug: "full-body-waxing",
        description: "Smooth, long-lasting hair removal using soft and hard wax techniques.",
        longDescription:
          "Our full body waxing service covers all areas from legs to underarms, bikini line, and arms using a combination of warm soft wax and firm hard wax formulated for sensitive skin. Our therapists work methodically and quickly to minimize discomfort, finishing each area with a soothing post-wax oil to calm the skin. Results last 3–4 weeks, and regular sessions lead to noticeably finer, sparser regrowth over time.",
        price: "₹1,800",
        duration: "90 min",
      },
      {
        name: "Half Leg Waxing",
        slug: "half-leg-waxing",
        description: "Quick, precise waxing for knees-down smoothness.",
        longDescription:
          "A quick and effective solution for smooth legs from the knee down. Our therapists use a warm, skin-conditioning wax that grips the hair at the root while being gentle on the skin, leaving no sticky residue. The treatment takes just 25 minutes and results last 3–4 weeks. A post-wax soothing lotion is applied to prevent irritation and keep the skin moisturized.",
        price: "₹400",
        duration: "25 min",
        bestseller: true,
      },
      {
        name: "Eyebrow Threading",
        slug: "eyebrow-threading",
        description: "Expert threading for perfectly shaped brows that frame your face.",
        longDescription:
          "Well-shaped eyebrows can transform your entire face. Our threading specialists use the ancient technique of twisted cotton thread to precisely remove hair at the follicle, creating clean lines and perfectly sculpted arches. We start by analysing your natural brow shape and face structure to design the most flattering arch for you. Threading is gentler than waxing for the delicate brow area, and results in crisper lines that last 2–4 weeks.",
        price: "₹50",
        duration: "10 min",
        bestseller: true,
      },
      // ── Threading (menu additions) ───────────────────────────
      {
        name: "Threading — Upper Lip",
        slug: "threading-upper-lip",
        description: "Precise cotton-thread hair removal for the upper lip area.",
        price: "₹30",
        duration: "5 min",
      },
      {
        name: "Threading — Chin",
        slug: "threading-chin",
        description: "Clean, accurate threading to remove unwanted chin hair.",
        price: "₹30",
        duration: "5 min",
      },
      {
        name: "Threading — Forehead",
        slug: "threading-forehead",
        description: "Tidy the hairline and remove fine forehead hair with threading.",
        price: "₹30",
        duration: "5 min",
      },
      {
        name: "Threading — Side Lock",
        slug: "threading-side-lock",
        description: "Threading to remove and define hair along the side of the face.",
        price: "₹70",
        duration: "8 min",
      },
      {
        name: "Threading — Full Face",
        slug: "threading-full-face",
        description: "Complete facial threading — brows, upper lip, chin, forehead, and side locks.",
        price: "₹250",
        duration: "25 min",
        bestseller: true,
      },
      // ── Brazilian Wax ────────────────────────────────────────
      {
        name: "Brazilian Wax — Upper Lip",
        slug: "brazilian-wax-upper-lip",
        description: "Smooth, long-lasting upper lip hair removal using gentle Brazilian wax.",
        price: "₹150",
        duration: "10 min",
      },
      {
        name: "Brazilian Wax — Chin",
        slug: "brazilian-wax-chin",
        description: "Brazilian wax for precise, clean chin hair removal.",
        price: "₹150",
        duration: "10 min",
      },
      {
        name: "Brazilian Wax — Forehead",
        slug: "brazilian-wax-forehead",
        description: "Wax for hairline definition and forehead hair removal.",
        price: "₹250",
        duration: "10 min",
      },
      {
        name: "Brazilian Wax — Eyebrows",
        slug: "brazilian-wax-eyebrows",
        description: "Eyebrow shaping using Brazilian wax for clean, defined arches.",
        price: "₹400",
        duration: "15 min",
        bestseller: true,
      },
      {
        name: "Brazilian Wax — Side Lock",
        slug: "brazilian-wax-side-lock",
        description: "Brazilian wax to tidy hair along the side of the face.",
        price: "₹200",
        duration: "10 min",
      },
      {
        name: "Brazilian Wax — Full Face",
        slug: "brazilian-wax-full-face",
        description: "Complete full-face Brazilian wax covering all facial areas.",
        price: "₹950",
        duration: "30 min",
      },
      {
        name: "Brazilian Wax — Underarms",
        slug: "brazilian-wax-underarms",
        description: "Underarm hair removal with soft Brazilian wax for a clean, smooth finish.",
        price: "₹400",
        duration: "15 min",
      },
      {
        name: "Bikini Wax",
        slug: "bikini-wax",
        description: "Professional bikini line wax for a clean, smooth result using gentle wax.",
        price: "₹2,300",
        duration: "30 min",
      },
      // ── Traditional / Sugar Wax ──────────────────────────────
      {
        name: "Sugar Wax — Half Arms",
        slug: "sugar-wax-half-arms",
        description: "Traditional sugar wax for smooth, hair-free forearms.",
        price: "₹300",
        duration: "20 min",
      },
      {
        name: "Sugar Wax — Full Arms",
        slug: "sugar-wax-full-arms",
        description: "Full-arm traditional wax from wrist to shoulder for lasting smoothness.",
        price: "₹400",
        duration: "30 min",
        bestseller: true,
      },
      {
        name: "Sugar Wax — Half Legs",
        slug: "sugar-wax-half-legs",
        description: "Traditional wax from the knee down for smooth, soft lower legs.",
        price: "₹400",
        duration: "25 min",
      },
      {
        name: "Sugar Wax — 3/4 Legs",
        slug: "sugar-wax-three-quarter-legs",
        description: "Sugar wax covering three-quarters of the leg for extended smoothness.",
        price: "₹450",
        duration: "30 min",
      },
      {
        name: "Sugar Wax — Full Legs",
        slug: "sugar-wax-full-legs",
        description: "Complete leg wax from ankle to upper thigh for all-over smooth skin.",
        price: "₹550",
        duration: "40 min",
        bestseller: true,
      },
      {
        name: "Sugar Wax — Underarms",
        slug: "sugar-wax-underarms",
        description: "Quick and effective underarm wax using traditional sugar wax.",
        price: "₹150",
        duration: "10 min",
      },
      {
        name: "Sugar Wax — Full Arms & Underarms",
        slug: "sugar-wax-full-arms-underarms",
        description: "Combined full-arm and underarm wax — the most popular arm treatment combo.",
        price: "₹500",
        duration: "35 min",
        bestseller: true,
      },
      {
        name: "Sugar Wax — Full Arms, Full Legs & Underarms",
        slug: "sugar-wax-full-arms-legs-underarms",
        description: "Our most complete wax combo — arms, legs, and underarms in one session.",
        price: "₹1,000",
        duration: "70 min",
        bestseller: true,
      },
      {
        name: "Sugar Wax — Full Back",
        slug: "sugar-wax-full-back",
        description: "Complete back wax for smooth, hair-free skin from shoulders to waist.",
        price: "₹700",
        duration: "30 min",
      },
      {
        name: "Sugar Wax — Half Back",
        slug: "sugar-wax-half-back",
        description: "Lower back wax for a clean, smooth result.",
        price: "₹350",
        duration: "20 min",
      },
      {
        name: "Sugar Wax — Stomach",
        slug: "sugar-wax-stomach",
        description: "Stomach wax for smooth abdominal skin using traditional sugar wax.",
        price: "₹350",
        duration: "20 min",
      },
      {
        name: "Sugar Wax — Full Body",
        slug: "sugar-wax-full-body",
        description: "Comprehensive full-body traditional wax (excluding face and bikini area).",
        price: "₹2,250",
        duration: "90 min",
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
        slug: "basic-facial",
        description: "Cleanse, exfoliate, and hydrate for an instant glow and smoother texture.",
        longDescription:
          "The Basic Facial is our most popular everyday skin reset. The treatment begins with a deep double cleanse to remove makeup, sunscreen, and impurities, followed by a gentle steam and manual extraction of blackheads and whiteheads. A brightening exfoliant sloughs away dull surface cells, and the session ends with a hydrating mask and a targeted serum chosen for your skin type. You'll leave with noticeably smoother, more even-toned skin — perfect for maintaining a healthy glow between more intensive treatments.",
        price: "₹800",
        duration: "60 min",
        bestseller: true,
      },
      {
        name: "Gold Facial",
        slug: "gold-facial",
        description: "Luxury 24K gold-infused facial to firm, brighten, and rejuvenate skin.",
        longDescription:
          "The Gold Facial is our signature luxury treatment, using 24K gold-infused serums and masks that have been prized in Ayurvedic and European skincare for centuries. Gold activates the skin's natural collagen production, reduces fine lines, firms the skin, and imparts an unmistakable radiance that no other ingredient can replicate. The 75-minute ritual includes cleansing, gold gel exfoliation, a warming massage to improve circulation, a gold leaf mask, and a finishing serum — delivering visibly younger-looking, luminous skin.",
        price: "₹1,500",
        duration: "75 min",
        bestseller: true,
      },
      {
        name: "Pearl Facial",
        slug: "pearl-facial",
        description: "Pearl extract facial that adds luminosity and evens out skin tone.",
        longDescription:
          "Pearl powder has been a cornerstone of South Asian and East Asian beauty rituals for thousands of years. Our Pearl Facial harnesses the brightening and skin-evening properties of genuine pearl extract to fade pigmentation, reduce dark spots, and add a luminous, lit-from-within glow. The treatment includes a pearl-infused exfoliant, a brightening vitamin C layer, and a calming pearl mask that works to visibly improve skin tone uniformity over a series of sessions.",
        price: "₹1,200",
        duration: "60 min",
      },
      {
        name: "Cleanup",
        slug: "cleanup",
        description: "A quick but thorough deep cleanse with extraction and a brightening mask.",
        longDescription:
          "Not every skin day calls for a full facial — that's where the Cleanup shines. In just 30 minutes, we deliver a thorough professional cleanse, gentle steam, targeted blackhead extraction, and a fast-acting brightening mask that gives your complexion a fresh, clean reset. It's the ideal maintenance treatment between full facials, or a quick refresh before a meeting or event. Regular monthly cleanups significantly reduce blackhead build-up and keep skin clear.",
        price: "₹400",
        duration: "30 min",
        bestseller: true,
      },
      {
        name: "D-Tan Pack",
        slug: "d-tan-pack",
        description: "Effective de-tanning treatment to reverse sun damage and restore fairness.",
        longDescription:
          "Mangalore's sunshine is glorious — and relentless on exposed skin. Our D-Tan treatment uses a specially formulated pack rich in natural tan-reversing agents like lemon extract, kojic acid, and mulberry root to break down melanin deposits and visibly lighten sun-darkened skin. Applied to the face, neck, and hands (or body on request), the pack draws out impurities and leaves the skin noticeably lighter, smoother, and refreshed after a single session.",
        price: "₹600",
        duration: "45 min",
        originalPrice: "₹800",
        onSale: true,
      },
      {
        name: "Anti-Acne Treatment",
        slug: "anti-acne-treatment",
        description: "Targeted treatment to calm breakouts, reduce inflammation, and clear pores.",
        longDescription:
          "Acne-prone skin needs precise, clinical care — not harsh products that strip and aggravate. Our Anti-Acne Treatment begins with a pH-balancing cleanse, followed by a salicylic acid exfoliation to unclog pores, a professional extraction under steamed conditions, and a calming tea tree and niacinamide mask to reduce active inflammation. A lightweight, non-comedogenic moisturiser and SPF are applied to finish. Regular sessions significantly reduce breakout frequency and post-acne hyperpigmentation.",
        price: "₹1,000",
        duration: "60 min",
      },
      // ── Clean Ups (menu additions) ───────────────────────────
      {
        name: "Classic Clean Up",
        slug: "classic-clean-up",
        description: "A thorough deep cleanse with steam, extraction, and a brightening mask.",
        price: "₹999",
        duration: "40 min",
        bestseller: true,
      },
      {
        name: "Deep Exfoliating Galvanic Clean Up",
        slug: "deep-exfoliating-galvanic-clean-up",
        description: "Advanced galvanic technology combined with deep exfoliation for a radiant reset.",
        price: "₹1,399",
        duration: "50 min",
      },
      {
        name: "Brightening Clean Up with Detan",
        slug: "brightening-clean-up-with-detan",
        description: "Clean up with a tan-reversing detan pack for noticeably brighter skin.",
        price: "₹1,399",
        duration: "50 min",
      },
      {
        name: "Microderma Clean Up",
        slug: "microderma-clean-up",
        description: "Microdermabrasion-enhanced clean up to smooth texture and clear pores.",
        price: "₹1,499",
        duration: "55 min",
      },
      {
        name: "Complexion Care Clean Up",
        slug: "complexion-care-clean-up",
        description: "Targeted clean up formulated to even skin tone and enhance overall complexion.",
        price: "₹1,899",
        duration: "60 min",
      },
      // ── Facials (menu additions) ─────────────────────────────
      {
        name: "Detoxifying Facial",
        slug: "detoxifying-facial",
        description: "Deep detox facial to draw out impurities and purify congested skin.",
        price: "₹1,499",
        duration: "60 min",
      },
      {
        name: "Hydrating Facial",
        slug: "hydrating-facial",
        description: "Intense moisture-surge facial to plump, soften, and restore dehydrated skin.",
        price: "₹1,499",
        duration: "60 min",
        bestseller: true,
      },
      {
        name: "Vitamin C Casmara Facial",
        slug: "vitamin-c-casmara-facial",
        description: "Casmara professional Vitamin C facial to brighten, firm, and enhance complexion.",
        price: "₹1,999",
        duration: "70 min",
      },
      {
        name: "Skeyndor Hydrating Facial",
        slug: "skeyndor-hydrating-facial",
        description: "Luxurious Skeyndor protocol using advanced ingredients for deep skin hydration.",
        price: "₹2,799",
        duration: "75 min",
      },
      {
        name: "Skeyndor Oil Balanced Facial",
        slug: "skeyndor-oil-balanced-facial",
        description: "Skeyndor oil-control facial — reduces shine, minimises pores, and mattifies.",
        price: "₹2,999",
        duration: "75 min",
      },
      {
        name: "Instant Glow Brightening Facial",
        slug: "instant-glow-brightening-facial",
        description: "Results-focused brightening facial that delivers visible radiance in one session.",
        price: "₹3,499",
        duration: "75 min",
        bestseller: true,
      },
      {
        name: "Vitamin C Brilliance Whitening Facial",
        slug: "vitamin-c-brilliance-whitening-facial",
        description: "Advanced Vitamin C whitening protocol to fade dark spots and unify skin tone.",
        price: "₹3,999",
        duration: "80 min",
      },
      {
        name: "Hydro Facial",
        slug: "hydro-facial",
        description: "Hydro-dermabrasion facial that cleanses, exfoliates, and infuses skin simultaneously.",
        price: "₹3,999",
        duration: "75 min",
        bestseller: true,
      },
      {
        name: "Power C Brightening Antioxidant Facial",
        slug: "power-c-brightening-antioxidant-facial",
        description: "High-potency antioxidant facial with Power C complex for visible brightening.",
        price: "₹4,999",
        duration: "90 min",
      },
      {
        name: "Power C Brightening Meso Therapy",
        slug: "power-c-meso-therapy",
        description: "Power C meso therapy — micro-infusion of brightening actives for deep skin renewal.",
        price: "₹5,999",
        duration: "90 min",
      },
      // ── De-Tan / Bleach — area-specific ─────────────────────
      {
        name: "De-Tan — Underarms",
        slug: "de-tan-underarms",
        description: "Lightening and de-tanning treatment specifically for the underarm area.",
        price: "₹150",
        duration: "15 min",
      },
      {
        name: "De-Tan — Chin",
        slug: "de-tan-chin",
        description: "Targeted de-tan treatment to lighten and even out chin skin tone.",
        price: "₹200",
        duration: "15 min",
      },
      {
        name: "De-Tan — Feet",
        slug: "de-tan-feet",
        description: "De-tanning treatment to restore brightness and even tone to sun-darkened feet.",
        price: "₹300",
        duration: "20 min",
      },
      {
        name: "De-Tan — Face & Neck",
        slug: "de-tan-face-neck",
        description: "Comprehensive de-tan treatment covering the full face and neck.",
        price: "₹500",
        duration: "30 min",
        bestseller: true,
      },
      {
        name: "De-Tan — Face & Shoulder",
        slug: "de-tan-face-shoulder",
        description: "De-tanning treatment for the face and shoulder area — ideal for sleeveless outfits.",
        price: "₹800",
        duration: "40 min",
      },
      {
        name: "De-Tan — Blouse Line",
        slug: "de-tan-blouse-line",
        description: "Targeted de-tan treatment for the blouse/neckline area to prep for saree occasions.",
        price: "₹800",
        duration: "35 min",
      },
      {
        name: "De-Tan — Hands",
        slug: "de-tan-hands",
        description: "Brightening de-tan treatment for sun-darkened hands.",
        price: "₹800",
        duration: "30 min",
      },
      {
        name: "De-Tan — Hands & Half Legs",
        slug: "de-tan-hands-half-legs",
        description: "Combined de-tan for hands and lower legs — perfect pre-event treatment.",
        price: "₹1,800",
        duration: "60 min",
      },
      // ── Bleach — Ammonia Free ────────────────────────────────
      {
        name: "Ammonia-Free Bleach — Upper Lip",
        slug: "ammonia-free-bleach-upper-lip",
        description: "Gentle ammonia-free bleach to lighten upper lip hair without irritation.",
        price: "₹150",
        duration: "10 min",
      },
      {
        name: "Ammonia-Free Bleach — Face",
        slug: "ammonia-free-bleach-face",
        description: "Full face bleach using gentle ammonia-free formula for sensitive skin.",
        price: "₹700",
        duration: "25 min",
      },
      {
        name: "Ammonia-Free Bleach — Face & Neck",
        slug: "ammonia-free-bleach-face-neck",
        description: "Ammonia-free bleach treatment for the face and neck for brightened, even skin.",
        price: "₹1,000",
        duration: "35 min",
      },
      // ── Body Bleach ──────────────────────────────────────────
      {
        name: "Body Bleach — Upper Lip",
        slug: "body-bleach-upper-lip",
        description: "Lightening body bleach application for the upper lip area.",
        price: "₹100",
        duration: "10 min",
      },
      {
        name: "Body Bleach — Underarms",
        slug: "body-bleach-underarms",
        description: "Underarm bleach to lighten skin and even out discolouration.",
        price: "₹250",
        duration: "15 min",
      },
      {
        name: "Body Bleach — Feet",
        slug: "body-bleach-feet",
        description: "Foot bleach to brighten and even out tanned or darkened feet.",
        price: "₹250",
        duration: "15 min",
      },
      {
        name: "Body Bleach — Half Arms",
        slug: "body-bleach-half-arms",
        description: "Bleach treatment for forearms to lighten sun-darkened skin.",
        price: "₹350",
        duration: "20 min",
      },
      {
        name: "Body Bleach — Half Back",
        slug: "body-bleach-half-back",
        description: "Bleach for the lower back to brighten and even skin tone.",
        price: "₹450",
        duration: "25 min",
      },
      {
        name: "Body Bleach — Stomach",
        slug: "body-bleach-stomach",
        description: "Stomach bleach to lighten the abdominal area and even skin tone.",
        price: "₹450",
        duration: "25 min",
      },
      {
        name: "Body Bleach — Full Arms",
        slug: "body-bleach-full-arms",
        description: "Complete arm bleach from wrists to shoulders for uniformly bright skin.",
        price: "₹600",
        duration: "35 min",
      },
      {
        name: "Body Bleach — Full Back",
        slug: "body-bleach-full-back",
        description: "Full-back bleach to brighten and even out skin tone from shoulders to waist.",
        price: "₹600",
        duration: "35 min",
      },
      {
        name: "Body Bleach — Half Legs",
        slug: "body-bleach-half-legs",
        description: "Bleach treatment for the lower legs to reverse tan and lighten skin.",
        price: "₹750",
        duration: "40 min",
      },
      {
        name: "Body Bleach — Full Legs",
        slug: "body-bleach-full-legs",
        description: "Complete full-leg bleach for even, brightened skin from ankle to thigh.",
        price: "₹1,000",
        duration: "50 min",
      },
      {
        name: "Full Body Bleach",
        slug: "full-body-bleach",
        description: "Head-to-toe brightening body bleach for uniformly luminous, even-toned skin.",
        price: "₹3,500",
        duration: "2 hrs",
        bestseller: true,
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
        slug: "bridal-makeup",
        description: "Full glam bridal look with airbrush foundation, eye artistry, and long-wear finish.",
        longDescription:
          "Your bridal makeup is one of the most photographed looks of your life — and it must last from first light to the last dance. Our bridal makeup begins with a skin prep ritual that ensures a flawless base, followed by airbrush foundation for a seamless, camera-perfect finish that will not transfer or fade over a 12-hour day. Eye artistry is custom-designed to complement your eye shape and outfit, and every product used is clinically tested and bridal-grade. We have delivered looks for over 500 Mangalore brides across Tulu, Konkani, Beary, and North Indian wedding traditions.",
        price: "₹8,000",
        duration: "3 hrs",
        bestseller: true,
      },
      {
        name: "Engagement Makeup",
        slug: "engagement-makeup",
        description: "Radiant, polished look for your engagement ceremony — sophisticated and photo-ready.",
        longDescription:
          "An engagement is your first grand debut as a couple, and your look should reflect that. Our engagement makeup strikes the perfect balance between bridal glamour and natural radiance — polished enough for professional photographs yet light enough to feel entirely like yourself. We use long-wear, photo-optimized products and tailor the look to your outfit, skin tone, and the lighting conditions of your venue.",
        price: "₹4,500",
        duration: "2 hrs",
        bestseller: true,
      },
      {
        name: "Reception Look",
        slug: "reception-look",
        description: "Elegant evening glam with dramatic eyes and a flawless base for your reception.",
        longDescription:
          "The reception is your chance to turn up the glamour. The lighting is dramatic, the cameras are everywhere, and the evening calls for something bolder. Our reception look service crafts a defined eye, a luminous or matte base (your choice), sculpted contour, and a lip colour that commands attention. We ensure the look holds up from golden hour into the late evening without a retouch.",
        price: "₹5,500",
        duration: "2.5 hrs",
      },
      {
        name: "Pre-Bridal Package",
        slug: "pre-bridal-package",
        description: "Multi-session prep covering facials, waxing, threading & body treatments over 4 weeks.",
        longDescription:
          "Great bridal makeup starts with great skin. Our Pre-Bridal Package is a structured 4-week programme that prepares your skin and body for the most photographed day of your life. The package covers two gold or pearl facials, full body waxing, eyebrow shaping, D-tan treatments, a deep conditioning hair treatment, and a body scrub — all sequenced strategically in the weeks before your wedding for maximum impact. A free pre-bridal consultation is included to customise the plan to your skin type and wedding date.",
        price: "₹12,000",
        duration: "4 sessions",
        bestseller: true,
      },
      {
        name: "Mehendi Application",
        slug: "mehendi-application",
        description: "Intricate bridal mehendi designs using fresh, aromatic henna.",
        longDescription:
          "Mehendi is one of the most beloved pre-wedding rituals in Mangalore's Tulu, Konkani, and Beary communities. Our mehendi artists use freshly prepared natural henna paste to create intricate, deep-staining designs ranging from traditional Rajasthani and Arabic patterns to contemporary fusion styles. We customize every design to the bride's preferences, often incorporating meaningful motifs like the groom's name or wedding date. Early booking is recommended as bridal mehendi slots fill quickly.",
        price: "₹2,500",
        duration: "2 hrs",
      },
      {
        name: "Saree Draping",
        slug: "saree-draping",
        description: "Expert draping in your preferred regional style — perfectly pleated every time.",
        longDescription:
          "A saree worn imperfectly — no matter how beautiful the fabric — can dampen your confidence. Our expert saree draping service ensures crisp pleats, a perfectly positioned pallu, and a comfortable, secure drape that stays in place all day. We are experienced in Nivi, Maharashtrian, Gujarati, Bengali, and traditional Tulu/Mangalorean saree styles, and will work around your jewellery and blouse fit to create a polished, cohesive bridal look.",
        price: "₹800",
        duration: "30 min",
      },
      // ── Menu addition ────────────────────────────────────────
      {
        name: "Bride Facial Treatment — Brightening / Hydrating",
        slug: "bride-facial-treatment",
        description:
          "Exclusive 6-sitting facial programme for brides — deep brightening and hydration for your most radiant skin ever.",
        longDescription:
          "The Bride Facial Treatment is our most comprehensive pre-wedding skin programme, delivered across 6 professional sittings leading up to your wedding day. Each session is tailored to your skin's current needs — alternating between deep brightening protocols, intensive hydration facials, and targeted pigmentation work. The cumulative effect is a dramatic, visible improvement in skin tone, texture, and luminosity that no single-session treatment can match. Includes a full consultation and personalised home-care plan.",
        price: "₹10,000",
        duration: "6 sessions",
        bestseller: true,
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
        slug: "basic-manicure",
        description: "File, buff, cuticle care, and a classic polish of your choice.",
        longDescription:
          "The Basic Manicure is the cornerstone of well-kept hands. The treatment begins with a warm soak to soften skin and cuticles, followed by careful shaping and filing to your preferred nail shape. Cuticles are gently pushed back and trimmed, the nail surface is buffed to a smooth canvas, and the session ends with your choice of classic polish from our extensive shade collection. Your hands will look instantly polished, neat, and cared for.",
        price: "₹300",
        duration: "30 min",
        bestseller: true,
      },
      {
        name: "Basic Pedicure",
        slug: "basic-pedicure",
        description: "Soak, scrub, file, and polish for happy, soft feet.",
        longDescription:
          "Feet carry us everywhere — and they deserve proper care. Our Basic Pedicure begins with a warm bubbling foot soak infused with relaxing essential oils, followed by exfoliation of calluses and dry skin with a foot file and scrub. Nails are trimmed, shaped, and buffed; cuticles are cared for; and the session concludes with a heel massage and your choice of polish. Soft, smooth, pretty feet — every time.",
        price: "₹400",
        duration: "45 min",
        bestseller: true,
      },
      {
        name: "French Manicure",
        slug: "french-manicure",
        description: "Timeless white-tip French finish for an elegant, clean look.",
        longDescription:
          "The French manicure is the gold standard of polished, understated elegance — at home in any setting from the office to a wedding. Our technicians hand-paint the classic white tip with precision, finish with a natural pink or beige base, and seal it all with a high-gloss top coat for added durability. The result is clean, classic, and impeccably refined — a look that has never gone out of style.",
        price: "₹500",
        duration: "45 min",
      },
      {
        name: "Gel Nails",
        slug: "gel-nails",
        description: "Long-lasting gel colour that stays chip-free for up to 2 weeks.",
        longDescription:
          "Gel nails give you the glossy finish of traditional polish with a durability that regular lacquer simply cannot match. Cured under UV light, our gel colour bonds tightly to the nail for a chip-resistant, mirror-shine finish that lasts 2–3 weeks. We carry an extensive range of shades from bold brights to nudes and classic reds, and offer a gel removal service to safely lift the previous application without damaging the natural nail.",
        price: "₹800",
        duration: "60 min",
        bestseller: true,
      },
      {
        name: "Nail Art (per nail)",
        slug: "nail-art",
        description: "Custom designs — florals, ombre, stones, foils, and more.",
        longDescription:
          "Nail art is where nails become a canvas. Our nail artists can create virtually any design you can envision: hand-painted florals, geometric patterns, gradient ombre, marble effects, foil accents, rhinestone clusters, and more. Priced per nail so you can choose to accent just a few feature nails or go all-in on a full set. Bring a reference image or let our artist freestyle — either way, you'll leave with wearable art.",
        price: "₹50/nail",
        duration: "Varies",
        originalPrice: "₹80/nail",
        onSale: true,
      },
      {
        name: "Acrylic Extensions",
        slug: "acrylic-extensions",
        description: "Strong, sculpted acrylic extensions in any length and shape you desire.",
        longDescription:
          "Acrylic extensions are the original nail enhancement — and for good reason. Our technicians apply a sculpted acrylic blend over forms or tips to build strong, long-lasting extensions in your preferred length (short, medium, coffin, stiletto, square, or almond). The set is then shaped, buffed, and finished with gel polish for a high-gloss look that resists breaking. A full set lasts 3–4 weeks and can be infilled to extend the life further.",
        price: "₹1,200",
        duration: "90 min",
      },
      // ── Manicure (menu additions) ────────────────────────────
      {
        name: "Classic Manicure",
        slug: "classic-manicure",
        description: "Soak, shape, cuticle care, and a classic polish for beautifully groomed hands.",
        price: "₹400",
        duration: "35 min",
        bestseller: true,
      },
      {
        name: "Floral Manicure Pack",
        slug: "floral-manicure-pack",
        description: "Manicure with a botanical floral nourishing pack for softer, more radiant hands.",
        price: "₹600",
        duration: "45 min",
      },
      {
        name: "Crystal Spa Manicure",
        slug: "crystal-spa-manicure",
        description: "Luxurious spa manicure with a crystal mineral treatment for deeply hydrated hands.",
        price: "₹800",
        duration: "55 min",
      },
      {
        name: "Dry Manicure",
        slug: "dry-manicure",
        description: "Quick waterless manicure — shape, buff, cuticle care, and a top coat finish.",
        price: "₹200",
        duration: "20 min",
      },
      // ── Pedicure (menu additions) ────────────────────────────
      {
        name: "Footlogix Pedicure",
        slug: "footlogix-pedicure",
        description: "Professional Footlogix treatment for dry, cracked heels and callus-prone feet.",
        price: "₹1,500",
        duration: "60 min",
        bestseller: true,
      },
      {
        name: "Classic Pedicure",
        slug: "classic-pedicure",
        description: "Relaxing foot soak, scrub, nail care, and polish for soft, polished feet.",
        price: "₹500",
        duration: "45 min",
        bestseller: true,
      },
      {
        name: "Floral Pedicure Pack",
        slug: "floral-pedicure-pack",
        description: "Pedicure with a fragrant floral pack treatment to soften and revive tired feet.",
        price: "₹700",
        duration: "55 min",
      },
      {
        name: "Crystal Spa Pedicure",
        slug: "crystal-spa-pedicure",
        description: "Indulgent spa pedicure with a crystal mineral soak and intensive heel treatment.",
        price: "₹1,000",
        duration: "65 min",
      },
      {
        name: "Dry Pedicure",
        slug: "dry-pedicure",
        description: "Waterless pedicure — file, buff, cuticle care, and a neat polish finish.",
        price: "₹250",
        duration: "25 min",
      },
      {
        name: "Nail Polish Application",
        slug: "nail-polish-application",
        description: "A fresh coat of your chosen nail polish with a smooth, even finish.",
        price: "₹100",
        duration: "15 min",
      },
      {
        name: "Extra Nourishing Pack",
        slug: "extra-nourishing-pack",
        description: "Add-on nourishing pack for hands or feet — intensive hydration boost.",
        price: "₹250",
        duration: "15 min",
      },
      {
        name: "Feet De-Tan",
        slug: "feet-de-tan",
        description: "De-tanning treatment for feet to reverse sun darkening and restore even tone.",
        price: "₹500",
        duration: "30 min",
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
        slug: "kids-hair-cut",
        description: "A fun, stress-free haircut in a child-friendly environment.",
        longDescription:
          "We understand that a child's first salon experience can be nerve-wracking — for both child and parent. Our kids' hair cut service is designed to be relaxed, fun, and completely stress-free. Our stylists are experienced in working with children of all ages and temperaments, and take time to make the little one feel comfortable before picking up scissors. We cut to the parents' brief and always check in throughout to ensure both the child and parent are happy.",
        price: "₹200",
        duration: "20 min",
        bestseller: true,
      },
      {
        name: "Kids Hair Wash & Dry",
        slug: "kids-hair-wash-and-dry",
        description: "Gentle wash with kid-safe products, finished with a soft blowout.",
        longDescription:
          "A professional hair wash and blow-dry using 100% kid-safe, tear-free, sulphate-free shampoos and conditioners. Our stylists are trained to make the washing experience comfortable even for children who are apprehensive about water. The result is clean, shiny, manageable hair that a parent can easily maintain at home. Add a light detangling treatment for an extra ₹50.",
        price: "₹150",
        duration: "20 min",
      },
      {
        name: "Kids Hair Styling",
        slug: "kids-hair-styling",
        description: "Braids, buns, curls — whatever style your little one wants for their special day.",
        longDescription:
          "Whether it's a school event, birthday party, or a family function, every child deserves to feel special. Our kids' hair styling service creates age-appropriate looks: French braids, Dutch braids, twisted buns, ponytails with accessories, or soft curls — tailored to the child's hair type and the occasion. We use only child-safe, heat-protecting products, and keep the styling time short so even fidgety little ones stay comfortable.",
        price: "₹250",
        duration: "20 min",
        bestseller: true,
      },
      {
        name: "Kids Party Makeup",
        slug: "kids-party-makeup",
        description: "Gentle, hypoallergenic makeup for a magical party-ready look.",
        longDescription:
          "Light, fun, and completely safe — our kids' party makeup uses only dermatologically tested, hypoallergenic, and easily removable products made for children's sensitive skin. We create age-appropriate, sparkly looks: glitter eyeshadow, rosy cheeks, a touch of lip colour, and face gems. The process is kept fun and interactive so every child enjoys their moment in the chair. Parents are always consulted on the look before we begin.",
        price: "₹500",
        duration: "30 min",
        bestseller: true,
      },
      {
        name: "Kids Basic Manicure",
        slug: "kids-basic-manicure",
        description: "File, buff, and a fun pop of colour — safe and non-toxic polish only.",
        longDescription:
          "Little nails deserve the same care as grown-up ones. Our kids' basic manicure includes a gentle soak, nail shaping, cuticle care, and a coat of non-toxic, water-based nail polish in the child's favourite colour. We carry a range of bright, fun shades that are completely free from formaldehyde, toluene, and DBP — so parents can relax knowing the products are totally safe.",
        price: "₹150",
        duration: "20 min",
      },
      {
        name: "Kids Mehendi",
        slug: "kids-mehendi",
        description: "Simple, playful henna designs kids will love — using natural henna.",
        longDescription:
          "Mehendi for kids is a celebration in itself! Our artists use fresh, natural henna paste — free from any synthetic additives or black henna chemicals — to create simple, playful designs that children adore: butterflies, flowers, peacocks, hearts, and cartoon motifs. The designs are applied on hands and fingers, and the paste is kept on for at least 30 minutes to ensure a good stain. We also advise parents on aftercare to get the deepest, longest-lasting colour.",
        price: "₹200",
        duration: "20 min",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}

export function getServiceBySlug(
  categorySlug: string,
  serviceSlug: string
): { category: ServiceCategory; service: Service } | undefined {
  const category = serviceCategories.find((c) => c.slug === categorySlug);
  if (!category) return undefined;
  const service = category.services.find((s) => s.slug === serviceSlug);
  if (!service) return undefined;
  return { category, service };
}

export function getAllServices(): Array<{ category: ServiceCategory; service: Service }> {
  return serviceCategories.flatMap((cat) =>
    cat.services.map((svc) => ({ category: cat, service: svc }))
  );
}
