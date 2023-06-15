import React, { useState } from 'react';
import './Login.css';
import logo from '../Img/logo.png';
import condomingo from '../Img/Condomingo.png';



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
        <div >
        

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
                    <button type="submit">Entrar</button>
                </form>
            </div>
       
    );
};

export default LoginPage;
