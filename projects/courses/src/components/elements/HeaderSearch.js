import React from "react";

export default () => {
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
                SO STARK.
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
                  action='https://www.soprema.ch/de/search'>
                  <div className='search-banner-input-wrapper'>
                    <input
                      className='search-banner-input'
                      name='query'
                      data-autocomplete-input
                      type='text'
                      aria-label='Nach Produkten, Marken oder Suchbegriffen suchen...'
                      autoComplete='off'
                      placeholder='Nach Produkten, Marken oder Suchbegriffen suchen...'
                    />
                    <button className='search-banner-button' type='submit'>
                      Finden
                    </button>
                  </div>
                  <div className='search-banner-results' data-autocomplete-wrapper=''></div>
                </form>
                <div className='search-banner-terms'>
                  <a
                    className='search-banner-terms-word'
                    href='https://www.soprema.ch/de/gamme/abdichtung/bitumendichtungsbahnen'>
                    Bitumendichtungsbahnen
                  </a>
                  <a
                    className='search-banner-terms-word'
                    href='https://www.soprema.ch/de/gamme/abdichtung/kunststoffdichtungsbahnen'>
                    Kunststoffdichtungsbahnen
                  </a>
                  <a className='search-banner-terms-word' href='https://www.soprema.ch/de/fluessigkunststoff'>
                    Flüssigkunststoffe
                  </a>
                  <a className='search-banner-terms-word' href='https://www.soprema.ch/de/gamme/daemmstoffe'>
                    Dämmstoffe
                  </a>
                  <a className='search-banner-terms-word' href='https://www.soprema.ch/de/gamme/dachbegruenung'>
                    Begrünung
                  </a>
                  <a
                    className='search-banner-terms-word'
                    href='https://www.soprema.ch/de/gamme/produkte-hoehensicherungssysteme'>
                    Höhensicherungssysteme
                  </a>
                </div>
              </div>
              <div className='search-banner-actions'>
                <a className='search-banner-actions-button' href='https://www.soprema.ch/de/sostark'>
                  Gesamten Unternehmensfilm anschauen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
