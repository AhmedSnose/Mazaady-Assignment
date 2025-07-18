"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Plus } from "lucide-react";
import { ProductType } from "@/types/ProductType";
import ProductCard from "./ProductCard";
import MainButton from "../shared/MainButton";
import MainCard from "../shared/MainCard";
import TabButton from "./TabButton";
import ProductTabs from "./ProductTabs";
import { getAllProducts } from "@/lib/services/ProductService";

export default function ProductsSection() {
  const products = getAllProducts();

  return (
    <div className=" bg-white  rounded-lg p-6">
      <div className="flex  justify-between items-center mb-8">
        <ProductTabs />

        <MainButton className="hidden md:flex lg:flex w-[9rem] !text-sm items-center justify-center gap-1 ">
          <Plus className="w-4 h-4" />
          <span> Add Review</span>
        </MainButton>
      </div>

      <div>
        <div className="flex items-center gap-1 mb-6">
          <h2 className="text-2xl font-semibold">Products</h2>
          <span className="text-sm text-gray-500 mt-1">( 3 )</span>
        </div>
        <div className="space-y-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
