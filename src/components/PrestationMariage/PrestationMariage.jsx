import React from 'react'
import './PrestationMariage.scss'
import { HashLink as Link } from 'react-router-hash-link';
const PrestationMariage = () => {

  return (
    <div className="container_prestation-01" >
      <div className="anchor" id='mariage'></div>
      <div className='container-prestation-parent-mariage'>
        <div className="container-prestation-text-mariage" >
          <div className='prestation-title-01'  >
            <img src="../img/01.png" alt="" />
            <div className="prestation-line-01"></div>
            <h2 >Mariage</h2>
          </div>
          <div className="prestation-tagline-text-001">
            <p>
              Unis par l'amour, sublimés par le mariage.
            </p>
          </div>

          <div className="prestation-img-center-mariage">
            <img src="../img/prestation-mariage.jpg" alt="" />
          </div>

          <div className="prestation-text-001">
            <p>En tant que décoratrice événementiel expérimentée, je suis consciente que chaque mariage est unique.
              <br /><br />

              C'est la raison pour laquelle je vous offre une gamme variée de styles, des plus classiques aux plus contemporains, afin que vous puissiez trouver celui qui correspond le mieux à votre vision.
              <br />

            </p>

            <div className="prestation-center-btn-desc-mariage">
              <Link to="/prestations#contact-prestation" className='prestation-btn'>
                <p>En savoir plus</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="prestation-img-right-gender">
          <img src="../img/prestation-mariage.jpg" alt="" />
        </div>
      </div>
      <div className="container-line-center-mariage">
        <div className="line-prestation-separation-mariage"></div>
      </div>
    </div>
  )
}

export default PrestationMariage