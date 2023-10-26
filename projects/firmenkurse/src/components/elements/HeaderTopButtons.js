import React from "react";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./LanguageSwitcher";

export default () => {
  const { t } = useTranslation();

  return (
    <ul className='header-top-menu' data-header-nav=''>
      <li className='header-top-element'>
        <button className='header-top-link' data-header-search-btn='' type='button'>
          <i className='ic ic-search'></i> {t("headerTop.search.value")}
        </button>
      </li>
      <li className='header-top-element'>
        <a className='header-top-link' href={t("headerTop.news.link")} target='_self'>
          <div
            className='header-top-image'
            style={{
              backgroundImage:
                "url('https://www.soprema.ch/files/resize/outside/50-50-press-2x_013643d7df009440e1a015aa8c76b9df.webp')",
            }}></div>{" "}
          {t("headerTop.news.value")}
        </a>
      </li>
      <li className='header-top-element'>
        <a className='header-top-link' href={t("headerTop.contact.link")} target='_self'>
          <div
            className='header-top-image'
            style={{
              backgroundImage:
                "url('https://www.soprema.ch/files/resize/outside/50-50-30429_5fd9ce7604a16bc7a95e1d0efea8a60f.webp')",
            }}></div>{" "}
          {t("headerTop.contact.value")}
        </a>
      </li>
      <LanguageSwitcher />
    </ul>
  );
};
