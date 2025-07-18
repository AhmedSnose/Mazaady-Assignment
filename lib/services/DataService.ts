import type { Category, Property } from "@/types/CategoryType"
import { MOCK_CATEGORIES, MOCK_PROPERTIES } from "./MockDataServcie"

export class DataService {
  static async getCategories(): Promise<Category[]> {
    // Simulate API delay for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 500))

    try {
      // Validate that MOCK_CATEGORIES is properly structured
      if (!Array.isArray(MOCK_CATEGORIES)) {
        console.error("Categories data is not an array:", MOCK_CATEGORIES)
        return []
      }

      // Validate each category has required properties
      const validCategories = MOCK_CATEGORIES.filter((category) => {
        if (!category || typeof category.id !== "number" || typeof category.name !== "string") {
          console.warn("Invalid category found:", category)
          return false
        }
        return true
      })

      console.log(`Loaded ${validCategories.length} categories from static data`)
      return validCategories
    } catch (error) {
      console.error("Failed to load categories from static data:", error)
      return []
    }
  }

  static async getProperties(categoryId: number): Promise<Property[]> {
    // Simulate API delay for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 300))

    try {
      if (!categoryId || isNaN(categoryId)) {
        console.error("Invalid category ID:", categoryId)
        return []
      }

      const categoryKey = categoryId.toString()
      const properties = MOCK_PROPERTIES[categoryKey]

      if (!properties) {
        console.info(`No properties found for category ID: ${categoryId}`)
        return []
      }

      if (!Array.isArray(properties)) {
        console.error("Properties data is not an array:", properties)
        return []
      }

      // Validate each property has required structure
      const validProperties = properties.filter((property) => {
        if (!property || typeof property.id !== "number" || typeof property.name !== "string") {
          console.warn("Invalid property found:", property)
          return false
        }

        if (!Array.isArray(property.options)) {
          console.warn("Property options is not an array:", property)
          return false
        }

        return true
      })

      console.log(`Loaded ${validProperties.length} properties for category ${categoryId}`)
      return validProperties
    } catch (error) {
      console.error("Failed to load properties from static data:", error)
      return []
    }
  }

  static findCategoryById(categories: Category[], id: number): Category | undefined {
    if (!Array.isArray(categories) || !id || isNaN(id)) {
      return undefined
    }

    for (const category of categories) {
      if (!category || typeof category.id === "undefined") {
        continue
      }

      if (category.id === id) {
        return category
      }

      if (category.children && Array.isArray(category.children)) {
        const found = this.findCategoryById(category.children, id)
        if (found) {
          return found
        }
      }
    }
    return undefined
  }

  // Helper method to get all categories as a flat array (useful for searching)
  static getAllCategoriesFlat(): Category[] {
    const flatCategories: Category[] = []

    const flatten = (categories: Category[]) => {
      for (const category of categories) {
        flatCategories.push(category)
        if (category.children && Array.isArray(category.children)) {
          flatten(category.children)
        }
      }
    }

    flatten(MOCK_CATEGORIES)
    return flatCategories
  }

  // Helper method to validate data integrity
  static validateData(): { isValid: boolean; errors: string[] } {
    const errors: string[] = []

    // Validate categories
    if (!Array.isArray(MOCK_CATEGORIES)) {
      errors.push("MOCK_CATEGORIES is not an array")
    } else {
      MOCK_CATEGORIES.forEach((category, index) => {
        if (!category.id || !category.name) {
          errors.push(`Category at index ${index} is missing id or name`)
        }
      })
    }

    // Validate properties
    if (typeof MOCK_PROPERTIES !== "object") {
      errors.push("MOCK_PROPERTIES is not an object")
    } else {
      Object.entries(MOCK_PROPERTIES).forEach(([key, properties]) => {
        if (!Array.isArray(properties)) {
          errors.push(`Properties for category ${key} is not an array`)
        } else {
          properties.forEach((property, index) => {
            if (!property.id || !property.name || !Array.isArray(property.options)) {
              errors.push(`Property at index ${index} for category ${key} is invalid`)
            }
          })
        }
      })
    }

    return {
      isValid: errors.length === 0,
      errors,
    }
  }
}
