import React, { createContext, useState, useEffect } from "react";
import i18n from "i18next";

export const LanguageContext = createContext({
  currentLanguage: "de", // Provide a default
  setCurrentLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLanguage(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    // Cleanup
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>{children}</LanguageContext.Provider>;
};
