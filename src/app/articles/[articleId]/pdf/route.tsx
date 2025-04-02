import { NextResponse, NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { eq, and } from "drizzle-orm";
import { renderToStream } from "@react-pdf/renderer";

import { db } from "@/db";
import { Content } from "@/db/schema";

import ArticlePDF from "./ArticlePDF";

type tParams = Promise<{ articleId: string }>;

export async function GET(request: NextRequest, props: { params: tParams }) {
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
      .where(and(eq(Content.id, articleId), eq(Content.userId, userId)))
      .limit(1);

    // if no result, return error
    if (!result)
      return NextResponse.json({ error: "Article Not Found" }, { status: 404 });

    const articleDetails = result[0];

    const stream = await renderToStream(
      <ArticlePDF articleDetails={articleDetails} />
    );

    return new NextResponse(stream as unknown as ReadableStream, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="Article No.${articleId} PDF.pdf"`,
      },
    });
  } catch (error) {
    console.error("Error retrieving content:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
