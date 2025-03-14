"use server"

import { auth } from "@clerk/nextjs/server";

export async function createArticle(formData: FormData) {
  const { userId } = await auth();

  if (!userId) return;

 
}
