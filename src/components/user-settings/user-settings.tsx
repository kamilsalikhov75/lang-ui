import { useState } from "react";
import "./user-settings.css";
import { useStateSelector } from "../../store/hooks";
import { userSettingMeta } from "./user-setting-meta";
import { appMeta, appMetaLanguages } from "../../app-meta";
import { LangButton } from "../lang-button/lang-button";
function UserSettings() {
  const user = useStateSelector((state) => state.user.data);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const nativeLang = useStateSelector((state) => state.lang.nativeLang);

  return (
    <>
      <div className="lang__block">
        <h3 className="subtitle">
          {userSettingMeta[nativeLang].changeNativeLangTitle}
        </h3>
        {appMetaLanguages[nativeLang].map((lang) => {
          if (lang.lang === "ru" || lang.lang === "en") {
            if (lang.lang === nativeLang) {
              return (
                <LangButton
                  key={lang.lang}
                  lang={lang.lang}
                  text={lang.language}
                  isActive={true}
                />
              );
            }
            return (
              <LangButton
                key={lang.lang}
                lang={lang.lang}
                text={lang.language}
                isActive={false}
              />
            );
          }
        })}
      </div>
      {/* <form className="user-settings__form">
        <input
          type="text"
          className="input"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={appMeta.placeholders[nativeLang].name}
        />
        <input
          type="email"
          className="input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={appMeta.placeholders[nativeLang].email}
        />
        <input
          type="password"
          className="input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder={userSettingMeta[nativeLang].currentPasswordPlaceholder}
        />
        <input
          type="password"
          className="input"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
          placeholder={userSettingMeta[nativeLang].newPasswordPlaceholder}
        />
        <input
          type="password"
          className="input"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder={userSettingMeta[nativeLang].confirmPasswordPlaceholder}
        />
        <button type="submit" className="button">
          {userSettingMeta[nativeLang].save}
        </button>
        <button className="button button--red">
          {userSettingMeta[nativeLang].deleteAccount}
        </button>
      </form> */}
    </>
  );
}

export { UserSettings };
