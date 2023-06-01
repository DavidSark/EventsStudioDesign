import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './PrestationReligion.scss'
const PrestationReligion = () => {
    return (
        <div className="container_prestation-04">
            <div className="anchor" id='religion'></div>
            <div className='container-prestation-parent-religion'>
                <div className="container-prestation-text-religion">
                    <div className='prestation-title-04'>
                        <img src="../img/04.png" alt="" />
                        <div className="prestation-line-04"></div>
                        <h2>Religion & Foi</h2>
                    </div>
                    <div className="prestation-tagline-text-04">
                        <p>
                            Des traditions honorées
                        </p>
                    </div>

                    <div className="prestation-img-center-religion">
                        <img src="../img/prestation-religion.jpg" alt="" />
                    </div>

                    <div className="prestation-text-04">
                        <p>Créer un espace sacré où la spiritualité et la foi se rencontrent.
                            <br /><br />
                            Que ce soit pour une communion, un baptême, une circoncision ou toute autre célébration spirituelle, il est important de célébrer ces traditions.
                            <br/>
                            À travers ces décorations, laissez votre créer un enverionnement pour que votre foi s'exprime.
                        </p>

                        <div className="prestation-center-btn-desc-religion">
                            <Link to="/prestations#contact-prestation" className='prestation-btn'>
                                <p>En savoir plus</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="prestation-img-right-religion">
                    <img src="../img/prestation-religion.jpg" alt="" />
                </div>
            </div>
            <div className="container-line-center-religion">
                <div className="line-prestation-separation-religion"></div>
            </div>
        </div>
    )
}

export default PrestationReligion