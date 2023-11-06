import { clearPredicate, setPredicate } from "../../stores/query/actions";
import { IQueryPredicate, OpinionType, QueryObject } from "../../types";
import QueryField, { IQueryFieldProps } from "./field/QueryField";

export interface IPredicateOption extends IQueryPredicate {
  label: Record<QueryObject, string>;
}

export default function QueryPredicate({
  field,
  ...pred
}: Omit<IPredicateOption, "label"> & Pick<IQueryFieldProps, "field">) {
  return (
    <QueryField
      field={field}
      onPick={() => setPredicate(pred)}
      onDismiss={clearPredicate}
      pickedClassName="text-primary-600"
    />
  );
}

export const PREDICATE_OPTIONS: IPredicateOption[] = [
  {
    name: "Positive+",
    value: [OpinionType.STRONGLY_SUPPORTS],
    label: {
      MK: "התומכים מאוד",
      OPINION: "חיוביות מאוד",
      TOPIC: "הנתמכים מאוד",
    },
  },
  {
    name: "Positive",
    value: [OpinionType.SUPPORTS, OpinionType.STRONGLY_SUPPORTS],
    label: {
      MK: "התומכים",
      OPINION: "חיוביות",
      TOPIC: "הנתמכים",
    },
  },
  {
    name: "Neutral",
    value: [OpinionType.NEUTRAL],
    label: {
      MK: "הניטרליים",
      OPINION: "ניטרליות",
      TOPIC: "בעלי דעה ניטרלית",
    },
  },
  {
    name: "Negative",
    value: [OpinionType.OPPOSES, OpinionType.STRONGLY_OPPOSES],
    label: {
      MK: "המתנגדים",
      OPINION: "שליליות",
      TOPIC: "הנתמכים מאוד",
    },
  },
  {
    name: "Negative-",
    value: [OpinionType.STRONGLY_OPPOSES],
    label: {
      MK: "המתנגדים מאוד",
      OPINION: "חיוביות מאוד",
      TOPIC: "הנתמכים מאוד",
    },
  },
];
