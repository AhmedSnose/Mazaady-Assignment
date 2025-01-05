"use client";

import { useEffect, useState } from "react";
import { Category } from "@/types/CategoryType";
import { Loader2 } from "lucide-react";

export default function CategoryForm() {
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      const fullUrl = `https://staging.mazaady.com/api/v1/get_all_cats`;
      console.log("Fetching from:", fullUrl);

      try {
        const response = await fetch(fullUrl, {
          headers: {
            "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
          },
          next: { revalidate: 0 },
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error(
            `API responded with status: ${response.status}, body: ${errorText}`
          );
          throw new Error(`API responded with status: ${response.status}`);
        }

        const {data} = await response.json();
        console.log("API Response:", JSON.stringify(data, null, 2));

        // Assuming categories are stored in `data.categories`:
        setMainCategories(data.categories || []);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Failed to load categories. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-4">
        <Loader2 className="h-6 w-6 animate-spin" />
        <span className="ml-2">Loading categories...</span>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <h1>Main Categories</h1>
      <ul>
        {mainCategories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}
