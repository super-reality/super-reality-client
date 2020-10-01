import { ValueOf } from "../../../../types/utils";

const ItemFocusTriggers = {
  "Click target": 1,
  "Hover target": 2,
  "Click Next button": 3,
  None: null,
};

const ItemAudioTriggers = {
  "Audio finish": 1,
  "Click Next button": 2,
  None: null,
};

const ItemImageTriggers = {
  "Click Ok button": 1,
  "Click Next button": 2,
  None: null,
};

const ItemVideoTriggers = {
  "Click Ok button": 1,
  "On video end": 2,
  "Click Next button": 3,
  None: null,
};

const ItemDialogTriggers = {
  "Click Ok button": 1,
  "On video end": 2,
  "Click Next button": 3,
  None: null,
};

export interface IAbsolutePos {
  vertical?: number; // In % of screen, not used for anchors
  horizontal?: number; // In % of screen, not used for anchors
  x: number;
  y: number;
}

export interface BaseItem {
  _id: string;
  type: "focus_highlight" | "audio" | "video" | "image" | "dialog";
  anchor?: string;
  relativePos: IAbsolutePos;
  trigger: number | null;
  destination: string; // a step ID to go to
  transition: number; // type
}

export interface ItemFocus extends BaseItem {
  type: "focus_highlight";
  focus: "Mouse Point" | "Rectangle" | "Area highlight";
  trigger: ValueOf<typeof ItemFocusTriggers>;
}

export interface ItemAudio extends BaseItem {
  type: "audio";
  showPopup: boolean;
  url: string;
  text: string;
  trigger: ValueOf<typeof ItemAudioTriggers>;
}

export interface ItemImage extends BaseItem {
  type: "image";
  url: string;
  trigger: ValueOf<typeof ItemImageTriggers>;
}

export interface ItemVideo extends BaseItem {
  type: "video";
  url: string;
  loop: boolean;
  trigger: ValueOf<typeof ItemVideoTriggers>;
}

export interface ItemDialog extends BaseItem {
  type: "dialog";
  url: string;
  trigger: ValueOf<typeof ItemDialogTriggers>;
}

export type Item = ItemFocus | ItemAudio | ItemImage | ItemVideo | ItemDialog;
