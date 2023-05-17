import React, { useRef, useState } from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? '' : 'hidden';
  };

  return (
    <div className="menu-parent">
      <div className="menu">
        <Link to="/">
          <img className="logo" src="/img/svg/ESD_Logo.svg" alt="" />
        </Link>
        <nav ref={navRef} className={isMenuOpen ? 'responsive_nav' : ''}>
          <Link to="/prestations">Prestations</Link>
          <Link>Galerie</Link>
          <Link>L'entreprise</Link>
          <Link>
            <span>Contact</span>
          </Link>
          <Link to="/event">
            <span>Boutique</span>
          </Link>
          <button
            className="btn-nav-close nav-close-btn"
            onClick={toggleMenu}
          >
            <img src="/img/svg/x.svg" alt="menu icon" />
          </button>
        </nav>
        <button className="btn-nav-open" onClick={toggleMenu}>
          <img src="/img/svg/menu.svg" alt="menu icon" />
        </button>
      </div>
      <div className="separator"></div>
    </div>
  );
};

export default Menu;
