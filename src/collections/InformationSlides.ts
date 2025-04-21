import { CollectionConfig } from 'payload'

export const InformationSlides: CollectionConfig = {
  slug: 'information-slides',
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'content', type: 'array', fields: [{ name: 'paragraph', type: 'text' }] },
    { name: 'afterQuestionInfoId', type: 'relationship', relationTo: 'after-question-info' },
  ],
  access:{
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  }
}