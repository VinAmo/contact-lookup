import { TableHeaderData, TableRowData } from "@/types";
import { v4 as uuidv4 } from "uuid";
import Header from "./header";
import Row from "./row";

const headerData: TableHeaderData[] = [
  {
    id: uuidv4(),
    name: "#",
  },
  {
    id: uuidv4(),
    name: "",
  },
  {
    id: uuidv4(),
    name: "First name",
  },
  {
    id: uuidv4(),
    name: "Last name",
  },
  {
    id: uuidv4(),
    name: "Email",
  },
  {
    id: uuidv4(),
    name: "Avatar image",
  },
];

const Table = ({ data }: { data: TableRowData[] }) => {
  return (
    <div className="relative h-[70vh] overflow-scroll">
      <table className="table-auto text-left text-sm font-light">
        <thead className="sticky top-0 border-b font-medium bg-white">
          <tr>
            {headerData.map((header) => (
              <Header key={header.id} data={header} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <Row key={row.id} index={index} data={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
