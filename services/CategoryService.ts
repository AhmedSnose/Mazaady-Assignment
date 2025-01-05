export class CategoryService {
  private getBaseUrl() {
    if (typeof window !== "undefined") {
      return "";
    }
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
    return process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";
  }

  async getAllCategories() {
    try {
      const baseUrl = this.getBaseUrl();
      const response = await fetch(`${baseUrl}/api/categories`, {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data, "this is data");

      return data;
    } catch (error) {
      console.error("Error fetching main categories:", error);
      throw error;
    }
  }

  async fetchProperties(categoryId: number) {
    try {
      const baseUrl = this.getBaseUrl();
      const response = await fetch(
        `${baseUrl}/api/properties?cat=${categoryId}`
      );
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
}
