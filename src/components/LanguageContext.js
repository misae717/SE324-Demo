import React, { createContext, useContext, useState, useEffect } from 'react';

// Example translations
const translations = {
    en: {
      login: "Login",
      signup: "Sign Up",
      about: "About Us",
      contact: "Contact Us",
      submit: "Submit",
      welcome: "Welcome to Our Web Application",
      aboutText: "Learn more about our project and its goals.",
      mission: "Mission",
      missionDescription: "Our mission is to enhance the management of exam room bookings.",
      team: "Team",
      teamDescription: "A dedicated group of developers committed to providing solutions.",
      messageReceived: "Thank you! Your message has been received.",
      name: "Name",
      message: "Message"
    },
    ar: {
      login: "تسجيل الدخول",
      signup: "إنشاء حساب",
      about: "معلومات عنا",
      contact: "اتصل بنا",
      submit: "إرسال",
      welcome: "مرحبا بكم في تطبيقنا الإلكتروني",
      aboutText: "تعرف على المزيد حول مشروعنا وأهدافه.",
      mission: "المهمة",
      missionDescription: "مهمتنا هي تعزيز إدارة حجز الغرف للامتحانات.",
      team: "الفريق",
      teamDescription: "مجموعة مخصصة من المطورين ملتزمون بتقديم الحلول.",
      messageReceived: "شكراً لك! لقد تم استلام رسالتك.",
      name: "الاسم",
      message: "الرسالة"
    }
  };
  

const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr'; // Adjust text direction based on language
  }, [language]); 

  const translate = (key) => {
    return translations[language][key];
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ translate, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
