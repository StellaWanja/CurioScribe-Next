"use server";

import { auth } from "@clerk/nextjs/server";

export async function createArticle(
  textResponse: string,
  imageResponse: string
) {
  const { userId } = await auth();

  if (!userId) return;
}
