import { Content } from "@/db/schema";

export const WEB_TITLE = "CurioScribe";

export type ArticleType = typeof Content.$inferSelect;
