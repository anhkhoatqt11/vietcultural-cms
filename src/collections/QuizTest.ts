import { CollectionConfig } from 'payload'

export const QuizTest: CollectionConfig = {
  slug: 'quiz-test',
  fields: [
    { name: 'test_id', type: 'relationship', relationTo: 'test' },
    { name: 'question', type: 'text' },
    { name: 'optionA', type: 'text' },
    { name: 'optionB', type: 'text' },
    { name: 'optionC', type: 'text' },
    { name: 'optionD', type: 'text' },
    { name: 'audioUrl', type: 'text' },
    { name: 'correctAnswer', type: 'text' },
  ],
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
}
