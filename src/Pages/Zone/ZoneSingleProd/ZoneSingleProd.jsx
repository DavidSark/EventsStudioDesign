import React, { useEffect, useState } from "react";
import "./ZoneSingleProd.scss";
import { useParams } from "react-router-dom";
import { db } from "../../../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Entete from "../../../components/Entete/Entete";
import Menu from "../../../components/Menu/Menu";
import Footer from "../../../components/Footer/Footer";

const ZoneSingleProd = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    nom: "",
    prix: "",
    description: "",
    categorie: "",
  });
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier les champs modifiés et effectuer les mises à jour appropriées
    if (updatedData.nom) {
      const productDoc = doc(db, "produits", product.id);
      await updateDoc(productDoc, { nom: updatedData.nom });
    }
    if (updatedData.prix) {
      const productDoc = doc(db, "produits", product.id);
      await updateDoc(productDoc, { prix: updatedData.prix });
    }
    if (updatedData.description) {
      const productDoc = doc(db, "produits", product.id);
      await updateDoc(productDoc, { description: updatedData.description });
    }
    if (updatedData.categorie) {
      const productDoc = doc(db, "produits", product.id);
      await updateDoc(productDoc, { categorie: updatedData.categorie });
    }

    setIsPopupVisible(true);
    setTimeout(() => {
      setIsPopupVisible(false);
      window.location.reload();
    }, 3000);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="zone-single-prodict-parent">
      <Entete />
      <Menu />
      <div className="zoneadmin-title">
        <div className="zoneadmin-line"></div>
        <h2>Modifier un produit existant</h2>
      </div>

      <form onSubmit={handleSubmit} className="zone-single-product">
        <div className="zone-single-product-img">
          <img src={product.img} alt={product.name} />
        </div>
        <div className="zone-single-product-text">
          <p>
            Nom: <br /> <span>{product.nom}</span>
          </p>
          <input
            type="text"
            name="nom"
            value={updatedData.nom}
            onChange={handleInputChange}
          />

          <p>
            Description: <br /> <span>{product.description}</span>
          </p>
          <textarea
            name="description"
            value={updatedData.description}
            onChange={handleInputChange}
          ></textarea>

          <p>
            Prix: <br /> <span>{product.prix}€</span>
          </p>
          <input
            type="number"
            name="prix"
            value={updatedData.prix}
            onChange={handleInputChange}
          />

          <p>
            Catégorie: <br /> <span>{product.categorie}</span>
          </p>
          <input
            type="text"
            name="categorie"
            value={updatedData.categorie}
            onChange={handleInputChange}
          />

          <button type="submit">Modifier</button>
        </div>
      </form>

      {isPopupVisible && <div className="popup">Données mises à jour !</div>}

      <Footer />
    </div>
  );
};

export default ZoneSingleProd;
