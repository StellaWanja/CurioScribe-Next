import { NextResponse, NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { eq, ilike } from "drizzle-orm";

import { db } from "@/db";
import { Content } from "@/db/schema";

// GET request → Get all articles
export async function GET(request: NextRequest) {
  const { userId } = await auth();
  const url = new URL(request.url);
  const query = url.searchParams.get("query");

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized user" }, { status: 404 });
  }

  try {
    let dbResults;

    if (query) {
      dbResults = await db
        .select()
        .from(Content)
        .where(ilike(Content.title, `%${query}%`))
        .limit(10);
    } else {
      dbResults = await db
        .select()
        .from(Content)
        .where(eq(Content.userId, userId));
    }

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
