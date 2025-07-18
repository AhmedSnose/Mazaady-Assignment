"use client"

import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import type { Property } from "@/types/CategoryType"
interface RenderPropertiesProps {
  properties: Property[]
  selectedValues: Record<string, string>
  handlePropertyChange: (propertyName: string, value: string) => void
}

export default function RenderProperties({ properties, selectedValues, handlePropertyChange }: RenderPropertiesProps) {
  if (!Array.isArray(properties) || properties.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-muted-foreground">No properties available for this category.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {properties.map((property) => {
        if (!property || !property.id || !property.name) {
          return null
        }

        return (
          <div key={property.id}>
            <Label htmlFor={property.name}>{property.name}</Label>
            <Select
              onValueChange={(value) => handlePropertyChange(property.name, value)}
              value={selectedValues[property.name] || ""}
            >
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder={`Select ${property.name}`} />
              </SelectTrigger>
              <SelectContent className="max-h-60 overflow-y-auto">
                {property.options &&
                  Array.isArray(property.options) &&
                  property.options.map((option) => {
                    if (!option || !option.id || !option.name) {
                      return null
                    }

                    return (
                      <SelectItem key={option.id} value={option.id.toString()}>
                        {option.name}
                      </SelectItem>
                    )
                  })}
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            {selectedValues[property.name] === "other" && (
              <Input
                id={`${property.name}-other`}
                type="text"
                placeholder={`Enter custom ${property.name}`}
                onChange={(e) => handlePropertyChange(`${property.name}-custom`, e.target.value)}
                value={selectedValues[`${property.name}-custom`] || ""}
                className="mt-2"
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
