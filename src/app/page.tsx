import Landing from "./landing";
import Error from "./error";

async function getData() {
  // provide feedback for user while fetching data
  // in order to handle the finicky endpoint
  // when loading we show the Loading component
  // when error we show the Error component
  try {
    const res = await fetch(
      "https://vhloybnwf3poctpcjw2m66uh6q0kruyq.lambda-url.ap-southeast-2.on.aws"
    );

    if (!res.ok) {
      return { error: "Failed to fetch data." };
    }

    const data = await res.json();
    return { data };
  } catch (error) {
    return { error: "An error occurred while fetching data." };
  }
}

export default async function Home() {
  const res = await getData();

  if (res.error) {
    return <Error message={res.error} />;
  }

  return (
    <main className="flex flex-col items-center justify-between">
      {res.data && <Landing data={res.data} />}
    </main>
  );
}
