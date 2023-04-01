import { useState } from 'react';
import { user } from '../../mocks';
import './user-settings.css';
function UserSettings() {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <form className="user-settings__form">
      <input
        type="text"
        className="input"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Имя"
      />
      <input
        type="email"
        className="input"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Электронная почта"
      />
      <input
        type="password"
        className="input"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Текущий пароль"
      />
      <input
        type="password"
        className="input"
        value={newPassword}
        onChange={(event) => setNewPassword(event.target.value)}
        placeholder="Новый пароль"
      />
      <input
        type="password"
        className="input"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        placeholder="Подтвердите пароль"
      />
      <button type="submit" className="button">
        Сохранить
      </button>
      <button className="button button--red">Удалить аккаунт</button>
    </form>
  );
}

export { UserSettings };
