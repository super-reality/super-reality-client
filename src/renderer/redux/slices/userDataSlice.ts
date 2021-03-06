/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Just store the IDs and the data elsewhere
// redux can get clunky with data that is too complex/deep
const initialState = {
  lessons: [] as string[],
  collections: [] as string[],
  subjects: [] as string[],
};

type AuthState = typeof initialState;

function toggleFromArray(state: string[], value: string): string[] {
  const pos = state.indexOf(value);
  let ret: string[] = [...state];
  if (pos == -1) {
    ret = [...ret, value];
  } else {
    ret.splice(pos, 1);
  }
  return ret;
}

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    clearUserData: (state: AuthState): void => {
      Object.assign(state, initialState);
    },
    toggleLesson: (state: AuthState, action: PayloadAction<string>): void => {
      state.lessons = toggleFromArray(state.lessons, action.payload);
    },
    setLessons: (state: AuthState, action: PayloadAction<string[]>): void => {
      state.lessons = [...action.payload];
    },
    reset: (_state: AuthState, _action: PayloadAction<null>): void => {
      // Do nothing, resets the redux state
    },
  },
});

export const {
  clearUserData,
  toggleLesson,
  setLessons,
  reset,
} = userDataSlice.actions;

export default userDataSlice;
