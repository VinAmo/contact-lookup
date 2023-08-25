import Image from "next/image";
import { TableRowData } from "@/types";
import { useState, useEffect } from "react";
import ArrowIcon from "../../../public/assets/arrow.svg";

const Row = ({
  index,
  data,
  isMobile,
}: {
  index: number;
  data: TableRowData;
  isMobile: boolean;
}) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const onClick = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <>
      <tr
        className="border-b transition duration-300 ease-in-out hover:bg-gray-100"
        onClick={() => onClick(index)}
      >
        <td className="px-6 py-4 font-medium">{index}</td>
        <td className="px-6 py-4">
          <Image
            className={`w-4 h-4 transition-transform duration-500 ease-in-out transform  ${
              expandedRow === index && "rotate-180"
            }`}
            src={ArrowIcon}
            alt="arrow icon"
          />
        </td>
        <td className="px-6 py-4">{data.firstName}</td>
        <td className="px-6 py-4">{data.lastName}</td>
        <td
          className="px-6 py-4"
          style={{ display: isMobile ? "none" : "table-cell" }}
        >
          {data.email}
        </td>
        <td className="px-6 py-4">
          <Image
            src={data.avatarImage}
            alt={`${data.firstName} ${data.lastName}`}
            width={40}
            height={40}
            className="rounded-full"
          />
        </td>
      </tr>
      <tr
        className={`transition duration-500 ease-in-out ${
          expandedRow === index ? "border-b h-32 opacity-100" : "h-0 opacity-0"
        } overflow-hidden`}
      >
        {/* set p-0 to override default p-1 for table td */}
        <td colSpan={6} className="p-0">
          {expandedRow === index && (
            <div className="flex flex-col text-right pr-6">
              <p className="block sm:hidden">Email {data.email}</p>
              <p>Phone number {data.phone}</p>
            </div>
          )}
        </td>
      </tr>
    </>
  );
};

export default Row;
