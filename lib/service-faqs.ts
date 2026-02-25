export interface ServiceFAQ {
  question: string;
  answer: string;
}

const categoryFaqs: Record<string, ServiceFAQ[]> = {
  "hair-care": [
    {
      question: "How often should I get a hair treatment at the salon?",
      answer: "For everyday services like trims and blowouts, we recommend every 4–6 weeks. Colour touch-ups are best every 6–8 weeks, while deep conditioning treatments work best as a monthly routine. Keratin smoothing lasts about 3 months before needing a refresh. Your stylist will recommend a schedule based on your hair type and goals.",
    },
    {
      question: "Do you do a patch test before colouring?",
      answer: "Yes — we perform a patch test 48 hours before any chemical colour service if it's your first visit or if you're switching to a new product range. This is standard practice and helps ensure there are no allergic reactions. Please call ahead to schedule your patch test.",
    },
    {
      question: "Is the salon suitable for all hair types?",
      answer: "Absolutely. Our team is trained to work with all hair textures — straight, wavy, curly, and coily — and all hair types from fine to thick. We select products and techniques specifically suited to your hair's unique characteristics.",
    },
    {
      question: "Can I bring a reference photo for my haircut?",
      answer: "We love reference photos! They give us a clear picture of the style you're aiming for. During your consultation, we'll discuss how the reference can be adapted to suit your face shape, hair texture, and lifestyle so the result works perfectly for you.",
    },
    {
      question: "What products do you use?",
      answer: "We use premium, salon-grade products that are ammonia-free where possible and safe for all hair types. Our range includes professional colour lines, keratin treatments, and conditioning masks from trusted brands. We're happy to share specific product details during your appointment.",
    },
  ],
  "body-care": [
    {
      question: "How should I prepare for a waxing session?",
      answer: "For the best results, hair should be about 5mm long (roughly 2–3 weeks of growth). Avoid sun exposure, exfoliating, or applying creams to the area for 24 hours before your appointment. If it's your first time, let your therapist know so she can take extra care.",
    },
    {
      question: "Is waxing painful?",
      answer: "There can be mild discomfort, especially for first-timers, but our therapists use high-quality wax and expert technique to minimize pain. Regular waxing sessions actually reduce discomfort over time as hair grows back finer and sparser. We also offer soothing post-wax care to calm the skin immediately.",
    },
    {
      question: "How long do massage results last?",
      answer: "Most clients feel the relaxing effects of a full body massage for 3–7 days. For chronic tension or stress, we recommend regular monthly sessions for cumulative benefits. A single massage provides immediate relief, while a consistent routine delivers lasting improvements in flexibility, sleep quality, and overall well-being.",
    },
    {
      question: "Can I book a massage if I have a medical condition?",
      answer: "Please inform your therapist about any medical conditions, allergies, recent surgeries, or pregnancy before the session begins. Most conditions are easily accommodated with modified techniques. For specific medical concerns, we may ask for a doctor's clearance before proceeding.",
    },
    {
      question: "What should I wear to a body treatment?",
      answer: "Wear comfortable, loose clothing. For massage and scrub treatments, you'll change into a disposable robe and undergarments in a private room. Towels and draping are used throughout the session for modesty and warmth. Everything is designed for your complete comfort and privacy.",
    },
  ],
  "skin-care": [
    {
      question: "How often should I get a facial?",
      answer: "For most skin types, a professional facial every 4–6 weeks is ideal — this aligns with the skin's natural cell renewal cycle. If you have specific concerns like acne or pigmentation, your aesthetician may recommend a more frequent schedule initially, tapering to monthly maintenance once results are achieved.",
    },
    {
      question: "Will a facial cause breakouts?",
      answer: "A slight purging effect (one or two small breakouts) can occur after a facial with deep extraction — this is normal and temporary as impurities are drawn to the surface. It typically resolves within 2–3 days. We always finish with a calming, anti-inflammatory mask to minimize this. If you have very sensitive skin, let us know in advance.",
    },
    {
      question: "What's the difference between a facial and a cleanup?",
      answer: "A cleanup is a shorter, focused treatment (30 minutes) — deep cleanse, extraction, and a quick mask. A full facial (60–75 minutes) includes everything in a cleanup plus exfoliation, a targeted serum treatment, an extended massage, and a customised mask. Cleanups are great for maintenance; facials are for deeper, more visible results.",
    },
    {
      question: "Are your skin treatments safe for sensitive skin?",
      answer: "Yes. We always begin with a brief skin assessment and select products suited to your skin type. For sensitive skin, we use fragrance-free, hypoallergenic formulations and gentler extraction techniques. Please mention any known allergies or sensitivities when booking so we can prepare accordingly.",
    },
    {
      question: "How many sessions does it take to see results for pigmentation or tanning?",
      answer: "Most clients notice visible improvement after 2–3 sessions of D-Tan or targeted facial treatments, spaced 2–3 weeks apart. Deeper pigmentation may require 6–8 sessions combined with a recommended home care routine. Consistency and sun protection between sessions are key to lasting results.",
    },
  ],
  "bridal": [
    {
      question: "How far in advance should I book bridal services?",
      answer: "We recommend booking at least 2–3 months in advance for bridal makeup, and starting the pre-bridal package 4–6 weeks before your wedding date. Peak wedding season (October to February) slots fill up quickly, so early booking ensures you get your preferred date and time.",
    },
    {
      question: "Do you offer a trial session before the wedding day?",
      answer: "Yes — we highly recommend a trial makeup session. It allows us to finalize your look, test products on your skin, and ensure you're completely comfortable with the final result. Trials are typically scheduled 2–4 weeks before the wedding. Trial sessions are charged separately.",
    },
    {
      question: "Can you travel to the venue for bridal makeup?",
      answer: "Yes, we offer on-location bridal services at your home, hotel, or wedding venue within Mangalore city and surrounding areas. Travel charges may apply for locations beyond 15 km from Kankanady. Please mention your venue when booking so we can plan accordingly.",
    },
    {
      question: "What bridal traditions do you cater to?",
      answer: "We have extensive experience with Tulu Hindu, Konkani Catholic, Beary Muslim, North Indian, and destination wedding traditions. Each community has specific jewellery, attire, and makeup requirements — and our team understands these nuances deeply, having served over 500 Mangalore brides across all communities.",
    },
    {
      question: "Can I customize my bridal package?",
      answer: "Absolutely. Our pre-bridal and bridal packages are fully customizable. During the consultation, we'll discuss your needs, wedding timeline, and budget to create a bespoke plan. Whether you need extra facial sessions, hair treatments, or family member makeup on the wedding day, we can accommodate it all.",
    },
  ],
  "nails": [
    {
      question: "How long does a gel manicure last?",
      answer: "A professionally applied gel manicure lasts 2–3 weeks without chipping. The longevity depends on your nail growth rate and daily activities. We recommend a gel removal and reapplication every 2–3 weeks to keep your nails healthy and looking fresh. Never peel off gel polish at home — it damages the natural nail.",
    },
    {
      question: "Are your nail products safe and non-toxic?",
      answer: "Yes. We use salon-grade polishes that are free from the most harmful chemicals (formaldehyde, toluene, and DBP). Our kids' polishes are water-based and completely non-toxic. If you have specific allergies or sensitivities, please let us know and we'll select the safest products for you.",
    },
    {
      question: "What's the difference between gel and acrylic nails?",
      answer: "Gel nails are lighter, more flexible, and have a glossy finish — they're great for a natural look. Acrylic nails are thicker, stronger, and better for dramatic lengths and shapes. Gel is applied in layers and cured with UV light, while acrylic is sculpted from a liquid-powder mix. Your nail technician can help you choose based on your lifestyle and preferences.",
    },
    {
      question: "Can I get nail art on just a few nails?",
      answer: "Of course! Our nail art is priced per nail, so you can choose to accent just one or two feature nails or go all-in on a full set. Many clients opt for art on the ring finger or thumb for a stylish, understated look. Bring a reference photo or let our artist create a custom design.",
    },
    {
      question: "How do I maintain my manicure between salon visits?",
      answer: "Apply cuticle oil daily, wear gloves when cleaning or washing dishes, and avoid using your nails as tools. For gel nails, a thin top coat refresh after a week can extend the shine. Moisturise your hands regularly and avoid acetone-based removers between visits.",
    },
  ],
  "for-kids": [
    {
      question: "What age group are kids' services suitable for?",
      answer: "Our kids' services are designed for children aged 3–12 years. We use gentle, child-safe products and our stylists are experienced in working with children of all temperaments. For very young children (under 5), we recommend a parent stay nearby for comfort.",
    },
    {
      question: "Are the products used on children safe?",
      answer: "Absolutely. We use only hypoallergenic, dermatologically tested, and non-toxic products for all kids' services. Nail polishes are water-based and free from harsh chemicals. Henna is 100% natural with no synthetic additives. Makeup products are gentle, easily removable, and specifically formulated for children's sensitive skin.",
    },
    {
      question: "Can a parent stay with the child during the service?",
      answer: "Yes — parents are always welcome to stay with their child throughout the entire appointment. We find that younger children feel more comfortable when a parent is nearby. Our salon has a warm, welcoming atmosphere designed to put both children and parents at ease.",
    },
    {
      question: "How long should my child's hair be for a haircut?",
      answer: "There's no minimum hair length — we can work with any length. For very short cuts, trims, or first haircuts, we're happy to accommodate. If you have a specific style in mind, feel free to bring a reference photo. Our stylists will advise on what's achievable with your child's current hair length and texture.",
    },
    {
      question: "Do you offer party packages for kids?",
      answer: "Yes! We can arrange party packages for birthday celebrations and special occasions that include hair styling, mini manicures, and fun party makeup for groups. Please call us at least a week in advance to discuss group size, services, and scheduling so we can prepare everything perfectly.",
    },
  ],
};

export function getFaqsForService(
  _serviceSlug: string,
  categorySlug: string
): ServiceFAQ[] {
  return categoryFaqs[categorySlug] ?? [];
}
