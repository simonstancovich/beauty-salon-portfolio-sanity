import {defineField, defineType} from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'mainPhoto',
      title: 'Main Photo',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Service Card',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Background Image',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'icon',
              title: 'Icon (optional)',
              type: 'string',
              description: 'The icon to display for this service pasted as <iconName/>',
            }),
            defineField({
              name: 'link',
              title: 'Link (optional)',
              type: 'url',
              description: 'Where this card should point',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'icon',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'treatmentsImage',
      title: 'Treatments Image',
      type: 'image',
      description: 'Image for the treatments preview section',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'treatmentsPreview',
      title: 'Treatments Preview',
      type: 'array',
      description: 'Items for the treatments preview section',
      validation: (rule) => rule.required(),
      of: [
        {
          type: 'object',
          title: 'Treatment Card',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'subtitle',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'treatments',
              title: 'Treatments',
              type: 'array',
              of: [
                defineField({
                  name: 'treatment',
                  title: 'Treatment',
                  type: 'object',
                  validation: (rule) => rule.required(),
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    },
                    {
                      name: 'price',
                      title: 'Price',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    },
                  ],
                }),
              ],
            }),

            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})
