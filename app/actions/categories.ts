"use server";

import { Category, Property } from "@/types/CategoryType";

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";
};
export async function getAllCategories(): Promise<Category[]> {
  try {
    const baseUrl = getBaseUrl();
    console.log(baseUrl, "baseUrl");

    const url = new URL("/api/categories", baseUrl);
    const response = await fetch(url.toString(), {
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (!data || !Array.isArray(data)) {
      throw new Error("Invalid data format received from API");
    }

    return data;
  } catch (error) {
    console.error("Error fetching main categories:", error);
    return []; // Return an empty array or handle the error as appropriate for your application
  }
}

export async function getProperties(categoryId: number): Promise<Property[]> {
  try {
    const baseUrl = getBaseUrl();

    const url = new URL("/api/properties", baseUrl);

    url.searchParams.append("cat", categoryId.toString());

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}
