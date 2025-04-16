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
