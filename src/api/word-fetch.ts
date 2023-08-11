import axios from "axios";
import { endPoints } from "./endpoints";
import { IAdminWord } from "../components/admin-word-form/admin-word-form";
import { getToken } from "../localStorage/localStorage";

export const getWords = async () => {
  const token = getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(endPoints.getWords, config);
  return response.data;
};

export const addWord = async (data: any) => {
  const token = getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.post(endPoints.getWords, data, config);
  return response.data;
};

export const deleteWord = async (id: string) => {
  const token = getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.delete(`${endPoints.getWords}/${id}`, config);
  return response.data;
};

export const updateWord = async (id: string, data: IAdminWord) => {
  const token = getToken();
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.patch(
    `${endPoints.getWords}/${id}`,
    data,
    config
  );
  return response.data;
};
