import { PropsWithChildren, useMemo } from "react";
import { useLayout } from "../../stores/layout";
import Sidebar from "./Sidebar";

export default function SidebarWrapper({ children }: PropsWithChildren) {
  const { state } = useLayout();
  const className = useMemo(
    () => (state === "OPEN" ? "w-1/3 min-w-[300px]" : "w-screen"),
    [state]
  );
  return (
    <div className="flex flex-row justify-stretch items-stretch">
      {state !== "FULLSCREEN" && <div className="w-screen">{children}</div>}
      {state !== "CLOSED" && <Sidebar className={className} />}
    </div>
  );
}
