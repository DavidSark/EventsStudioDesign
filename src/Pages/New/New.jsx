import "./New.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useRef, useEffect } from "react";
import { db, storage } from "../../config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const New = ({ inputs, title }) => {

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

  useEffect(()=>{
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
            setData((prev) => ({...prev, img:downloadURL}));
          });
        }
      );
    };
    file && uploadFile();
  },[file])

  console.log(data)

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  }

 

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000); // Temps en millisecondes avant de masquer la pop-up (ici 3 secondes)

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
    <div className="new">

      <div className="newContainer">

        <div className="top">
          <h1>{title}</h1>
        </div>
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
              <button disabled={perc !== null && perc < 100} type="submit">Send</button>
            </form>


          </div>
        </div>
      </div>

      {showNotification && (
        <div className="notification">Votre produit a été enregistré avec succès !</div>
      )}
    </div>
  );
};

export default New;