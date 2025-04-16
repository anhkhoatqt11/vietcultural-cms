import { CollectionConfig } from 'payload'

export const Comments: CollectionConfig = {
  slug: 'comments',
  fields: [
    { name: 'postId', type: 'relationship', relationTo: 'posts' },
    { name: 'userId', type: 'relationship', relationTo: 'user' },
    { name: 'content', type: 'textarea' },
    { name: 'likes', type: 'number', defaultValue: 0 },
    { name: 'dislikes', type: 'number', defaultValue: 0 },
    { name: 'parentId', type: 'relationship', relationTo: 'comments' },
  ],
}