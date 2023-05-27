import React, { useEffect, useState } from "react";
import "./Single.scss";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

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
      <h2>Product Page</h2>
      <p>Product ID: {product.id}</p>
      <p>Prix: {product.prix}</p>
      <img src={product.img} alt={product.name} />
    </div>
  );
};

export default Single;
