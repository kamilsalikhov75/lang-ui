import { icons } from "../../icons";
import { useAppDispatch, useStateSelector } from "../../store/hooks";
import { updateSavedWordsThunk } from "../../store/slices/user";
import { IWordObject } from "../../types";
import "./liked-word.css";

interface ILikedWord {
  word: IWordObject;
}

function LikedWord({ word }: ILikedWord) {
  const nativeLang = useStateSelector((state) => state.lang.nativeLang);
  const learningLang = useStateSelector((state) => state.lang.learningLang);
  const savedWords = useStateSelector((state) => state.user.data.savedWords);
  const dispatch = useAppDispatch();

  const saveWords = () => {
    const savedWordsList = savedWords
      ? savedWords.includes(word._id)
        ? savedWords.filter((id) => id !== word._id)
        : [...savedWords, word._id]
      : [word._id];
    dispatch(updateSavedWordsThunk(savedWordsList));
  };

  return (
    <div className="liked-word">
      <p className="liked-word__text">{word[nativeLang].word}</p>
      {nativeLang === learningLang ? null : (
        <p className="liked-word__text">{word[learningLang].word}</p>
      )}
      <button className="icon-button" onClick={saveWords}>
        <img src={icons.busketIcon} className="icon" />
      </button>
    </div>
  );
}

export { LikedWord };
