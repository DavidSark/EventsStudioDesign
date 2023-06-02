import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./ZoneSingleProd.scss";

//Import des composants
import Entete from "../../../components/Entete/Entete";
import Menu from "../../../components/Menu/Menu";
import Footer from "../../../components/Footer/Footer";

//import des besoins de la bdd
import { db, storage } from "../../../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../config/firebase'

//import icon mui icon
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";


const ZoneSingleProd = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null);
      }
    })

    return () => {
      listen();
    }
  }, []);

  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    nom: "",
    prix: "",
    description: "",
    categorie: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    if (selectedFile) {
      const storageRef = ref(storage, `images/${selectedFile.name}`);
      await uploadBytes(storageRef, selectedFile);

      const imageURL = await getDownloadURL(storageRef);
      const productDoc = doc(db, "produits", product.id);
      await updateDoc(productDoc, { img: imageURL });
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
      {authUser ? (
        <>
          <div className="zoneadmin-title">
            <div className="zoneadmin-line"></div>
            <h2>Modifier un produit existant</h2>
          </div>

          <div className="new">
            <div className="newContainer">
              <div className="bottom">
                <div className="left">

                  <img src={selectedFile ? URL.createObjectURL(selectedFile) : product.img} alt={product.name} />

                </div>
                <div className="right">
                  <form onSubmit={handleSubmit} className="form-gap-single">
                    <div className="formInput">
                      <label htmlFor="file">
                        Image: <DriveFolderUploadOutlinedIcon className="icon" />
                      </label>
                      <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                      />
                    </div>
                    <p>
                      Nom: <span>{product.nom}</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Changer le nom"
                      name="nom"
                      value={updatedData.nom}
                      onChange={handleInputChange}
                    />

                    <p>
                      Description: <span>{product.description}</span>
                    </p>
                    <textarea
                      name="description"
                      placeholder="Changer la description"
                      value={updatedData.description}
                      onChange={handleInputChange}
                    ></textarea>

                    <p>
                      Prix: <span>{product.prix}€</span>
                    </p>
                    <input
                      type="number"
                      placeholder="Changer le prix"
                      name="prix"
                      value={updatedData.prix}
                      onChange={handleInputChange}
                    />

                    <p>
                      Catégorie: <span>{product.categorie}</span>
                    </p>
                    <input
                      type="text"
                      name="categorie"
                      placeholder="Changer la catégorie"
                      value={updatedData.categorie}
                      onChange={handleInputChange}
                    />
                    <div className="new-btn-container">
                      <button className="new-btn-send" type="submit">
                        Modifier
                      </button>

                      <Link to="/zoneadmin">
                        <button className="new-btn-back">Retour</button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {isPopupVisible && <div className="popup">Données mises à jour !</div>}
          </div>
        </>
      ) : (
        <div></div>
      )}
      <Footer />
    </div>
  );
};

export default ZoneSingleProd;
