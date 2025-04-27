import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'userId', type: 'relationship', relationTo: 'user' },
    { name: 'title', type: 'text' },
    { name: 'question', type: 'textarea' },
    { name: 'tags', type: 'relationship', relationTo: 'tags', hasMany: true },
    {
      name: 'likedBy',
      type: 'relationship',
      relationTo: 'user',
      hasMany: true,
      defaultValue: [],
    },
    {
      name: 'imageUrl',
      type: 'text',
      required: false,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // assumes you have a 'media' collection for uploads
      required: false,
      // If your media collection uses UUIDs or strings as IDs, ensure your DB column matches
      // If you are migrating from integer IDs, update your DB column type to text or uuid
    },
  ],
  access:{
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  }
}