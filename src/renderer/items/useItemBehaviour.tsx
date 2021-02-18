import { MutableRefObject, useCallback, useEffect, useRef } from "react";
import getPrimaryMonitor from "../../utils/electron/getPrimaryMonitor";
import globalData from "../globalData";
import useCombinedRefs from "../hooks/useCombinedRef";
import { TriggerTypes } from "./endStep";

/**
 * Basic item behaviour hook, manages triggers/callbacks and reference objects.
 * @param callback Events callback, "endOn" triggers
 * @param ref Mutable reference (passed by forwardRef)
 * @param clickThrough Is it a clicktrough item?
 */
export default function useItemBehaviour(
  callback: ((trigger: TriggerTypes | null) => void) | undefined,
  ref:
    | ((instance: HTMLDivElement | null) => void)
    | MutableRefObject<HTMLDivElement | null>
    | null,
  clickThrough: boolean
) {
  const lastClickRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const combinedRef = useCombinedRefs<HTMLDivElement>(ref, itemRef);

  const clickCallback = useCallback(() => {
    const diplayPos = getPrimaryMonitor().bounds;
    const div = combinedRef?.current;
    if (
      div &&
      globalData.mouseX > diplayPos.x + div.offsetLeft &&
      globalData.mouseY > diplayPos.y + div.offsetTop &&
      globalData.mouseX < diplayPos.x + div.offsetLeft + div.offsetWidth &&
      globalData.mouseY < diplayPos.y + div.offsetTop + div.offsetHeight &&
      callback
    ) {
      const timeNow = new Date().getTime();
      if (timeNow - lastClickRef.current < 500) {
        callback("mouse-double");
      } else {
        callback("mouse-left");
      }
      lastClickRef.current = timeNow;
    }
  }, [callback]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const mouseEvents = __non_webpack_require__("global-mouse-events");

    if (callback) {
      const interval = setInterval(() => {
        const diplayPos = getPrimaryMonitor().bounds;
        const div = combinedRef?.current;
        if (
          div &&
          globalData.mouseX > diplayPos.x + div.offsetLeft &&
          globalData.mouseY > diplayPos.y + div.offsetTop &&
          globalData.mouseX < diplayPos.x + div.offsetLeft + div.offsetWidth &&
          globalData.mouseY < diplayPos.y + div.offsetTop + div.offsetHeight
        ) {
          callback("mouse-hover");
        }
      }, 50);
      timeoutRef.current = interval;

      if (clickThrough) {
        mouseEvents.on("mousedown", clickCallback);
      }
    }

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
      mouseEvents.removeListener("mousedown", clickCallback);
    };
  }, [callback]);

  return [combinedRef, itemRef, clickCallback];
}
