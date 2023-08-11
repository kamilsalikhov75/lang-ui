import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user";
import { langReducer } from "./slices/lang";
import { wordReducer } from "./slices/word";

export const store = configureStore({
  reducer: {
    user: userReducer,
    lang: langReducer,
    word: wordReducer,
  },
});
