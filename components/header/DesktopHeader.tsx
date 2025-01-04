"use client"
import { Bell, Globe, Plus, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default () => {
  const pathname = usePathname();
  const isActiveLink = (path: string) => pathname === path;

  return (
    <div className="hidden md:flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image
            src="https://mazaady.com/images/mazaady-logo.svg"
            alt="Mazaady"
            width={92}
            height={32}
          />
        </Link>

        
        <nav className="flex gap-8 relative my-3">
          <div
            className={` relative font-semibold  text-gray-600 hover:text-[#D20653]' `}
          >
            <Link href="/">Home</Link>
            {isActiveLink("/") && (
              <span className="custom-active-border bg-[#D20653] "></span>
            )}
          </div>

          <div
            className={` relative font-semibold  text-gray-600 hover:text-[#D20653]' `}
          >
            <Link href="/categories">Categories</Link>
            {isActiveLink("/categories") && (
              <span className="custom-active-border bg-[#D20653] "></span>
            )}
          </div>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-[#D20653]">
          <Search className="w-5 h-5" />
        </button>
        <button className="text-gray-600 hover:text-[#D20653]">
          <Bell className="w-5 h-5" />
        </button>
        <Image
          src="https://picsum.photos/300/300?random=1"
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full"
        />
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#D20653] to-[#FF951D] text-white px-4 py-1.5 rounded-full text-sm">
          <Plus className="w-4 h-4" />
          <span>Add New Product</span>
        </button>
        <button className="flex items-center gap-1 text-gray-600">
          <Globe className="w-5 h-5" />
          <span className="text-sm">EN</span>
        </button>
      </div>
    </div>
  );
};
