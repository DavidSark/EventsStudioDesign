import React from 'react'
import './SectionBoutique.scss'
import { HashLink as Link } from 'react-router-hash-link';

const SectionBoutique = () => {
    
    const handleClick = () => {
        window.scroll(0, 0); // Défilement de la page vers le haut
        setIsMenuOpen(false); // Fermeture du menu
    };
    return (
        <div className='container-boutique-home-parent'>

            <div className="container-boutique-home" >
                <div className="background-boutique-home-img"> </div>
                <div className="boutique-home">

                    <div className="container-boutique-home-img-parent">
                        <div className="container-boutique-home-img">
                            <img src="./img/img_gallery.png" alt="" />
                        </div>


                        <div className="container-boutique-home-img-leaf">
                            <img src="./img/leaf_deco.png" alt="" />
                        </div>
                    </div>

                    <div className="container-boutique-home-text-parent">
                        <div className="container-boutique-home-text">
                            <div className="container-boutique-home-text-line"></div>
                            <h2>Libérez votre esprit créatif !</h2>

                            <p>À travers la boutique de location de décorations, offrez vous une gamme étendue d'articles soigneusement sélectionnés pour transformer n'importe quel espace en une véritable œuvre d'art éphémère à votre image.
              </p> <br /><br /><br />

                            <p>
                            Laissez libre cours à votre imagination en mettant vous même la main à la pâte pour créer des événements uniques et personnalisés !
                                La location de décorations vous offre une flexibilité incomparable. Vous pouvez explorer divers thèmes et styles sans vous engager à acheter des articles coûteux et encombrants. </p>
                                <br/>
                            <p>N'attendez plus et visité la boutique !</p>
                            <div className="center-btn-boutique-home">
                                <Link to="/boutique" className='btn-boutique-home' onClick={handleClick}>
                                    <p>Boutique</p>
                                </Link>
                            </div>
                            <div className="container-boutique-home-text-line"></div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SectionBoutique