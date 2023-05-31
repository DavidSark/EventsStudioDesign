import Entete from "../../components/Entete/Entete"
import Menu from "../../components/Menu/Menu"
import Footer from "../../components/Footer/Footer"
import ContactForm from "../../components/ContactForm/ContactForm"
import './Boutique.scss'
import { useNavigate } from "react-router-dom";
import { React, useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";


const Boutique = () => {

  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "produits"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);


  const renderProducts = () => {
    const handleProductClick = (productId) => {
      navigate(`/boutique/${productId}`);
    };

    return data.map((product) => (
      <div key={product.id} className="product" >
        <div className="product-img">
          <img src={product.img} alt={product.name} onClick={() => handleProductClick(product.id)} />
        </div>
        <div className="product-text">
          <h2>{product.nom}</h2>
          <p>{product.description.length > 50 ? `${product.description.slice(0, 50)}...` : product.description}</p>
          {/* <p>{product.categorie}</p> */}
          <div className="price-btn-see-more">
            <p>{product.prix}€</p>
            <p className="see-more" onClick={() => handleProductClick(product.id)}>Voir le produit </p>
          </div>
        </div>
      </div>
    ));
  };



  return (
    <div className="boutiquer-parent">
      <Entete />
      <Menu />
      <div className="prestations-title-gallery">
        <div className="prestations-line-gallery"></div>
        <h2>Location</h2>
      </div>
      <div className="prestations-title-tagline-gallery">
        <h2>
          Retrouvez tous les produits à louer ici <br />
          Un produit vous intéresse ? Contactez moi !
        </h2>
      </div>


      <div className="grid-container">
        <div className="product-grid">
          {renderProducts()}
        </div>
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
};



export default Boutique