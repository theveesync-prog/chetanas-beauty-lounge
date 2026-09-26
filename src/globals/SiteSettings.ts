import { GlobalConfig } from 'payload';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: "Mangalore's Best Ladies Salon",
        },
        {
          name: 'subheading',
          type: 'textarea',
          required: true,
          defaultValue:
            'Expert bridal makeup, advanced skin treatments & a celebrated beauty academy — rooted in Kankanady since 1998.',
        },
        {
          name: 'video',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
};
