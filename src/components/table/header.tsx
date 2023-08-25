import { useState, useEffect } from "react";

import { TableHeaderData } from "@/types";

const Header = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <tr>
      <th className="px-6 py-4">#</th>
      <th className="px-6 py-4"></th>
      <th className="px-6 py-4">First name</th>
      <th className="px-6 py-4">Last name</th>
      <th
        className="px-6 py-4"
        style={{ display: isMobile ? "none" : "table-cell" }}
      >
        Email
      </th>
      <th className="px-6 py-4">Avatar image</th>
    </tr>
  );
};

export default Header;
