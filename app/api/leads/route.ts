import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, company, teamSize, message } = await request.json();

    console.log("Lead received:", { name, email, company, teamSize, message });

    return NextResponse.json({
      success: true,
      message: "Lead received",
    });
  } catch (error) {
    console.error("Failed to parse lead payload:", error);
    return NextResponse.json(
      { success: false, message: "Invalid request payload" },
      { status: 400 },
    );
  }
}
