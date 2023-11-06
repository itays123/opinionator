import { clearObject, setObject } from "../../stores/query/actions";
import { QueryObject } from "../../types";
import QueryField from "./field/QueryField";

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
      pickedClassName="text-primary-600"
      field={MAP_OBJ_TO_FIELD_NAME[obj]}
      onPick={() => setObject(obj)}
      onDismiss={clearObject}
    />
  );
}
