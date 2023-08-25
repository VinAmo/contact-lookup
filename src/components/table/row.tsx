import Image from "next/image";
import { TableRowData } from "@/types";

const Row = ({ index, data }: { index: number; data: TableRowData }) => {
  return (
    <tr className="border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td className="whitespace-nowrap px-6 py-4 font-medium">{index}</td>
      <td className="whitespace-nowrap px-6 py-4">{data.firstName}</td>
      <td className="whitespace-nowrap px-6 py-4">{data.lastName}</td>
      <td className="whitespace-nowrap px-6 py-4">{data.email}</td>
      <td className="whitespace-nowrap px-6 py-4">
        <Image
          src={data.avatarImage}
          alt={`${data.firstName} ${data.lastName}`}
          width={40}
          height={40}
          className="rounded-full"
        />
      </td>
    </tr>
  );
};

export default Row;
