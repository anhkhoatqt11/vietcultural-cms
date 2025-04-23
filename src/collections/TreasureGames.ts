import { CollectionConfig } from 'payload'

export const TreasureGames: CollectionConfig = {
  slug: 'treasure-games',
  admin: { useAsTitle: 'title' },
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
      name: 'title',
      type: 'text',
      required: false,
    },
    {
      name: 'description',
      type: 'text',
      required: false,
    },
  ],
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
}
