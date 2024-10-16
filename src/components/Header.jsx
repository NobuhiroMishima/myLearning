import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Link to="/">
            <img src="/src/assets/images/logo.svg" alt="My Learning" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav__list">
            <li className="header__nav__item">
              <Link className="header__nav__font" to="/new">
                新規投稿
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
