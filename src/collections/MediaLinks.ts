import { CollectionConfig } from 'payload'

export const MediaLinks: CollectionConfig = {
  slug: 'media-links',
  fields: [
    {
      name: 'images',
      type: 'relationship',
      relationTo: 'media', // or your images collection slug
      hasMany: true,
      required: false,
      // If your media collection uses UUIDs or another type for IDs, specify the type here if Payload supports it
      // Example: relationType: 'string', // Uncomment and set appropriately if needed
    },
    {
      name: 'youtubeLink',
      type: 'text',
      required: false,
    },
    { name: 'alt', type: 'text' },
    { name: 'afterQuestionInfoId', type: 'relationship', relationTo: 'after-question-info' },
  ],
  access:{
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  }
}