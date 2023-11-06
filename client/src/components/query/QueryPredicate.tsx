import { clearPredicate, setPredicate } from "../../stores/query/actions";
import { IQueryPredicate, OpinionType, QueryObject } from "../../types";
import QueryField, { IQueryFieldProps } from "./field/QueryField";

export interface IPredicateOption extends IQueryPredicate {
  label: Record<QueryObject, string>;
}

export default function QueryPredicate({
  field,
  picked,
  ...pred
}: Omit<IPredicateOption, "label"> &
  Pick<IQueryFieldProps, "field" | "picked">) {
  return (
    <QueryField
      picked={picked}
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
      TOPIC: "בעלי תמיכה חזקה",
    },
  },
  {
    name: "Positive",
    value: [OpinionType.SUPPORTS, OpinionType.STRONGLY_SUPPORTS],
    label: {
      MK: "התומכים",
      OPINION: "חיוביות",
      TOPIC: "בעלי תמיכה",
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
      TOPIC: "בעלי התנגדות",
    },
  },
  {
    name: "Negative-",
    value: [OpinionType.STRONGLY_OPPOSES],
    label: {
      MK: "המתנגדים מאוד",
      OPINION: "חיוביות מאוד",
      TOPIC: "בעלי התנגדות חזקה",
    },
  },
];
