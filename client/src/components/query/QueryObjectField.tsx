import query from "../../stores/query";
import { QueryObject } from "../../types";
import QueryField from "./QueryField";

export interface IQueryObjectFieldProps {
  obj: QueryObject;
}

export const MAP_OBJ_TO_FIELD_NAME: Record<QueryObject, string> = {
  MK: "חברי כנסת",
  OPINION: "דעות",
  TOPIC: "נושאים",
};

export default function QueryObjectField({ obj }: IQueryObjectFieldProps) {
  return (
    <QueryField
      field={MAP_OBJ_TO_FIELD_NAME[obj]}
      onPick={() => {
        query.queryObject = obj;
      }}
      onDismiss={() => {
        query.queryObject = undefined;
      }}
    />
  );
}
