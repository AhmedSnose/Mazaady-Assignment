const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || process.env.NEXT_PUBLIC_VERCEL_URL;
export class CategoryService {
  async getAllCategories() {
    try {
      const response = await fetch(BASE_URL+"api/categories");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching main categories:", error);
      throw error;
    }
  }

  async fetchProperties(categoryId: number) {
    try {
      const response = await fetch(`api/properties?cat=${categoryId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching properties:", error);
      throw error;
    }
  }
}

