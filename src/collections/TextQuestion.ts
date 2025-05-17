import { CollectionConfig } from 'payload'

export const TextQuestion: CollectionConfig = {
  slug: 'text-question',
  fields: [
    { name: 'test_id', type: 'relationship', relationTo: 'test' },
    { name: 'question', type: 'text' },
    { name: 'user_answer', type: 'text' },
  ],
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
}
