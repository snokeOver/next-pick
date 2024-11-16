"use client";

import { Heart, Moon, Search, Sun } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useThemeStore } from "@/lib/store/store";

const Header = () => {
  const router = useRouter();
  const [showFullSearch, setShowFullSearch] = useState<boolean>(false);
  const { theme, setTheme } = useThemeStore();
  return (
    <div className="w-full flex items-center justify-between px-4 py-2 bg-[#12121280] sticky z-50 top-0 backdrop-blur-2xl transition-colors">
      {/* First part: Logo Part */}
      <Logo showFullSearch={showFullSearch} />

      {/* Middle Part for Search bar*/}

      <div>
        <SearchBox
          showFullSearch={showFullSearch}
          setShowFullSearch={setShowFullSearch}
        />
      </div>

      {/*Right part For search button and Theme Toggle button */}
      <div className="flex gap-5 items-center">
        {/* search button */}
        <Button
          size={"icon"}
          variant={"ghost"}
          className={` text-secondary-text ${
            showFullSearch ? "hidden" : "md:hidden"
          }`}
          onClick={() => setShowFullSearch(true)}
        >
          <Search />
        </Button>

        {/* Toggle button */}
        {theme === "light" ? (
          <Moon className="text-gray-300" onClick={() => setTheme("dark")} />
        ) : (
          <Sun className="text-yellow-400" onClick={() => setTheme("light")} />
        )}

        <Button
          onClick={() => router.push("/watchlist")}
          variant={"outline"}
          className="text-secondary-dark dark:text-secondary relative pl-6"
        >
          <Heart className="text-primary-border" />
          <span className="hidden lg:flex">Watch List</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
