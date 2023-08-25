"use client";

import Table from "@/components/table";
import dynamic from "next/dynamic";
import { useState } from "react";
import _ from "lodash";
import { TableRowData } from "@/types";

const SearchBar = dynamic(() => import("@/components/search-bar"), {
  ssr: false,
});

// fuzzy match adapt from
// https://codereview.stackexchange.com/questions/23899/faster-javascript-fuzzy-string-matching-function
const fuzzyMatch = (str: string, pattern: string): boolean => {
  const cache = _.memoize((str: string): RegExp => {
    return new RegExp(
      "^" +
        str.replace(/./g, (x) => {
          return /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/.test(x)
            ? "\\" + x + "?"
            : x + "?";
        }) +
        "$"
    );
  });

  return cache(str.toLowerCase()).test(pattern.toLowerCase());
};

export default function Landing({ data }: { data: any }) {
  const [matchedData, setMatchedData] = useState([]);

  const onClickSearch = (value: string) => {
    const filteredData = data.filter((item: TableRowData) => {
      return (
        fuzzyMatch(item.firstName, value) ||
        fuzzyMatch(item.lastName, value) ||
        fuzzyMatch(`${item.firstName} ${item.lastName}`, value)
      );
    });
    setMatchedData(filteredData);
  };

  return (
    <>
      <SearchBar onClickSearch={onClickSearch} />
      <Table data={matchedData} />
    </>
  );
}
