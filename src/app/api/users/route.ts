import { auth } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// DELETE request → Delete user
export async function DELETE() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized user" }, { status: 404 });
  }

  try {
    const client = await clerkClient();
    await client.users.deleteUser(userId);
    return NextResponse.json(
      { message: "Account deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Error deleting user. Please try again later.",
      },
      { status: 500 }
    );
  }
}
