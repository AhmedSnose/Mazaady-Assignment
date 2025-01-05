import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const API_BASE_URL = process.env.API_BASE_URL;
    const MAZAADY_PRIVATE_KEY = process.env.MAZAADY_PRIVATE_KEY;

    if (!API_BASE_URL || !MAZAADY_PRIVATE_KEY) {
      throw new Error("Missing required environment variables");
    }

    const response = await fetch(`${API_BASE_URL}/api/v1/get_all_cats`, {
      headers: {
        "private-key": MAZAADY_PRIVATE_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data?.data?.categories);
  } catch (error) {
    console.error("Error fetching main categories:", error);
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}