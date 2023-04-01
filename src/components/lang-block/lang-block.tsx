import './lang-block.css';
import { useState } from 'react';
import { languages } from '../../languages';

function LangBlock() {
  const [currentLang, setCurrentLang] = useState('ru');
  const [isActive, setIsActive] = useState(false);
  const currentLangObj = languages.find((item) => item.value === currentLang);
  const otherLangs = languages.filter((item) => item.value !== currentLang);

  function toggleLangs() {
    setIsActive(!isActive);
  }

  function setLang(lang: string) {
    setCurrentLang(lang);
    setIsActive(false);
  }

  return (
    <div className="lang-block">
      <button onClick={toggleLangs} className="lang__button">
        <img src={currentLangObj?.icon} className="lang__icon" />
      </button>
      {isActive
        ? otherLangs.map((item) => (
            <button
              key={item.value}
              onClick={() => setLang(item.value)}
              className="lang__button"
            >
              <img src={item.icon} className="lang__icon" />
            </button>
          ))
        : null}
    </div>
  );
}

export { LangBlock };
