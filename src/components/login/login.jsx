import React, { useState } from 'react';
import './login.css';
import logo from '../Img/logo.png';
import condomingo from '../Img/Condomingo.png';
import { Link } from 'react-router-dom';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <div className="iphone-frame login-page">
        

            <img src={logo} alt="Logo" className="logo-image" />

            <div className="login-container">
            <img src={condomingo} alt="condomingo" className="condomingo" /> 
                </div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <Link to='/homepage'>
                    <button type="submit">Entrar</button>
                    </Link>
                </form>
            </div>
       
    );
};

export default LoginPage;

