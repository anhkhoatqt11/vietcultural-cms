import { CollectionConfig } from 'payload'

export const PasswordResets: CollectionConfig = {
  slug: 'password-resets',
  fields: [
    {
      name: 'userId',
      type: 'relationship',
      relationTo: 'user',
      required: true,
    },
    {
      name: 'otp',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'expiresAt',
      type: 'date',
      required: true,
    },
  ],
  access: {
    // Example: Allow only admins to access password resets
    read: () => true, // Or you can add custom access logic here
    create: () => true,
    update: () => true,
    delete: () => false, // Or add permission logic here
  },
}
