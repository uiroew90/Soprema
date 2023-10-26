// Libraries and packages
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation();

  return (
    <footer className='footer' id='footer'>
      <div className='footer-wrapper'>
        <ul className='footer-menu'>
          <li className='footer-menu-element' data-header-menu=''>
            <button className='footer-menu-link' data-header-hassubmenu='' type='button'>
              {t("footerNav.product.title")}
            </button>
            <ul data-header-submenu=''>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a className='footer-menu-link' href={t("footerNav.product.items.bitumen.link")} target='_self'>
                  {t("footerNav.product.items.bitumen.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a className='footer-menu-link' href={t("footerNav.product.items.liquidPlastics.link")} target='_self'>
                  {t("footerNav.product.items.liquidPlastics.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a
                  className='footer-menu-link'
                  href={t("footerNav.product.items.plasticSealingSheets.link")}
                  target='_self'>
                  {t("footerNav.product.items.plasticSealingSheets.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a className='footer-menu-link' href={t("footerNav.product.items.insulation.link")} target='_self'>
                  {t("footerNav.product.items.insulation.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a className='footer-menu-link' href={t("footerNav.product.items.greening.link")} target='_self'>
                  {t("footerNav.product.items.greening.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a
                  className='footer-menu-link'
                  href={t("footerNav.product.items.civilEngineering.link")}
                  target='_self'>
                  {t("footerNav.product.items.civilEngineering.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a
                  className='footer-menu-link'
                  href={t("footerNav.product.items.heightSafetySystems.link")}
                  target='_self'>
                  {t("footerNav.product.items.heightSafetySystems.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a className='footer-menu-link' href={t("footerNav.product.items.ecoProducts.link")} target='_self'>
                  {t("footerNav.product.items.ecoProducts.value")}
                </a>
              </li>
            </ul>
          </li>
          <li className='footer-menu-element' data-header-menu=''>
            <button className='footer-menu-link' data-header-hassubmenu='' type='button'>
              {t("footerNav.service.title")}
            </button>
            <ul data-header-submenu=''>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a
                  className='footer-menu-link'
                  href={t("footerNav.service.items.architectService.link")}
                  target='_self'>
                  {t("footerNav.service.items.architectService.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a className='footer-menu-link' href={t("footerNav.service.items.guarantees.link")} target='_self'>
                  {t("footerNav.service.items.guarantees.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a className='footer-menu-link' href={t("footerNav.service.items.services.link")} target='_self'>
                  {t("footerNav.service.items.services.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a className='footer-menu-link' href={t("footerNav.service.items.sopremaVideos.link")} target='_self'>
                  {t("footerNav.service.items.sopremaVideos.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a className='footer-menu-link' href={t("footerNav.service.items.webinarOnDemand.link")} target='_self'>
                  {t("footerNav.service.items.webinarOnDemand.value")}
                </a>
              </li>
            </ul>
          </li>
          <li className='footer-menu-element' data-header-menu=''>
            <button className='footer-menu-link' data-header-hassubmenu='' type='button'>
              {t("footerNav.Soprema.title")}
            </button>
            <ul data-header-submenu=''>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a className='footer-menu-link' href={t("footerNav.Soprema.items.aboutSoprema.link")} target='_self'>
                  {t("footerNav.Soprema.items.aboutSoprema.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a
                  className='footer-menu-link'
                  href={t("footerNav.Soprema.items.sopremaWorldwide.link")}
                  target='_self'>
                  {t("footerNav.Soprema.items.sopremaWorldwide.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a className='footer-menu-link' href={t("footerNav.Soprema.items.sopremaHistory.link")} target='_self'>
                  {t("footerNav.Soprema.items.sopremaHistory.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a className='footer-menu-link' href={t("footerNav.Soprema.items.ourTeam.link")} target='_self'>
                  {t("footerNav.Soprema.items.ourTeam.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a className='footer-menu-link' href={t("footerNav.Soprema.items.sponsoring.link")} target='_self'>
                  {t("footerNav.Soprema.items.sponsoring.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a className='footer-menu-link' href={t("footerNav.Soprema.items.jobsCareer.link")} target='_self'>
                  {t("footerNav.Soprema.items.jobsCareer.value")}
                </a>
              </li>
            </ul>
          </li>
          <li className='footer-menu-element' data-header-menu=''>
            <button className='footer-menu-link' data-header-hassubmenu='' type='button'>
              {t("footerNav.useful.title")}
            </button>
            <ul data-header-submenu=''>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a className='footer-menu-link' href={t("footerNav.useful.items.termsOfService.link")} target='_self'>
                  {t("footerNav.useful.items.termsOfService.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a className='footer-menu-link' href={t("footerNav.useful.items.privacyPolicy.link")} target='_self'>
                  {t("footerNav.useful.items.privacyPolicy.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a
                  className='footer-menu-link'
                  href={t("footerNav.useful.items.warrantyLiabilityConditions.link")}
                  target='_self'>
                  {t("footerNav.useful.items.warrantyLiabilityConditions.value")}
                </a>
              </li>
              <li className='footer-menu-element' data-header-menu='' data-header-noevents=''>
                <a
                  className='footer-menu-link'
                  href={t("footerNav.useful.items.newsletterArchive.link")}
                  target='_self'>
                  {t("footerNav.useful.items.newsletterArchive.value")}
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className='footer-container'>
          <div className='footer-logo'>
            <img
              src='https://www.soprema.ch/assets/sopremav4/images/logo-group.svg'
              alt='Soprema Group'
              loading='lazy'
            />
          </div>
          <div className='footer-copyright'>Soprema 2023</div>
          <div className='footer-socials'>
            <ul className='social-links'>
              <li className='social-links-element'>
                <a
                  className='social-links-link'
                  href='https://www.linkedin.com/company/soprema-switzerland/'
                  title='LinkedIn'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='fa fa-linkedin' aria-hidden='true'></i>
                </a>
              </li>
              <li className='social-links-element'>
                <a
                  className='social-links-link'
                  href='https://www.instagram.com/sopremaag/'
                  title='Instagram'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='fa fa-instagram' aria-hidden='true'></i>
                </a>
              </li>
              <li className='social-links-element'>
                <a
                  className='social-links-link'
                  href='https://www.facebook.com/SopremaAG/'
                  title='Facebook'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='fa fa-facebook' aria-hidden='true'></i>
                </a>
              </li>
              <li className='social-links-element'>
                <a
                  className='social-links-link'
                  href='https://www.youtube.com/user/SopremaAG'
                  title='YouTube'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='fa fa-youtube' aria-hidden='true'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
