import { useRef } from "react";
import QueryField, { IQueryFieldProps } from "./QueryField";

const NO_VALUE = "novalueconstant2023";

export interface ISelectQueryFieldProps<TOption>
  extends Omit<IQueryFieldProps, "onPick"> {
  options: TOption[];
  onOptionClick?: (option: TOption) => any;
}

export default function SelectQueryField({
  field,
  options,
  onDismiss,
  onOptionClick = () => {},
}: ISelectQueryFieldProps<string>) {
  const selectRef = useRef<HTMLSelectElement>(null);
  return (
    <QueryField field={field} onPick={() => {}} onDismiss={onDismiss}>
      {(setPicked, dismiss) => (
        <select
          className="text-inherit bg-transparent outline-none"
          ref={selectRef}
          onChange={(e) => {
            const value = e.target.value;
            if (value === NO_VALUE) dismiss();
            else {
              onOptionClick(e.target.value);
              setPicked();
            }
          }}
        >
          <option value={NO_VALUE}>...</option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}
    </QueryField>
  );
}
