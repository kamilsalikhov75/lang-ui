import { Link } from "react-router-dom";
import { icons } from "../../icons";
import "./user-menu.css";
import { useAppDispatch, useStateSelector } from "../../store/hooks";
import { userActions } from "../../store/slices/user";
import React from "react";
import { userMenuMeta } from "./user-menu-meta";
interface IUserMenu {
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function UserMenu({ setIsMenuActive }: IUserMenu) {
  const dispatch = useAppDispatch();
  const nativeLang = useStateSelector((state) => state.lang.nativeLang);

  function logout() {
    dispatch(userActions.logout());
    setIsMenuActive(false);
  }

  return (
    <div className="user-menu">
      <Link to="/user/settings" className="user-menu__link">
        <img src={icons.userIcon} className="user-menu__img" />
        {userMenuMeta[nativeLang].cabinet}
      </Link>
      {/* <Link to="/user/settings" className="user-menu__link">
        <img src={icons.settingIcon} className="user-menu__img" />
        {userMenuMeta[nativeLang].settings}
      </Link> */}
      <button className="user-menu__button" onClick={logout}>
        <img src={icons.exitIcon} className="user-menu__img" />
        {userMenuMeta[nativeLang].logout}
      </button>
    </div>
  );
}

export { UserMenu };
