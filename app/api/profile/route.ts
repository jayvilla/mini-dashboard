import { NextResponse } from "next/server";
import { ProfileSchema } from "../../../lib/validation";
import { saveUser } from "../../../lib/db";

export async function POST(req: Request) {
  const body = await req.json();

  const parsed = ProfileSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const saved = saveUser(parsed.data);
  return NextResponse.json(saved);
}
