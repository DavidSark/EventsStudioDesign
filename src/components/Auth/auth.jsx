
import React, { useState } from "react"
import { auth } from "../../config/firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'
import './auth.scss'
import { useNavigate } from "react-router-dom"

export const Auth = () => {
    const [error, setError] = useState(false)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                navigate("/zoneadmin",  {replace: true});
            })
            .catch((error) => {
                setError(true);
            });
    }

    return (
        <div className="container-login">
            <div className="register">
                <h3>Inscrivez vous</h3>
                <input placeholder="email" />
                <input placeholder="mot de passe" />
                <button >Inscription</button>
            </div>
            <div className="login">
                <h3>Connectez vous</h3>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Connexion</button>
                    {error && <span>Mauvais email ou mot de passe!</span>}
                </form>
            </div>


        </div>
    )
}
