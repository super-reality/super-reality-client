import { CodeSuccess } from "..";
import { ILesson } from "./lesson";

/* eslint-disable camelcase */
export default interface LessonCreate {
  err_code: CodeSuccess;
  data: ILesson;
}

/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
export interface LessonResp {
  err_code: CodeSuccess;
  lesson: { _id: string };
  status: Number;
}
