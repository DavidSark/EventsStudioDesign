import React from 'react'
import './GallerySection.scss'
import { HashLink as Link } from 'react-router-hash-link';

const GallerySection = () => {
    //fonction pour revenir en haut des pages
    const handleClick = () => {
        window.scroll(0, 0); // Défilement de la page vers le haut
        setIsMenuOpen(false); // Fermeture du menu
      };
    return (
        <div className='container-gallery-parent'>

            <div className="container-gallery" >
                <div className="background-gallery-img"> </div>
                <div className="gallery">

                    <div className="container-gallery-img-parent">
                        <div className="container-gallery-img">
                            <img src="./img/img_gallery.png" alt="" />
                        </div>


                        <div className="container-gallery-img-leaf">
                            <img src="./img/leaf_deco.png" alt="" />
                        </div>
                    </div>

                    <div className="container-gallery-text-parent">
                        <div className="container-gallery-text">
                            <div className="container-gallery-text-line"></div>
                            <h2>Galerie</h2>

                            <p>Explorez la galerie d'images, captivante de créativité et d'inspiration. Plongez dans un monde d'esthétique visuelle, où chaque cliché raconte une histoire unique et évoque des émotions profondes.</p> <br /><br /><br />

                            <p>  Retrouvez en image les décorations réalisées par mes soins dans la galerie !</p>
                           

                            <div className="center-btn-gallery">
                                <Link to="/galerie" className='btn-gallery' onClick={handleClick}>
                                    <p>Visiter la galerie</p>
                                </Link>
                            </div>
                            <div className="container-gallery-text-line"></div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default GallerySection