import React from 'react'
import './PrestationMariage.scss'
import { HashLink as Link } from 'react-router-hash-link';
const PrestationMariage = () => {
  return (
    <div  className="container_prestation-01">
    <div  className='container-prestation-parent-mariage'>
      <div className="container-prestation-text-mariage">
        <div className='prestation-title-01'  >
          <img src="../img/01.png" alt="" />
          <div className="prestation-line-01"></div>
          <h2 id='mariage'>Mariage</h2>
        </div>
        <div className="prestation-tagline-text-001">
          <p>
            Cotton candy muffin cupcake sugar plum marzipan pie.
          </p>
        </div>

        <div className="prestation-img-center-mariage">
          <img src="../img/prestation-mariage.jpg" alt="" />
        </div>

        <div className="prestation-text-001">
          <p>Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet chocolate bar powder toffee sweet roll topping tiramisu marzipan. Jelly beans pie sugar plum jelly beans sesame snaps wafer. Chupa chups jelly bonbon liquorice cake.
            <br /><br />

            Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet chocolate bar powder toffee sweet roll topping tiramisu marzipan. Jelly beans pie sugar plum jelly beans sesame snaps wafer. Chupa chups jelly bonbon liquorice cake.<br />
            Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet

          </p>

          <div className="prestation-center-btn-desc-mariage">
            <Link to="/prestations#contact-prestation" className='prestation-btn'>
              <p>Lorem</p>
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