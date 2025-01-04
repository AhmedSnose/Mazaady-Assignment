import { NextResponse } from 'next/server'
const API_BASE_URL = process.env.API_BASE_URL;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const categoryId = searchParams.get('cat')

  if (!categoryId) {
    return NextResponse.json({ error: "Category ID is required" }, { status: 400 });
  }

  try {
    const response = await fetch(
      API_BASE_URL + `/api/v1/properties?cat=${categoryId}`,
      {
        headers: {
          "private-key": process.env.MAZAADY_PRIVATE_KEY || "",
        },
      }
    );
    const data = await response.json();
    return NextResponse.json(data.data);
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json({ error: "Failed to fetch properties" }, { status: 500 });
  }
}

