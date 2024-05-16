import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

function ContactPage() {
    const { translate } = useLanguage();
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        setContactInfo({...contactInfo, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(contactInfo);
        alert(translate('messageReceived'));
    };

    return (
        <div>
            <h1>{translate('contact')}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    {translate('name')}:
                    <input type="text" name="name" value={contactInfo.name} onChange={handleChange} />
                </label>
                <label>
                    {translate('email')}:
                    <input type="email" name="email" value={contactInfo.email} onChange={handleChange} />
                </label>
                <label>
                    {translate('message')}:
                    <textarea name="message" value={contactInfo.message} onChange={handleChange} />
                </label>
                <button type="submit">{translate('submit')}</button>
            </form>
        </div>
    );
}

export default ContactPage;
