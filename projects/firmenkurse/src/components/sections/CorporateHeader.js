// Libraries and packages
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
// Components
import HeaderLogin from "../elements/HeaderLogin";
import HeaderSearch from "../elements/HeaderSearch";
import HeaderTopButtons from "../elements/HeaderTopButtons";
import HeaderSubMenuBack from "../elements/HeaderSubMenuBack";

export default () => {
  const { t } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChanged = (lng) => setCurrentLanguage(lng);

    i18n.on("languageChanged", handleLanguageChanged);
    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  return (
    <header className="header" id="role-banner" data-newheader="" role="banner">
      <div className="header-wrapper">
        <div className="header-logo">
          <a className="header-logo-wrapper" href={`https://www.soprema.ch/${currentLanguage}/`}>
            <img src="https://www.soprema.ch/files/resize/outside/200-200-logo-web_9e746a81662d1d01e8b543665902fb3e.webp" alt="accessibility.back_to_home" loading="lazy" />
          </a>
        </div>

        <div className="header-container">
          <div className="header-menu" data-header-wrapper="">
            <nav className="header-menu-container">
              <HeaderTopButtons />
              <ul className="header-menu-list" data-header-nav=""></ul>
            </nav>
          </div>
          <button className="header-burger" data-header-burger="" type="button" aria-label="accessibility.menu.open">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </div>
      <HeaderSearch />
    </header>
  );
};
