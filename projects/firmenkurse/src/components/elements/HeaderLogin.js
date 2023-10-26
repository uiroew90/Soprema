import React from "react";
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation();

  return (
    <li className='header-menu-element header-menu-element--profil'>
      <button type='button' className='header-menu-space' data-header-space-btn=''>
        <i className='ic ic-profil-light'></i> <span className='hide-access'>accessibility.spaces</span>
      </button>
      <div className='header-spaces' data-header-space=''>
        <div className='header-spaces-container'>
          <p className='header-spaces-title'>{t("headerNav.login.value")}</p>
          <ul className='header-spaces-list'>
            <li className='header-spaces-element'>
              <a href={t("headerNav.login.link")} className='header-spaces-link' tabIndex='-1'>
                <div className='header-spaces-link-image'>
                  <img
                    loading='lazy'
                    src='https://www.soprema.ch/assets/sopremav4/images/spaces/espace-etancheur.jpg'
                    alt=''
                  />
                </div>
                <p className='header-spaces-link-label'>mySoprema</p>
              </a>
            </li>
          </ul>
          <div className='header-spaces-socials'>
            <ul className='social-links'>
              <li className='social-links-element'>
                <a
                  className='social-links-link'
                  href='https://www.linkedin.com/company/soprema-switzerland/'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='LinkedIn'
                  tabIndex='-1'>
                  <i className='fa fa-linkedin' aria-hidden='true'></i>
                </a>
              </li>
              <li className='social-links-element'>
                <a
                  className='social-links-link'
                  href='https://www.instagram.com/sopremaag/'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Instagram'
                  tabIndex='-1'>
                  <i className='fa fa-instagram' aria-hidden='true'></i>
                </a>
              </li>
              <li className='social-links-element'>
                <a
                  className='social-links-link'
                  href='https://www.facebook.com/SopremaAG/'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Facebook'
                  tabIndex='-1'>
                  <i className='fa fa-facebook' aria-hidden='true'></i>
                </a>
              </li>
              <li className='social-links-element'>
                <a
                  className='social-links-link'
                  href='https://www.youtube.com/user/SopremaAG'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='YouTube'
                  tabIndex='-1'>
                  <i className='fa fa-youtube' aria-hidden='true'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};
