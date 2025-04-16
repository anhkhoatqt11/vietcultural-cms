import { CollectionConfig } from 'payload'

export const RefreshTokens: CollectionConfig = {
  slug: 'refresh-tokens',
  fields: [
    {
      name: 'userId',
      type: 'relationship',
      relationTo: 'user',
      required: true,
    },
    {
      name: 'hashedToken',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'revoked',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'createdAt',
      type: 'date',
      required: true,
      defaultValue: () => new Date(),
    },
    {
      name: 'updatedAt',
      type: 'date',
      required: true,
    },
    {
      name: 'expireAt',
      type: 'date',
      required: true,
    },
  ],
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => false,
  },
}
