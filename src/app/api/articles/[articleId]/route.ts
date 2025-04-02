import { NextResponse, NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { Content } from "@/db/schema";

type tParams = Promise<{ articleId: string }>;

// GET request → Get specific article
export async function GET(req: NextRequest, props: { params: tParams }) {
  // Get userId and articleId from params
  const { userId } = await auth();
  const params = await props.params;
  const articleId = Number.parseInt(params.articleId);

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
    // Get specific article from DB
    const result = await db
      .select()
      .from(Content)
      .where(eq(Content.id, articleId))
      .limit(1);

    // if no result, return error
    if (!result)
      return NextResponse.json({ error: "Article Not Found" }, { status: 404 });

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error("Error retrieving content:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

// PATCH request → Update title/body only
export async function PATCH(req: Request, props: { params: tParams }) {
  const { userId } = await auth();
  const params = await props.params;
  const articleId = Number.parseInt(params.articleId);

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
    const { title, body } = await req.json();

    if (!title && !body) {
      return NextResponse.json(
        { error: "No valid fields to update" },
        { status: 400 }
      );
    }

    const results = await db
      .update(Content)
      .set({
        ...(title && { title }),
        ...(body && { body }),
        updateTimestamp: new Date(),
      })
      .where(eq(Content.id, articleId));

    return NextResponse.json({ results }, { status: 200 });
  } catch (error) {
    console.error("Error updating content:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

// DELETE request → Delete specific article
export async function DELETE(req: Request, props: { params: tParams }) {
  const { userId } = await auth();
  const params = await props.params;
  const articleId = Number.parseInt(params.articleId);

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
    await db.delete(Content).where(eq(Content.id, articleId));

    return NextResponse.json(
      { message: "Article deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting article:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
