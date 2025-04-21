import { CollectionConfig } from 'payload'

export const PuzzleGames: CollectionConfig = {
  slug: 'puzzle-games',
  fields: [
    { name: 'regionid', type: 'relationship', relationTo: 'regions' },
    { name: 'gametype', type: 'relationship', relationTo: 'game-types' },
    { name: 'hint', type: 'text' },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Change if your media collection slug is different
      required: true,
    },    
    { name: 'answer', type: 'array', fields: [{ name: 'index', type: 'number' }] },
  ],
}