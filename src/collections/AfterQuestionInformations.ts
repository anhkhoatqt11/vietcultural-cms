import { CollectionConfig } from 'payload'

export const AfterQuestionInformations: CollectionConfig = {
  slug: 'after-question-info',
  admin: { useAsTitle: 'topicName' },
  fields: [
    { name: 'topicName', type: 'text', required: true },
    { 
      name: 'gameType', 
      type: 'select', 
      required: true,
      options: [
        { label: 'Puzzle Game', value: 'puzzle' },
        { label: 'Quiz Game', value: 'quiz' },
        { label: 'Treasure Game', value: 'treasure' },
        { label: 'Word Game', value: 'word' },
      ],
      defaultValue: 'quiz',
    },
    { name: 'gameTypeId', type: 'relationship', relationTo: 'game-types' },
    { 
      name: 'quizGameId', 
      type: 'relationship', 
      relationTo: 'quiz-games',
      admin: {
        condition: (data) => data.gameType === 'quiz',
      }
    },
    { 
      name: 'quizGameQuestionId', 
      type: 'relationship', 
      relationTo: 'quiz-game-questions',
      admin: {
        condition: (data) => data.gameType === 'quiz',
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            // If it's a quiz question, make sure this field has a value
            if (data.gameType === 'quiz' && !data.quizGameQuestionId) {
              return {
                message: 'Quiz questions must be associated with a specific question',
              }
            }
            return true;
          }
        ]
      }
    },
    { 
      name: 'puzzleGameId', 
      type: 'relationship', 
      relationTo: 'puzzle-games',
      admin: {
        condition: (data) => data.gameType === 'puzzle',
      }
    },
    { 
      name: 'treasureGameId', 
      type: 'relationship', 
      relationTo: 'treasure-games',
      admin: {
        condition: (data) => data.gameType === 'treasure',
      }
    },
    { 
      name: 'wordGameId', 
      type: 'relationship', 
      relationTo: 'word-games',
      admin: {
        condition: (data) => data.gameType === 'word',
      }
    },
    { 
      name: 'content', 
      type: 'richText',
      required: true,
    },
  ],
  access:{
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  }
}