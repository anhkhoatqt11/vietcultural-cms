import { CollectionConfig } from 'payload'

export const Regions: CollectionConfig = {
  slug: 'regions',
  fields: [
    {
      name: 'regionName',
      type: 'text',
      required: true,
    },
    {
      name: 'regionCode',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'mediaUrl',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
  ],
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
}
