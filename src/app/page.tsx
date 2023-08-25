import Table from "@/components/table";
import dynamic from "next/dynamic";
import contactData from "@/contactData";

const SearchBar = dynamic(() => import("@/components/search-bar"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <SearchBar />
      <Table data={contactData} />
    </main>
  );
}
