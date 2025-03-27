import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { Content } from "@/db/schema";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized user" }, { status: 404 });
  }

  try {
    const dbResults = await db
      .select()
      .from(Content)
      .where(eq(Content.userId, userId));

    if (!dbResults)
      return NextResponse.json(
        { error: "Articles Not Found" },
        { status: 404 }
      );

    return NextResponse.json({ dbResults }, { status: 200 });
  } catch (error) {
    console.error("Error saving content:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
