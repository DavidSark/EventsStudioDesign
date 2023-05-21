import React from 'react'
import './PrestationMariage.scss'
import { HashLink as Link } from 'react-router-hash-link';
const PrestationMariage = () => {
  return (
    <div className='container-prestation-parent'>
      <div className="container-prestation-text">
        <div className='prestation-title-01'>
          <img src="../img/01.png" alt="" />
          <div className="prestation-line-01"></div>
          <h2>Mariage</h2>
        </div>
        <div className="prestation-tagline-text-01">
          <p>
            Cotton candy muffin cupcake
            sugar plum marzipan pie.
          </p>
        </div>

        <div className="prestation-img-center">
          <img src="../img/prestation-mariage.jpg" alt="" />
        </div>

        <div className="prestation-text-01">
          <p>Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet chocolate bar powder toffee sweet roll topping tiramisu marzipan. Jelly beans pie sugar plum jelly beans sesame snaps wafer. Chupa chups jelly bonbon liquorice cake.
            <br /><br />

            Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet chocolate bar powder toffee sweet roll topping tiramisu marzipan. Jelly beans pie sugar plum jelly beans sesame snaps wafer. Chupa chups jelly bonbon liquorice cake.<br />
            Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet

          </p>

          <div className="prestation-center-btn-desc">
            <Link to="/prestations#contact-prestation" className='prestation-btn'>
              <p>Lorem</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="prestation-img-right">
        <img src="../img/prestation-mariage.jpg" alt="" />
      </div>


      {/* <div className='container-prestation-flex'>
         <div className="prestation-contenu">
         <div className='prestation-title-01'>
          <img src="../img/01.png" alt="" />
          <div className="prestation-line-01"></div>
          <h2>Mariage</h2>
        </div>
          <p>
            Cotton candy muffin cupcake
            sugar plum marzipan pie.
          </p>
         
          <div className="prestation-img-center">
            <img src="../img/prestation-mariage.jpg" alt="" />
          </div>

          <div className="prestation-text-01">
            <p>Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet chocolate bar powder toffee sweet roll topping tiramisu marzipan. Jelly beans pie sugar plum jelly beans sesame snaps wafer. Chupa chups jelly bonbon liquorice cake.
              <br /><br />

              Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet chocolate bar powder toffee sweet roll topping tiramisu marzipan. Jelly beans pie sugar plum jelly beans sesame snaps wafer. Chupa chups jelly bonbon liquorice cake.<br />
              Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet

            </p>

            <div className="prestation-center-btn-desc">
              <Link to="/prestations#contact-prestation" className='prestation-btn'>
                <p>Lorem</p>
              </Link>
            </div>
          </div>
        </div> 
      </div> */}


    </div>
  )
}

export default PrestationMariage