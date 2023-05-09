import { Link } from 'react-router-dom'
import React from 'react'
import './Footer.scss'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>

                <div className="left">
                    <div className='left-text'>
                        <h1>titre</h1>
                        <p>décoratrice événementielle à basé dans le grand est</p>
                        <p>adresse</p>
                        <p>téléphone</p>
                        <p>adresse mail</p>
                    </div>
                </div>



                <div className="center">
                        <img src="/img/svg/logo_noir.svg" alt="events studio design logo" />
                        <p>décoratrice événementielle à basé dans le grand est</p>
                </div>

                <div className="right">
                    <div className='link-prestations'>
                        <Link>Mariage</Link>
                        <Link>Anniversaire</Link>
                        <Link>Gender Reveal</Link>
                        <Link>Foi & Religion</Link>
                    </div>
                    <div className="link-social">
                        <Link>facebook</Link>
                        <Link>instagram</Link>
                        <Link>tiktok</Link>
                    </div>
                    <div className='link-website'>
                        <Link>Galerie</Link>
                        <Link>Contact</Link>
                        <Link>Politique de confidentialité</Link>
                        <Link>Mentions Légales</Link>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Footer