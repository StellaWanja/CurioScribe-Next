import { NextRequest, NextResponse } from "next/server";
import { ilike } from "drizzle-orm";

import { db } from "@/db";
import { Content } from "@/db/schema";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  let articles;

  if (query) {
    articles = await db
      .select()
      .from(Content)
      .where(ilike(Content.title, `%${query}%`))
      .limit(1);
  } else {
    articles = await db.select().from(Content).limit(10);
  }

  return NextResponse.json({ articles }, { status: 200 });
}
