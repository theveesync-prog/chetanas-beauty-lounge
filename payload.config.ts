import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import { seoPlugin } from '@payloadcms/plugin-seo';
import path from 'path';
import Users from './src/collections/Users';
import Media from './src/collections/Media';
import ServiceCategories from './src/collections/ServiceCategories';
import Services from './src/collections/Services';
import BlogPosts from './src/collections/BlogPosts';
import FAQs from './src/collections/FAQs';
import Gallery from './src/collections/Gallery';
import Reviews from './src/collections/Reviews';
import { SiteSettings } from './src/globals/SiteSettings';

export default buildConfig({
  admin: {
    user: Users.slug,
    disable: false,
  },
  collections: [Users, Media, ServiceCategories, Services, BlogPosts, FAQs, Gallery, Reviews],
  globals: [SiteSettings],
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
  }),
  secret: process.env.PAYLOAD_SECRET || 'secret-key-change-this',
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
