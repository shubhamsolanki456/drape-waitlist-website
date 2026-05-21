import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const googleSheetsUrl = process.env.GOOGLE_SHEETS_URL;
    
    if (!googleSheetsUrl) {
      console.warn("GOOGLE_SHEETS_URL is not set. Simulating successful registration for development.");
      return NextResponse.json(
        { message: "Successfully joined the waitlist!" },
        { status: 201 }
      );
    }

    // Send data to Google Sheets Web App
    const response = await fetch(googleSheetsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.toLowerCase(),
        name: name || "Unknown",
        timestamp: new Date().toISOString()
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send data to Google Sheets");
    }

    return NextResponse.json(
      { message: "Successfully joined the waitlist!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
