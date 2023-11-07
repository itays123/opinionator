import {
  MIN_WINDOW_WIDTH_PX,
  closeSidebar,
  fullscreenSidebar,
  minimizeSidebar,
  useLayout,
} from "../../stores/layout";
import CancelIcon from "../icons/Cancel";
import FullscreenIcon from "../icons/Fullscreen";
import MinimizeIcon from "../icons/Minimize";

const ALLOW_OPEN = window.innerWidth > MIN_WINDOW_WIDTH_PX;
const ICON_SIZE = 24;

export default function Sidebar({ className = "" }: { className?: string }) {
  const { state, component } = useLayout();
  return (
    <div className={"bg-slate-50 shadow-lg px-3 py-4 " + className}>
      <div className="flex flex-row items-center">
        <button onClick={closeSidebar}>
          <CancelIcon width={ICON_SIZE} height={ICON_SIZE} />
        </button>
        {state === "OPEN" && ALLOW_OPEN && (
          <button className="mr-2" onClick={fullscreenSidebar}>
            <FullscreenIcon width={ICON_SIZE} height={ICON_SIZE} />
          </button>
        )}
        {state === "FULLSCREEN" && ALLOW_OPEN && (
          <button className="mr-2" onClick={minimizeSidebar}>
            <MinimizeIcon width={ICON_SIZE} height={ICON_SIZE} />
          </button>
        )}
      </div>
      <div className="">{component}</div>
    </div>
  );
}
