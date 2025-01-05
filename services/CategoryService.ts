export class CategoryService {
  private getBaseUrl() {
    if (typeof window !== 'undefined') {
      return '';
    }
    const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL;
    return BASE_URL;
  }

  async getAllCategories() {
    try {
      const baseUrl = this.getBaseUrl();
      const response = await fetch(`${baseUrl}/api/categories`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching main categories:", error);
      throw error;
    }
  }

  async fetchProperties(categoryId: number) {
    try {
      const baseUrl = this.getBaseUrl();
      const response = await fetch(`${baseUrl}/api/properties?cat=${categoryId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching properties:", error);
      throw error;
    }
  }
}