import { ProductType } from "@/types/ProductType";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import MainCard from "../shared/MainCard";

export default ({ product }: { product: ProductType }) => {
  const [isLiked, setIsLiked] = useState(product.isFavorite || false);

  return (
    <div className="flex gap-4 flex-wrap">
      <div className="relative w-[120px] h-[100px] flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-[2rem]"
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-2 right-2 z-10 bg-white rounded-full"
        >
          <Heart
            className={`w-3 h-3 m-1 rounded-full ${
              isLiked ? "fill-[#D20653] stroke-[#D20653]" : "stroke-[#333]"
            }`}
          />
        </button>
        <div
          className={`absolute bottom-0 right-0 px-2 py-1 text-[10px] text-white rounded-tl-[3rem] rounded-br-[3rem] ${
            product.type === "Live Auction" ? "bg-[#D20653]" : "bg-main-color"
          }`}
        >
          {product.type}
        </div>
      </div>
      <div className="flex-1 py-1">
        <h3 className="text-[15px] leading-5 text-gray-900 mb-2">
          {product.name}
        </h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="text-sm text-gray-500">Starting Price</span>
            <span className="text-sm font-medium ml-auto">
              {product.price} EGP
            </span>
          </div>
          <div>
            <div className="flex items-center gap-1 flex-wrap">
              <span className="text-sm text-gray-500">Lot Starts In</span>
              <div className="flex gap-1 ml-auto">
                <MainCard className="!flex-row space-x-1 flex-wrap justify-center">
                  <span className="text-main-color font-medium text-sm">
                    {product.countdown.days}
                  </span>
                  <span className="text-main-color text-xs"> Days</span>
                </MainCard>

                <MainCard className="!flex-row space-x-1 flex-wrap justify-center">
                  <span className="text-main-color font-medium text-sm">
                    {product.countdown.hours}
                  </span>
                  <span className="text-main-color text-xs"> Hours</span>
                </MainCard>
                <MainCard className="!flex-row space-x-1 flex-wrap justify-center">
                  <span className="text-main-color font-medium text-sm">
                    {product.countdown.minutes}
                  </span>
                  <span className="text-main-color text-xs"> Minutes</span>
                </MainCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
