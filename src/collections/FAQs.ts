import { CollectionConfig } from 'payload';

const FAQs: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'service', 'category'],
  },
  access: {
    create: ({ req }) => Boolean(req.user),
    read: () => true,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Hair Care', value: 'hair-care' },
        { label: 'Body Care', value: 'body-care' },
        { label: 'Skin Care', value: 'skin-care' },
        { label: 'Bridal', value: 'bridal' },
        { label: 'Nails', value: 'nails' },
        { label: 'For Kids', value: 'for-kids' },
        { label: 'General', value: 'general' },
      ],
    },
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
      hasMany: false,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
};

export default FAQs;
