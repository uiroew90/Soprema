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
    <header className='header' id='role-banner' data-newheader='' role='banner'>
      <div className='header-wrapper'>
        <div className='header-logo'>
          <a className='header-logo-wrapper' href={`https://www.soprema.ch/${currentLanguage}/`}>
            <img
              src='https://www.soprema.ch/files/resize/outside/200-200-logo-web_9e746a81662d1d01e8b543665902fb3e.webp'
              alt='accessibility.back_to_home'
              loading='lazy'
            />
          </a>
        </div>

        <div className='header-container'>
          <div className='header-menu' data-header-wrapper=''>
            <nav className='header-menu-container'>
              <HeaderTopButtons />
              <ul className='header-menu-list' data-header-nav=''>
                <li className='header-menu-element' data-header-menu=''>
                  <button className='header-menu-link' data-header-menu-button='' type='button'>
                    {t("headerNav.service.value")}
                  </button>
                  <div className='header-menu-submenu' data-header-menu-wrapper=''>
                    <div className='header-menu-submenu-content' data-header-menu-content=''>
                      <ul className='header-menu-submenu-list'>
                        <HeaderSubMenuBack value={t("headerNav.back")} level='2' />
                        <li className='header-menu-submenu-element header-menu-submenu-element--head header-menu-submenu-element--lvl2'>
                          <a
                            className='header-menu-submenu-link header-menu-submenu-link--head header-menu-submenu-link--lvl2'
                            href={t("headerNav.service.link")}>
                            {t("headerNav.service.value")}
                          </a>
                        </li>
                        <li
                          className='header-menu-submenu-element header-menu-submenu-element--lvl2'
                          data-header-secondlvl=''>
                          <a
                            className='header-menu-submenu-link header-menu-submenu-link--lvl2'
                            target='_self'
                            href={t("headerNav.service.items.architectService.link")}>
                            <div
                              className='header-menu-submenu-image'
                              style={{
                                backgroundImage:
                                  "url('https://www.soprema.ch/files/resize/outside/50-50-architect-991e9a3a0ec20538df23ef0f5faa8b24_63a38401c2ef4c15b0f0517af57d7f8d.webp')",
                              }}></div>
                            {t("headerNav.service.items.architectService.value")}
                          </a>
                        </li>
                        <li
                          className='header-menu-submenu-element header-menu-submenu-element--lvl2'
                          data-header-secondlvl=''>
                          <a
                            className='header-menu-submenu-link header-menu-submenu-link--lvl2'
                            target='_self'
                            href={t("headerNav.service.items.trainingCourses.link")}>
                            <div
                              className='header-menu-submenu-image'
                              style={{
                                backgroundImage:
                                  "url('https://www.soprema.ch/files/resize/outside/50-50-icon-schulung_c91db75368b7bc1053e8a63a6a5a57cb.webp')",
                              }}></div>
                            {t("headerNav.service.items.trainingCourses.value")}
                          </a>
                        </li>
                        <li
                          className='header-menu-submenu-element header-menu-submenu-element--lvl2'
                          data-header-secondlvl=''>
                          <a
                            className='header-menu-submenu-link header-menu-submenu-link--lvl2'
                            target='_self'
                            href={t("headerNav.service.items.guarantees.link")}>
                            <div
                              className='header-menu-submenu-image'
                              style={{
                                backgroundImage:
                                  "url('https://www.soprema.ch/files/resize/outside/50-50-30415-709f4959719e6501e35518b16fc847d1_759fff657e3903bd80671aa28a31f8f8.webp')",
                              }}></div>
                            {t("headerNav.service.items.guarantees.value")}
                          </a>
                        </li>
                        <li
                          className='header-menu-submenu-element header-menu-submenu-element--lvl2'
                          data-header-secondlvl=''>
                          <a
                            className='header-menu-submenu-link header-menu-submenu-link--lvl2'
                            target='_self'
                            data-header-secondlvl-button=''
                            href={t("headerNav.service.items.download.link")}>
                            <div
                              className='header-menu-submenu-image'
                              style={{
                                backgroundImage:
                                  "url('https://www.soprema.ch/files/resize/outside/50-50-icon-download_df6df2dbe4445ca92c40b38fc85f467d.webp')",
                              }}></div>
                            {t("headerNav.service.items.download.value")}
                          </a>
                          <ul
                            className='header-menu-submenu-list header-menu-submenu-list--lvl2'
                            data-header-secondlvl-wrapper=''>
                            <HeaderSubMenuBack value={t("headerNav.service.value")} level='3' />
                            <li className='header-menu-submenu-element header-menu-submenu-element--head header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--head header-menu-submenu-link--lvl3'
                                href={t("headerNav.service.items.download.link")}>
                                {t("headerNav.service.items.download.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.service.items.documentDownload.link")}>
                                {t("headerNav.service.items.documentDownload.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.service.items.downloadSupport.link")}>
                                {t("headerNav.service.items.downloadSupport.value")}
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          className='header-menu-submenu-element header-menu-submenu-element--lvl2'
                          data-header-secondlvl=''>
                          <a
                            className='header-menu-submenu-link header-menu-submenu-link--lvl2'
                            target='_self'
                            data-header-secondlvl-button=''
                            href={t("headerNav.service.items.systemFinder.link")}>
                            <div
                              className='header-menu-submenu-image'
                              style={{
                                backgroundImage:
                                  "url('https://www.soprema.ch/files/resize/outside/50-50-icon-system_1cc22276b889573c277f0d301371d960.webp')",
                              }}></div>
                            {t("headerNav.service.items.systemFinder.value")}
                          </a>
                          <ul
                            className='header-menu-submenu-list header-menu-submenu-list--lvl2'
                            data-header-secondlvl-wrapper=''>
                            <HeaderSubMenuBack value={t("headerNav.service.value")} level='3' />
                            <li className='header-menu-submenu-element header-menu-submenu-element--head header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--head header-menu-submenu-link--lvl3'
                                href={t("headerNav.service.items.systemFinder.link")}>
                                {t("headerNav.service.items.systemFinder.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.service.items.systemFinderOverview.link")}>
                                {t("headerNav.service.items.systemFinderOverview.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.service.items.bitumenMembranesSystemFinder.link")}>
                                {t("headerNav.service.items.bitumenMembranesSystemFinder.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.service.items.plasticTracksSystemFinder.link")}>
                                {t("headerNav.service.items.plasticTracksSystemFinder.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.service.items.liquidPlasticsSystemFinder.link")}>
                                {t("headerNav.service.items.liquidPlasticsSystemFinder.value")}
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          className='header-menu-submenu-element header-menu-submenu-element--lvl2'
                          data-header-secondlvl=''>
                          <a
                            className='header-menu-submenu-link header-menu-submenu-link--lvl2'
                            target='_self'
                            href={t("headerNav.service.items.serviceOfferings.link")}>
                            <div
                              className='header-menu-submenu-image'
                              style={{
                                backgroundImage:
                                  "url('https://www.soprema.ch/files/resize/outside/50-50-30413-08e478f0a12093f672f5f2e1f4d6790b_debd8976fa7b675d00c54d1e8396741b.webp')",
                              }}></div>
                            {t("headerNav.service.items.serviceOfferings.value")}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className='header-menu-element' data-header-menu=''>
                  <button className='header-menu-link' data-header-menu-button='' type='button'>
                    {t("headerNav.product.value")}
                  </button>
                  <div className='header-menu-submenu' data-header-menu-wrapper=''>
                    <div className='header-menu-submenu-content' data-header-menu-content=''>
                      <ul className='header-menu-submenu-list'>
                        <HeaderSubMenuBack value={t("headerNav.back")} level='2' />
                        <li className='header-menu-submenu-element header-menu-submenu-element--head header-menu-submenu-element--lvl2'>
                          <a
                            className='header-menu-submenu-link header-menu-submenu-link--head header-menu-submenu-link--lvl2'
                            href={t("headerNav.product.link")}>
                            {t("headerNav.product.value")}
                          </a>
                        </li>
                        <li
                          className='header-menu-submenu-element header-menu-submenu-element--lvl2'
                          data-header-secondlvl=''>
                          <a
                            className='header-menu-submenu-link header-menu-submenu-link--lvl2'
                            target='_self'
                            data-header-secondlvl-button=''
                            href={t("headerNav.product.items.seal.link")}>
                            <div
                              className='header-menu-submenu-image'
                              style={{
                                backgroundImage:
                                  "url('https://www.soprema.ch/files/resize/outside/50-50-30433_7998501b9fbf3b5a32a07b9fce9d3940.webp')",
                              }}></div>
                            {t("headerNav.product.items.seal.value")}
                          </a>
                          <ul
                            className='header-menu-submenu-list header-menu-submenu-list--lvl2'
                            data-header-secondlvl-wrapper=''>
                            <HeaderSubMenuBack value={t("headerNav.product.value")} level='3' />
                            <li className='header-menu-submenu-element header-menu-submenu-element--head header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--head header-menu-submenu-link--lvl3'
                                href={t("headerNav.product.items.seal.link")}>
                                {t("headerNav.product.items.seal.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.product.items.bitumenSealingSheets.link")}>
                                {t("headerNav.product.items.bitumenSealingSheets.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.product.items.liquidPlastics.link")}>
                                {t("headerNav.product.items.liquidPlastics.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.product.items.plasticSealingSheets.link")}>
                                {t("headerNav.product.items.plasticSealingSheets.value")}
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          className='header-menu-submenu-element header-menu-submenu-element--lvl2'
                          data-header-secondlvl=''>
                          <a
                            className='header-menu-submenu-link header-menu-submenu-link--lvl2'
                            target='_self'
                            href={t("headerNav.product.items.thermalInsulation.link")}>
                            <div
                              className='header-menu-submenu-image'
                              style={{
                                backgroundImage:
                                  "url('https://www.soprema.ch/files/resize/outside/50-50-30436_1808a6a3f56eed7bfda6866f86dc8a92.webp')",
                              }}></div>
                            {t("headerNav.product.items.thermalInsulation.value")}
                          </a>
                        </li>
                        <li
                          className='header-menu-submenu-element header-menu-submenu-element--lvl2'
                          data-header-secondlvl=''>
                          <a
                            className='header-menu-submenu-link header-menu-submenu-link--lvl2'
                            target='_self'
                            href={t("headerNav.product.items.heightSafetySystems.link")}>
                            <div
                              className='header-menu-submenu-image'
                              style={{
                                backgroundImage:
                                  "url('https://www.soprema.ch/files/resize/outside/50-50-chut-quand-tu-tombes_c61fcd26378b636191efe3e3f9590c55.webp')",
                              }}></div>
                            {t("headerNav.product.items.heightSafetySystems.value")}
                          </a>
                        </li>
                        <li
                          className='header-menu-submenu-element header-menu-submenu-element--lvl2'
                          data-header-secondlvl=''>
                          <a
                            className='header-menu-submenu-link header-menu-submenu-link--lvl2'
                            target='_self'
                            href={t("headerNav.product.items.civilEngineering.link")}>
                            <div
                              className='header-menu-submenu-image'
                              style={{
                                backgroundImage:
                                  "url('https://www.soprema.ch/files/resize/outside/50-50-30444_da920933b76a6a04e9a4ba1be20f2f05.webp')",
                              }}></div>
                            {t("headerNav.product.items.civilEngineering.value")}
                          </a>
                        </li>
                        <li
                          className='header-menu-submenu-element header-menu-submenu-element--lvl2'
                          data-header-secondlvl=''>
                          <a
                            className='header-menu-submenu-link header-menu-submenu-link--lvl2'
                            target='_self'
                            href={t("headerNav.product.items.ecoProducts.link")}>
                            <div
                              className='header-menu-submenu-image'
                              style={{
                                backgroundImage:
                                  "url('https://www.soprema.ch/files/resize/outside/50-50-eco-product_690eac3b8aa39cfc21cf82a65c4f8a7c.webp')",
                              }}></div>
                            {t("headerNav.product.items.ecoProducts.value")}
                          </a>
                        </li>
                        <li
                          className='header-menu-submenu-element header-menu-submenu-element--lvl2'
                          data-header-secondlvl=''>
                          <a
                            className='header-menu-submenu-link header-menu-submenu-link--lvl2'
                            target='_self'
                            href={t("headerNav.product.items.greening.link")}>
                            <div
                              className='header-menu-submenu-image'
                              style={{
                                backgroundImage:
                                  "url('https://www.soprema.ch/files/resize/outside/50-50-30448_c93f369db92e4661d17a3d781169e526.webp')",
                              }}></div>
                            {t("headerNav.product.items.greening.value")}
                          </a>
                        </li>
                        <li
                          className='header-menu-submenu-element header-menu-submenu-element--lvl2'
                          data-header-secondlvl=''>
                          <a
                            className='header-menu-submenu-link header-menu-submenu-link--lvl2'
                            target='_self'
                            href={t("headerNav.product.items.premiumClassSystems.link")}>
                            <div
                              className='header-menu-submenu-image'
                              style={{
                                backgroundImage:
                                  "url('https://www.soprema.ch/files/resize/outside/50-50-path-8855-2x_2bf175a21e38011b92c77882165a96d3.webp')",
                              }}></div>
                            {t("headerNav.product.items.premiumClassSystems.value")}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className='header-menu-element' data-header-menu=''>
                  <button className='header-menu-link' data-header-menu-button='' type='button'>
                    {t("headerNav.Soprema.value")}
                  </button>
                  <div className='header-menu-submenu' data-header-menu-wrapper=''>
                    <div className='header-menu-submenu-content' data-header-menu-content=''>
                      <ul className='header-menu-submenu-list'>
                        <HeaderSubMenuBack value={t("headerNav.back")} level='2' />
                        <li className='header-menu-submenu-element header-menu-submenu-element--head header-menu-submenu-element--lvl2'>
                          <a
                            className='header-menu-submenu-link header-menu-submenu-link--head header-menu-submenu-link--lvl2'
                            href={t("headerNav.Soprema.link")}>
                            {t("headerNav.Soprema.value")}
                          </a>
                        </li>
                        <li
                          className='header-menu-submenu-element header-menu-submenu-element--lvl2'
                          data-header-secondlvl=''>
                          <a
                            className='header-menu-submenu-link header-menu-submenu-link--lvl2'
                            target='_self'
                            data-header-secondlvl-button=''
                            href={t("headerNav.Soprema.link")}>
                            <div
                              className='header-menu-submenu-image'
                              style={{
                                backgroundImage:
                                  "url('https://www.soprema.ch/files/resize/outside/50-50-30426_bab25d684ad6bca63a285bcb29d3a4ad.webp')",
                              }}></div>
                            {t("headerNav.Soprema.value")}
                          </a>
                          <ul
                            className='header-menu-submenu-list header-menu-submenu-list--lvl2'
                            data-header-secondlvl-wrapper=''>
                            <HeaderSubMenuBack value={t("headerNav.Soprema.value")} level='3' />
                            <li className='header-menu-submenu-element header-menu-submenu-element--head header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--head header-menu-submenu-link--lvl3'
                                href={t("headerNav.Soprema.items.company.link")}>
                                {t("headerNav.Soprema.items.company.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.Soprema.items.aboutSoprema.link")}>
                                {t("headerNav.Soprema.items.aboutSoprema.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.Soprema.items.SopremaWorldwide.link")}>
                                {t("headerNav.Soprema.items.SopremaWorldwide.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.Soprema.items.SopremaHistory.link")}>
                                {t("headerNav.Soprema.items.SopremaHistory.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.Soprema.items.ourTeam.link")}>
                                {t("headerNav.Soprema.items.ourTeam.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.Soprema.items.sponsoring.link")}>
                                {t("headerNav.Soprema.items.sponsoring.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.Soprema.items.jobsAndCareer.link")}>
                                {t("headerNav.Soprema.items.jobsAndCareer.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.Soprema.items.locationBauarenaVolketswil.link")}>
                                {t("headerNav.Soprema.items.locationBauarenaVolketswil.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.Soprema.items.SopremaVideos.link")}>
                                {t("headerNav.Soprema.items.SopremaVideos.value")}
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          className='header-menu-submenu-element header-menu-submenu-element--lvl2'
                          data-header-secondlvl=''>
                          <a
                            className='header-menu-submenu-link header-menu-submenu-link--lvl2'
                            target='_self'
                            data-header-secondlvl-button=''
                            href={t("headerNav.Soprema.items.references.link")}>
                            <div
                              className='header-menu-submenu-image'
                              style={{
                                backgroundImage:
                                  "url('https://www.soprema.ch/files/resize/outside/50-50-group-1802-2x_1ebf1aaac45b72fd3f9bb0c1843e092a.webp')",
                              }}></div>
                            {t("headerNav.Soprema.items.references.value")}
                          </a>
                          <ul
                            className='header-menu-submenu-list header-menu-submenu-list--lvl2'
                            data-header-secondlvl-wrapper=''>
                            <HeaderSubMenuBack value={t("headerNav.Soprema.value")} level='3' />
                            <li className='header-menu-submenu-element header-menu-submenu-element--head header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--head header-menu-submenu-link--lvl3'
                                href={t("headerNav.Soprema.items.references.link")}>
                                {t("headerNav.Soprema.items.references.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.Soprema.items.allReferences.link")}>
                                {t("headerNav.Soprema.items.allReferences.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.Soprema.items.bitumenSealingSheets.link")}>
                                {t("headerNav.Soprema.items.bitumenSealingSheets.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.Soprema.items.plasticSealingSheets.link")}>
                                {t("headerNav.Soprema.items.plasticSealingSheets.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.Soprema.items.liquidPlastics.link")}>
                                {t("headerNav.Soprema.items.liquidPlastics.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.Soprema.items.thermalInsulation.link")}>
                                {t("headerNav.Soprema.items.thermalInsulation.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.Soprema.items.greening.link")}>
                                {t("headerNav.Soprema.items.greening.value")}
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href={t("headerNav.Soprema.items.fallProtection.link")}>
                                {t("headerNav.Soprema.items.fallProtection.value")}
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <HeaderLogin />
              </ul>
            </nav>
          </div>
          <button className='header-burger' data-header-burger='' type='button' aria-label='accessibility.menu.open'>
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
