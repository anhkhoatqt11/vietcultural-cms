import { CollectionConfig } from 'payload'

export const QuizGameQuestions: CollectionConfig = {
  slug: 'quiz-game-questions',
  admin: { useAsTitle: 'question' },
  fields: [
    { name: 'quiz_game_id', type: 'relationship', relationTo: 'quiz-games' },
    { name: 'question', type: 'text' },
    { name: 'optionA', type: 'text' },
    { name: 'optionB', type: 'text' },
    { name: 'optionC', type: 'text' },
    { name: 'optionD', type: 'text' },
    { name: 'audioUrl', type: 'text' },
    { name: 'correctAnswer', type: 'text' },
  ],
  access:{
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  }
}