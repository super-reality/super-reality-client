import { IDName } from "..";

export interface IStep {
  _id: string;
  name: string;
  items: IDName[];
}
