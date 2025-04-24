import { CollectionConfig } from 'payload'

export const KnowledgePost: CollectionConfig = {
  slug: 'knowledge-post',
  fields: [
    {
      name: 'subject',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'post_type',
      type: 'select',
      options: ['region', 'province', 'journey', 'category'],
      required: true,
    },
  ],
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
}
