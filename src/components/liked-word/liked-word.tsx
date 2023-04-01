import { icons } from '../../icons';
import { IWord } from '../../types';
import './liked-word.css';

function LikedWord({ word }: IWord) {
  return (
    <div className="liked-word">
      <p className="liked-word__text">{word.en}</p>
      <p className="liked-word__text">{word.ru}</p>
      <button className="icon-button">
        <img src={icons.busketIcon} className="icon" />
      </button>
    </div>
  );
}

export { LikedWord };
