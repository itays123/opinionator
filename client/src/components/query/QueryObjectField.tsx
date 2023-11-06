import { clearObject, setObject } from "../../stores/query/actions";
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

export const MAP_OBJ_TO_CLASS: Record<QueryObject, string> = {
  MK: "text-mk-700",
  OPINION: "text-opinion-700",
  TOPIC: "text-topic-700",
};

export default function QueryObjectField({ obj }: IQueryObjectFieldProps) {
  return (
    <QueryField
      className={MAP_OBJ_TO_CLASS[obj]}
      field={MAP_OBJ_TO_FIELD_NAME[obj]}
      onPick={() => setObject(obj)}
      onDismiss={clearObject}
    />
  );
}
