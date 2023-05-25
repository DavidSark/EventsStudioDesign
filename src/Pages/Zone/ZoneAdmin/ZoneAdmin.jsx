import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../components/context/AuthContext';
import './ZoneAdmin.scss'
//import des composants
import Entete from '../../../components/Entete/Entete'
import Menu from '../../../components/Menu/Menu'
import { db } from '../../../config/firebase';
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';


const ZoneAdmin = () => {


  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('Déconnecté avec succès')
    } catch (e) {
      console.log(e.message);
    }
  };


  //données :
  //Nouveau produit
  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductDesc, setNewProductDesc] = useState("");
  const [newProductPrice, setNewProductPrice] = useState(0);

  //mise à jour du tire du produit
  const [updatedTitle, setUpdatedTitle] = useState("");


  const [productList, setProductList] = useState([]);
  const productCollectionRef = collection(db, "produits")
  
  const getProductList = async () => {
    //Lire les données
    //set la product list
    try {
      const data = await getDocs(productCollectionRef);
      const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setProductList(filteredData)
    } catch (err) {
      console.error(err)
    }
  };
  
 //supprimé un produit
 const deleteProduct = async (id) =>{
  const productDoc = doc(db, "produits", id);
  await deleteDoc(productDoc);
  getProductList();
}

  //éditer un produit
  const updateProductTitle = async (id) =>{
    const productDoc = doc(db, "produits", id);
    await updateDoc(productDoc, {title: updatedTitle});
    getProductList();
  }
  


  useEffect(() => {
    getProductList();
  }, [])


  //fonction pour créer un nouveau produit:
  const onSubmitProduct = async () => {
    try {
      await addDoc(productCollectionRef, { title: newProductTitle, desc: newProductDesc, prix: newProductPrice });
      getProductList();
    } catch (err) {
      console.error(err)
    }
  }

 

  return (
    <div className='zoneadmin-main-container'>
      <Entete />
      <Menu />
      <div className="zoneadmin-title">
        <div className="zoneadmin-line"></div>
        <h2>Bienvenue</h2>
      </div>
      <div className="zoneadmin-title-tagline">
        <h2>
          Vous êtes ici dans votre espace privé <br />
          Gérez les produits de votre boutiques.
        </h2>
      </div>

      <div>
        <input placeholder='nom du produit' onChange={(e) => setNewProductTitle(e.target.value)} />
        <input placeholder='description' onChange={(e) => setNewProductDesc(e.target.value)} />
        <input placeholder='prix' type='number' onChange={(e) => setNewProductPrice(Number(e.target.value))} />
        <button onClick={onSubmitProduct}>Enregister le produit</button>
      </div>

      <div>
        {productList.map((product) => (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <p>Description: {product.desc}</p>
            <p>Prix: {product.prix}€</p>
            <button onClick={() => deleteProduct(product.id)}>supprimer</button>
            

            <input placeholder='nouveau titre' onChange={(e)=> setUpdatedTitle(e.target.value)}/>
            <button onClick={() => updateProductTitle(product.id)}>Éditer</button>
          </div>
        ))}
      </div>
      <button onClick={handleLogout} className=''>
        Logout
      </button>
    </div>
  )
}

export default ZoneAdmin