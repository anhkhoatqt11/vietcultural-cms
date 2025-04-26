import { CollectionConfig } from 'payload'

export const Comments: CollectionConfig = {
  slug: 'comments',
  admin: { useAsTitle: 'content' },
  fields: [
    { name: 'postId', type: 'relationship', relationTo: 'posts' },
    { name: 'userId', type: 'relationship', relationTo: 'user' },
    { name: 'content', type: 'textarea' },
    { name: 'likedBy', type: 'relationship', relationTo: 'user', hasMany: true, defaultValue: [] },
    { name: 'parentId', type: 'relationship', relationTo: 'comments' },
  ],
  access:{
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  }
}