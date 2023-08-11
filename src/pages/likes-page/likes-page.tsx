import { appMeta } from "../../app-meta";
import { LikedWord } from "../../components/liked-word/liked-word";
import { likedWords } from "../../mocks";
import { useStateSelector } from "../../store/hooks";
import { LikesPageMeta } from "./likes-page-meta";
import "./likes-page.css";

function LikesPage() {
  const words = useStateSelector((state) => state.word.data);
  const wordStatus = useStateSelector((state) => state.word.status);
  const userStatus = useStateSelector((state) => state.user.status);
  const savedWords = useStateSelector((state) => state.user.data.savedWords);
  const nativeLang = useStateSelector((state) => state.lang.nativeLang);
  const learningLang = useStateSelector((state) => state.lang.learningLang);

  if (wordStatus === "loading" || userStatus === "loading") {
    return <h1>loading</h1>;
  }

  if (!savedWords || savedWords.length === 0) {
    return (
      <div className="container">
        <h1 className="title">{LikesPageMeta[nativeLang].noSavedWords}</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">{LikesPageMeta[nativeLang].title}</h1>
      <div className="likes__header">
        <p className="likes__text">{appMeta.lang[nativeLang][nativeLang]}</p>
        {nativeLang === learningLang ? null : (
          <p className="likes__text">
            {appMeta.lang[learningLang][nativeLang]}
          </p>
        )}

        <p className="likes__text">{LikesPageMeta[nativeLang].deleting}</p>
      </div>
      <div className="likes__block">
        {savedWords.map((id) => {
          const word = words.find((item) => item._id === id);

          if (word) {
            return <LikedWord key={id} word={word} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export { LikesPage };
