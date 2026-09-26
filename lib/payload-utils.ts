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
