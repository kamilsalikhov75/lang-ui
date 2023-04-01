import { LikedWord } from '../../components/liked-word/liked-word';
import { likedWords } from '../../mocks';
import './likes-page.css';

function LikesPage() {
  return (
    <div className="container">
      <h1 className="title">Твои сохраненные слова</h1>
      <div className="likes__header">
        <p className="likes__text">Английский</p>
        <p className="likes__text">Русский</p>
        <p className="likes__text">Удаление</p>
      </div>
      <div className="likes__block">
        {likedWords.map((word) => (
          <LikedWord key={word._id} word={word} />
        ))}
      </div>
    </div>
  );
}

export { LikesPage };
