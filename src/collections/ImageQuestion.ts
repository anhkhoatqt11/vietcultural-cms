import { CollectionConfig } from 'payload'

export const ImageQuestion: CollectionConfig = {
  slug: 'image-question',
  fields: [
    { name: 'test_id', type: 'relationship', relationTo: 'test' },
    { name: 'question', type: 'text' },
    { name: 'optionA', type: 'upload', relationTo: 'media' },
    { name: 'optionB', type: 'upload', relationTo: 'media' },
    { name: 'optionC', type: 'upload', relationTo: 'media' },
    { name: 'optionD', type: 'upload', relationTo: 'media' },
    {
      name: 'correctAnswer',
      type: 'upload',
      relationTo: 'media',
    },
  ],
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
}
