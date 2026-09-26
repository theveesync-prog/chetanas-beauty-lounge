import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { seoPlugin } from '@payloadcms/plugin-seo';
import path from 'path';
import Users from './src/collections/Users.ts';
import Media from './src/collections/Media.ts';
import ServiceCategories from './src/collections/ServiceCategories.ts';
import Services from './src/collections/Services.ts';
import BlogPosts from './src/collections/BlogPosts.ts';
import FAQs from './src/collections/FAQs.ts';
import Gallery from './src/collections/Gallery.ts';
import Reviews from './src/collections/Reviews.ts';
import { SiteSettings } from './src/globals/SiteSettings.ts';

export default buildConfig({
  admin: {
    user: Users.slug,
    disable: false,
  },
  collections: [Users, Media, ServiceCategories, Services, BlogPosts, FAQs, Gallery, Reviews],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  plugins: [
    seoPlugin({
      collections: ['services', 'blog-posts'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => {
        if (doc?.name) return `${doc.name} | Chetana's Beauty`;
        if (doc?.title) return `${doc.title} | Chetana's Beauty Blog`;
        return 'Chetana\'s Beauty Lounge';
      },
      generateDescription: ({ doc }) => doc?.description || doc?.excerpt || '',
    }),
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
    push: true,
  }),
  secret: process.env.PAYLOAD_SECRET || 'secret-key-change-this',
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
