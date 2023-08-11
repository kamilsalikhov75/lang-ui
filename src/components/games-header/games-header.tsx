import { useState } from "react";
import { Link } from "react-router-dom";
import "./games-header.css";
import { useStateSelector } from "../../store/hooks";
import { gamesHeaderMeta } from "./games-header-meta";

interface IGamesHeader {
  currentTab: string | undefined;
}

function GamesHeader({ currentTab }: IGamesHeader) {
  const nativeLang = useStateSelector((state) => state.lang.nativeLang);
  return (
    <div className="games-header">
      <h1 className="title">{gamesHeaderMeta[nativeLang].title}</h1>
      <nav className="games-header__navigation">
        <Link
          to="/games/cards"
          className={`tab-link ${
            currentTab === "cards" ? "tab-link--active" : ""
          }`}
        >
          {gamesHeaderMeta[nativeLang].cards}
        </Link>
        {/* <Link
          to="/games/translate"
          className={`tab-link ${
            currentTab === "translate" ? "tab-link--active" : ""
          }`}
        >
          {gamesHeaderMeta[nativeLang].translate}
        </Link> */}
      </nav>
    </div>
  );
}

export { GamesHeader };
