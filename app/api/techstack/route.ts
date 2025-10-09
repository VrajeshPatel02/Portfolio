import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const techStackDir = path.join(process.cwd(), "public/techStack");
    const files = fs.readdirSync(techStackDir);

    // return list of file URLs
    const images = files.map((file) => `/techStack/${file}`);

    return NextResponse.json({ images });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error:unknown) {
    return NextResponse.json({ error: "Failed to load images" }, { status: 500 });
  }
}
