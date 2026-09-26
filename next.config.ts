import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  serverExternalPackages: [
    'payload',
    '@payloadcms/db-postgres',
    '@payloadcms/drizzle',
    'drizzle-kit',
  ],
};

export default nextConfig;
