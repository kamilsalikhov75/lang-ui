import './header.css';
import logo from '../../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { icons } from '../../icons';
import { useState } from 'react';
import { UserMenu } from '../user-menu/user-menu';
import { AuthBlock } from '../auth-block/auth-block';

function Header() {
  const isAuth = true;
  const { pathname } = useLocation();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);

  function toggleMenu() {
    setIsMenuActive(!isMenuActive);
  }

  return (
    <>
      <header className="header">
        <div className="container">
          {isMenuActive ? <UserMenu /> : null}
          <Link to="/index.html" className="logo__link">
            <img src={logo} className="logo" />
          </Link>
          {pathname === '/index.html' ? (
            <nav className="navigation">
              <a href="#howwork" className="link">
                Как это работает
              </a>
              <a href="#about" className="link">
                О проекте
              </a>
            </nav>
          ) : null}
          {isAuth ? (
            <div className="header__block">
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
                Регистрация
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
