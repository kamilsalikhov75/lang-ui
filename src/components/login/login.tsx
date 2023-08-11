import "./login.css";
import { IAuth } from "../../types";
import { FormEvent, useState } from "react";
import { useAppDispatch, useStateSelector } from "../../store/hooks";
import { loginUserThunk } from "../../store/slices/user";
import { appMeta } from "../../app-meta";

function Login({ setCurrentPopup }: IAuth) {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const dispatch = useAppDispatch();
  const status = useStateSelector((state) => state.user.status);
  const nativeLang = useStateSelector((state) => state.lang.nativeLang);

  function handleClick() {
    setCurrentPopup("register");
  }
  function onSubmit(event: FormEvent) {
    event.preventDefault();
    dispatch(loginUserThunk({ email, password }));
  }

  if (status === "loading") {
    return <h1>loading</h1>;
  }

  return (
    <form className="auth__form" onSubmit={onSubmit}>
      <h3 className="subtitle">{appMeta.auth[nativeLang].authorization}</h3>
      <input
        type="email"
        className="input"
        placeholder={appMeta.placeholders[nativeLang].email}
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        className="input"
        placeholder={appMeta.placeholders[nativeLang].password}
        required
        value={password}
        onChange={(event) => setPasword(event.target.value)}
      />
      <button type="submit" className="button">
        {appMeta.auth[nativeLang].login}
      </button>
      <div className="auth__block">
        <p className="text">{appMeta.auth[nativeLang].hasntAccount}</p>
        <button onClick={handleClick} className="button">
          {appMeta.auth[nativeLang].registration}
        </button>
      </div>
    </form>
  );
}

export { Login };
