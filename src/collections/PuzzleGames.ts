import { CollectionConfig } from 'payload'

export const PuzzleGames: CollectionConfig = {
  slug: 'puzzle-games',
  fields: [
    { name: 'regionid', type: 'relationship', relationTo: 'regions' },
    { name: 'gametype', type: 'relationship', relationTo: 'game-types' },
    { name: 'imageurl', type: 'text' },
  ],
}