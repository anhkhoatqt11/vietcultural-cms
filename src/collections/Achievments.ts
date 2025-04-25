import { CollectionConfig } from 'payload'

export const Achievements: CollectionConfig = {
  slug: 'achievements',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'userId', type: 'relationship', relationTo: 'user', required: true },
    { name: 'regionId', type: 'relationship', relationTo: 'regions', required: true },
    { name: 'name', type: 'text', required: true },
    { name: 'description', type: 'text', required: true },
    { name: 'history', type: 'checkbox', defaultValue: false },
    {
      name: 'intangible_heritage',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'tangible_heritage',
      type: 'checkbox',
      defaultValue: false,
    },
    { name: 'stars', type: 'number', defaultValue: 0 },
    { name: 'badge', type: 'upload', relationTo: 'media' },
  ],
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
}
