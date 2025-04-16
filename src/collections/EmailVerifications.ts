import { CollectionConfig } from 'payload'

export const EmailVerifications: CollectionConfig = {
  slug: 'email-verifications',
  fields: [
    { name: 'userId', type: 'relationship', relationTo: 'user' },
    { name: 'otp', type: 'text' },
    { name: 'expiresAt', type: 'date' },
  ],
}