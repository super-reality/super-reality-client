import { EndStepTypeValue } from "./endStep";
import { TypeValue } from "../../types/utils";

export interface IAbsolutePos {
  vertical?: number; // In % of screen, not used for anchors
  horizontal?: number; // In % of screen, not used for anchors
  x: number;
  y: number;
  width: number;
  height: number;
}

export type BaseItemType =
  | "focus_highlight"
  | "audio"
  | "video"
  | "image"
  | "dialog"
  | "fx";

export interface BaseItem {
  _id: string;
  name: string;
  type: BaseItemType;
  relativePos: IAbsolutePos;
  // trigger: number | null;
  destination: string; // a step ID to go to
  transition: number; // type
  anchor: boolean;
  endOn: EndStepTypeValue[];
}

export interface ItemFocus extends BaseItem {
  type: "focus_highlight";
  focus: "Mouse Point" | "Rectangle" | "Area highlight";
}

export interface ItemFX extends BaseItem {
  type: "fx";
  effect: string;
  fullScreen: boolean;
}

export interface ItemAudio extends BaseItem {
  type: "audio";
  showPopup: boolean;
  url: string;
  text: string;
}

export interface ItemImage extends BaseItem {
  type: "image";
  url: string;
}

export type VideoSource = "raw" | "youtube";

export interface ItemVideo extends BaseItem {
  type: "video";
  url: string;
  source?: VideoSource;
  loop: boolean;
  muted?: boolean;
}

interface BaseVideoSourceTypeValue extends TypeValue {
  type: VideoSource;
}

export interface VideoSourceRawTypeValue extends BaseVideoSourceTypeValue {
  type: "raw";
  value: string;
}

export interface VideoSourceYoutubeTypeValue extends BaseVideoSourceTypeValue {
  type: "youtube";
  value: string;
}

export type VideoSourceTypeValue =
  | VideoSourceRawTypeValue
  | VideoSourceYoutubeTypeValue;

export interface ItemDialog extends BaseItem {
  type: "dialog";
  text: string;
}

export type Item =
  | ItemFocus
  | ItemAudio
  | ItemImage
  | ItemVideo
  | ItemDialog
  | ItemFX;
