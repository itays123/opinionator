import { useSnapshot } from "valtio";
import query from "../../stores/query";
import QueryObjectField from "./QueryObjectField";
import { IKnesetMember, QUERY_OBJECT } from "../../types";
import Search from "../icons/Search";
import QueryPredicate, { PREDICATE_OPTIONS } from "./QueryPredicate";
import MKSubjectQuery, { MK_PROPS_TO_FIELDS } from "./MKSubjectQuery";

export default function Query() {
  const { queryObject, predicateName } = useSnapshot(query);
  const mkSubjectFields = Object.keys(MK_PROPS_TO_FIELDS).map((prop) => (
    <MKSubjectQuery property={prop as keyof IKnesetMember} key={prop} />
  ));
  return (
    <div className="flex flex-row items-center py-2 flex-wrap">
      <div className="px-2 text-slate-800 text-lg font-bold flex items-center">
        <Search className="fill-slate-800 ml-1" width={24} height={24} />
        מה תרצו לחפש?
      </div>
      {QUERY_OBJECT.map(
        (obj) =>
          (!queryObject || queryObject === obj) && (
            <QueryObjectField obj={obj} key={obj} />
          )
      )}
      {queryObject === "MK" && mkSubjectFields}
      {queryObject &&
        PREDICATE_OPTIONS.map(
          ({ name, label, value }) =>
            (!predicateName || predicateName === name) && (
              <QueryPredicate
                key={name}
                name={name}
                field={label[queryObject]}
                value={value}
              />
            )
        )}
    </div>
  );
}
