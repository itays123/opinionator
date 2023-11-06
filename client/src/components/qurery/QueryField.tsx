import { useState } from "react";

export interface IQueryFieldProps<TOption> {
  field: string;
  options?: TOption[];
  onFieldClick: Function;
  onOptionClick?: (option: TOption) => any;
}

export default function QueryField({
  field,
  options,
  onFieldClick,
  onOptionClick = () => {},
}: IQueryFieldProps<string>) {
  const [optionsOpen, setOptionsOpen] = useState(false);
  return (
    <div
      className="cursor-pointer px-4 py-2 rounded-full shadow-lg bg-slate-50 flex flex-row"
      onClick={() => {
        setOptionsOpen(true);
        onFieldClick();
      }}
    >
      <span>{field}</span>
      {options && optionsOpen && (
        <select
          className="mx-2"
          onChange={(event) => {
            onOptionClick(event.target.value);
            setOptionsOpen(false);
          }}
        >
          {options.map((option, i) => (
            <option key={i}>{option}</option>
          ))}
        </select>
      )}
    </div>
  );
}
