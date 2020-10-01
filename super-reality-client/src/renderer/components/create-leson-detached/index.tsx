/* eslint-disable dot-notation */
import React, {
  CSSProperties,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
} from "react";
import interact from "interactjs";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import useTransparentFix from "../../hooks/useTransparentFix";
import store, { AppState } from "../../redux/stores/renderer";
import reduxAction from "../../redux/reduxAction";
import setTopMost from "../../../utils/setTopMost";
import setMaximize from "../../../utils/setMaximize";
import ButtonSimple from "../button-simple";
import setFocusable from "../../../utils/setFocusable";
import setResizable from "../../../utils/setResizable";
import Lesson from "./lessson";
import globalData from "../../globalData";

function setMocks() {
  const lesson = {
    _id: "string",
    cost: 0,
    status: 1,
    description: "",
    entry: 2,
    skills: ["skill"],
    difficulty: 2,
    media: [],
    location: {},
    chapters: [
      { _id: "001", name: "Chapter One" },
      { _id: "002", name: "Chapter Two" },
    ],
    setupScreenshots: [],
    setupInstructions: "",
    setupFiles: [],
  };
  reduxAction(store.dispatch, { type: "CREATE_LESSON_V2_DATA", arg: lesson });
  globalData.chapters["001"] = {
    _id: "001",
    name: "Chapter One",
    steps: ["step01"],
  };
  globalData.chapters["002"] = {
    _id: "002",
    name: "Chapter Two",
    steps: ["step01"],
  };
  globalData.steps["step01"] = {
    _id: "step01",
    name: "Step one",
    items: ["item01", "item02"],
  };
  globalData.items["001"] = {
    _id: "001",
    type: "focus_highlight",
    anchor: "001",
    relativePos: {
      x: 0,
      y: 0,
    },
    trigger: 0,
    destination: "",
    transition: 0,
    focus: "Rectangle",
  };
  globalData.items["002"] = {
    _id: "002",
    type: "image",
    anchor: undefined,
    relativePos: {
      x: 0,
      y: 0,
    },
    trigger: 0,
    destination: "",
    transition: 0,
    url: "",
  };

  globalData.anchors["001"] = {
    _id: "001",
    name: "Anchor",
    type: "crop",
    templates: [],
    function: "or",
    cvMatchValue: 990,
    cvCanvas: 100,
    cvDelay: 100,
    cvGrayscale: true,
    cvApplyThreshold: false,
    cvThreshold: 0,
  };
}

const restrictMinSize =
  interact.modifiers &&
  interact.modifiers.restrictSize({
    min: { width: 100, height: 100 },
  });

const cursorChecker: any = (
  action: any,
  _interactable: any,
  _element: any,
  interacting: boolean
): string => {
  switch (action.axis) {
    case "x":
      return "ew-resize";
    case "y":
      return "ns-resize";
    default:
      return interacting ? "grabbing" : "grab";
  }
};

interface WindowletProps {
  style?: CSSProperties;
}

function Windowlet(props: PropsWithChildren<WindowletProps>) {
  const { children } = props;
  const dragContainer = useRef<HTMLDivElement>(null);
  const resizeContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dragContainer.current) {
      interact(dragContainer.current)
        .draggable({ cursorChecker })
        .on("dragmove", (event) => {
          if (resizeContainer.current) {
            const x = parseFloat(resizeContainer.current.style.left) + event.dx;
            const y = parseFloat(resizeContainer.current.style.top) + event.dy;
            resizeContainer.current.style.left = `${x}px`;
            resizeContainer.current.style.top = `${y}px`;
          }
        });

      return (): void =>
        interact(dragContainer.current as HTMLDivElement).unset();
    }
    return () => {};
  }, []);

  useEffect(() => {
    if (resizeContainer.current) {
      interact(resizeContainer.current)
        .resizable({
          edges: { left: true, right: true, bottom: true, top: true },
          modifiers: [restrictMinSize],
          inertia: true,
        } as any)
        .on("resizemove", (event) => {
          const { target } = event;
          const x = parseFloat(target.style.left) + event.deltaRect.left;
          const y = parseFloat(target.style.top) + event.deltaRect.top;
          // fix for interact.js adding 4px to height/width on resize
          target.style.width = `${event.rect.width - 4}px`;
          target.style.height = `${event.rect.height - 4}px`;
          target.style.left = `${x}px`;
          target.style.top = `${y}px`;
        });

      return (): void =>
        interact(resizeContainer.current as HTMLDivElement).unset();
    }
    return () => {};
  }, []);

  return (
    <div
      className="window-container click-on"
      ref={resizeContainer}
      style={{
        border: `1px solid rgba(128, 128, 128, 0.3)`,
        opacity: "1",
        visibility: "visible",
        height: `${0}px`,
        width: `${0}px`,
        left: `${0}px`,
        top: `${0}px`,
      }}
    >
      <div ref={dragContainer} className="title-bar" />
      {children}
    </div>
  );
}

function TopBar() {
  return <div className="top-bar">Super Reality</div>;
}

export default function CreateLessonDetached(): JSX.Element {
  const resizeContainer = useRef<HTMLDivElement>(null);
  const { overlayTransparent } = useSelector((state: AppState) => state.render);
  const dispatch = useDispatch();
  useTransparentFix(false);

  useEffect(() => {
    setMocks();
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }, []);

  useEffect(() => {
    if (resizeContainer.current) {
      interact(resizeContainer.current)
        .resizable({
          edges: { left: false, right: true, bottom: false, top: false },
          modifiers: [restrictMinSize],
          inertia: true,
        } as any)
        .on("resizemove", (event) => {
          const { target } = event;
          target.style.width = `${event.rect.width - 4}px`;
        });

      return (): void => {
        if (resizeContainer.current) interact(resizeContainer.current).unset();
      };
    }
    return () => {};
  }, [overlayTransparent, resizeContainer]);

  const setTransparent = useCallback(() => {
    reduxAction(dispatch, { type: "SET_OVERLAY_TRANSPARENT", arg: true });
    setFocusable(false);
    setTopMost(true);
    setMaximize(true);
    setResizable(false);
  }, [dispatch]);

  const setSolid = useCallback(() => {
    reduxAction(dispatch, { type: "SET_OVERLAY_TRANSPARENT", arg: false });
    setFocusable(true);
    setTopMost(false);
    setMaximize(false);
    setResizable(true);
  }, [dispatch]);

  return overlayTransparent ? (
    <div className="transparent-container click-through">
      <Windowlet>
        <ButtonSimple
          margin="auto"
          width="200px"
          height="24px"
          onClick={setSolid}
        >
          Set Solid
        </ButtonSimple>
      </Windowlet>
    </div>
  ) : (
    <div className="solid-container">
      <TopBar />
      <div className="main-container">
        <div className="edit">
          <div
            className="creator"
            style={{ width: "400px" }}
            ref={resizeContainer}
          >
            <Lesson />
          </div>
          <div className="preview" />
        </div>
        <div className="nav" />
      </div>
    </div>
  );
}
