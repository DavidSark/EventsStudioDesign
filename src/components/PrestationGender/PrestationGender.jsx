import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './PrestationGender.scss'
const PrestationGender = () => {
  return (
    <div className="container_prestation-03">
      <div className="anchor" id='gender reveal'></div>
      <div className='container-prestation-parent-gender'>
        <div className="container-prestation-text-gender">
          <div className='prestation-title-03'  >
            <img src="../img/03.png" alt="" />
            <div className="prestation-line-03"></div>
            <h2 >Gender Reveal</h2>
          </div>
          <div className="prestation-tagline-text-03">
            <p>
              Une explosion de bonheur et de couleurs !
            </p>
          </div>

          <div className="prestation-img-center-gender">
            <img src="../img/prestation-gender.jpg" alt="" />
          </div>

          <div className="prestation-text-03">
            <p>Il n'y a rien de plus beau que la naissance de son futur enfant.
              <br /><br />

              Que ce soit une explosion de confettis de couleurs ou une pluie de ballons colorés, dévoilez le sexe de votre bébé dans une ambiance festive et inoubliable à vos proche.

            </p>

            <div className="prestation-center-btn-desc-gender">
              <Link to="/prestations#contact-prestation" className='prestation-btn'>
                <p>En savoir plus</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="prestation-img-right-gender">
          <img src="../img/prestation-gender.jpg" alt="" />
        </div>
      </div>
      <div className="container-line-center-gender">
        <div className="line-prestation-separation-gender"></div>
      </div>
    </div>
  )
}

export default PrestationGender