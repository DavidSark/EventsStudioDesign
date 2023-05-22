import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './PrestationReligion.scss'
const PrestationReligion = () => {
  return (
    <div className="container_prestation-04">
            <div className='container-prestation-parent-religion'>
                <div className="container-prestation-text-religion">
                    <div className='prestation-title-04'>
                        <img src="../img/04.png" alt="" />
                        <div className="prestation-line-04"></div>
                        <h2 id='anniversaire'>Religion & Foi</h2>
                    </div>
                    <div className="prestation-tagline-text-04">
                        <p>
                            Cotton candy muffin cupcake sugar plum marzipan pie.
                        </p>
                    </div>

                    <div className="prestation-img-center-religion">
                        <img src="../img/prestation-religion.jpg" alt="" />
                    </div>

                    <div className="prestation-text-04">
                        <p>Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet chocolate bar powder toffee sweet roll topping tiramisu marzipan. Jelly beans pie sugar plum jelly beans sesame snaps wafer. Chupa chups jelly bonbon liquorice cake.
                            <br /><br />

                            Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet chocolate bar powder toffee sweet roll topping tiramisu marzipan. Jelly beans pie sugar plum jelly beans sesame snaps wafer. Chupa chups jelly bonbon liquorice cake.<br />
                            Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet

                        </p>

                        <div className="prestation-center-btn-desc-religion">
                            <Link to="/prestations#contact-prestation" className='prestation-btn'>
                                <p>Lorem</p>
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