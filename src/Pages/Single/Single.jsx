import React, { useEffect, useState } from "react";
import "./Single.scss";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import Entete from "../../components/Entete/Entete";
import Menu from "../../components/Menu/Menu";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";

const Single = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "produits", productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }



  const handleNavigate = () => {
    const contactForm = document.getElementById("contact-single");
    contactForm.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <Entete />
      <Menu />
      <div className="prestations-title-gallery">
        <div className="prestations-line-gallery"></div>
        <h2>{product.nom}</h2>
      </div>
      <div className="container-single">

        <div className="container-single-left">
          <img src={product.img} alt={product.name} />
        </div>

        <div className="container-single-right">
          <h2>{product.nom}</h2>
          <p className="container-single-price">{product.prix}€</p>
          <div className="single-line"></div>
          <p className="container-single-desc">{product.description}</p>
          <div className="single-line"></div>
          <p className="container-single-desc">Ce produit vous intéresse ? N'attendez plus</p>

      
            <button className='btn-single-contact' onClick={handleNavigate}>
              <p>Contactez moi !</p>
            </button>
        
          <div className="single-line"></div>
          <p>Tag: {product.categorie}</p>

        </div>
      </div>
    
      <div id="contact-single">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Single;
