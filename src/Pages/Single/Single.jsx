import React, { useEffect, useState } from "react";
import "./Single.scss";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import Entete from "../../components/Entete/Entete";
import Menu from "../../components/Menu/Menu";



const Single = () => {
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
          <p className="container-single-price">Prix: {product.prix}€</p>
          <div className="single-line"></div>
          <p className="container-single-desc">{product.description}</p>
          <div className="single-line"></div>
          <p>Ce produit vous intéresse ?</p>
          <span>Contactez moi !</span>
          <div className="single-line"></div>
          <p>Tag: {product.categorie}</p>

        </div>


      </div>
    </div>
  );
};

export default Single;
