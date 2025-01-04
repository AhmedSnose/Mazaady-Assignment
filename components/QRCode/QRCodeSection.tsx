"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, Share2, Download, ChevronUp, ChevronDown } from "lucide-react";
import MainCard from "../shared/MainCard";

export default function QRCodeSection() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white rounded-2xl">
      <div className="p-4 flex items-center justify-between">
        <h3 className="text-base font-medium">QR Code</h3>
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-gray-600">
            <Eye className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <Download className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-gray-600"
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4">
          
          <MainCard>
            <span className="flex justify-center">
              <div className="items-center gap-1 mb-1">
                <Download className="w-4 h-4  mr-2" />
              </div>
              Download the QR code or share it.
            </span>
          </MainCard>


          <div className="relative">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#D20653] to-[#FF951D]">
              <div className="bg-white p-6 rounded-xl">
                <div className="flex flex-col items-center">
                  <Image
                    src="https://mazaady.com/images/mazaady-logo.svg"
                    alt="Mazaady"
                    width={120}
                    height={40}
                    className="mb-4"
                  />
                  <h4 className="text-sm mb-4">Hala Ahmed</h4>
                  <Image
                    src="https://picsum.photos/200/300?random=1"
                    alt="QR Code"
                    width={150}
                    height={150}
                    className="mb-4"
                  />
                  <p className="text-xs text-gray-500">Follow Us On Mazaady</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
