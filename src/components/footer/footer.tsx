import "./footer.css";
import { Link, useLocation } from "react-router-dom";
import { LangBlock } from "../lang-block/lang-block";
import { icons } from "../../icons";
import { useStateSelector } from "../../store/hooks";
import { appMeta } from "../../app-meta";
import { scroll } from "../../utils/helpers";

function Footer() {
  const { pathname } = useLocation();
  const nativeLang = useStateSelector((state) => state.lang.nativeLang);
  return (
    <footer className="footer">
      <div className="container">
        <LangBlock />
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
