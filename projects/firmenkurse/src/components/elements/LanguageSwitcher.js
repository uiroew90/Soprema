import React, { useState, useEffect, useContext } from "react";
import i18n from "i18next";

import { LanguageContext } from "../../providers/LanguageContext";

export default () => {
  const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);
  const languages = ["de", "fr", "it"];
  const otherLanguages = languages.filter((lang) => lang !== currentLanguage);

  useEffect(() => {
    const handleLanguageChanged = (lng) => setCurrentLanguage(lng);

    i18n.on("languageChanged", handleLanguageChanged);
    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  return (
    <li className="header-top-element header-lang" data-header-menu="">
      <button className="header-top-link" data-header-menu-button="" type="button">
        <div className="header-lang-img">
          {/* <img src={`https://www.soprema.ch/bundles/awcms/compiled/images/${currentLanguage}.svg`} alt={currentLanguage.toUpperCase()} /> */}
          <img src={`https://www.soprema.ch/bundles/awcms/compiled/images/ch.svg`} alt="" />
        </div>
        {currentLanguage.toUpperCase()}
      </button>
      <ul className="header-top-submenu" data-header-menu-wrapper="">
        {otherLanguages.map((lang) => (
          <li className="header-top-submenu-element" key={lang}>
            <a className="header-top-submenu-link" onClick={() => i18n.changeLanguage(lang)}>
              {lang.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};
