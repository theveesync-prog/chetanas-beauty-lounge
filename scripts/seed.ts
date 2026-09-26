import dotenv from 'dotenv';
import path from 'path';
import { getPayload } from 'payload';
import config from '../payload.config';

dotenv.config({
  path: path.resolve(__dirname, '../.env.local'),
});

const seed = async () => {
  const { serviceCategories } = await import('../lib/services-data');

  try {
    const payload = await getPayload({ config });

    console.log('Seeding service categories...');
    // Seed categories first
    const categoryMap: Record<string, string> = {};

    for (const category of serviceCategories) {
      const created = await payload.create({
        collection: 'service-categories',
        data: {
          label: category.label,
          slug: category.slug,
          tagline: category.tagline,
          icon: category.icon,
        },
      });
      categoryMap[category.slug] = created.id;
      console.log(`✓ Created category: ${category.label}`);
    }

    console.log('\nSeeding services...');
    // Then seed services
    for (const category of serviceCategories) {
      for (const service of category.services) {
        await payload.create({
          collection: 'services',
          data: {
            name: service.name,
            slug: service.slug,
            category: category.slug,
            description: service.description,
            longDescription: service.longDescription || '',
            price: service.price,
            originalPrice: service.originalPrice || null,
            onSale: service.onSale || false,
            duration: service.duration,
            bestseller: service.bestseller || false,
            isNew: service.isNew || false,
          },
        });
        console.log(`✓ Created service: ${service.name}`);
      }
    }

    console.log('\n✓ Seed completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seed();
