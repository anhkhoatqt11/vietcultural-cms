import { CollectionConfig } from 'payload'

export const MediaLinks: CollectionConfig = {
  slug: 'media-links',
  fields: [
    { name: 'src', type: 'array', fields: [{ name: 'url', type: 'text' }] },
    { name: 'alt', type: 'text' },
    { name: 'afterQuestionInfoId', type: 'relationship', relationTo: 'after-question-info' },
  ],
}