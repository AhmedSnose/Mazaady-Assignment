import type { Category, Property } from "@/types/CategoryType"

export class DataValidator {
  static validateCategory(category: any): category is Category {
    return (
      category &&
      typeof category === "object" &&
      typeof category.id === "number" &&
      typeof category.name === "string" &&
      (category.children === undefined || Array.isArray(category.children))
    )
  }

  static validateProperty(property: any): property is Property {
    return (
      property &&
      typeof property === "object" &&
      typeof property.id === "number" &&
      typeof property.name === "string" &&
      Array.isArray(property.options) &&
      property.options.every((option: any) => typeof option.id === "number" && typeof option.name === "string")
    )
  }

  static validateCategories(categories: any[]): Category[] {
    if (!Array.isArray(categories)) {
      console.error("Categories is not an array")
      return []
    }

    return categories.filter((category) => {
      const isValid = this.validateCategory(category)
      if (!isValid) {
        console.warn("Invalid category found:", category)
      }
      return isValid
    })
  }

  static validateProperties(properties: any[]): Property[] {
    if (!Array.isArray(properties)) {
      console.error("Properties is not an array")
      return []
    }

    return properties.filter((property) => {
      const isValid = this.validateProperty(property)
      if (!isValid) {
        console.warn("Invalid property found:", property)
      }
      return isValid
    })
  }
}
