import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_treasure_cards_type" AS ENUM('text', 'image');
  CREATE TYPE "public"."enum_comment_reactions_reaction_type" AS ENUM('Like', 'Dislike');
  CREATE TYPE "public"."enum_game_types_code" AS ENUM('puzzle', 'quiz', 'word', 'treasure');
  CREATE TYPE "public"."enum_user_gender" AS ENUM('Male', 'Female', 'Other');
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "achievements" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"user_id_id" integer NOT NULL,
  	"name" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"stars" numeric NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "after_question_info" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"topic_name" varchar NOT NULL,
  	"puzzle_game_id_id" integer,
  	"quiz_game_id_id" integer,
  	"treasure_game_id_id" integer,
  	"word_game_id_id" integer,
  	"game_type_id_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "comments" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"post_id_id" integer,
  	"user_id_id" integer,
  	"content" varchar,
  	"likes" numeric DEFAULT 0,
  	"dislikes" numeric DEFAULT 0,
  	"parent_id_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "email_verifications" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"user_id_id" integer,
  	"otp" varchar,
  	"expires_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "information_slides_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraph" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "information_slides" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"after_question_info_id_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "media_links_src" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "media_links" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"after_question_info_id_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "password_resets" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"user_id_id" integer NOT NULL,
  	"token" varchar NOT NULL,
  	"expires_at" timestamp(3) with time zone NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"user_id_id" integer,
  	"title" varchar,
  	"question" varchar,
  	"media" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"tags_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "puzzle_games" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"regionid_id" integer,
  	"gametype_id" integer,
  	"imageurl" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "puzzle_pieces" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"puzzleid_id" integer,
  	"piece_index" numeric,
  	"x_position" numeric,
  	"y_position" numeric,
  	"correct_x" numeric,
  	"correct_y" numeric,
  	"image_piece_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "quiz_games" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"regionid_id" integer,
  	"gametype_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "quiz_game_questions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"quiz_game_id_id" integer,
  	"question" varchar,
  	"option_a" varchar,
  	"option_b" varchar,
  	"option_c" varchar,
  	"option_d" varchar,
  	"correct_answer" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "refresh_tokens" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"user_id_id" integer NOT NULL,
  	"hashed_token" varchar NOT NULL,
  	"revoked" boolean DEFAULT false,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"expire_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "regions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"region_name" varchar NOT NULL,
  	"region_code" varchar NOT NULL,
  	"media_url" varchar,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "tags" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "treasure_cards" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"treasure_game_id" integer NOT NULL,
  	"type" "enum_treasure_cards_type" NOT NULL,
  	"value" varchar NOT NULL,
  	"match_group" numeric NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "treasure_games" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"region_id" integer,
  	"gametype" numeric DEFAULT 2,
  	"title" varchar,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "word_games_correct_letters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"letter" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "word_games_letters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"letter" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "word_games" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"region_id" integer,
  	"gametype" numeric DEFAULT 3,
  	"question" varchar NOT NULL,
  	"hint" varchar,
  	"answer" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "comment_reactions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"user_id" integer NOT NULL,
  	"comment_id" integer NOT NULL,
  	"reaction_type" "enum_comment_reactions_reaction_type" NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "game_types" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"code" "enum_game_types_code" NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "user" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"full_name" varchar NOT NULL,
  	"username" varchar,
  	"avatar_url" varchar DEFAULT 'https://example.com/default-avatar.png',
  	"date_of_birth" timestamp(3) with time zone,
  	"location" varchar,
  	"gender" "enum_user_gender",
  	"is_verified" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"achievements_id" integer,
  	"after_question_info_id" integer,
  	"comments_id" integer,
  	"email_verifications_id" integer,
  	"information_slides_id" integer,
  	"media_links_id" integer,
  	"password_resets_id" integer,
  	"posts_id" integer,
  	"puzzle_games_id" integer,
  	"puzzle_pieces_id" integer,
  	"quiz_games_id" integer,
  	"quiz_game_questions_id" integer,
  	"refresh_tokens_id" integer,
  	"regions_id" integer,
  	"tags_id" integer,
  	"treasure_cards_id" integer,
  	"treasure_games_id" integer,
  	"word_games_id" integer,
  	"comment_reactions_id" integer,
  	"game_types_id" integer,
  	"user_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"user_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "achievements" ADD CONSTRAINT "achievements_user_id_id_user_id_fk" FOREIGN KEY ("user_id_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "after_question_info" ADD CONSTRAINT "after_question_info_puzzle_game_id_id_puzzle_games_id_fk" FOREIGN KEY ("puzzle_game_id_id") REFERENCES "public"."puzzle_games"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "after_question_info" ADD CONSTRAINT "after_question_info_quiz_game_id_id_quiz_games_id_fk" FOREIGN KEY ("quiz_game_id_id") REFERENCES "public"."quiz_games"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "after_question_info" ADD CONSTRAINT "after_question_info_treasure_game_id_id_treasure_games_id_fk" FOREIGN KEY ("treasure_game_id_id") REFERENCES "public"."treasure_games"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "after_question_info" ADD CONSTRAINT "after_question_info_word_game_id_id_word_games_id_fk" FOREIGN KEY ("word_game_id_id") REFERENCES "public"."word_games"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "after_question_info" ADD CONSTRAINT "after_question_info_game_type_id_id_game_types_id_fk" FOREIGN KEY ("game_type_id_id") REFERENCES "public"."game_types"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "comments" ADD CONSTRAINT "comments_post_id_id_posts_id_fk" FOREIGN KEY ("post_id_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "comments" ADD CONSTRAINT "comments_user_id_id_user_id_fk" FOREIGN KEY ("user_id_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "comments" ADD CONSTRAINT "comments_parent_id_id_comments_id_fk" FOREIGN KEY ("parent_id_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "email_verifications" ADD CONSTRAINT "email_verifications_user_id_id_user_id_fk" FOREIGN KEY ("user_id_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "information_slides_content" ADD CONSTRAINT "information_slides_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."information_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "information_slides" ADD CONSTRAINT "information_slides_after_question_info_id_id_after_question_info_id_fk" FOREIGN KEY ("after_question_info_id_id") REFERENCES "public"."after_question_info"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media_links_src" ADD CONSTRAINT "media_links_src_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media_links" ADD CONSTRAINT "media_links_after_question_info_id_id_after_question_info_id_fk" FOREIGN KEY ("after_question_info_id_id") REFERENCES "public"."after_question_info"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "password_resets" ADD CONSTRAINT "password_resets_user_id_id_user_id_fk" FOREIGN KEY ("user_id_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_user_id_id_user_id_fk" FOREIGN KEY ("user_id_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "puzzle_games" ADD CONSTRAINT "puzzle_games_regionid_id_regions_id_fk" FOREIGN KEY ("regionid_id") REFERENCES "public"."regions"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "puzzle_games" ADD CONSTRAINT "puzzle_games_gametype_id_game_types_id_fk" FOREIGN KEY ("gametype_id") REFERENCES "public"."game_types"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "puzzle_pieces" ADD CONSTRAINT "puzzle_pieces_puzzleid_id_puzzle_games_id_fk" FOREIGN KEY ("puzzleid_id") REFERENCES "public"."puzzle_games"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "quiz_games" ADD CONSTRAINT "quiz_games_regionid_id_regions_id_fk" FOREIGN KEY ("regionid_id") REFERENCES "public"."regions"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "quiz_games" ADD CONSTRAINT "quiz_games_gametype_id_game_types_id_fk" FOREIGN KEY ("gametype_id") REFERENCES "public"."game_types"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "quiz_game_questions" ADD CONSTRAINT "quiz_game_questions_quiz_game_id_id_quiz_games_id_fk" FOREIGN KEY ("quiz_game_id_id") REFERENCES "public"."quiz_games"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "refresh_tokens" ADD CONSTRAINT "refresh_tokens_user_id_id_user_id_fk" FOREIGN KEY ("user_id_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "treasure_cards" ADD CONSTRAINT "treasure_cards_treasure_game_id_treasure_games_id_fk" FOREIGN KEY ("treasure_game_id") REFERENCES "public"."treasure_games"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "treasure_games" ADD CONSTRAINT "treasure_games_region_id_regions_id_fk" FOREIGN KEY ("region_id") REFERENCES "public"."regions"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "word_games_correct_letters" ADD CONSTRAINT "word_games_correct_letters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."word_games"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "word_games_letters" ADD CONSTRAINT "word_games_letters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."word_games"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "word_games" ADD CONSTRAINT "word_games_region_id_regions_id_fk" FOREIGN KEY ("region_id") REFERENCES "public"."regions"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "comment_reactions" ADD CONSTRAINT "comment_reactions_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "comment_reactions" ADD CONSTRAINT "comment_reactions_comment_id_comments_id_fk" FOREIGN KEY ("comment_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_achievements_fk" FOREIGN KEY ("achievements_id") REFERENCES "public"."achievements"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_after_question_info_fk" FOREIGN KEY ("after_question_info_id") REFERENCES "public"."after_question_info"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_comments_fk" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_email_verifications_fk" FOREIGN KEY ("email_verifications_id") REFERENCES "public"."email_verifications"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_information_slides_fk" FOREIGN KEY ("information_slides_id") REFERENCES "public"."information_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_links_fk" FOREIGN KEY ("media_links_id") REFERENCES "public"."media_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_password_resets_fk" FOREIGN KEY ("password_resets_id") REFERENCES "public"."password_resets"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_puzzle_games_fk" FOREIGN KEY ("puzzle_games_id") REFERENCES "public"."puzzle_games"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_puzzle_pieces_fk" FOREIGN KEY ("puzzle_pieces_id") REFERENCES "public"."puzzle_pieces"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_quiz_games_fk" FOREIGN KEY ("quiz_games_id") REFERENCES "public"."quiz_games"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_quiz_game_questions_fk" FOREIGN KEY ("quiz_game_questions_id") REFERENCES "public"."quiz_game_questions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_refresh_tokens_fk" FOREIGN KEY ("refresh_tokens_id") REFERENCES "public"."refresh_tokens"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_regions_fk" FOREIGN KEY ("regions_id") REFERENCES "public"."regions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_tags_fk" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_treasure_cards_fk" FOREIGN KEY ("treasure_cards_id") REFERENCES "public"."treasure_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_treasure_games_fk" FOREIGN KEY ("treasure_games_id") REFERENCES "public"."treasure_games"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_word_games_fk" FOREIGN KEY ("word_games_id") REFERENCES "public"."word_games"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_comment_reactions_fk" FOREIGN KEY ("comment_reactions_id") REFERENCES "public"."comment_reactions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_game_types_fk" FOREIGN KEY ("game_types_id") REFERENCES "public"."game_types"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_user_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_user_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "achievements_user_id_idx" ON "achievements" USING btree ("user_id_id");
  CREATE INDEX IF NOT EXISTS "achievements_updated_at_idx" ON "achievements" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "achievements_created_at_idx" ON "achievements" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "after_question_info_puzzle_game_id_idx" ON "after_question_info" USING btree ("puzzle_game_id_id");
  CREATE INDEX IF NOT EXISTS "after_question_info_quiz_game_id_idx" ON "after_question_info" USING btree ("quiz_game_id_id");
  CREATE INDEX IF NOT EXISTS "after_question_info_treasure_game_id_idx" ON "after_question_info" USING btree ("treasure_game_id_id");
  CREATE INDEX IF NOT EXISTS "after_question_info_word_game_id_idx" ON "after_question_info" USING btree ("word_game_id_id");
  CREATE INDEX IF NOT EXISTS "after_question_info_game_type_id_idx" ON "after_question_info" USING btree ("game_type_id_id");
  CREATE INDEX IF NOT EXISTS "after_question_info_updated_at_idx" ON "after_question_info" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "after_question_info_created_at_idx" ON "after_question_info" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "comments_post_id_idx" ON "comments" USING btree ("post_id_id");
  CREATE INDEX IF NOT EXISTS "comments_user_id_idx" ON "comments" USING btree ("user_id_id");
  CREATE INDEX IF NOT EXISTS "comments_parent_id_idx" ON "comments" USING btree ("parent_id_id");
  CREATE INDEX IF NOT EXISTS "comments_updated_at_idx" ON "comments" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "comments_created_at_idx" ON "comments" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "email_verifications_user_id_idx" ON "email_verifications" USING btree ("user_id_id");
  CREATE INDEX IF NOT EXISTS "email_verifications_updated_at_idx" ON "email_verifications" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "email_verifications_created_at_idx" ON "email_verifications" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "information_slides_content_order_idx" ON "information_slides_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "information_slides_content_parent_id_idx" ON "information_slides_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "information_slides_after_question_info_id_idx" ON "information_slides" USING btree ("after_question_info_id_id");
  CREATE INDEX IF NOT EXISTS "information_slides_updated_at_idx" ON "information_slides" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "information_slides_created_at_idx" ON "information_slides" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "media_links_src_order_idx" ON "media_links_src" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "media_links_src_parent_id_idx" ON "media_links_src" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "media_links_after_question_info_id_idx" ON "media_links" USING btree ("after_question_info_id_id");
  CREATE INDEX IF NOT EXISTS "media_links_updated_at_idx" ON "media_links" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_links_created_at_idx" ON "media_links" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "password_resets_user_id_idx" ON "password_resets" USING btree ("user_id_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "password_resets_token_idx" ON "password_resets" USING btree ("token");
  CREATE INDEX IF NOT EXISTS "password_resets_updated_at_idx" ON "password_resets" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "password_resets_created_at_idx" ON "password_resets" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "posts_user_id_idx" ON "posts" USING btree ("user_id_id");
  CREATE INDEX IF NOT EXISTS "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "posts_rels_tags_id_idx" ON "posts_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "puzzle_games_regionid_idx" ON "puzzle_games" USING btree ("regionid_id");
  CREATE INDEX IF NOT EXISTS "puzzle_games_gametype_idx" ON "puzzle_games" USING btree ("gametype_id");
  CREATE INDEX IF NOT EXISTS "puzzle_games_updated_at_idx" ON "puzzle_games" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "puzzle_games_created_at_idx" ON "puzzle_games" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "puzzle_pieces_puzzleid_idx" ON "puzzle_pieces" USING btree ("puzzleid_id");
  CREATE INDEX IF NOT EXISTS "puzzle_pieces_updated_at_idx" ON "puzzle_pieces" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "puzzle_pieces_created_at_idx" ON "puzzle_pieces" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "quiz_games_regionid_idx" ON "quiz_games" USING btree ("regionid_id");
  CREATE INDEX IF NOT EXISTS "quiz_games_gametype_idx" ON "quiz_games" USING btree ("gametype_id");
  CREATE INDEX IF NOT EXISTS "quiz_games_updated_at_idx" ON "quiz_games" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "quiz_games_created_at_idx" ON "quiz_games" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "quiz_game_questions_quiz_game_id_idx" ON "quiz_game_questions" USING btree ("quiz_game_id_id");
  CREATE INDEX IF NOT EXISTS "quiz_game_questions_updated_at_idx" ON "quiz_game_questions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "quiz_game_questions_created_at_idx" ON "quiz_game_questions" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "refresh_tokens_user_id_idx" ON "refresh_tokens" USING btree ("user_id_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "refresh_tokens_hashed_token_idx" ON "refresh_tokens" USING btree ("hashed_token");
  CREATE UNIQUE INDEX IF NOT EXISTS "regions_region_code_idx" ON "regions" USING btree ("region_code");
  CREATE INDEX IF NOT EXISTS "regions_updated_at_idx" ON "regions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "regions_created_at_idx" ON "regions" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "tags_name_idx" ON "tags" USING btree ("name");
  CREATE INDEX IF NOT EXISTS "tags_updated_at_idx" ON "tags" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "tags_created_at_idx" ON "tags" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "treasure_cards_treasure_game_idx" ON "treasure_cards" USING btree ("treasure_game_id");
  CREATE INDEX IF NOT EXISTS "treasure_cards_updated_at_idx" ON "treasure_cards" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "treasure_cards_created_at_idx" ON "treasure_cards" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "treasure_games_region_idx" ON "treasure_games" USING btree ("region_id");
  CREATE INDEX IF NOT EXISTS "treasure_games_updated_at_idx" ON "treasure_games" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "treasure_games_created_at_idx" ON "treasure_games" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "word_games_correct_letters_order_idx" ON "word_games_correct_letters" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "word_games_correct_letters_parent_id_idx" ON "word_games_correct_letters" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "word_games_letters_order_idx" ON "word_games_letters" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "word_games_letters_parent_id_idx" ON "word_games_letters" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "word_games_region_idx" ON "word_games" USING btree ("region_id");
  CREATE INDEX IF NOT EXISTS "word_games_updated_at_idx" ON "word_games" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "word_games_created_at_idx" ON "word_games" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "comment_reactions_user_idx" ON "comment_reactions" USING btree ("user_id");
  CREATE INDEX IF NOT EXISTS "comment_reactions_comment_idx" ON "comment_reactions" USING btree ("comment_id");
  CREATE INDEX IF NOT EXISTS "comment_reactions_updated_at_idx" ON "comment_reactions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "game_types_updated_at_idx" ON "game_types" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "game_types_created_at_idx" ON "game_types" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "user_username_idx" ON "user" USING btree ("username");
  CREATE INDEX IF NOT EXISTS "user_updated_at_idx" ON "user" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "user_created_at_idx" ON "user" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "user_email_idx" ON "user" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_achievements_id_idx" ON "payload_locked_documents_rels" USING btree ("achievements_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_after_question_info_id_idx" ON "payload_locked_documents_rels" USING btree ("after_question_info_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_comments_id_idx" ON "payload_locked_documents_rels" USING btree ("comments_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_email_verifications_id_idx" ON "payload_locked_documents_rels" USING btree ("email_verifications_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_information_slides_id_idx" ON "payload_locked_documents_rels" USING btree ("information_slides_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_links_id_idx" ON "payload_locked_documents_rels" USING btree ("media_links_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_password_resets_id_idx" ON "payload_locked_documents_rels" USING btree ("password_resets_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_puzzle_games_id_idx" ON "payload_locked_documents_rels" USING btree ("puzzle_games_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_puzzle_pieces_id_idx" ON "payload_locked_documents_rels" USING btree ("puzzle_pieces_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_quiz_games_id_idx" ON "payload_locked_documents_rels" USING btree ("quiz_games_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_quiz_game_questions_id_idx" ON "payload_locked_documents_rels" USING btree ("quiz_game_questions_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_refresh_tokens_id_idx" ON "payload_locked_documents_rels" USING btree ("refresh_tokens_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_regions_id_idx" ON "payload_locked_documents_rels" USING btree ("regions_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_tags_id_idx" ON "payload_locked_documents_rels" USING btree ("tags_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_treasure_cards_id_idx" ON "payload_locked_documents_rels" USING btree ("treasure_cards_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_treasure_games_id_idx" ON "payload_locked_documents_rels" USING btree ("treasure_games_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_word_games_id_idx" ON "payload_locked_documents_rels" USING btree ("word_games_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_comment_reactions_id_idx" ON "payload_locked_documents_rels" USING btree ("comment_reactions_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_game_types_id_idx" ON "payload_locked_documents_rels" USING btree ("game_types_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_user_id_idx" ON "payload_locked_documents_rels" USING btree ("user_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_user_id_idx" ON "payload_preferences_rels" USING btree ("user_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "achievements" CASCADE;
  DROP TABLE "after_question_info" CASCADE;
  DROP TABLE "comments" CASCADE;
  DROP TABLE "email_verifications" CASCADE;
  DROP TABLE "information_slides_content" CASCADE;
  DROP TABLE "information_slides" CASCADE;
  DROP TABLE "media_links_src" CASCADE;
  DROP TABLE "media_links" CASCADE;
  DROP TABLE "password_resets" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "puzzle_games" CASCADE;
  DROP TABLE "puzzle_pieces" CASCADE;
  DROP TABLE "quiz_games" CASCADE;
  DROP TABLE "quiz_game_questions" CASCADE;
  DROP TABLE "refresh_tokens" CASCADE;
  DROP TABLE "regions" CASCADE;
  DROP TABLE "tags" CASCADE;
  DROP TABLE "treasure_cards" CASCADE;
  DROP TABLE "treasure_games" CASCADE;
  DROP TABLE "word_games_correct_letters" CASCADE;
  DROP TABLE "word_games_letters" CASCADE;
  DROP TABLE "word_games" CASCADE;
  DROP TABLE "comment_reactions" CASCADE;
  DROP TABLE "game_types" CASCADE;
  DROP TABLE "user" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."enum_treasure_cards_type";
  DROP TYPE "public"."enum_comment_reactions_reaction_type";
  DROP TYPE "public"."enum_game_types_code";
  DROP TYPE "public"."enum_user_gender";`)
}
