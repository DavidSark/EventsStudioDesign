import React from 'react'
import './Home.scss'
// import myImage from './Image_Mariage.png'
import EventSection from '../EventSection/EventSection'
const Home = () => {



    return (
        <div className='home'>


            <div className='container-home'>

                <div className="container-img">
                    <img className='img-resize' src="./img/image_home.png" alt="d'accueil" />

                    <div className="container-img-text">
                        <h1 className='title'>event's studio design</h1>
                        <img src="./img/svg/logo_doré.svg" alt="logo events studio design" />
                    </div>

                </div>

                <div className='container-text'>

                    <h2>Décoratrice événementielle basé dans le grand est</h2>

                    <div className='container-discover'>
                        <img src="./img/leaf-right.png" alt="" />
                        <button className='btn-decouvrir'>
                            <p>Découvrir</p>
                        </button>
                        <img src="./img/leaf-left.png" alt="" />
                    </div>
                    <div className="vertical-line"></div>
                </div>

            </div>


            <div className="desc" >

                <div className="container-desc">
                    <div className="test2">
                        <div className="container-desc-img">
                            <img src="./img/img_desc.png" alt="" />
                        </div>


                        <div className="container-desc-img-leaf">
                            <img src="./img/leaf_deco.png" alt="" />
                        </div>
                    </div>

                    <div className="test3">
                        <div className="container-desc-text">
                            <div className="container-desc-text-line"></div>
                            <h2>Qui suis-je ?</h2>
                            <p>Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet chocolate bar powder toffee sweet roll topping tiramisu marzipan. Jelly beans pie sugar plum jelly beans sesame snaps wafer. Chupa chups jelly bonbon liquorice cake.</p> <br /><br /><br />

                            <p>Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet chocolate bar powder toffee sweet roll topping tiramisu marzipan. Jelly beans pie sugar plum jelly beans sesame snaps wafer. Chupa chups jelly bonbon liquorice cake.
                                Cotton candy muffin cupcake sugar plum marzipan pie donut cotton candy. Sweet </p>


                            <div className="center-btn-desc">
                                <button className='btn-desc'>
                                    <p>Lorem</p>
                                </button>
                            </div>

                            <div className="container-desc-text-line"></div>
                        </div>
                    </div>

                </div>

            </div>



            <div className='event-section-bg'>
                <EventSection />
            </div>
        </div>

    )
}

export default Home