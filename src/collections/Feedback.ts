import { CollectionConfig } from 'payload'

export const Feedback: CollectionConfig = {
  slug: 'feedback',
  fields: [
    { name: 'userId', type: 'relationship', relationTo: 'user' },
    { name: 'title', type: 'text' },
    { name: 'content', type: 'text' },
  ],
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
}
