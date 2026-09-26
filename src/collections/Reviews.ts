import { CollectionConfig } from 'payload';

const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'service', 'rating', 'publishedAt'],
  },
  access: {
    create: ({ req }) => Boolean(req.user),
    read: () => true,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'service',
      type: 'text',
      required: true,
    },
    {
      name: 'text',
      type: 'textarea',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
      defaultValue: 5,
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
    },
  ],
};

export default Reviews;
