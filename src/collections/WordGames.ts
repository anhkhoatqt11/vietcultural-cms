import { CollectionConfig } from 'payload'

export const WordGames: CollectionConfig = {
  slug: 'word-games',
  fields: [
    {
      name: 'region',
      type: 'relationship',
      relationTo: 'regions',
      required: false,
    },
    { name: 'gametype', 
      type: 'relationship', 
      relationTo: 'game-types' 
    },
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'hint',
      type: 'text',
      required: false,
    },
    {
      name: 'answer',
      type: 'text',
      required: true,
    },
    {
      name: 'correctLetters',
      type: 'array',
      fields: [
        {
          name: 'letter',
          type: 'text',
        },
      ],
    },
    {
      name: 'letters',
      type: 'array',
      fields: [
        {
          name: 'letter',
          type: 'text',
        },
      ],
    },
  ],
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
}
