import React from 'react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';
import './Header.css'; 
import logo from './logo.png'; 

function Header() {
    const { translate } = useLanguage();
    const { theme } = useTheme();
    
    // Determine the header class based on the theme
    const headerClass = `header-${theme}`;
    
    return (
        <header className={headerClass}>
            <img src={logo} alt="Logo" />
            <h1>{translate('welcome')}</h1>
        </header>
    );
}

export default Header;
