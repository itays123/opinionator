import { useQuery } from "react-query";
import MKList from "./components/mk/MKList";
import { IKnesetMember } from "./types";
import { getAll } from "./api/mk";
import Query from "./components/query/Query";

function App() {
  const { data, isLoading, isError } = useQuery<IKnesetMember[]>(
    "getAllMKs",
    getAll
  );

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occurred</div>;

  return (
    <div className="App px-8">
      <Query />

      {data && <MKList list={data} />}
    </div>
  );
}

export default App;
