import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'userId', type: 'relationship', relationTo: 'user' },
    { name: 'title', type: 'text' },
    { name: 'question', type: 'textarea' },
    { name: 'media', type: 'json' },
    { name: 'tags', type: 'relationship', relationTo: 'tags', hasMany: true },
  ],
}