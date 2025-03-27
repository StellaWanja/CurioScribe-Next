import { NextResponse, NextRequest } from 'next/server';
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { Content } from "@/db/schema";

type tParams = Promise<{ articleId: string }>;

export async function GET(req: NextRequest, props: { params: tParams }) {
  const { userId } = await auth();
  const params = await props.params;
  const articleId = Number.parseInt(params.articleId);
  console.log(articleId)

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized user" }, { status: 404 });
  }

  if (!articleId) {
    return NextResponse.json(
      { error: "Article ID is required" },
      { status: 400 }
    );
  }

  if (isNaN(articleId)) {
    return NextResponse.json({ error: "Invalid Article ID" }, { status: 400 });
  }

  try {
    const result = await db
      .select()
      .from(Content)
      .where(eq(Content.id, articleId))
      .limit(1);

    if (!result)
      return NextResponse.json({ error: "Article Not Found" }, { status: 404 });

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error("Error retrieving content:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
