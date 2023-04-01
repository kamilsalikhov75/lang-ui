import { Link } from 'react-router-dom';
import { icons } from '../../icons';
import './user-menu.css';

function UserMenu() {
  return (
    <div className="user-menu">
      <Link to="/user/progress" className="user-menu__link">
        <img src={icons.userIcon} className="user-menu__img" />
        Личный кабинет
      </Link>
      <Link to="/user/settings" className="user-menu__link">
        <img src={icons.settingIcon} className="user-menu__img" />
        Настройки
      </Link>
      <button className="user-menu__button">
        <img src={icons.exitIcon} className="user-menu__img" />
        Выход
      </button>
    </div>
  );
}

export { UserMenu };
