import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import './LoginPage.css'; 

function LoginPage() {
    const { translate } = useLanguage();
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (event) => {
        setCredentials({...credentials, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        localStorage.setItem('User-Session', credentials.username);
        localStorage.setItem('Pass-Session', credentials.password);

        event.target.submit();
    };

    return (
        <div className="login-container">
            <form className="login-form" action="http://localhost/Testing/ex3/src/php/Login.php" method="POST" onSubmit={handleSubmit}>
                <h1>{translate('login')}</h1>
                <label>
                    Username:
                    <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
                </label>
                <div className="login-actions">
                    <button type="submit" className="login-button">{translate('login')}</button>
                    <Link to="/register">
                        <button type="button" className="register-button">Register</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
