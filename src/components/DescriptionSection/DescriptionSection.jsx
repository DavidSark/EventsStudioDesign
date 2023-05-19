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
                            <img src="./img/leaf_deco.png" alt="" />
                        </div>
                    </div>

                    <div className="container-desc-text-parent">
                        <div className="container-desc-text">
                            <div className="container-desc-text-line"></div>
                            <h2>Qui suis-je ?</h2>
                            <p>Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet chocolate bar powder toffee sweet roll topping tiramisu marzipan. Jelly beans pie sugar plum jelly beans sesame snaps wafer. Chupa chups jelly bonbon liquorice cake.</p> <br /><br /><br />

                            <p>Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet chocolate bar powder toffee sweet roll topping tiramisu marzipan. Jelly beans pie sugar plum jelly beans sesame snaps wafer. Chupa chups jelly bonbon liquorice cake.
                                Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet </p>


                            <div className="center-btn-desc">
                                <Link to="/#contact" className='btn-desc'>
                                    <p>Lorem</p>
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