import { CollectionConfig } from 'payload'

export const Test: CollectionConfig = {
  slug: 'test',
  fields: [
    {
      name: 'test_type',
      type: 'select',
      options: ['input_test', 'output_test'],
    },
    {
      name: 'user_id',
      type: 'relationship',
      relationTo: 'user',
    },
    {
      name: 'result',
      type: 'text',
    },
  ],
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
}
