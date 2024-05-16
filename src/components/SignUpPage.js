import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

function SignUpPage() {
    const { translate } = useLanguage();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    });

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        console.log(userData);
        navigate('/'); 
    };

    return (
        <div>
            <h1>{translate('signup')}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    {translate('username')}: 
                    <input type="text" name="username" value={userData.username} onChange={handleChange} />
                </label>
                <label>
                    {translate('email')}:
                    <input type="email" name="email" value={userData.email} onChange={handleChange} />
                </label>
                <label>
                    {translate('password')}:
                    <input type="password" name="password" value={userData.password} onChange={handleChange} />
                </label>
                <label>
                    {translate('confirmPassword')}:
                    <input type="password" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} />
                </label>
                <button type="submit">{translate('submit')}</button>
            </form>
        </div>
    );
}

export default SignUpPage;
