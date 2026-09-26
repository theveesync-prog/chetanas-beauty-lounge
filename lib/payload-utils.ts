import { getPayload, BasePayload } from 'payload';
import config from '@/payload.config';

let payloadInstance: BasePayload | null = null;

export const getPayloadInstance = async () => {
  if (!payloadInstance) {
    payloadInstance = await getPayload({ config });
  }
  return payloadInstance;
};

export const getAllServices = async () => {
  try {
    const payload = await getPayloadInstance();
    const services = await payload.find({
      collection: 'services',
      limit: 1000,
    });
    return services.docs || [];
  } catch (error) {
    console.error('Error fetching services from Payload:', error);
    return [];
  }
};

export const getServiceBySlug = async (categorySlug: string, serviceSlug: string) => {
  try {
    const payload = await getPayloadInstance();
    const services = await payload.find({
      collection: 'services',
      where: {
        slug: { equals: serviceSlug },
      },
      limit: 1,
    });
    return services.docs?.[0] || null;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
};

export const getSiteSettings = async () => {
  try {
    const payload = await getPayloadInstance();
    const settings = await payload.findGlobal({
      slug: 'site-settings',
    });
    return settings;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
};

export const getAllBlogPosts = async () => {
  try {
    const payload = await getPayloadInstance();
    const posts = await payload.find({
      collection: 'blog-posts',
      where: {
        status: { equals: 'published' },
      },
      limit: 1000,
      sort: '-publishedAt',
    });
    return posts.docs || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

export const getBlogPostBySlug = async (slug: string) => {
  try {
    const payload = await getPayloadInstance();
    const posts = await payload.find({
      collection: 'blog-posts',
      where: {
        slug: { equals: slug },
        status: { equals: 'published' },
      },
      limit: 1,
    });
    return posts.docs?.[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

export const getFAQsByCategory = async (category: string) => {
  try {
    const payload = await getPayloadInstance();
    const faqs = await payload.find({
      collection: 'faqs',
      where: {
        category: { equals: category },
      },
      limit: 1000,
      sort: 'order',
    });
    return faqs.docs || [];
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
};

export const getGalleryByCategory = async (category: string) => {
  try {
    const payload = await getPayloadInstance();
    const gallery = await payload.find({
      collection: 'gallery',
      where: {
        category: { equals: category },
      },
      limit: 1000,
      sort: 'order',
    });
    return gallery.docs || [];
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return [];
  }
};

export const getAllGallery = async () => {
  try {
    const payload = await getPayloadInstance();
    const gallery = await payload.find({
      collection: 'gallery',
      limit: 1000,
      sort: 'order',
    });
    return gallery.docs || [];
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return [];
  }
};

export const getReviews = async () => {
  try {
    const payload = await getPayloadInstance();
    const reviews = await payload.find({
      collection: 'reviews',
      limit: 1000,
      sort: '-publishedAt',
    });
    return reviews.docs || [];
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
};
