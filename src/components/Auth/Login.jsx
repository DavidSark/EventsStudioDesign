
import React, {useState} from "react"
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import './Login.scss'

const Login = () => {
  


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('')
      try {
        await signIn(email, password)
        navigate('/zoneadmin')
      } catch (e) {
        setError(true);
        console.log(e.message)
      }
    };
  

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
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email"  onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="mot de passe"  onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Connexion</button>
                    {error && <span>Mauvais email ou mot de passe!</span>}
                </form>
            </div>


        </div>
    )
}

export default Login