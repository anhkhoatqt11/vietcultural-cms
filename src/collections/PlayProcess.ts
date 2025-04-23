import { CollectionConfig } from 'payload'

export const PlayProcess: CollectionConfig = {
  slug: 'play-process',
  fields: [
    {
      name: 'achievementId',
      type: 'relationship',
      relationTo: 'achievements',
    },
    {
      name: 'userId',
      type: 'relationship',
      relationTo: 'user',
    },
    {
      name: 'history',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'intangible_heritage',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'tangible_heritage',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'stars',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'badge',
      type: 'text',
    },
  ],
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
}
