import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './PrestationAnniversaire.scss'
const PrestationAnniversaire = () => {
    return (
        <div className="container_prestation-02">
             <div className="anchor" id='anniversaire'></div>
            <div className='container-prestation-parent-anniv'>
                <div className="container-prestation-text-anniv">
                    <div className='prestation-title-02'>
                        <img src="../img/02.png" alt="" />
                        <div className="prestation-line-02"></div>
                        <h2 >Anniversaire</h2>
                    </div>
                    <div className="prestation-tagline-text-02">
                        <p>
                        Votre anniversaire sublimé par la décoration.
                        </p>
                    </div>

                    <div className="prestation-img-center-anniv">
                        <img src="../img/prestation-anniversaire.jpg" alt="anniversaire" />
                    </div>

                    <div className="prestation-text-02">
                        <p>Un anniversaire intime ou une célébration grandiose, je suis là pour créer une ambiance unique et mémorable!
                            <br /><br />

                            Petit ou grand, il n'y a pas d'âge pour célébrer de tout coeur un anniversaire avec ses proches.<br/>
                            Que vous envisagiez une fête surprise, une soirée à thème ou une célébration plus personnelle, je m'occuperais avec joie de tous les détails pour que vous puissiez profiter pleinement de votre fête. 

                        </p>

                        <div className="prestation-center-btn-desc-anniv">
                            <Link to="/prestations#contact-prestation" className='prestation-btn'>
                                <p>En savoir plus</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="prestation-img-right-anniv">
                <img src="../img/prestation-anniversaire.jpg" alt="anniversaire" />
                </div>
            </div>
            <div className="container-line-center-anniv">
                <div className="line-prestation-separation-anniv"></div>
            </div>
        </div>
    )
}

export default PrestationAnniversaire