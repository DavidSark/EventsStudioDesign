import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './PrestationAnniversaire.scss'
const PrestationAnniversaire = () => {
    return (
        <div className="container_prestation-02">
            <div className='container-prestation-parent-anniv'>
                <div className="container-prestation-text-anniv">
                    <div className='prestation-title-02'>
                        <img src="../img/02.png" alt="" />
                        <div className="prestation-line-02"></div>
                        <h2 id='anniversaire'>Anniversaire</h2>
                    </div>
                    <div className="prestation-tagline-text-02">
                        <p>
                            Cotton candy muffin cupcake sugar plum marzipan pie.
                        </p>
                    </div>

                    <div className="prestation-img-center-anniv">
                        <img src="../img/prestation-anniversaire.jpg" alt="" />
                    </div>

                    <div className="prestation-text-02">
                        <p>Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet chocolate bar powder toffee sweet roll topping tiramisu marzipan. Jelly beans pie sugar plum jelly beans sesame snaps wafer. Chupa chups jelly bonbon liquorice cake.
                            <br /><br />

                            Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet chocolate bar powder toffee sweet roll topping tiramisu marzipan. Jelly beans pie sugar plum jelly beans sesame snaps wafer. Chupa chups jelly bonbon liquorice cake.<br />
                            Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet

                        </p>

                        <div className="prestation-center-btn-desc-anniv">
                            <Link to="/prestations#contact-prestation" className='prestation-btn'>
                                <p>Lorem</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="prestation-img-right-anniv">
                    <img src="../img/prestation-anniversaire.jpg" alt="" />
                </div>
            </div>
            <div className="container-line-center-anniv">
                <div className="line-prestation-separation-anniv"></div>
            </div>
        </div>
    )
}

export default PrestationAnniversaire