import { useState } from 'react';
import { Link } from 'react-router-dom';
import './games-header.css';

interface IGamesHeader {
  currentTab: string | undefined;
}

function GamesHeader({ currentTab }: IGamesHeader) {
  return (
    <div className="games-header">
      <h1 className="title">Игры для изучения слов</h1>
      <nav className="games-header__navigation">
        <Link
          to="/games/cards"
          className={`tab-link ${
            currentTab === 'cards' ? 'tab-link--active' : ''
          }`}
        >
          Карточки
        </Link>
        <Link
          to="/games/translate"
          className={`tab-link ${
            currentTab === 'translate' ? 'tab-link--active' : ''
          }`}
        >
          Перевод слова
        </Link>
      </nav>
    </div>
  );
}

export { GamesHeader };
