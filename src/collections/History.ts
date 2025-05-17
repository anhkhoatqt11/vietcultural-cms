import { CollectionConfig } from 'payload'

export const History: CollectionConfig = {
  slug: 'history',
  fields: [
    {
      name: 'game_type_id',
      type: 'relationship',
      relationTo: 'game-types',
    },
    {
      name: 'user_id',
      type: 'relationship',
      relationTo: 'user',
    },
    {
      name: 'region_id',
      type: 'relationship',
      relationTo: 'regions',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'started_time',
      type: 'date',
    },
    {
      name: 'completed_time',
      type: 'date',
    },
  ],
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
}
