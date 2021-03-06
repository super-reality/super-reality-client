/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  playing: false,
  playingChapterNumber: 0,
  playingStepNumber: 0,
  ttsOn: true,
};

type InitialState = typeof initialState;

const lessonPlayerSlice = createSlice({
  name: "lessonPlayer",
  initialState,
  reducers: {
    setLessonPlayerData: (
      state: InitialState,
      action: PayloadAction<Partial<InitialState>>
    ): void => {
      state = Object.assign(state, action.payload);
    },
    reset: (_state: InitialState, _action: PayloadAction<null>): void => {
      _state = Object.assign(_state, initialState);
    },
    setPlaying: (state: InitialState, action: PayloadAction<boolean>): void => {
      state.playing = action.payload;
    },
    setTTS: (state: InitialState, action: PayloadAction<boolean>): void => {
      state.ttsOn = action.payload;
    },
  },
});

export const {
  setLessonPlayerData,
  reset,
  setPlaying,
  setTTS,
} = lessonPlayerSlice.actions;

export default lessonPlayerSlice;
