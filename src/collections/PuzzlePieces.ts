import { CollectionConfig } from 'payload'

export const PuzzlePieces: CollectionConfig = {
  slug: 'puzzle-pieces',
  fields: [
    { name: 'puzzleid', type: 'relationship', relationTo: 'puzzle-games' },
    { name: 'piece_index', type: 'number' },
    {
      name: 'image_piece',
      type: 'upload',
      relationTo: 'media', // Change if your media collection slug is different
      required: true,
    },
  ],
}