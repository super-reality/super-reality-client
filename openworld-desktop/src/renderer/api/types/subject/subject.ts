import Link from "../link/link";

export interface ISubject {
  _id?: string;
  parent: Link[];
  icon: string;
  name: string;
  shortDescription: string;
  description: string;
  medias: string[];
  tags: string[];
  visibility: Link[];
  entry: number;
}
