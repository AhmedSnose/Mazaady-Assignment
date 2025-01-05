"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category, Property } from "@/types/CategoryType";
import { Loader2 } from 'lucide-react';
import { useState, useEffect } from "react";
import MainCard from "../shared/MainCard";
import {
  Dialog,
  DialogTrigger
} from "../ui/dialog";
import RenderProperties from "./RenderPropertiesProps";
import ShowSubmittedData from "./ShowSubmittedData";
import { getAllCategories, getProperties } from "@/app/actions/categories";

export default function CategoryForm() {
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<Category[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({});
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isLoadingProperties, setIsLoadingProperties] = useState(false);
  const [submittedData, setSubmittedData] = useState<Record<string, string>[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMainCategories = async () => {
      try {
        const categories = await getAllCategories();
        setMainCategories(categories);
      } catch (error) {
        console.error("Error fetching main categories:", error);
        setError("Failed to load categories. Please try again later.");
      } finally {
        setIsLoadingCategories(false);
      }
    };

    fetchMainCategories();
  }, []);

  const fetchProperties = async (categoryId: number) => {
    try {
      setIsLoadingProperties(true);
      const fetchedProperties = await getProperties(categoryId);
      setProperties(fetchedProperties);
    } catch (error) {
      console.error("Error fetching properties:", error);
      setError("Failed to load properties. Please try again later.");
    } finally {
      setIsLoadingProperties(false);
    }
  };

  const fetchSubCategories = (categoryId: number) => {
    const category = mainCategories.find((cat) => cat.id === categoryId);
    setSubCategories(category?.children || []);
    setProperties([]);

    if (category?.children?.length && category?.children[0].id) {
      handleSubCategoryChange(category?.children[0].id.toString());
    }
    setSelectedValues((prev) => ({
      mainCategory: categoryId.toString(),
      subCategory: "",
    }));
  };

  const handleMainCategoryChange = (value: string) => {
    const categoryId = parseInt(value);
    fetchSubCategories(categoryId);
  };

  const handleSubCategoryChange = (value: string) => {
    const categoryId = parseInt(value);
    fetchProperties(categoryId);
    setSelectedValues((prev) => ({ ...prev, subCategory: value }));
  };

  const handlePropertyChange = (propertyName: string, value: string) => {
    setSelectedValues((prev) => ({ ...prev, [propertyName]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const submittedProperties = Object.keys(selectedValues).map((key) => {
      let valueName = selectedValues[key];
      let category;

      if (key === "mainCategory") {
        category = mainCategories.find(
          (cat) => cat.id.toString() === selectedValues[key]
        );
        valueName = category?.name || valueName;
      }

      if (key === "subCategory") {
        category = subCategories.find(
          (cat) => cat.id.toString() === selectedValues[key]
        );
        valueName = category?.name || valueName;
      }

      const property = properties.find((prop) => prop.name === key);
      if (property) {
        const option = property.options.find(
          (opt) => opt.id.toString() === selectedValues[key]
        );
        valueName = option?.name || valueName;
      }

      return { name: key, value: valueName };
    });

    setSubmittedData(submittedProperties);
  };

  if (isLoadingCategories) {
    return (
      <div className="flex items-center justify-center py-4">
        <Loader2 className="h-6 w-6 animate-spin" />
        <span className="ml-2">Loading categories...</span>
      </div>
    );
  }

  if (error) {
    return <MainCard>{error}</MainCard>;
  }

  return (
    <>
      <Dialog>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="main-category">Main Category</Label>
            <Select onValueChange={handleMainCategoryChange}>
              <SelectTrigger className="w-full mt-1 relative">
                <SelectValue placeholder="Select main category" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                  ▼
                </span>
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

          {selectedValues.mainCategory && subCategories.length ? (
            <div>
              <Label htmlFor="sub-category">Sub Category</Label>
              <Select
                onValueChange={handleSubCategoryChange}
                defaultValue={subCategories[0].id.toString()}
              >
                <SelectTrigger className="w-full mt-1 relative">
                  <SelectValue placeholder="Select sub-category" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    ▼
                  </span>
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto">
                  {subCategories.map((category) => (
                    <SelectItem
                      key={category.id}
                      value={category.id.toString()}
                    >
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : (
            <MainCard>There is no sub category !!</MainCard>
          )}

          {isLoadingProperties ? (
            <div className="flex items-center justify-center py-4">
              <Loader2 className="h-6 w-6 animate-spin" />
              <span className="ml-2">Loading properties...</span>
            </div>
          ) : (
            properties?.length > 0 && (
              <RenderProperties
                properties={properties}
                selectedValues={selectedValues}
                handlePropertyChange={handlePropertyChange}
              />
            )
          )}

          <DialogTrigger asChild>
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#D20653] to-[#FF951D] text-white px-4 py-1.5 rounded-full text-sm w-full"
            >
              Submit
            </Button>
          </DialogTrigger>
        </form>

        <ShowSubmittedData submittedData={submittedData} />
      </Dialog>
    </>
  );
}