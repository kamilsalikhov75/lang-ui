import React, { useState } from 'react';
import './register.css';
import { IAuth } from '../../types';

function Register({ setCurrentPopup }: IAuth) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  function handleClick() {
    setCurrentPopup('login');
  }

  return (
    <form className="auth__form">
      <h3 className="subtitle">Регистрация</h3>
      <input
        type="text"
        className="input"
        placeholder="Имя"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
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
        Зарегистрироваться
      </button>
      <div className="auth__block">
        <p className="text">Уже есть аккаунт?</p>
        <button onClick={handleClick} className="button">
          Авторизация
        </button>
      </div>
    </form>
  );
}

export { Register };
