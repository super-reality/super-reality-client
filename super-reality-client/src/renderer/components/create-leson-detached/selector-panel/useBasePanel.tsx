import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as CloseIcon } from "../../../../assets/svg/close.svg";
import {
  addKeyUpListener,
  deleteKeyUpListener,
} from "../../../../utils/globalKeyListeners";
import reduxAction from "../../../redux/reduxAction";

export default function useBasePanel(
  title: string
): (props: PropsWithChildren<unknown>) => JSX.Element {
  const dispatch = useDispatch();
  const openPanel = useCallback(
    (panel: string) => {
      reduxAction(dispatch, {
        type: "CREATE_LESSON_V2_DATA",
        arg: { openPanel: panel },
      });
    },
    [dispatch]
  );

  useEffect(() => {
    addKeyUpListener("Escape", () => openPanel(""));
    return () => {
      deleteKeyUpListener("Escape");
    };
  }, []);

  const Component = useMemo(
    // eslint-disable-next-line react/display-name
    () => (componentProps: PropsWithChildren<unknown>) => {
      const { children } = componentProps;
      return (
        <div className="selector-panel-container">
          <div className="panel-title">
            <div>{title}</div>
            <CloseIcon
              style={{
                width: "16px",
                height: "16px",
                cursor: "pointer",
              }}
              stroke="var(--color-icon)"
              onClick={() => openPanel("")}
            />
          </div>
          <div className="panels-flex">{children}</div>
        </div>
      );
    },
    [title]
  );

  return Component;
}
