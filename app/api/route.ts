// File: app/api/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const ip = body.ip || req.headers.get("x-forwarded-for") || "Unknown";
  const location = body.location || "Unavailable";
  const userAgent = req.headers.get("user-agent");

  console.log("🛰️ New Visitor Logged:");
  console.log("IP:", ip);
  console.log("Location:", location);
  console.log("User Agent:", userAgent);

  return NextResponse.json({ success: true });
}
