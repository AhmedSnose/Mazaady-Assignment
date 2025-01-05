import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const API_BASE_URL = process.env.API_BASE_URL;
    const MAZAADY_PRIVATE_KEY = process.env.MAZAADY_PRIVATE_KEY;

    console.log("API_BASE_URL:", API_BASE_URL);
    console.log("MAZAADY_PRIVATE_KEY set:", !!MAZAADY_PRIVATE_KEY);

    if (!API_BASE_URL || !MAZAADY_PRIVATE_KEY) {
      throw new Error("Missing required environment variables");
    }

    const fullUrl = `${API_BASE_URL}/api/v1/get_all_cats`;
    console.log("Fetching from:", fullUrl);

    const response = await fetch(fullUrl, {
      headers: {
        "private-key": MAZAADY_PRIVATE_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response:", JSON.stringify(data, null, 2));

    if (!data?.data?.categories || !Array.isArray(data.data.categories)) {
      throw new Error("Invalid data format received from API");
    }

    return NextResponse.json(data.data.categories);
  } catch (error) {
    console.error("Error in /api/categories:", error);
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}