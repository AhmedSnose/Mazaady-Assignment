import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Property } from "@/types/CategoryType";

interface RenderPropertiesProps {
  properties: Property[];
  selectedValues: Record<string, string>;
  handlePropertyChange: (propertyName: string, value: string) => void;
}

export default function RenderProperties({ properties, selectedValues, handlePropertyChange }: RenderPropertiesProps) {
  return (
    <>
      {properties.map((property) => (
        <div key={property.id} className="mt-4">
          <Label htmlFor={property.name}>{property.name}</Label>
          <Select
            onValueChange={(value) => handlePropertyChange(property.name, value)}
          >
            <SelectTrigger className="w-full mt-1 relative">
              <SelectValue placeholder={`Select ${property.name}`} />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                ▼
              </span>
            </SelectTrigger>
            <SelectContent className="max-h-60 overflow-y-auto">
              {property.options.map((option) => (
                <SelectItem key={option.id} value={option.id.toString()}>
                  {option.name}
                </SelectItem>
              ))}
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {selectedValues[property.name] === "other" && (
            <Input
              id={`${property.name}-other`}
              type="text"
              placeholder={`Enter custom ${property.name}`}
              onChange={(e) =>
                handlePropertyChange(`${property.name}-custom`, e.target.value)
              }
              value={selectedValues[`${property.name}-custom`] || ""}
              className="mt-2"
            />
          )}
        </div>
      ))}
    </>
  );
}
