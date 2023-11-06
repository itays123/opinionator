import { useRef } from "react";
import QueryField, { IQueryFieldProps } from "./QueryField";

export interface IInputQueryFieldProps
  extends Omit<IQueryFieldProps, "onPick"> {
  onInputChange?: (value: string) => any;
}

export default function InputQueryField({
  onInputChange = () => {},
  ...props
}: IInputQueryFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <QueryField
      {...props}
      onPick={() => {}}
      onDismiss={() => {
        inputRef.current!.value = "";
        props.onDismiss();
      }}
    >
      {(setPicked, dismiss) => (
        <input
          className="text-slate-800 bg-transparent outline-none px-1"
          ref={inputRef}
          onChange={(e) => {
            const value = e.target.value;
            if (value.trim() === "") dismiss();
            else {
              onInputChange(e.target.value);
              setPicked();
            }
          }}
        />
      )}
    </QueryField>
  );
}
