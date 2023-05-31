import React, { useRef, useState, useEffect } from 'react';
import './Menu.scss';

import { HashLink as Link } from 'react-router-hash-link';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = () => {
    window.scroll(0, 0); // Défilement de la page vers le haut
    setIsMenuOpen(false); // Fermeture du menu
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    };

    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  return (
    <div className="menu-parent">
      <div className="menu">
        <Link to="/" onClick={handleClick}>
          <img className="logo" src="/img/svg/ESD_Logo.svg" alt="" />
        </Link>
        <nav ref={navRef} className={isMenuOpen ? 'responsive_nav' : ''}>
          <Link to="/prestations" onClick={handleClick}>Prestations</Link>
          <Link to="/galerie" onClick={handleClick}>Galerie</Link>
          <Link to="/#entreprise" onClick={handleClick}>L'entreprise</Link>
          <Link to="/#contact" onClick={handleClick}>
            <span>Contact</span>
          </Link>
          <Link to="/boutique" onClick={handleClick}>
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
