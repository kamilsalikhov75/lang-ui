import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types";
import {
  ILogin,
  IRegister,
  getUser,
  login,
  register,
  updateSavedWords,
} from "../../api/user-fetch";
import { deleteToken, saveToken } from "../../localStorage/localStorage";
import { Status } from "../types";

interface IUserState {
  token: string;
  data: IUser;
  status: Status;
  isAuth: boolean;
}

const initialState: IUserState = {
  token: "",
  data: {
    _id: "",
    name: "",
    email: "",
    role: "user",
  },
  status: "init",
  isAuth: false,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
    },
    logout(state) {
      state.token = initialState.token;
      state.data = initialState.data;
      state.status = initialState.status;
      state.isAuth = initialState.isAuth;
      deleteToken();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.status = "success";
        state.token = action.payload.token;
        saveToken(action.payload.token);
      })
      .addCase(registerUserThunk.rejected, (state) => {
        state.status = "error";
      })
      .addCase(getUserThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserThunk.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
        state.isAuth = true;
      })
      .addCase(getUserThunk.rejected, (state) => {
        state.status = "error";
      })
      .addCase(loginUserThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.status = "success";
        state.token = action.payload.token;
        saveToken(action.payload.token);
      })
      .addCase(loginUserThunk.rejected, (state) => {
        state.status = "error";
      })
      .addCase(updateSavedWordsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateSavedWordsThunk.fulfilled, (state, action) => {
        state.status = "success";
        state.data.savedWords = action.meta.arg;
      })
      .addCase(updateSavedWordsThunk.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const registerUserThunk = createAsyncThunk(
  "user/register",
  (data: IRegister) => {
    return register(data);
  }
);

export const getUserThunk = createAsyncThunk("user/getUser", () => {
  return getUser();
});

export const loginUserThunk = createAsyncThunk("user/login", (data: ILogin) => {
  return login(data);
});

export const updateSavedWordsThunk = createAsyncThunk(
  "user/updateSavedWords",
  (data: string[]) => {
    return updateSavedWords(data);
  }
);

export const { reducer: userReducer, actions: userActions } = slice;
