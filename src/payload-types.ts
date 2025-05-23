/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
    user: UserAuthOperations1;
  };
  blocks: {};
  collections: {
    users: User;
    media: Media;
    achievements: Achievement;
    'after-question-info': AfterQuestionInfo;
    comments: Comment;
    'email-verifications': EmailVerification;
    'information-slides': InformationSlide;
    'media-links': MediaLink;
    'password-resets': PasswordReset;
    posts: Post;
    'puzzle-games': PuzzleGame;
    'puzzle-pieces': PuzzlePiece;
    'quiz-games': QuizGame;
    'quiz-game-questions': QuizGameQuestion;
    'refresh-tokens': RefreshToken;
    regions: Region;
    tags: Tag;
    'treasure-cards': TreasureCard;
    'treasure-games': TreasureGame;
    'word-games': WordGame;
    'comment-reactions': CommentReaction;
    'game-types': GameType;
    user: User1;
    'knowledge-post': KnowledgePost;
    'play-process': PlayProcess;
    'knowledge-section': KnowledgeSection;
    feedback: Feedback;
    history: History;
    test: Test;
    'quiz-test': QuizTest;
    'multiple-choice': MultipleChoice;
    'scale-test': ScaleTest;
    'image-question': ImageQuestion;
    'text-question': TextQuestion;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    achievements: AchievementsSelect<false> | AchievementsSelect<true>;
    'after-question-info': AfterQuestionInfoSelect<false> | AfterQuestionInfoSelect<true>;
    comments: CommentsSelect<false> | CommentsSelect<true>;
    'email-verifications': EmailVerificationsSelect<false> | EmailVerificationsSelect<true>;
    'information-slides': InformationSlidesSelect<false> | InformationSlidesSelect<true>;
    'media-links': MediaLinksSelect<false> | MediaLinksSelect<true>;
    'password-resets': PasswordResetsSelect<false> | PasswordResetsSelect<true>;
    posts: PostsSelect<false> | PostsSelect<true>;
    'puzzle-games': PuzzleGamesSelect<false> | PuzzleGamesSelect<true>;
    'puzzle-pieces': PuzzlePiecesSelect<false> | PuzzlePiecesSelect<true>;
    'quiz-games': QuizGamesSelect<false> | QuizGamesSelect<true>;
    'quiz-game-questions': QuizGameQuestionsSelect<false> | QuizGameQuestionsSelect<true>;
    'refresh-tokens': RefreshTokensSelect<false> | RefreshTokensSelect<true>;
    regions: RegionsSelect<false> | RegionsSelect<true>;
    tags: TagsSelect<false> | TagsSelect<true>;
    'treasure-cards': TreasureCardsSelect<false> | TreasureCardsSelect<true>;
    'treasure-games': TreasureGamesSelect<false> | TreasureGamesSelect<true>;
    'word-games': WordGamesSelect<false> | WordGamesSelect<true>;
    'comment-reactions': CommentReactionsSelect<false> | CommentReactionsSelect<true>;
    'game-types': GameTypesSelect<false> | GameTypesSelect<true>;
    user: UserSelect<false> | UserSelect<true>;
    'knowledge-post': KnowledgePostSelect<false> | KnowledgePostSelect<true>;
    'play-process': PlayProcessSelect<false> | PlayProcessSelect<true>;
    'knowledge-section': KnowledgeSectionSelect<false> | KnowledgeSectionSelect<true>;
    feedback: FeedbackSelect<false> | FeedbackSelect<true>;
    history: HistorySelect<false> | HistorySelect<true>;
    test: TestSelect<false> | TestSelect<true>;
    'quiz-test': QuizTestSelect<false> | QuizTestSelect<true>;
    'multiple-choice': MultipleChoiceSelect<false> | MultipleChoiceSelect<true>;
    'scale-test': ScaleTestSelect<false> | ScaleTestSelect<true>;
    'image-question': ImageQuestionSelect<false> | ImageQuestionSelect<true>;
    'text-question': TextQuestionSelect<false> | TextQuestionSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user:
    | (User & {
        collection: 'users';
      })
    | (User1 & {
        collection: 'user';
      });
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
export interface UserAuthOperations1 {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  _key?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "achievements".
 */
export interface Achievement {
  id: number;
  userId: number | User1;
  regionId: number | Region;
  name: string;
  description: string;
  history?: boolean | null;
  intangible_heritage?: boolean | null;
  tangible_heritage?: boolean | null;
  stars?: number | null;
  badge?: (number | null) | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "user".
 */
export interface User1 {
  id: number;
  full_name: string;
  username?: string | null;
  password: string | null;
  avatarUrl?: string | null;
  dateOfBirth?: string | null;
  location?: string | null;
  gender?: ('Male' | 'Female' | 'Other') | null;
  isVerified?: boolean | null;
  age_range: 'student' | 'non_student';
  nationality: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "regions".
 */
export interface Region {
  id: number;
  regionName: string;
  regionCode: string;
  mediaUrl?: string | null;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "after-question-info".
 */
export interface AfterQuestionInfo {
  id: number;
  topicName: string;
  puzzleGameId?: (number | null) | PuzzleGame;
  quizGameQuestionId?: (number | null) | QuizGameQuestion;
  treasureCardId?: (number | null) | TreasureCard;
  wordGameId?: (number | null) | WordGame;
  gameTypeId?: (number | null) | GameType;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "puzzle-games".
 */
export interface PuzzleGame {
  id: number;
  regionid?: (number | null) | Region;
  gametype?: (number | null) | GameType;
  hint?: string | null;
  image: number | Media;
  answer?:
    | {
        index?: number | null;
        id?: string | null;
      }[]
    | null;
  answer_text?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "game-types".
 */
export interface GameType {
  id: number;
  code: 'puzzle' | 'quiz' | 'word' | 'treasure';
  name: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "quiz-game-questions".
 */
export interface QuizGameQuestion {
  id: number;
  quiz_game_id?: (number | null) | QuizGame;
  question?: string | null;
  optionA?: string | null;
  optionB?: string | null;
  optionC?: string | null;
  optionD?: string | null;
  audioUrl?: string | null;
  correctAnswer?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "quiz-games".
 */
export interface QuizGame {
  id: number;
  regionid?: (number | null) | Region;
  gametype?: (number | null) | GameType;
  title?: string | null;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "treasure-cards".
 */
export interface TreasureCard {
  id: number;
  treasureGame: number | TreasureGame;
  type: 'text' | 'image';
  value?: string | null;
  image?: (number | null) | Media;
  matchGroup: number;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "treasure-games".
 */
export interface TreasureGame {
  id: number;
  region?: (number | null) | Region;
  gametype?: (number | null) | GameType;
  title?: string | null;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "word-games".
 */
export interface WordGame {
  id: number;
  region?: (number | null) | Region;
  gametype?: (number | null) | GameType;
  question: string;
  hint?: string | null;
  answer: string;
  correctLetters?:
    | {
        letter?: string | null;
        id?: string | null;
      }[]
    | null;
  letters?:
    | {
        letter?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "comments".
 */
export interface Comment {
  id: number;
  postId?: (number | null) | Post;
  userId?: (number | null) | User1;
  content?: string | null;
  likedBy?: (number | User1)[] | null;
  parentId?: (number | null) | Comment;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: number;
  userId?: (number | null) | User1;
  title?: string | null;
  question?: string | null;
  tags?: (number | Tag)[] | null;
  likedBy?: (number | User1)[] | null;
  imageUrl?: string | null;
  image?: (number | null) | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags".
 */
export interface Tag {
  id: number;
  name: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "email-verifications".
 */
export interface EmailVerification {
  id: number;
  userId?: (number | null) | User1;
  otp?: string | null;
  expiresAt?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "information-slides".
 */
export interface InformationSlide {
  id: number;
  heading?: string | null;
  content?:
    | {
        paragraph?: string | null;
        id?: string | null;
      }[]
    | null;
  afterQuestionInfoId?: (number | null) | AfterQuestionInfo;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media-links".
 */
export interface MediaLink {
  id: number;
  images?: (number | Media)[] | null;
  youtubeLink?: string | null;
  alt?: string | null;
  afterQuestionInfoId?: (number | null) | AfterQuestionInfo;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "password-resets".
 */
export interface PasswordReset {
  id: number;
  userId: number | User1;
  otp: string;
  expiresAt: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "puzzle-pieces".
 */
export interface PuzzlePiece {
  id: number;
  puzzleid?: (number | null) | PuzzleGame;
  piece_index?: number | null;
  image_piece: number | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "refresh-tokens".
 */
export interface RefreshToken {
  id: number;
  userId: number | User1;
  hashedToken: string;
  revoked?: boolean | null;
  createdAt: string;
  updatedAt: string;
  expireAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "comment-reactions".
 */
export interface CommentReaction {
  id: number;
  user: number | User1;
  comment: number | Comment;
  reactionType: 'Like' | 'Dislike';
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "knowledge-post".
 */
export interface KnowledgePost {
  id: number;
  subject?: string | null;
  title?: string | null;
  image?: (number | null) | Media;
  content?: string | null;
  post_type: 'region' | 'province' | 'journey' | 'category';
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "play-process".
 */
export interface PlayProcess {
  id: number;
  achievementId?: (number | null) | Achievement;
  userId?: (number | null) | User1;
  history?: boolean | null;
  intangible_heritage?: boolean | null;
  tangible_heritage?: boolean | null;
  stars?: number | null;
  badge?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "knowledge-section".
 */
export interface KnowledgeSection {
  id: number;
  title?: string | null;
  items?:
    | {
        name?: string | null;
        image?: (number | null) | Media;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "feedback".
 */
export interface Feedback {
  id: number;
  userId?: (number | null) | User1;
  title?: string | null;
  content?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "history".
 */
export interface History {
  id: number;
  game_type_id?: (number | null) | GameType;
  user_id?: (number | null) | User1;
  region_id?: (number | null) | Region;
  description?: string | null;
  started_time?: string | null;
  completed_time?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "test".
 */
export interface Test {
  id: number;
  test_type?: ('input_test' | 'output_test') | null;
  user_id?: (number | null) | User1;
  result?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "quiz-test".
 */
export interface QuizTest {
  id: number;
  test_id?: (number | null) | Test;
  question?: string | null;
  optionA?: string | null;
  optionB?: string | null;
  optionC?: string | null;
  optionD?: string | null;
  audioUrl?: string | null;
  correctAnswer?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "multiple-choice".
 */
export interface MultipleChoice {
  id: number;
  test_id?: (number | null) | Test;
  question?: string | null;
  optionA?: string | null;
  optionB?: string | null;
  optionC?: string | null;
  optionD?: string | null;
  otherOption?: string | null;
  audioUrl?: string | null;
  user_answer?:
    | {
        answer?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "scale-test".
 */
export interface ScaleTest {
  id: number;
  test_id?: (number | null) | Test;
  question?: string | null;
  options?: ('step1' | 'step2' | 'step3' | 'step4' | 'step5') | null;
  user_answer?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "image-question".
 */
export interface ImageQuestion {
  id: number;
  test_id?: (number | null) | Test;
  question?: string | null;
  optionA?: (number | null) | Media;
  optionB?: (number | null) | Media;
  optionC?: (number | null) | Media;
  optionD?: (number | null) | Media;
  correctAnswer?: (number | null) | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "text-question".
 */
export interface TextQuestion {
  id: number;
  test_id?: (number | null) | Test;
  question?: string | null;
  user_answer?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'achievements';
        value: number | Achievement;
      } | null)
    | ({
        relationTo: 'after-question-info';
        value: number | AfterQuestionInfo;
      } | null)
    | ({
        relationTo: 'comments';
        value: number | Comment;
      } | null)
    | ({
        relationTo: 'email-verifications';
        value: number | EmailVerification;
      } | null)
    | ({
        relationTo: 'information-slides';
        value: number | InformationSlide;
      } | null)
    | ({
        relationTo: 'media-links';
        value: number | MediaLink;
      } | null)
    | ({
        relationTo: 'password-resets';
        value: number | PasswordReset;
      } | null)
    | ({
        relationTo: 'posts';
        value: number | Post;
      } | null)
    | ({
        relationTo: 'puzzle-games';
        value: number | PuzzleGame;
      } | null)
    | ({
        relationTo: 'puzzle-pieces';
        value: number | PuzzlePiece;
      } | null)
    | ({
        relationTo: 'quiz-games';
        value: number | QuizGame;
      } | null)
    | ({
        relationTo: 'quiz-game-questions';
        value: number | QuizGameQuestion;
      } | null)
    | ({
        relationTo: 'refresh-tokens';
        value: number | RefreshToken;
      } | null)
    | ({
        relationTo: 'regions';
        value: number | Region;
      } | null)
    | ({
        relationTo: 'tags';
        value: number | Tag;
      } | null)
    | ({
        relationTo: 'treasure-cards';
        value: number | TreasureCard;
      } | null)
    | ({
        relationTo: 'treasure-games';
        value: number | TreasureGame;
      } | null)
    | ({
        relationTo: 'word-games';
        value: number | WordGame;
      } | null)
    | ({
        relationTo: 'comment-reactions';
        value: number | CommentReaction;
      } | null)
    | ({
        relationTo: 'game-types';
        value: number | GameType;
      } | null)
    | ({
        relationTo: 'user';
        value: number | User1;
      } | null)
    | ({
        relationTo: 'knowledge-post';
        value: number | KnowledgePost;
      } | null)
    | ({
        relationTo: 'play-process';
        value: number | PlayProcess;
      } | null)
    | ({
        relationTo: 'knowledge-section';
        value: number | KnowledgeSection;
      } | null)
    | ({
        relationTo: 'feedback';
        value: number | Feedback;
      } | null)
    | ({
        relationTo: 'history';
        value: number | History;
      } | null)
    | ({
        relationTo: 'test';
        value: number | Test;
      } | null)
    | ({
        relationTo: 'quiz-test';
        value: number | QuizTest;
      } | null)
    | ({
        relationTo: 'multiple-choice';
        value: number | MultipleChoice;
      } | null)
    | ({
        relationTo: 'scale-test';
        value: number | ScaleTest;
      } | null)
    | ({
        relationTo: 'image-question';
        value: number | ImageQuestion;
      } | null)
    | ({
        relationTo: 'text-question';
        value: number | TextQuestion;
      } | null);
  globalSlug?: string | null;
  user:
    | {
        relationTo: 'users';
        value: number | User;
      }
    | {
        relationTo: 'user';
        value: number | User1;
      };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user:
    | {
        relationTo: 'users';
        value: number | User;
      }
    | {
        relationTo: 'user';
        value: number | User1;
      };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  _key?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "achievements_select".
 */
export interface AchievementsSelect<T extends boolean = true> {
  userId?: T;
  regionId?: T;
  name?: T;
  description?: T;
  history?: T;
  intangible_heritage?: T;
  tangible_heritage?: T;
  stars?: T;
  badge?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "after-question-info_select".
 */
export interface AfterQuestionInfoSelect<T extends boolean = true> {
  topicName?: T;
  puzzleGameId?: T;
  quizGameQuestionId?: T;
  treasureCardId?: T;
  wordGameId?: T;
  gameTypeId?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "comments_select".
 */
export interface CommentsSelect<T extends boolean = true> {
  postId?: T;
  userId?: T;
  content?: T;
  likedBy?: T;
  parentId?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "email-verifications_select".
 */
export interface EmailVerificationsSelect<T extends boolean = true> {
  userId?: T;
  otp?: T;
  expiresAt?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "information-slides_select".
 */
export interface InformationSlidesSelect<T extends boolean = true> {
  heading?: T;
  content?:
    | T
    | {
        paragraph?: T;
        id?: T;
      };
  afterQuestionInfoId?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media-links_select".
 */
export interface MediaLinksSelect<T extends boolean = true> {
  images?: T;
  youtubeLink?: T;
  alt?: T;
  afterQuestionInfoId?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "password-resets_select".
 */
export interface PasswordResetsSelect<T extends boolean = true> {
  userId?: T;
  otp?: T;
  expiresAt?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts_select".
 */
export interface PostsSelect<T extends boolean = true> {
  userId?: T;
  title?: T;
  question?: T;
  tags?: T;
  likedBy?: T;
  imageUrl?: T;
  image?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "puzzle-games_select".
 */
export interface PuzzleGamesSelect<T extends boolean = true> {
  regionid?: T;
  gametype?: T;
  hint?: T;
  image?: T;
  answer?:
    | T
    | {
        index?: T;
        id?: T;
      };
  answer_text?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "puzzle-pieces_select".
 */
export interface PuzzlePiecesSelect<T extends boolean = true> {
  puzzleid?: T;
  piece_index?: T;
  image_piece?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "quiz-games_select".
 */
export interface QuizGamesSelect<T extends boolean = true> {
  regionid?: T;
  gametype?: T;
  title?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "quiz-game-questions_select".
 */
export interface QuizGameQuestionsSelect<T extends boolean = true> {
  quiz_game_id?: T;
  question?: T;
  optionA?: T;
  optionB?: T;
  optionC?: T;
  optionD?: T;
  audioUrl?: T;
  correctAnswer?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "refresh-tokens_select".
 */
export interface RefreshTokensSelect<T extends boolean = true> {
  userId?: T;
  hashedToken?: T;
  revoked?: T;
  createdAt?: T;
  updatedAt?: T;
  expireAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "regions_select".
 */
export interface RegionsSelect<T extends boolean = true> {
  regionName?: T;
  regionCode?: T;
  mediaUrl?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags_select".
 */
export interface TagsSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "treasure-cards_select".
 */
export interface TreasureCardsSelect<T extends boolean = true> {
  treasureGame?: T;
  type?: T;
  value?: T;
  image?: T;
  matchGroup?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "treasure-games_select".
 */
export interface TreasureGamesSelect<T extends boolean = true> {
  region?: T;
  gametype?: T;
  title?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "word-games_select".
 */
export interface WordGamesSelect<T extends boolean = true> {
  region?: T;
  gametype?: T;
  question?: T;
  hint?: T;
  answer?: T;
  correctLetters?:
    | T
    | {
        letter?: T;
        id?: T;
      };
  letters?:
    | T
    | {
        letter?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "comment-reactions_select".
 */
export interface CommentReactionsSelect<T extends boolean = true> {
  user?: T;
  comment?: T;
  reactionType?: T;
  createdAt?: T;
  updatedAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "game-types_select".
 */
export interface GameTypesSelect<T extends boolean = true> {
  code?: T;
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "user_select".
 */
export interface UserSelect<T extends boolean = true> {
  full_name?: T;
  username?: T;
  password?: T;
  avatarUrl?: T;
  dateOfBirth?: T;
  location?: T;
  gender?: T;
  isVerified?: T;
  age_range?: T;
  nationality?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "knowledge-post_select".
 */
export interface KnowledgePostSelect<T extends boolean = true> {
  subject?: T;
  title?: T;
  image?: T;
  content?: T;
  post_type?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "play-process_select".
 */
export interface PlayProcessSelect<T extends boolean = true> {
  achievementId?: T;
  userId?: T;
  history?: T;
  intangible_heritage?: T;
  tangible_heritage?: T;
  stars?: T;
  badge?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "knowledge-section_select".
 */
export interface KnowledgeSectionSelect<T extends boolean = true> {
  title?: T;
  items?:
    | T
    | {
        name?: T;
        image?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "feedback_select".
 */
export interface FeedbackSelect<T extends boolean = true> {
  userId?: T;
  title?: T;
  content?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "history_select".
 */
export interface HistorySelect<T extends boolean = true> {
  game_type_id?: T;
  user_id?: T;
  region_id?: T;
  description?: T;
  started_time?: T;
  completed_time?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "test_select".
 */
export interface TestSelect<T extends boolean = true> {
  test_type?: T;
  user_id?: T;
  result?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "quiz-test_select".
 */
export interface QuizTestSelect<T extends boolean = true> {
  test_id?: T;
  question?: T;
  optionA?: T;
  optionB?: T;
  optionC?: T;
  optionD?: T;
  audioUrl?: T;
  correctAnswer?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "multiple-choice_select".
 */
export interface MultipleChoiceSelect<T extends boolean = true> {
  test_id?: T;
  question?: T;
  optionA?: T;
  optionB?: T;
  optionC?: T;
  optionD?: T;
  otherOption?: T;
  audioUrl?: T;
  user_answer?:
    | T
    | {
        answer?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "scale-test_select".
 */
export interface ScaleTestSelect<T extends boolean = true> {
  test_id?: T;
  question?: T;
  options?: T;
  user_answer?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "image-question_select".
 */
export interface ImageQuestionSelect<T extends boolean = true> {
  test_id?: T;
  question?: T;
  optionA?: T;
  optionB?: T;
  optionC?: T;
  optionD?: T;
  correctAnswer?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "text-question_select".
 */
export interface TextQuestionSelect<T extends boolean = true> {
  test_id?: T;
  question?: T;
  user_answer?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}