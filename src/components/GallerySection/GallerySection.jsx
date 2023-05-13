import React from 'react'
import './GallerySection.scss'

const GallerySection = () => {
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

                            <p>Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet chocolate bar powder toffee sweet roll topping tiramisu marzipan. Jelly beans pie sugar plum jelly beans sesame snaps wafer. Chupa chups jelly bonbon liquorice cake.</p> <br /><br /><br />

                            <p>Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet chocolate bar powder toffee sweet roll topping tiramisu marzipan. Jelly beans pie sugar plum jelly beans sesame snaps wafer. Chupa chups jelly bonbon liquorice cake.
                                Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet </p>


                            <div className="center-btn-gallery">
                                <button className='btn-gallery'>
                                    <p>Lorem</p>
                                </button>
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