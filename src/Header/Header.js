import "./Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header-sort-buttons__container">
        
        <select className="header-sortBy-btn">
          <option>Sort By</option>
          <option value="date">Date</option>
          <option value="popularity">Popularity</option>
          <option value="category">Category</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
