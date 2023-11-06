import { ReactNode, useCallback, useState } from "react";
import CancelIcon from "../icons/Cancel";

export interface IQueryFieldProps {
  field: string;
  onPick: () => any;
  onDismiss: () => any;
  children?: (emitPicked: Function, dismiss: Function) => ReactNode;
}

export default function QueryField({
  field,
  onPick,
  onDismiss,
  children,
}: IQueryFieldProps) {
  const [picked, setPicked] = useState(false);
  const dismiss = useCallback(() => {
    setPicked(false);
    onDismiss();
  }, [onDismiss]);
  return (
    <div
      className={`cursor-pointer rounded-full shadow-lg flex flex-row items-center px-4 py-2 mx-1 bg-slate-50 ${
        picked ? "text-primary-600" : ""
      }`}
    >
      {/* Dismiss button */}
      {picked && (
        <CancelIcon className="fill-primary-600 ml-1" onClick={dismiss} />
      )}
      {/* Field button */}
      <div
        className="text-inherit select-none"
        onClick={() => {
          if (!children) {
            setPicked(true);
            onPick();
          }
        }}
      >
        {field}
      </div>
      {children && children(() => setPicked(true), dismiss)}
    </div>
  );
}
