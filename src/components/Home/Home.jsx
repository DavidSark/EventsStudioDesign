import React from 'react'
import './Home.scss'
import EventSection from '../EventSection/EventSection'
import GallerySection from '../GallerySection/GallerySection'
import ContactForm from '../ContactForm/ContactForm'
import DescriptionSection from '../DescriptionSection/DescriptionSection'

import { HashLink as Link } from 'react-router-hash-link';

const Home = () => {
    return (
        <div className='home'>
            <div className='container-home'>
                <div className="container-img">
                    <img className='resize-img' src="./img/image_home.png" alt="d'accueil" />
                    <div className="container-img-text">
                        <h1 className='title'>event's studio design</h1>
                        <img src="./img/svg/logo_doré.svg" alt="logo events studio design" />
                    </div>
                </div>
                <div className='container-text'>
                    <h2>Location, prestation et décoratrice évenementielle basé dans le grand est</h2>
                    <div className='container-discover'>
                        <img src="./img/leaf-right.png" alt="" />
                        <Link to="/#entreprise" className='btn-decouvrir'>
                            <p>Découvrir</p>
                        </Link>
                        <img src="./img/leaf-left.png" alt="" />
                    </div>
                    <div className="vertical-line"></div>
                </div>
            </div>
            <div id="entreprise">
                <DescriptionSection />
            </div>
            <div className='event-section-bg' id='mariage'>
                <EventSection />
            </div>
            <GallerySection />
            <div className='contact-anchor' id="contact"></div>

            <ContactForm />

        </div>
    )
}

export default Home