import React from 'react'

//import des composants 
import Entete from '../../components/Entete/Entete'
import Menu from '../../components/Menu/Menu'
import PrestationMariage from '../../components/PrestationMariage/PrestationMariage'
import PrestationAnniversaire from '../../components/PrestationAnniversaire/PrestationAnniversaire'
import PrestationGender from '../../components/PrestationGender/PrestationGender'
import PrestationReligion from '../../components/PrestationReligion/PrestationReligion'
//import feuille de style
import '../Global.scss'
import './Prestations.scss'


import { HashLink as Link } from 'react-router-hash-link';
import ContactForm from '../../components/ContactForm/ContactForm'

const Prestations = () => {
    return (
        <div className='prestation-main-container'>
            <Entete />
            <Menu />
            <div className='prestations-home'>
                <div className="prestations-title">
                    <div className="prestations-line"></div>
                    <h2>Prestations</h2>
                </div>
                <div className="prestations-title-tagline">
                    <h2>
                        Cotton candy muffin cupcake <br />
                        sugar plum marzipan pie donut cotton candy.
                    </h2>
                </div>
                <div className="home">
                    <div className="container-img">
                        <img className='resize-img' src="./img/image_home.png" alt="d'accueil" />
                        <div className="container-img-text">
                            <h1 className='title'>event's studio design</h1>
                            <img src="./img/svg/logo_doré.svg" alt="logo events studio design" />
                        </div>
                    </div>
                </div>

                <PrestationMariage />
                <PrestationAnniversaire />
                <PrestationGender />
                <PrestationReligion/>
                <div id="contact-prestation">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Prestations