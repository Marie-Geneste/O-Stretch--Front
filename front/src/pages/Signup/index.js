import './styles.scss';
import logo from '../../assets/img/logo.svg';
import { useState } from "react";
import axios from 'axios';

const Signup = () => {

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
cosnt [password, setPassword] = useState('');

const handleUsernameChange = (e) => {
    setUsername(e.target.value)
}

const handleEmailChange = (e) => {
    setEmail(e.target.value)
}

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3000/user', { username, email, password });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
}

    return (
<div className="login">
        <div className="box-container">
            <img src={logo}></img>
            <h2>Créer un compte</h2>

            <form className="form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" name="name" placeholder="Name" value={username} onChange={handleUsernameChange}/>
                </div>
                <div className="input-group">
                    <input type="email" name="email" placeholder="Adresse mail" value={email} onChange={handleEmailChange}/>
                </div>

                <div className="input-group">
                    <input type="password" name="password" placeholder="Mot de passe" value={password} onChange={handlePasswordChange}/>
                </div>
                {/* <div className="input-group">
                    <input type="password" name="confirm" placeholder="Confirmez le mot de passe" value={confirm} onChange={handleChange}/>
                </div> */}
                <button className="primary">S'inscrire</button>
            </form>
        

        </div>
    </div>
    )
}
export default Signup;