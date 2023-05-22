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
        <Link to="/" onClick={() => {
          window.scroll(0, 0);
        }}>
          <img className="logo" src="/img/svg/ESD_Logo.svg" alt="" />
        </Link>
        <nav ref={navRef} className={isMenuOpen ? 'responsive_nav' : ''}>
          <Link to="/prestations" onClick={() => {
            window.scroll(0, 0);
          }}>Prestations</Link>
          <Link to="/galerie" onClick={() => {
          window.scroll(0, 0);
        }}>Galerie</Link>
          <Link to="/#entreprise" onClick={() => {
          window.scroll(0, 0);
        }}>L'entreprise</Link>
          <Link to="/#contact"onClick={() => {
          window.scroll(0, 0);
        }}>
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
