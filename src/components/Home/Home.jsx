import React from 'react'
import './Home.scss'
// import myImage from './Image_Mariage.png'
import EventSection from '../EventSection/EventSection'
import GallerySection from '../GallerySection/GallerySection'
import ContactForm from '../ContactForm/ContactForm'
import DescriptionSection from '../DescriptionSection/DescriptionSection'
const Home = () => {



    return (
        <div className='home'>


            <div className='container-home'>

                <div className="container-img">
                    <img className='' src="./img/image_home.png" alt="d'accueil" />

                    <div className="container-img-text">
                        <h1 className='title'>event's studio design</h1>
                        <img src="./img/svg/logo_doré.svg" alt="logo events studio design" />
                    </div>

                </div>

                <div className='container-text'>

                    <h2>Décoratrice événementielle basé dans le grand est</h2>

                    <div className='container-discover'>
                        <img src="./img/leaf-right.png" alt="" />
                        <button className='btn-decouvrir'>
                            <p>Découvrir</p>
                        </button>
                        <img src="./img/leaf-left.png" alt="" />
                    </div>
                    <div className="vertical-line"></div>
                </div>

            </div>


            <DescriptionSection/>



            <div className='event-section-bg'>
                <EventSection />
            </div>

            <GallerySection/>
            <ContactForm/>
        </div>

    )
}

export default Home