import { useState } from 'react';
import './translate-game.css';

function TranslateGame() {
  const [answer, setAnswer] = useState('');

  return (
    <div className="game">
      <h3 className="subtitle">Переведите слово Word</h3>
      <form className="game__form">
        <input
          type="text"
          className="input"
          placeholder="Перевод"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        />
        <button className="button button--blue">Проверить</button>
      </form>
    </div>
  );
}

export { TranslateGame };
