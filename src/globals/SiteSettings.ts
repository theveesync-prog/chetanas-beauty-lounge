import type { GlobalConfig } from 'payload';

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
    {
      name: 'contact',
      type: 'group',
      fields: [
        {
          name: 'phone',
          type: 'text',
          required: true,
          defaultValue: '+91 98452 92411',
        },
        {
          name: 'whatsapp',
          type: 'text',
          required: true,
          defaultValue: '919845292411',
        },
        {
          name: 'phoneSecondary',
          type: 'text',
          defaultValue: '+91 91085 83714',
        },
        {
          name: 'address',
          type: 'textarea',
          required: true,
          defaultValue:
            '3rd floor, Gate Building, Suit A, Kankanady Bypass Rd, Kankanady, Mangaluru, Karnataka 575002',
        },
        {
          name: 'openingHours',
          type: 'textarea',
          defaultValue: 'Mon–Sat: 10:00 AM – 7:00 PM\nSun: 12:00 PM – 6:00 PM',
        },
        {
          name: 'mapEmbedUrl',
          type: 'text',
          defaultValue: 'https://maps.google.com/maps?q=12.8699033,74.8605861&z=17&ie=UTF8&iwloc=&output=embed',
        },
      ],
    },
    {
      name: 'homepage',
      type: 'group',
      fields: [
        {
          name: 'faqs',
          type: 'array',
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
          ],
          defaultValue: [],
        },
      ],
    },
  ],
};
