import { NavLink } from 'react-router-dom';
import mic from '../assets/microphone.png';
import settings from '../assets/settings.png';

const Header = () => (
  <header>
    <NavLink className="back-home" to="/">
      &#60;
    </NavLink>
    <h1 className="header-title">Covid Stats</h1>
    <div>
      <img className="mic-img" src={mic} alt="microphone" />
      <img className="settings-img" src={settings} alt="settings" />
    </div>
  </header>
);

export default Header;
