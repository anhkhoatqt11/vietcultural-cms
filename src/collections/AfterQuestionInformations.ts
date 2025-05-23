import { CollectionConfig } from 'payload'

export const AfterQuestionInformations: CollectionConfig = {
  slug: 'after-question-info',
  admin: { useAsTitle: 'topicName' },
  fields: [
    { name: 'topicName', type: 'text', required: true },
    { name: 'puzzleGameId', type: 'relationship', relationTo: 'puzzle-games' },
    { name: 'quizGameQuestionId', type: 'relationship', relationTo: 'quiz-game-questions' },
    { name: 'treasureCardId', type: 'relationship', relationTo: 'treasure-cards' },
    { name: 'wordGameId', type: 'relationship', relationTo: 'word-games' },
    { name: 'gameTypeId', type: 'relationship', relationTo: 'game-types' },
  ],
  access:{
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  }
}