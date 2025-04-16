import { CollectionConfig } from 'payload'

export const User: CollectionConfig = {
  slug: 'user',
  auth: {
    verify: false, // You can set this to true if you're adding email verification
  },
  admin: {
    useAsTitle: 'full_name',
  },
  fields: [
    {
      name: 'full_name',
      type: 'text',
      required: true,
    },
    {
      name: 'username',
      type: 'text',
      unique: true,
    },
    {
      name: 'password',
      type: 'text',
      required: true,
    },
    {
      name: 'avatarUrl',
      type: 'text',
      required: false,
      defaultValue: 'https://example.com/default-avatar.png',
    },
    {
      name: 'dateOfBirth',
      type: 'date',
      required: false,
    },
    {
      name: 'location',
      type: 'text',
      required: false,
    },
    {
      name: 'gender',
      type: 'select',
      options: ['Male', 'Female', 'Other'],
      required: false,
    },
    {
      name: 'isVerified',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
