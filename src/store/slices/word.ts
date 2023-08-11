import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IWordObject } from "../../types";
import { Status } from "../types";
import {
  addWord,
  deleteWord,
  getWords,
  updateWord,
} from "../../api/word-fetch";
import { IAdminWord } from "../../components/admin-word-form/admin-word-form";

interface IWordState {
  data: IWordObject[];
  status: Status;
}

const initialState: IWordState = {
  data: [],
  status: "init",
};

const slice = createSlice({
  name: "word",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWordsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getWordsThunk.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getWordsThunk.rejected, (state) => {
        state.status = "error";
      })
      .addCase(addWordThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addWordThunk.rejected, (state) => {
        state.status = "error";
      })
      .addCase(addWordThunk.fulfilled, (state, action) => {
        state.status = "success";
        state.data.push(action.payload);
      })
      .addCase(deleteWordThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteWordThunk.rejected, (state) => {
        state.status = "error";
      })
      .addCase(deleteWordThunk.fulfilled, (state, action) => {
        state.status = "success";
        state.data = state.data.filter((item) => item._id !== action.meta.arg);
      })
      .addCase(updateWordThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateWordThunk.rejected, (state) => {
        state.status = "error";
      })
      .addCase(updateWordThunk.fulfilled, (state, action) => {
        state.status = "success";
        state.data = state.data.map((item) => {
          if (item._id === action.meta.arg.id) {
            return {
              ...item,
              ru: {
                ...item.ru,
                word: action.meta.arg.data.ru.word,
                transcription: action.meta.arg.data.ru.transcription,
                description: action.meta.arg.data.ru.description,
              },
              en: {
                ...item.en,
                word: action.meta.arg.data.en.word,
                transcription: action.meta.arg.data.en.transcription,
                description: action.meta.arg.data.en.description,
              },
            };
          }
          return item;
        });
      });
  },
});

export const getWordsThunk = createAsyncThunk("word/getWords", () => {
  return getWords();
});

export const addWordThunk = createAsyncThunk(
  "word/addWord",
  (data: IAdminWord) => {
    return addWord(data);
  }
);

export const deleteWordThunk = createAsyncThunk(
  "word/deleteWord",
  (id: string) => {
    return deleteWord(id);
  }
);

export const updateWordThunk = createAsyncThunk(
  "word/updateWord",
  ({ id, data }: { id: string; data: IAdminWord }) => {
    return updateWord(id, data);
  }
);
export const { reducer: wordReducer, actions: wordActions } = slice;
