import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ articles }) => {
  console.log(articles, "articles in Header");

  return (
    <div className="header__container">
      <div className="header-sort-buttons__container">
        <Link to="/">
          <button className="header-home-btn">Home</button>
        </Link>
        <select className="header-sortby-btn" defaultValue="">
          <option value="" disabled hidden>
            Sort By
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
