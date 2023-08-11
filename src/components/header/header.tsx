import "./header.css";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { icons } from "../../icons";
import { useEffect, useState } from "react";
import { UserMenu } from "../user-menu/user-menu";
import { AuthBlock } from "../auth-block/auth-block";
import { useStateSelector } from "../../store/hooks";
import { appMeta } from "../../app-meta";
import { scroll } from "../../utils/helpers";

function Header() {
  const { isAuth, data } = useStateSelector((state) => state.user);
  const { pathname } = useLocation();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);
  const nativeLang = useStateSelector((state) => state.lang.nativeLang);

  useEffect(() => {
    if (!isAuth) {
      setIsMenuActive(false);
    }
  }, [isAuth]);

  function toggleMenu() {
    setIsMenuActive(!isMenuActive);
  }

  return (
    <>
      <header className="header">
        <div className="container">
          {isMenuActive ? <UserMenu setIsMenuActive={setIsMenuActive} /> : null}
          <Link to="/index.html" className="logo__link">
            <img src={logo} className="logo" />
          </Link>
          {pathname === "/index.html" ? (
            <nav className="navigation">
              <a
                onClick={() => {
                  scroll("howwork");
                }}
                className="link"
              >
                {appMeta.links[nativeLang].howWorks}
              </a>
              <a
                onClick={() => {
                  scroll("about");
                }}
                className="link"
              >
                {appMeta.links[nativeLang].about}
              </a>
            </nav>
          ) : null}
          {isAuth ? (
            <div className="header__block">
              {data.role === "admin" ? (
                <Link to="/admin/words" className="icon-link">
                  <img src={icons.adminIcon} className="icon-img" />
                </Link>
              ) : null}
              <Link to="/likes" className="icon-link">
                <img src={icons.heartIcon} className="icon-img" />
              </Link>
              <Link to="/games/cards" className="icon-link">
                <img src={icons.gameIcon} className="icon-img" />
              </Link>
              <button onClick={toggleMenu} className="icon-button">
                <img src={icons.userIcon} className="icon-img" />
              </button>
            </div>
          ) : (
            <div className="header__block">
              <button
                onClick={() => {
                  setIsPopupActive(!isPopupActive);
                }}
                className="button button--blue"
              >
                {appMeta.auth[nativeLang].registration}
              </button>
            </div>
          )}
        </div>
      </header>
      {isPopupActive ? <AuthBlock setIsPopupActive={setIsPopupActive} /> : null}
    </>
  );
}

export { Header };
