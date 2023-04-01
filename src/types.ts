export interface IAuth {
  setCurrentPopup: React.Dispatch<React.SetStateAction<string>>;
}

export interface IWord {
  word: { en: string; ru: string; _id: string };
}
