import React, { useState} from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
// {navbarLinks}
const Navbar = ({navbarLinks}) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };
  const handleClick =(e)=>{
      const target = e.target.getAttribute('href');
      const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 70
    })
  }
    return (
    <nav className="navbar">
      <span className="navbar__logo">Vitezomanu Gica</span>
      {menuClicked ? (
        <FiX size={25} className={"navbar__menu"} onClick={toggleMenuClick} />
      ) : (
        <FiMenu
          size={25}
          className={"navbar__menu"}
          onClick={toggleMenuClick}
        />
      )}
      <ul
        className={
          menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
        }
      >
        {navbarLinks.map((item, index) => {
          return (
            <li className="navbar__item" key={index}>
              {/*todo err la height*/}
              <a className="navbar__link" href={item.url} onClick={handleClick}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
