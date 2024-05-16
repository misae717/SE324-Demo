import React from 'react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const { toggleLanguage } = useLanguage();
    const { theme, toggleTheme, increaseFontSize, decreaseFontSize } = useTheme();

    return (
        <div className={`navbar-container ${theme}`}>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>
                        <button onClick={toggleLanguage}>Change Language</button>
                    </li>
                    <li>
                        <button onClick={toggleTheme}>Toggle Theme</button>
                    </li>
                    <li className="font-size-control">
                        <button onClick={decreaseFontSize}>A-</button>
                        <button onClick={increaseFontSize}>A+</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
