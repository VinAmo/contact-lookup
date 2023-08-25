import dynamic from "next/dynamic";

const SearchBar = dynamic(() => import("../components/search-bar"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar />
    </main>
  );
}
