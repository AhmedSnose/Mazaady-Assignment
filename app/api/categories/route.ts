import { NextResponse } from 'next/server'
const API_BASE_URL = process.env.API_BASE_URL;
export async function GET() {
  try {
    console.log(API_BASE_URL+"/api/v1/get_all_cats",'full url from endpoint api/categories');
    
    const response = await fetch(
      API_BASE_URL+"/api/v1/get_all_cats",
      {
        headers: {
          "private-key": process.env.MAZAADY_PRIVATE_KEY || "",
        },
      }
    );
    const data = await response.json();
    return NextResponse.json(data?.data?.categories);
  } catch (error) {
    console.error("Error fetching main categories: from endpoint api/categories", error);
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}

