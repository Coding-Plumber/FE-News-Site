import "./Header.css";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header__container">
      <div className="header-sort-buttons__container">
        <Link to="/">
          <button className="header-home-btn">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
