import { Link } from "react-router-dom";
import "./admin-header.css";

interface IGamesHeader {
  currentTab: string | undefined;
}

function AdminHeader({ currentTab }: IGamesHeader) {
  return (
    <div className="admin-header">
      <h1 className="title">Администрирование</h1>
      <nav className="games-header__navigation">
        <Link
          to="/admin/words"
          className={`tab-link ${
            currentTab === "words" ? "tab-link--active" : ""
          }`}
        >
          Слова
        </Link>
        <Link
          to="/admin/add-word"
          className={`tab-link ${
            currentTab === "add-word" ? "tab-link--active" : ""
          }`}
        >
          Добавить слово
        </Link>
      </nav>
    </div>
  );
}

export { AdminHeader };
