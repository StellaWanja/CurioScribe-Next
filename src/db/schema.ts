import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const Content = pgTable("content", {
  id: serial("id").primaryKey().notNull(),
  createTimestamp: timestamp("createTimestamp").notNull().defaultNow(),
  title: text("title").notNull(), // first 10 words
  body: text("body").notNull(),
  image: text("image"),
  userId: text("userId").notNull(),
});
