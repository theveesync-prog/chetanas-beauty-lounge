import dotenv from 'dotenv';
import path from 'path';
import { getPayload } from 'payload';
import config from '../payload.config';

dotenv.config({
  path: path.resolve(__dirname, '../.env.local'),
});

const seed = async () => {
  try {
    const payload = await getPayload({ config });

    console.log('Seeding blog posts...');
    const { blogPosts } = await import('../lib/blog-data');
    
    for (const post of blogPosts) {
      await payload.create({
        collection: 'blog-posts',
        data: {
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          category: post.category,
          author: post.author,
          authorTitle: post.authorTitle,
          publishedAt: post.publishedAt,
          readTime: post.readTime,
          featured: post.featured || false,
          coverAlt: post.coverAlt,
          body: JSON.stringify(post.content),
          status: 'published',
        },
      });
      console.log(`✓ Created blog post: ${post.title}`);
    }

    console.log('\nSeeding FAQs...');
    const { getFaqsForService } = await import('../lib/service-faqs');
    const { serviceCategories } = await import('../lib/services-data');
    
    const categories = ['hair-care', 'body-care', 'skin-care', 'bridal', 'nails', 'for-kids'];
    for (const category of categories) {
      const faqs = getFaqsForService('', category);
      for (let i = 0; i < faqs.length; i++) {
        const faq = faqs[i];
        await payload.create({
          collection: 'faqs',
          data: {
            question: faq.question,
            answer: faq.answer,
            category: category,
            order: i,
          },
        });
      }
      console.log(`✓ Created ${faqs.length} FAQs for ${category}`);
    }

    console.log('\nSeeding reviews...');
    const reviews = [
      { name: 'Ananya R.', service: 'Bridal Makeup', rating: 5, text: 'Absolutely stunning work for my Tulu wedding! The bridal look was exactly what I had dreamed of — flawless skin, perfect eye makeup and it lasted all day. Chetana ma\'am has such an artist\'s eye.' },
      { name: 'Priya M.', service: 'Keratin Treatment', rating: 5, text: 'Had the keratin smoothing done here and my hair has never felt better. The team is highly skilled and explained each step. I\'ve been coming back every 6 months for the past 3 years!' },
      { name: 'Sheela D.', service: 'Skin Treatment', rating: 5, text: 'Came in for pigmentation and tan removal. After just 3 sessions my skin tone has evened out significantly. The products they use are top-quality and very safe.' },
      { name: 'Nisha K.', service: 'Pre-Bridal Package', rating: 5, text: 'Booked the 3-month pre-bridal package for my Konkani wedding. Every session was relaxing and results are so visible. My skin literally glowed on my wedding day. Cannot recommend enough!' },
      { name: 'Roshni A.', service: 'Hair Colouring', rating: 5, text: 'Got highlights and balayage done here. The colourist matched my skin tone perfectly and the colour has held so well. Staff are professional, courteous and the salon is beautifully maintained.' },
      { name: 'Divya S.', service: 'Nail Art', rating: 5, text: 'The nail art designs here are so creative and detailed. I get my nails done here before every event and they always exceed my expectations. Love the women-only environment — so comfortable!' },
      { name: 'Meena T.', service: 'Spa Body Polishing', rating: 5, text: 'The A-Z spa package is absolutely divine. I came in for the full body treatment and left completely rejuvenated. The therapists were professional and the experience was truly luxurious.' },
      { name: 'Vidya P.', service: 'HD Bridal Package', rating: 5, text: 'Booked the Royal Bridal Package for my daughter\'s wedding — we couldn\'t be happier. From the makeup to the saree draping, every detail was perfect.' },
    ];

    for (const review of reviews) {
      await payload.create({
        collection: 'reviews',
        data: {
          name: review.name,
          service: review.service,
          text: review.text,
          rating: review.rating,
          publishedAt: new Date().toISOString(),
        },
      });
    }
    console.log(`✓ Created ${reviews.length} reviews`);

    console.log('\n✓ Phase 2 seed completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seed();
