CREATE TYPE "public"."articleTopic" AS ENUM('general', 'tech', 'health', 'biz', 'science', 'education', 'entertainment', 'opinion', 'diy', 'news');--> statement-breakpoint
CREATE TYPE "public"."storyGenre" AS ENUM('general', 'fantasy', 'sci-fi', 'mystery', 'romance', 'horror', 'adventure', 'historic-fic', 'short-story', 'flash-fic', 'poetry');--> statement-breakpoint
CREATE TABLE "articles" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"articleTitle" text NOT NULL,
	"articleTopic" "articleTopic" DEFAULT 'general' NOT NULL,
	"createTimestamp" timestamp DEFAULT now() NOT NULL,
	"updatedTimestamp" timestamp,
	"length" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "stories" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"storyTitle" text NOT NULL,
	"storyGenre" "storyGenre" DEFAULT 'general' NOT NULL,
	"createTimestamp" timestamp DEFAULT now() NOT NULL,
	"updatedTimestamp" timestamp,
	"length" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"onTrial" boolean DEFAULT false NOT NULL
);
