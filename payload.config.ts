import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import { seoPlugin } from '@payloadcms/plugin-seo';
import path from 'path';
import Users from './src/collections/Users';
import Media from './src/collections/Media';
import ServiceCategories from './src/collections/ServiceCategories';
import Services from './src/collections/Services';
import { SiteSettings } from './src/globals/SiteSettings';

export default buildConfig({
  admin: {
    user: Users.slug,
    disable: false,
  },
  collections: [Users, Media, ServiceCategories, Services],
  globals: [SiteSettings],
  plugins: [
    seoPlugin({
      collections: ['services'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `${doc?.name} | Chetana's Beauty`,
      generateDescription: ({ doc }) => doc?.description,
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
