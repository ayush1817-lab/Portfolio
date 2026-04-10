import { NextResponse } from "next/server";

// TODO: wire up Groq via process.env.GROQ_API_KEY. Stubbed for now so
// `next build` stays green and the route is reachable under /api/chat.
export async function POST() {
  return NextResponse.json(
    { error: "Chat endpoint not implemented yet." },
    { status: 501 },
  );
}
