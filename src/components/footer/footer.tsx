import './footer.css';
import tgIcon from '../../assets/tg-icon.svg';
import vkIcon from '../../assets/vk-icon.svg';
import { Link, useLocation } from 'react-router-dom';
import { LangBlock } from '../lang-block/lang-block';
import { icons } from '../../icons';

function Footer() {
  const { pathname } = useLocation();
  return (
    <footer className="footer">
      <div className="container">
        <LangBlock />
        {pathname === '/index.html' ? (
          <nav className="navigation">
            <Link to="#howwork" className="link">
              Как это работает
            </Link>
            <Link to="#about" className="link">
              О проекте
            </Link>
          </nav>
        ) : null}
        <div className="footer__block">
          <Link to="https://vk.com/id121620348" className="icon-link">
            <img src={icons.vkIcon} className="icon-img" />
          </Link>
          <Link to="https://t.me/skamils" className="icon-link">
            <img src={icons.tgIcon} className="icon-img" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
