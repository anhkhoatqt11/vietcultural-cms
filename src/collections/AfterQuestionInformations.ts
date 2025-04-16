import { CollectionConfig } from 'payload'

export const AfterQuestionInformations: CollectionConfig = {
  slug: 'after-question-info',
  admin: { useAsTitle: 'topicName' },
  fields: [
    { name: 'topicName', type: 'text', required: true },
    { name: 'puzzleGameId', type: 'relationship', relationTo: 'puzzle-games' },
    { name: 'quizGameId', type: 'relationship', relationTo: 'quiz-games' },
    { name: 'treasureGameId', type: 'relationship', relationTo: 'treasure-games' },
    { name: 'wordGameId', type: 'relationship', relationTo: 'word-games' },
    { name: 'gameTypeId', type: 'relationship', relationTo: 'game-types' },
  ],
}