import { CollectionConfig } from 'payload'

export const ScaleTest: CollectionConfig = {
  slug: 'scale-test',
  fields: [
    { name: 'test_id', type: 'relationship', relationTo: 'test' },
    { name: 'question', type: 'text' },
    {
      name: 'options',
      type: 'select',
      options: ['step1', 'step2', 'step3', 'step4', 'step5'],
    },
    { name: 'user_answer', type: 'text' },
  ],
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
}
