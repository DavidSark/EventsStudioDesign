import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './PrestationGender.scss'
const PrestationGender = () => {
  return (
    <div className="container_prestation-03">
      <div className="anchor" id='gender'></div>
      <div className='container-prestation-parent-gender'>
        <div className="container-prestation-text-gender">
          <div className='prestation-title-03'  >
            <img src="../img/03.png" alt="" />
            <div className="prestation-line-03"></div>
            <h2 >Gender Reveal</h2>
          </div>
          <div className="prestation-tagline-text-03">
            <p>
              Cotton candy muffin cupcake sugar plum marzipan pie.
            </p>
          </div>

          <div className="prestation-img-center-gender">
            <img src="../img/prestation-gender.jpg" alt="" />
          </div>

          <div className="prestation-text-03">
            <p>Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet chocolate bar powder toffee sweet roll topping tiramisu marzipan. Jelly beans pie sugar plum jelly beans sesame snaps wafer. Chupa chups jelly bonbon liquorice cake.
              <br /><br />

              Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet chocolate bar powder toffee sweet roll topping tiramisu marzipan. Jelly beans pie sugar plum jelly beans sesame snaps wafer. Chupa chups jelly bonbon liquorice cake.<br />
              Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet

            </p>

            <div className="prestation-center-btn-desc-gender">
              <Link to="/prestations#contact-prestation" className='prestation-btn'>
                <p>Lorem</p>
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