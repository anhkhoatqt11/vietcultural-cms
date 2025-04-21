import { CollectionConfig } from 'payload'

export const TreasureCards: CollectionConfig = {
  slug: 'treasure-cards',
  fields: [
    {
      name: 'treasureGame',
      type: 'relationship',
      relationTo: 'treasure-games',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: ['text', 'image'],
      required: true,
    },
    {
      name: 'value',
      type: 'text',
      required: true,
      admin: {
        condition: (data) => data?.type === 'text',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Change to your media collection slug if different
      required: true,
      admin: {
        condition: (data) => data?.type === 'image',
      },
    },
    {
      name: 'matchGroup',
      type: 'number',
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
