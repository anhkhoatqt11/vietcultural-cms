import { CollectionConfig } from 'payload'

export const MultipleChoice: CollectionConfig = {
  slug: 'multiple-choice',
  fields: [
    { name: 'test_id', type: 'relationship', relationTo: 'test' },
    { name: 'question', type: 'text' },
    { name: 'optionA', type: 'text' },
    { name: 'optionB', type: 'text' },
    { name: 'optionC', type: 'text' },
    { name: 'optionD', type: 'text' },
    { name: 'otherOption', type: 'text' },
    { name: 'audioUrl', type: 'text' },
    {
      name: 'user_answer',
      type: 'array',
      fields: [
        {
          name: 'answer',
          type: 'text',
        },
      ],
    },
  ],
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
}
