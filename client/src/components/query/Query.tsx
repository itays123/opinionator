import { useSnapshot } from "valtio";
import query from "../../stores/query";
import QueryObjectField from "./QueryObjectField";
import { QUERY_OBJECT } from "../../types";
import Search from "../icons/Search";
import QueryPredicate, { PREDICATE_OPTIONS } from "./QueryPredicate";
import TopicSubjectQuery from "./TopicSubjectQuery";
import MKSubjectQuery from "./MKSubjectQuery";

function Fields() {
  const { queryObject, predicateName } = useSnapshot(query);
  let result: JSX.Element[] = [];

  // add query object field
  if (queryObject)
    result.push(
      <QueryObjectField key={queryObject} obj={queryObject} picked />
    );
  else
    return (
      <>
        {QUERY_OBJECT.map((obj) => (
          <QueryObjectField obj={obj} key={obj} />
        ))}
      </>
    );

  // add query main subject fields, if needed
  if (queryObject === "MK")
    result.push(
      <MKSubjectQuery key="mpName" property="mpName" field="בשם:" />,
      <MKSubjectQuery key="party" property="partyName" field="ממפלגת:" />,
      <MKSubjectQuery key="role" property="role" field="בתפקיד:" />
    );
  if (queryObject === "TOPIC")
    result.push(<TopicSubjectQuery key="topic" label="בשם:" />);

  // add query predicate options
  result.push(
    ...PREDICATE_OPTIONS.filter(
      ({ name }) => !predicateName || predicateName === name
    ).map(({ name, label, value }) => (
      <QueryPredicate
        key={name}
        name={name}
        field={label[queryObject!]}
        value={value}
      />
    ))
  );

  // add secondary subject
  if (predicateName && queryObject !== "MK") {
    const prefix = queryObject === "OPINION" ? "של" : "בקרב";
    result.push(
      <MKSubjectQuery key="mpName" property="mpName" field={`${prefix} ח"כ`} />,
      <MKSubjectQuery
        key="party"
        property="partyName"
        field={`${prefix} מפלגת`}
      />,
      <MKSubjectQuery
        key="role"
        property="role"
        field={`${prefix} בעלי תפקיד`}
      />
    );
  }
  if (predicateName && queryObject !== "TOPIC") {
    result.push(
      <TopicSubjectQuery
        label={queryObject === "OPINION" ? "על הנושא" : "בנושא"}
        key="topic"
      />
    );
  }

  return <>{result}</>;
}

export default function Query() {
  return (
    <div className="flex flex-row items-center py-2 flex-wrap">
      <div className="px-2 text-slate-800 text-lg font-bold flex items-center">
        <Search className="fill-slate-800 ml-1" width={24} height={24} />
        מה תרצו לחפש?
      </div>
      <Fields />
    </div>
  );
}
