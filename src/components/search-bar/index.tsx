"use client";

import { useEffect } from "react";
import Image from "next/image";
import SearchIcon from "../../../public/assets/search.svg";

const SearchBar = () => {
  useEffect(() => {
    const init = async () => {
      const { Ripple, initTE } = await import("tw-elements");
      initTE({ Ripple });
    };
    init();
  }, []);

  return (
    <div className="flex w-full justify-center p-24">
      <input
        type="search"
        className="w-4/5 max-w-xl rounded-l border border-solid border-gray-300 bg-transparent px-3 text-base font-normal text-gray-700 outline-none transition duration-200 ease-in-out focus:border-blue focus:text-gray-700 focus:shadow-inner focus:outline-none"
        placeholder="Search"
        aria-label="Search"
      />

      <button
        className="flex items-center rounded-r bg-blue-600 px-6 py-2.5 shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0"
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <Image src={SearchIcon} alt="search icon" />
      </button>
    </div>
  );
};

export default SearchBar;
