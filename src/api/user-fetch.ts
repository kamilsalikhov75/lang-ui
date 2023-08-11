import axios from "axios";
import { endPoints } from "./endpoints";
import { getToken } from "../localStorage/localStorage";

export interface IRegister {
  name: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export const register = async (data: IRegister) => {
  const token = getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.post(endPoints.register, data);
  return response.data;
};

export const getUser = async () => {
  const token = getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(endPoints.getUser, config);
  return response.data;
};

export const login = async (data: ILogin) => {
  const token = getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.post(endPoints.login, data);
  return response.data;
};

export const updateSavedWords = async (data: string[]) => {
  const token = getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.patch(endPoints.updateSavedWords, data, config);
  return response.data;
};
