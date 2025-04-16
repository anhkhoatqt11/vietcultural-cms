import { CollectionConfig } from 'payload'

export const Achievements: CollectionConfig = {
  slug: 'achievements',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'userId', type: 'relationship', relationTo: 'user', required: true },
    { name: 'name', type: 'text', required: true },
    { name: 'description', type: 'text', required: true },
    { name: 'stars', type: 'number', required: true },
  ],
}