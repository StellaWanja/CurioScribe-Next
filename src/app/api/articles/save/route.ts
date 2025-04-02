import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { db } from "@/db";
import { Content } from "@/db/schema";

// POST request → Save content
export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized user" }, { status: 404 });
  }

  try {
    const { content, imageData } = await req.json();
    const title = content.split(" ").slice(0, 10).join(" ");

    const results = await db
      .insert(Content)
      .values({
        title: title,
        body: content,
        image: imageData,
        userId: userId,
      })
      .returning({ id: Content.id });

    return NextResponse.json({ id: results[0].id }, { status: 200 });
  } catch (error) {
    console.error("Error saving content:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
