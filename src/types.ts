export interface IAuth {
  setCurrentPopup: React.Dispatch<React.SetStateAction<string>>;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  savedWords?: string[];
}

export interface ICategory {
  title: string;
}

export interface IWord {
  word: string;
  transcription: string;
  description: string;
  _id: string;
}

export interface IWordObject {
  _id: string;
  ru: IWord;
  en: IWord;
  category: ICategory;
}
