import {
  boolean,
  pgTable,
  serial,
  text,
  pgEnum,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";

import { ARTICLE_TOPICS, STORY_GENRES } from "@/constants";

export type ARTICLE_TOPIC = (typeof ARTICLE_TOPICS)[number]["id"];
export type STORY_GENRE = (typeof STORY_GENRES)[number]["id"];

const articleTopics = ARTICLE_TOPICS.map(
  ({ id }) => id
) as Array<ARTICLE_TOPIC>;
const storyTopics = STORY_GENRES.map(({ id }) => id) as Array<STORY_GENRE>;

export const articleTopicEnum = pgEnum(
  "articleTopic",
  articleTopics as [ARTICLE_TOPIC, ...Array<ARTICLE_TOPIC>]
);
export const storyGenreEnum = pgEnum(
  "storyGenre",
  storyTopics as [STORY_GENRE, ...Array<STORY_GENRE>]
);

export const User = pgTable("user", {
  id: serial("id").primaryKey().notNull(),
  email: text("email").notNull(),
  onTrial: boolean("onTrial").notNull().default(false),
});

export const Articles = pgTable("articles", {
  id: serial("id").primaryKey().notNull(),
  userId: text("userId").notNull(),
  articleTitle: text("articleTitle").notNull(),
  articleTopic: articleTopicEnum("articleTopic").notNull().default("general"),
  createTimestamp: timestamp("createTimestamp").notNull().defaultNow(),
  updatedTimestamp: timestamp("updatedTimestamp"),
  length: integer("length").notNull(),
});

export const Stories = pgTable("stories", {
  id: serial("id").primaryKey().notNull(),
  userId: text("userId").notNull(),
  storyTitle: text("storyTitle").notNull(),
  storyGenre: storyGenreEnum("storyGenre").notNull().default("general"),
  createTimestamp: timestamp("createTimestamp").notNull().defaultNow(),
  updatedTimestamp: timestamp("updatedTimestamp"),
  length: integer("length").notNull(),
});
