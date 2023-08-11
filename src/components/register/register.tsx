import { FormEvent, useState } from "react";
import "./register.css";
import { IAuth } from "../../types";
import { registerUserThunk } from "../../store/slices/user";
import { useAppDispatch, useStateSelector } from "../../store/hooks";
import { appMeta } from "../../app-meta";

function Register({ setCurrentPopup }: IAuth) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const status = useStateSelector((state) => state.user.status);
  const nativeLang = useStateSelector((state) => state.lang.nativeLang);
  const dispatch = useAppDispatch();

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    dispatch(registerUserThunk({ name, email, password }));
  }

  function handleClick() {
    setCurrentPopup("login");
  }

  if (status === "loading") {
    return <h1>loading</h1>;
  }

  return (
    <form className="auth__form" onSubmit={onSubmit}>
      <h3 className="subtitle">{appMeta.auth[nativeLang].registration}</h3>
      <input
        type="text"
        className="input"
        placeholder={appMeta.placeholders[nativeLang].name}
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
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
        {appMeta.auth[nativeLang].register}
      </button>
      <div className="auth__block">
        <p className="text">{appMeta.auth[nativeLang].hasAccount}</p>
        <button onClick={handleClick} className="button">
          {appMeta.auth[nativeLang].authorization}
        </button>
      </div>
    </form>
  );
}

export { Register };
