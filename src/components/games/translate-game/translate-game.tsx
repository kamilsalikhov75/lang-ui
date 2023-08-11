import { useState } from "react";
import "./translate-game.css";
import { translateGameMeta } from "./translate-game-meta";
import { useStateSelector } from "../../../store/hooks";

function TranslateGame() {
  const [answer, setAnswer] = useState("");
  const nativeLang = useStateSelector((state) => state.lang.nativeLang);
  const learningLang = useStateSelector((state) => state.lang.learningLang);
  const word = {
    ru: "Яблоко",
    en: "Apple",
  };

  return (
    <div className="game">
      <h3 className="subtitle">{`${translateGameMeta[nativeLang].title} "${word[learningLang]}"`}</h3>
      <form className="game__form">
        <input
          type="text"
          className="input"
          placeholder={translateGameMeta[nativeLang].placeholder}
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        />
        <button className="button button--blue">
          {translateGameMeta[nativeLang].check}
        </button>
      </form>
    </div>
  );
}

export { TranslateGame };
