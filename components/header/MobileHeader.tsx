"use client";

import { Bell, Globe, Menu, Plus, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isActiveLink = (path: string) => pathname === path;
  
  return (
    <>
      <div className="flex md:hidden justify-between items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-600"
        >
          <Menu className="w-6 h-6" />
        </button>

        <Link href="/">
          <Image
            src="https://mazaady.com/images/mazaady-logo.svg"
            alt="Mazaady"
            width={82}
            height={28}
          />
        </Link>

        <div className="flex items-center gap-3">
          <button className="text-gray-600">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-gray-600">
            <Bell className="w-5 h-5" />
          </button>
          <Image
            src="https://picsum.photos/300/300?random=1"
            alt="Profile"
            width={28}
            height={28}
            className="rounded-full"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden pt-4 pb-2">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className={`font-semibold ${
                isActiveLink("/")
                  ? "text-[#D20653] border-b-2 border-[#D20653]"
                  : "text-gray-600 hover:text-[#D20653]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/categories"
              className={`font-semibold ${
                isActiveLink("/categories")
                  ? "text-[#D20653] border-b-2 border-[#D20653]"
                  : "text-gray-600 hover:text-[#D20653]"
              }`}
            >
              Categories
            </Link>
            <button className="flex items-center gap-2 bg-gradient-to-r from-[#D20653] to-[#FF951D] text-white px-4 py-1.5 rounded-full text-sm w-full justify-center">
              <Plus className="w-4 h-4" />
              <span>Add New Product</span>
            </button>
            <button className="flex items-center gap-1 text-gray-600 justify-center">
              <Globe className="w-5 h-5" />
              <span className="text-sm">EN</span>
            </button>
          </nav>
        </div>
      )}
    </>
  );
};
