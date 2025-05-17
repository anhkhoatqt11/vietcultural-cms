import { CollectionConfig } from 'payload'

export const GameHistory: CollectionConfig = {
  slug: 'game-history',
  fields: [
    {
      name: 'game_type_id',
      type: 'relationship',
      relationTo: 'game-types',
    },
    {
      name: 'puzzle_game_id',
      type: 'relationship',
      relationTo: 'puzzle-games',
    },
    {
      name: 'quiz_game_id',
      type: 'relationship',
      relationTo: 'puzzle-games',
    },
    {
      name: 'treasure_game_id',
      type: 'relationship',
      relationTo: 'treasure-games',
    },
    {
      name: 'word_game_id',
      type: 'relationship',
      relationTo: 'word-games',
    },
    {
      name: 'started_time',
      type: 'date',
    },
    {
      name: 'completed_time',
      type: 'date',
    },
  ],
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
}
