import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Lang = 'ru' | 'en'

interface ILangState {
  nativeLang: Lang;
  learningLang: Lang;
}

const initialState: ILangState = {
  nativeLang: "ru",
  learningLang: "en",
};

const slice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setNativeLang(state, action: PayloadAction<{ lang: Lang }>) {
      state.nativeLang = action.payload.lang;
    },
    setLearningLang(state, action: PayloadAction<{ lang: Lang }>) {
      state.learningLang = action.payload.lang;
    },
  },
});

export const { reducer: langReducer, actions: langActions } = slice;
