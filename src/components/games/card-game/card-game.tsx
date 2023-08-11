import { useState } from "react";
import { ArrowIcon } from "../../icons/arrow-icon";
import { HeartIcon } from "../../icons/heart-icon";
import { TranslateIcon } from "../../icons/translate-icon";
import "./card-game.css";
import { useAppDispatch, useStateSelector } from "../../../store/hooks";
import { updateSavedWordsThunk } from "../../../store/slices/user";
function CardGame() {
  const { data, status } = useStateSelector((state) => state.word);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { learningLang, nativeLang } = useStateSelector((state) => state.lang);
  const [isActive, setIsActive] = useState(false);
  const [isTranslate, setIsTranslate] = useState(false);
  const currentWord = data && data.length && data[currentIndex];
  const { savedWords } = useStateSelector((state) => state.user.data);
  const dispatch = useAppDispatch();

  if (status === "loading") {
    return <h1>loading</h1>;
  }

  if (!data.length || !data || !currentWord) {
    return <h1>пусто(</h1>;
  }

  const onNext = () => {
    setCurrentIndex(currentIndex + 1);
    setIsActive(false);
    setIsTranslate(false);
  };
  const onPrev = () => {
    setCurrentIndex(currentIndex - 1);
    setIsActive(false);
    setIsTranslate(false);
  };

  const saveWords = () => {
    const savedWordsList = savedWords
      ? savedWords.includes(currentWord._id)
        ? savedWords.filter((id) => id !== currentWord._id)
        : [...savedWords, currentWord._id]
      : [currentWord._id];
    dispatch(updateSavedWordsThunk(savedWordsList));
  };

  return (
    <div className="card-game">
      <div className={`card${isTranslate ? " card-translate" : ""}`}>
        <div className="card-header">
          <button
            className={`game-icon-button${
              savedWords?.includes(currentWord._id)
                ? " game-icon-button-active"
                : ""
            }`}
            onClick={saveWords}
          >
            <HeartIcon />
          </button>
          {nativeLang !== learningLang ? (
            <button
              className="game-icon-button"
              onClick={() => {
                setIsTranslate(!isTranslate);
                setIsActive(false);
              }}
            >
              <TranslateIcon />
            </button>
          ) : null}
        </div>
        <div
          className={`card-word-block${
            isActive ? " card-word-block-active" : ""
          }`}
        >
          <p className="card-word-title">
            {isTranslate
              ? currentWord[nativeLang].word
              : currentWord[learningLang].word}
          </p>
          <button
            className="game-icon-button"
            onClick={() => setIsActive(!isActive)}
          >
            <ArrowIcon />
          </button>
        </div>
        <div className="card-word-desc-block">
          <p className="card-word-desc">
            {isTranslate
              ? currentWord[nativeLang].description
              : currentWord[learningLang].description}
          </p>
        </div>
      </div>
      <div className="card-game-buttons">
        <button className="prev" disabled={currentIndex === 0} onClick={onPrev}>
          <ArrowIcon />
        </button>
        <button
          className="next"
          disabled={currentIndex === data.length - 1}
          onClick={onNext}
        >
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}
export { CardGame };
