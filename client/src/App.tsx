import { useQuery } from "react-query";
import MKList from "./components/mk/MKList";
import { IKnesetMember } from "./types";
import { getAll } from "./api/mk";

function App() {
  const { data, isLoading, isError } = useQuery<IKnesetMember[]>(
    "getAllMKs",
    getAll
  );

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occurred</div>;

  return (
    <div className="App">
      <h1 className="text-3xl">Hello</h1>
      {data && <MKList list={data} />}
    </div>
  );
}

export default App;
