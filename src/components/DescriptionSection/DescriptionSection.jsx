import React from 'react'
import './DescriptionSection.scss'
import { HashLink as Link } from 'react-router-hash-link';

const DescriptionSection = () => {
  return (
    <div className="desc" >

                <div className="container-desc">
                    <div className="container-desc-img-parent">
                        <div className="container-desc-img">
                            <img src="./img/img_desc.png" alt="" />
                        </div>


                        <div className="container-desc-img-leaf">
                            <img src="./img/leaf_deco.png" alt="feuille" />
                        </div>
                    </div>

                    <div className="container-desc-text-parent">
                        <div className="container-desc-text">
                            <div className="container-desc-text-line"></div>
                            <h2>Qui suis-je ?</h2>
                            <p>Bienvenue dans mon univers de la décoration ! Je suis Mariam, et votre partenaire idéal pour donner vie à votre imaginaine et créer des souvenirs inoubliables lors d'événement spéciaux.</p> <br /><br />

                            <p>Je suis une décoratrice événementielle passionnée, dévouée à l'art de transformer des espaces ordinaires en lieux extraordinaires, reflétant votre style unique et vos préférences..<br/>
                            Mon objectif est de vous offrir une expérience sans égale et sans stress, où vous pouvez vous détendre et profiter pleinement de votre événement, tout en sachant que chaque détail est pris en charge. </p>


                            <div className="center-btn-desc">
                                <Link to="/#contact" className='btn-desc'>
                                    <p>Me contacter</p>
                                </Link>
                            </div>

                            <div className="container-desc-text-line"></div>
                        </div>
                    </div>

                </div>

            </div>
  )
}

export default DescriptionSection