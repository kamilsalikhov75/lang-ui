import { Link } from "react-router-dom";
import { user } from "../../mocks";
import "./user-header.css";
import { useAppDispatch, useStateSelector } from "../../store/hooks";
import { userActions } from "../../store/slices/user";
import { userHeaderMeta } from "./user-header-meta";

interface IUserHeader {
  currentTab: string | undefined;
}
function UserHeader({ currentTab }: IUserHeader) {
  const user = useStateSelector((state) => state.user.data);
  const dispatch = useAppDispatch();
  const nativeLang = useStateSelector((state) => state.lang.nativeLang);

  function logout() {
    dispatch(userActions.logout());
  }

  return (
    <div className="user-header">
      <div className="user-header__top">
        <p className="user-header__icon">{user.name.slice(0, 1)}</p>
        <p className="user-header__name">{user.name}</p>
      </div>
      <nav className="user-header__navigation">
        {/* <Link
          to="/user/progress"
          className={`tab-link ${
            currentTab === "progress" ? "tab-link--active" : ""
          }`}
        >
          {userHeaderMeta[nativeLang].progress}
        </Link> */}
        <Link
          to="/user/settings"
          className={`tab-link ${
            currentTab === "settings" ? "tab-link--active" : ""
          }`}
        >
          {userHeaderMeta[nativeLang].settings}
        </Link>
        <button onClick={logout} className="user-header__button">
          {userHeaderMeta[nativeLang].logout}
        </button>
      </nav>
    </div>
  );
}

export { UserHeader };
