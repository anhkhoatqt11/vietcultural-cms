import { CollectionConfig } from 'payload'

export const GameTypes: CollectionConfig = {
  slug: 'game-types',
  fields: [
    {
      name: 'code',
      type: 'select',
      options: ['puzzle', 'quiz', 'word', 'treasure'],
      required: true,
      unique: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
}
