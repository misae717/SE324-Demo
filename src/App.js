import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import BookingForm from './components/BookingForm';
import SeatingPlanGenerator from './components/SeatingPlanGenerator';
import VisualSeatingPlan from './components/VisualSeatingPlan';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Register from './components/Register';
import RoomSelectionPage from './components/RoomSelectionPage';
import { ThemeProvider } from './components/ThemeContext';
import { LanguageProvider } from './components/LanguageContext';

function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <Router basename="/SE324-Demo">
                    <div>
                        <Header />
                        <NavBar />
                        <Routes>
                            <Route path="/" element={<LoginPage />} exact />
                            <Route path="/signup" element={<SignUpPage />} />
                            <Route path="/booking" element={<BookingForm />} />
                            <Route path="/seating-plan" element={<SeatingPlanGenerator />} />
                            <Route path="/visual-plan" element={<VisualSeatingPlan />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/Roomer" element={<RoomSelectionPage />} />
                            <Route path="/filler" element={<SeatingPlanGenerator />} />
                            <Route path="/visualizer" element={<VisualSeatingPlan />} />
                            <Route path="*" element={<h1>Page not found</h1>} />
                        </Routes>
                        <Footer />
                    </div>
                </Router>
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;
