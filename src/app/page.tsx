import Loading from "./loading";
import Landing from "./landing";

async function getData() {
  const res = await fetch(
    "https://vhloybnwf3poctpcjw2m66uh6q0kruyq.lambda-url.ap-southeast-2.on.aws/"
  );

  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    console.log("error", res);
    return null;
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex flex-col items-center justify-between">
      {data ? <Landing data={data} /> : <Loading />}
    </main>
  );
}
