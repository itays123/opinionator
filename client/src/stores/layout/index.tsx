import { proxy, useSnapshot } from "valtio";
import { ArrayElement } from "../../types";

export const OPEN_STATES = ["CLOSED", "OPEN", "FULLSCREEN"] as const;
export type OpenState = ArrayElement<typeof OPEN_STATES>;
export const MIN_WINDOW_WIDTH_PX = 560;

export interface ILayoutStore {
  state: OpenState;
  component?: (props: any) => JSX.Element;
  componentProps?: any;
}

const layout = proxy({
  state: "CLOSED",
  component: undefined,
  componentProps: undefined,
} as ILayoutStore);

export function useLayout() {
  return useSnapshot(layout);
}

export function openSidebar<PropsType>(
  component: (props: PropsType) => JSX.Element,
  props: PropsType
) {
  layout.component = component;
  layout.componentProps = props;
  layout.state =
    window.innerWidth > MIN_WINDOW_WIDTH_PX ? "OPEN" : "FULLSCREEN";
}

export function closeSidebar() {
  layout.state = "CLOSED";
}

export function fullscreenSidebar() {
  layout.state = "FULLSCREEN";
}

export function minimizeSidebar() {
  layout.state = "OPEN";
}
