import React, { useRef, useState } from 'react';
import './Menu.scss';

import { HashLink as Link } from 'react-router-hash-link';

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
          <Link to="/galerie">Galerie</Link>
          <Link to="/#entreprise">L'entreprise</Link>
          <Link to="/#contact">
            <span>Contact</span>
          </Link>
          <Link to="">
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
