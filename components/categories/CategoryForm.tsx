"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Loader2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { DataService } from "@/lib/services/DataService"
import type { Category, Property, SubmittedData } from "@/types/CategoryType"
import RenderProperties from "./RenderPropertiesProps"
import ShowSubmittedData from "./ShowSubmittedData"
import MainCard from "../shared/MainCard"

export default function CategoryForm() {
  const [mainCategories, setMainCategories] = useState<Category[]>([])
  const [subCategories, setSubCategories] = useState<Category[]>([])
  const [properties, setProperties] = useState<Property[]>([])
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({})
  const [isLoadingCategories, setIsLoadingCategories] = useState(true)
  const [isLoadingProperties, setIsLoadingProperties] = useState(false)
  const [submittedData, setSubmittedData] = useState<SubmittedData[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    try {
      setIsLoadingCategories(true)
      setError(null)
      const categories = await DataService.getCategories()

      if (!categories || !Array.isArray(categories)) {
        throw new Error("Invalid categories data received")
      }

      setMainCategories(categories)
    } catch (err) {
      console.error("Error fetching categories:", err)
      setError("Failed to load categories. Please try again later.")
    } finally {
      setIsLoadingCategories(false)
    }
  }

  const loadProperties = async (categoryId: number) => {
    try {
      setIsLoadingProperties(true)
      setError(null)
      const fetchedProperties = await DataService.getProperties(categoryId)

      // Ensure properties is always an array
      setProperties(Array.isArray(fetchedProperties) ? fetchedProperties : [])
    } catch (error) {
      console.error("Error fetching properties:", error)
      setError("Failed to load properties. Please try again later.")
      setProperties([])
    } finally {
      setIsLoadingProperties(false)
    }
  }

  const handleMainCategoryChange = (value: string) => {
    if (!value) return

    const categoryId = Number.parseInt(value)
    if (isNaN(categoryId)) {
      setError("Invalid category selected")
      return
    }

    const category = DataService.findCategoryById(mainCategories, categoryId)

    if (!category) {
      setError("Category not found")
      return
    }

    // Reset previous selections
    setSubCategories([])
    setProperties([])
    setSelectedValues({ mainCategory: value })

    if (category.children && Array.isArray(category.children) && category.children.length > 0) {
      setSubCategories(category.children)

      // Auto-select first subcategory if available
      const firstSubCategory = category.children[0]
      if (firstSubCategory && firstSubCategory.id) {
        const firstSubCategoryId = firstSubCategory.id.toString()
        setSelectedValues((prev) => ({
          ...prev,
          mainCategory: value,
          subCategory: firstSubCategoryId,
        }))
        handleSubCategoryChange(firstSubCategoryId)
      }
    } else {
      // No subcategories, load properties directly
      loadProperties(categoryId)
    }
  }

  const handleSubCategoryChange = (value: string) => {
    if (!value) return

    const categoryId = Number.parseInt(value)
    if (isNaN(categoryId)) {
      setError("Invalid subcategory selected")
      return
    }

    loadProperties(categoryId)
    setSelectedValues((prev) => ({ ...prev, subCategory: value }))
  }

  const handlePropertyChange = (propertyName: string, value: string) => {
    if (!propertyName) return

    setSelectedValues((prev) => ({ ...prev, [propertyName]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const submittedProperties: SubmittedData[] = Object.keys(selectedValues)
        .filter((key) => selectedValues[key]) // Only include non-empty values
        .map((key) => {
          let valueName = selectedValues[key]

          if (key === "mainCategory") {
            const category = DataService.findCategoryById(mainCategories, Number.parseInt(selectedValues[key]))
            valueName = category?.name || valueName
          }

          if (key === "subCategory") {
            const category = DataService.findCategoryById(subCategories, Number.parseInt(selectedValues[key]))
            valueName = category?.name || valueName
          }

          const property = properties.find((prop) => prop.name === key)
          if (property && property.options && Array.isArray(property.options)) {
            const option = property.options.find((opt) => opt.id.toString() === selectedValues[key])
            valueName = option?.name || valueName
          }

          return { name: key, value: valueName }
        })

      setSubmittedData(submittedProperties)
    } catch (err) {
      console.error("Error processing form submission:", err)
      setError("Failed to process form submission")
    }
  }

  if (isLoadingCategories) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-6 w-6 animate-spin" />
        <span className="ml-2">Loading categories...</span>
      </div>
    )
  }

  if (error) {
    return (
      <MainCard>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
        <Button onClick={loadCategories} className="mt-4 bg-transparent" variant="outline">
          Try Again
        </Button>
      </MainCard>
    )
  }

  if (!mainCategories || mainCategories.length === 0) {
    return (
      <MainCard>
        <div className="text-center py-8">
          <p className="text-muted-foreground">No categories available.</p>
          <Button onClick={loadCategories} className="mt-4 bg-transparent" variant="outline">
            Refresh
          </Button>
        </div>
      </MainCard>
    )
  }

  return (
    <Dialog>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="main-category">Main Category</Label>
          <Select onValueChange={handleMainCategoryChange} value={selectedValues.mainCategory || ""}>
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="Select main category" />
            </SelectTrigger>
            <SelectContent className="max-h-60 overflow-y-auto">
              {mainCategories.map((category) => (
                <SelectItem key={category.id} value={category.id.toString()}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedValues.mainCategory && subCategories.length > 0 && (
          <div>
            <Label htmlFor="sub-category">Sub Category</Label>
            <Select onValueChange={handleSubCategoryChange} value={selectedValues.subCategory || ""}>
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Select sub-category" />
              </SelectTrigger>
              <SelectContent className="max-h-60 overflow-y-auto">
                {subCategories.map((category) => (
                  <SelectItem key={category.id} value={category.id.toString()}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {selectedValues.mainCategory && subCategories.length === 0 && !isLoadingProperties && (
          <MainCard>
            <p className="text-muted-foreground">No subcategories available for this category.</p>
          </MainCard>
        )}

        {isLoadingProperties ? (
          <div className="flex items-center justify-center py-4">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span className="ml-2">Loading properties...</span>
          </div>
        ) : (
          properties.length > 0 && (
            <RenderProperties
              properties={properties}
              selectedValues={selectedValues}
              handlePropertyChange={handlePropertyChange}
            />
          )
        )}

        {(selectedValues.mainCategory || selectedValues.subCategory) && (
          <DialogTrigger asChild>
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#D20653] to-[#FF951D] text-white px-4 py-1.5 rounded-full text-sm w-full"
              disabled={!selectedValues.mainCategory}
            >
              Submit
            </Button>
          </DialogTrigger>
        )}
      </form>

      <ShowSubmittedData submittedData={submittedData} />
    </Dialog>
  )
}
