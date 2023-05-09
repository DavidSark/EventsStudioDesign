import React, { useRef } from 'react';
import './Menu.scss'
import { Link } from 'react-router-dom'

const Menu = () => {

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <div className="">
            <div className='menu'>
                <Link to="/">
                    <img className='logo' src="/img/svg/ESD_Logo.svg" alt="" />
                </Link>
                <nav ref={navRef}>
                    <Link to="/prestations">
                        Prestations
                    </Link>
                    <Link>
                        Galerie
                    </Link>
                    <Link>
                        L'entreprise
                    </Link>
                    <Link>
                        <span>
                            Contact
                        </span>
                    </Link>
                    <Link>
                        <span>
                            Boutique
                        </span>
                    </Link>

                    <button className='btn-nav-close nav-close-btn' onClick={showNavBar}>
                        <img src="/img/svg/x.svg" alt="menu icon" />
                    </button>
                </nav>
                <button className='btn-nav-open' onClick={showNavBar}>
                    <img src="/img/svg/menu.svg" alt="menu icon" />
                </button>
            </div>
            <div className="separator"></div>
        </div>
    )
}

export default Menu