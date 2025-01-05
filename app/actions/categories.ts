'use server'

import { Category, Property } from "@/types/CategoryType"

export async function getAllCategories(): Promise<Category[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
    const url = new URL('/api/categories', baseUrl)
    const response = await fetch(url.toString())
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching main categories:", error)
    throw error
  }
}

export async function getProperties(categoryId: number): Promise<Property[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
    const url = new URL('/api/properties', baseUrl)
    url.searchParams.append('cat', categoryId.toString())
    
    const response = await fetch(url.toString())
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching properties:", error)
    throw error
  }
}

