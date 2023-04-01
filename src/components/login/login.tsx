import './login.css';
import { IAuth } from '../../types';
import { useState } from 'react';

function Login({ setCurrentPopup }: IAuth) {
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  function handleClick() {
    setCurrentPopup('register');
  }

  return (
    <form className="auth__form">
      <h3 className="subtitle">Авторизация</h3>
      <input
        type="email"
        className="input"
        placeholder="Электронная почта"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        className="input"
        placeholder="Пароль"
        required
        value={password}
        onChange={(event) => setPasword(event.target.value)}
      />
      <button type="submit" className="button">
        Войти
      </button>
      <div className="auth__block">
        <p className="text">Еще нет аккаунта?</p>
        <button onClick={handleClick} className="button">
          Регистрация
        </button>
      </div>
    </form>
  );
}

export { Login };
