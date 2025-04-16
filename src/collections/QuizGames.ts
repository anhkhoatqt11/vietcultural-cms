import { CollectionConfig } from 'payload'

export const QuizGames: CollectionConfig = {
  slug: 'quiz-games',
  fields: [
    { name: 'regionid', type: 'relationship', relationTo: 'regions' },
    { name: 'gametype', type: 'relationship', relationTo: 'game-types' },
    { name: 'title', type: 'text' },
    { name: 'description', type: 'textarea' },
  ],
}