import { CollectionConfig } from 'payload'

export const CommentReactions: CollectionConfig = {
  slug: 'comment-reactions',
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'user',
      required: true,
    },
    {
      name: 'comment',
      type: 'relationship',
      relationTo: 'comments',
      required: true,
    },
    {
      name: 'reactionType',
      type: 'select',
      options: ['Like', 'Dislike'],
      required: true,
    },
    {
      name: 'createdAt',
      type: 'date',
      required: true,
      defaultValue: () => new Date(),
    },
  ],
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
}
