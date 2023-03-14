import "./Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header-logo__container">LOGO</div>
      <div className="header-right-side__container">
        <div className="header-image__container">
          <img className="header-image"></img>
        </div>
        <div className="header-search-bar__container">SEARCH BAR</div>
      </div>
    </div>
  );
};

export default Header;
