import { Link } from 'react-router-dom';
import { user } from '../../mocks';
import './user-header.css';

interface IUserHeader {
  currentTab: string | undefined;
}
function UserHeader({ currentTab }: IUserHeader) {
  return (
    <div className="user-header">
      <div className="user-header__top">
        <p className="user-header__icon">{user.name.slice(0, 1)}</p>
        <p className="user-header__name">{user.name}</p>
      </div>
      <nav className="user-header__navigation">
        <Link
          to="/user/progress"
          className={`tab-link ${
            currentTab === 'progress' ? 'tab-link--active' : ''
          }`}
        >
          Прогресс
        </Link>
        <Link
          to="/user/settings"
          className={`tab-link ${
            currentTab === 'settings' ? 'tab-link--active' : ''
          }`}
        >
          Настройки
        </Link>
        <button className="user-header__button">Выход</button>
      </nav>
    </div>
  );
}

export { UserHeader };
