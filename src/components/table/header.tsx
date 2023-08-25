import { TableHeaderData } from "@/types";

const Header = ({ data }: { data: TableHeaderData }) => {
  return <th className="px-6 py-4">{data.name}</th>;
};

export default Header;
