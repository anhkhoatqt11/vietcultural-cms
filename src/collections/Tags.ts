import { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
}
