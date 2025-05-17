// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'

import { Achievements } from './collections/Achievments'
import { AfterQuestionInformations } from './collections/AfterQuestionInformations'
import { Comments } from './collections/Comments'
import { EmailVerifications } from './collections/EmailVerifications'
import { InformationSlides } from './collections/InformationSlides'
import { MediaLinks } from './collections/MediaLinks'
import { PasswordResets } from './collections/PasswordResets'
import { Posts } from './collections/Posts'
import { PuzzleGames } from './collections/PuzzleGames'
import { PuzzlePieces } from './collections/PuzzlePieces'
import { QuizGames } from './collections/QuizGames'
import { QuizGameQuestions } from './collections/QuizGameQuestions'
import { RefreshTokens } from './collections/RefreshTokens'
import { Regions } from './collections/Regions'
import { Tags } from './collections/Tags'
import { TreasureCards } from './collections/TreasureCards'
import { TreasureGames } from './collections/TreasureGames'
import { WordGames } from './collections/WordGames'
import { CommentReactions } from './collections/CommentReactions'
import { GameTypes } from './collections/GameTypes'
import { User } from './collections/User'
import { KnowledgePost } from './collections/KnowledgePosts'
import { PlayProcess } from './collections/PlayProcess'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'
import { KnowledgeSections } from './collections/KnowledgeSections'
import { Feedback } from './collections/Feedback'
import { GameHistory } from './collections/GameHistory'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Achievements,
    AfterQuestionInformations,
    Comments,
    EmailVerifications,
    InformationSlides,
    MediaLinks,
    PasswordResets,
    Posts,
    PuzzleGames,
    PuzzlePieces,
    QuizGames,
    QuizGameQuestions,
    RefreshTokens,
    Regions,
    Tags,
    TreasureCards,
    TreasureGames,
    WordGames,
    CommentReactions,
    GameTypes,
    User,
    KnowledgePost,
    PlayProcess,
    KnowledgeSections,
    Feedback,
    GameHistory,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN || '',
      },
    }),
  ],
})
