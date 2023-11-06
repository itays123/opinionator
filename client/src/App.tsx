import { useQuery } from "react-query";
import MKList from "./components/mk/MKList";
import { IKnesetMember } from "./types";
import { getAll } from "./api/mk";
import QueryField from "./components/qurery/QueryField";

function App() {
  const { data, isLoading, isError } = useQuery<IKnesetMember[]>(
    "getAllMKs",
    getAll
  );

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occurred</div>;

  return (
    <div className="App">
      <div className="flex mx-2">
        <QueryField
          field="חברי כנסת"
          onFieldClick={() => console.log("MK")}
          options={["ביבי", "גלנט"]}
          onOptionClick={(option) => console.log(option)}
        />
      </div>

      {data && <MKList list={data} />}
    </div>
  );
}

export default App;
