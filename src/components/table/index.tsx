import { TableRowData } from "@/types";
import Header from "./header";
import Row from "./row";
import { useState, useEffect } from "react";

const Table = ({ data }: { data: TableRowData[] }) => {
  const [isMobile, setIsMobile] = useState(false);

  // in order to resolve the 'hidden sm:table-cell' cannot
  // be triggered on window resize
  // we need to manually monitor the resizing event
  // and apply style={{ display: isMobile ? "none" : "table-cell" }}
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative h-[70vh] overflow-scroll">
      <table className="table-auto text-left text-sm font-light">
        <thead className="sticky top-0 border-b font-medium bg-white">
          <Header isMobile={isMobile} />
        </thead>
        <tbody>
          {data.map((row, index) => (
            <Row key={row.id} index={index} data={row} isMobile={isMobile} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
