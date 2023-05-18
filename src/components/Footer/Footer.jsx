import { Link } from 'react-router-dom'
import React from 'react'
import './Footer.scss'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>

                <div className="left">
                    <div className='left-text'>
                        <h1>event's studio design</h1>
                        <p>décoratrice événementielle basé à Reims et dans le Grand Est</p>
                        <p>adresse</p>
                        <p>07 85 75 09 19</p>
                        <p>exemple@exemple.fr</p>
                    </div>
                </div>


                <div className="container-line">
                    <div className="footer-line"></div>
                </div>
                <div className="center">
                    <img src="/img/svg/logo_noir.svg" alt="events studio design logo" />
                    <p>Copyright © 2023 event’s studio design. Tous droits réservés.</p>
                </div>

                <div className="container-line">
                    <div className="footer-line"></div>
                </div>

                <div className="right">
                    <div className="right-prestations-website">
                        <div className='link-prestations'>
                            <p>Préstations</p>
                            <Link>Mariage</Link>
                            <Link>Anniversaire</Link>
                            <Link>Gender Reveal</Link>
                            <Link>Foi & Religion</Link>
                            <Link>Galerie</Link>
                            <Link>Contact</Link>
                        </div>

                        <div className='link-website'>
                            <p>Légal</p>

                            <Link>Politique de confidentialité</Link>
                            <Link>Mentions Légales</Link>

                            <div className="link-social">
                                <p>Réseaux</p>
                                <Link>facebook</Link>
                                <Link>instagram</Link>
                                <Link>tiktok</Link>
                            </div>
                        </div>

                    </div>

                   
                </div>
            </div>



        </div>
    )
}

export default Footer