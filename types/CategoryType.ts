export interface Category {
  id: number
  name: string
  children?: Category[]
}

export interface PropertyOption {
  id: number
  name: string
}

export interface Property {
  id: number
  name: string
  options: PropertyOption[]
}

export interface SubmittedData {
  name: string
  value: string
}
