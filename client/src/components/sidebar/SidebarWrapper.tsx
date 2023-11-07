import { PropsWithChildren } from "react";
import { useLayout } from "../../stores/layout";
import Sidebar from "./Sidebar";

export default function SidebarWrapper({ children }: PropsWithChildren) {
  const { state } = useLayout();
  if (state === "CLOSED") return <>{children}</>;
  if (state === "FULLSCREEN")
    return <Sidebar className="flex-grow absolute h-full w-full " />;
  return (
    <div className="flex flex-row justify-stretch items-stretch">
      <div className="flex-grow">{children}</div>
      <Sidebar className="w-1/3 min-w-[300px]" />
    </div>
  );
}
