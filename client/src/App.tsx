import { useQuery } from "react-query";
import MKList from "./components/mk/MKList";
import { IKnesetMember } from "./types";
import { getAll } from "./api/mk";
import QueryField from "./components/qurery/QueryField";
import SelectQueryField from "./components/qurery/SelectQueryField";

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
          onPick={() => console.log("MK")}
          onDismiss={() => console.log("not mk")}
        />
        <SelectQueryField
          field="ממפלגת"
          onOptionClick={(option) => console.log(option)}
          onDismiss={() => console.log("No party filter")}
          options={["הליכוד", "העבודה", "יש עתיד"]}
        />
      </div>

      {data && <MKList list={data} />}
    </div>
  );
}

export default App;
