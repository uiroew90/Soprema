import React from "react";
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation();
  const terms = t("headerSearch.terms", { returnObjects: true });

  return (
    <div className='header-search' data-header-search=''>
      <button className='header-search-close' data-header-search-close='' type='button'>
        <i className='ic ic-close'></i>
      </button>
      <div className='bannerv4 bannerv4--size-full-height bannerv4--search-oui bannerv4--image-cover'>
        <div className='bannerv4-wrapper'>
          <img
            className='bannerv4-video'
            src='https://www.soprema.ch/files/thumbnail-image2_7bb22fa15ff7c078d88381fc152c76fb.jpg'
          />
          <div className='bannerv4-container'>
            <div className='bannerv4-content wysiwyg'>
              <p className='title-lvl-4' style={{ textAlign: "center" }}>
                &nbsp;
              </p>
              <p className='title-lvl-1' style={{ textAlign: "center" }}>
                {t("headerSearch.tagline")}.
                <br />
                SOPREMA.
              </p>
            </div>
            <div className='search-banner'>
              <div className='search-banner-container'>
                <form
                  className='search-banner-form'
                  data-mods='autocomplete'
                  method='GET'
                  action={t("headerSearch.formEndpoint")}>
                  <div className='search-banner-input-wrapper'>
                    <input
                      className='search-banner-input'
                      name='query'
                      data-autocomplete-input
                      type='text'
                      aria-label={t("headerSearch.fieldPlaceholder")}
                      autoComplete='off'
                      placeholder={t("headerSearch.fieldPlaceholder")}
                    />
                    <button className='search-banner-button' type='submit'>
                      {t("headerSearch.buttonText")}
                    </button>
                  </div>
                  <div className='search-banner-results' data-autocomplete-wrapper=''></div>
                </form>
                <div className='search-banner-terms'>
                  {Array.isArray(terms) &&
                    terms.length > 0 &&
                    terms.map((term, index) => (
                      <a key={index} className='search-banner-terms-word' href={term.link}>
                        {term.value}
                      </a>
                    ))}
                </div>
              </div>
              <div className='search-banner-actions'>
                <a className='search-banner-actions-button' href={t("headerSearch.actionLink")}>
                  {t("headerSearch.actionText")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
