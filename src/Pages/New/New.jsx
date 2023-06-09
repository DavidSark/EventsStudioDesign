import { useState, useRef, useEffect } from "react";
import "./New.scss";
import { Link } from "react-router-dom";

//import des composants
import Entete from "../../components/Entete/Entete"
import Menu from "../../components/Menu/Menu"
import Footer from "../../components/Footer/Footer"

//impor d'une icone depuis mui icon
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

//import des besoins pour la bdd firebase
import { db, storage } from "../../config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../config/firebase'





const New = ({ inputs }) => {

//usestate pour pour l'admin connecté
  const [authUser, setAuthUser] = useState(null);

  //Si l'admin et connecté?
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


  const inputRefs = {
    nom: useRef(null),
    description: useRef(null),
    prix: useRef(null),
    categorie: useRef(null),
  };

  //notification : 
  const [showNotification, setShowNotification] = useState(false);

  const [file, setFile] = useState("");
  const [data, setData] = useState({})

  //upload de l'image
  const [perc, setPerc] = useState(null)

  //fonction d'upload dans firebase
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      console.log(name)

      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {

          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setPerc(progress)
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break
          }
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file])

  console.log(data)

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  }


//durée d'apparition de la popup
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const handleAdd = async (e) => {
    (e).preventDefault();
    if (!file) {
      alert("Veuillez sélectionner une image.");
      return;
    }
    try {


      const res = await addDoc(collection(db, "produits"), {
        ...data,
        date: serverTimestamp()



      });

      // Réinitialisation des champs du formulaire
      Object.values(inputRefs).forEach((ref) => {
        ref.current.value = "";
      });
      setFile("");


      // Affichage de la notification
      setShowNotification(true);


    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className="new-container-parent">
      <Entete />
      <Menu />
      {authUser ? <><div className="zoneadmin-title">
        <div className="zoneadmin-line"></div>
        <h2>Ajoutez un nouveau produit</h2>
      </div>

      <div className="new">

        <div className="newContainer">


          <div className="bottom">
            <div className="left">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <div className="right">
              <form onSubmit={handleAdd}>
                <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    ref={inputRefs.file}
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>

                {inputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    {input.type === "textarea" ? (
                      <textarea
                        id={input.id}
                        placeholder={input.placeholder}
                        ref={inputRefs[input.id]}
                        onChange={handleInput}
                        required
                      />
                    ) : (
                      <input
                        id={input.id}
                        type={input.type}
                        placeholder={input.placeholder}
                        ref={inputRefs[input.id]}
                        onChange={handleInput}
                        required
                      />
                    )}
                  </div>
                ))}
                <div className="new-btn-container">
                  <button className="new-btn-send" disabled={perc !== null && perc < 100} type="submit">Ajouter</button>


                  <Link to="/zoneadmin"><button className="new-btn-back" >Retour</button></Link>
                </div>
              </form>


            </div>
          </div>
        </div>

        {showNotification && (
          <div className="notification">Votre produit a été enregistré avec succès !</div>
        )}
        
      </div>
      
      <Footer /> </> : <div></div>}
    </div>
  );
};

export default New;