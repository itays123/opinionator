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
      className={`cursor-pointer rounded-full shadow-lg flex flex-row items-center px-4 py-2 ${
        picked ? "bg-primary-600 text-slate-50" : "bg-slate-50"
      }`}
    >
      {/* Dismiss button */}
      {picked && (
        <CancelIcon className="fill-slate-50 ml-1" onClick={dismiss} />
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
