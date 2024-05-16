import React from 'react';
import { useLanguage } from './LanguageContext';
import './AboutPage.css'; 

function AboutPage() {
    const { translate } = useLanguage();

    return (
        <div className="about-container">
            <h1 className="about-title">{translate('about')}</h1>
            <p className="about-text">
                {translate('aboutText')}
            </p>
            <div className="section mission">
                <img src="/img/AU.png" alt="Our Mission" className="section-image" />
                <div className="section-content">
                    <h2>{translate('mission')}</h2>
                    <p>
                        {translate('missionDescription')}
                    </p>
                </div>
            </div>
            <div className="section team">
                <img src="/img/alfaisal-university-campus.jpg" alt="Our Team" className="section-image" />
                <div className="section-content">
                    <h2>{translate('team')}</h2>
                    <p>
                        {translate('teamDescription')}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;