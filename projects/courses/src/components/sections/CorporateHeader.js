// Libraries and packages
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
// Components
import HeaderLogin from "../elements/HeaderLogin";
import HeaderSearch from "../elements/HeaderSearch";
import HeaderTopButtons from "../elements/HeaderTopButtons";
import HeaderSubMenuBack from "../elements/HeaderSubMenuBack";

const prependUrl = (link) => (link.startsWith("/") ? `https://www.soprema.ch${link}` : link);

const SubMenuLink = ({ title, link, image, className, level }) => {
  const fullLink = prependUrl(link);
  return (
    <li
      className={`header-menu-submenu-element header-menu-submenu-element--lvl${level} ${className}`}
      data-header-secondlvl=''>
      <a
        className={`header-menu-submenu-link header-menu-submenu-link--lvl${level} ${className}`}
        target='_self'
        href={fullLink}>
        {image && <div className='header-menu-submenu-image' style={{ backgroundImage: `url('${image}')` }}></div>}
        {title}
      </a>
    </li>
  );
};

const SubMenu = ({ title, link, image, children, className, level }) => {
  const fullLink = prependUrl(link);
  return (
    <li
      className={`header-menu-submenu-element header-menu-submenu-element--lvl${level} ${className}`}
      data-header-secondlvl=''>
      <a
        className={`header-menu-submenu-link header-menu-submenu-link--lvl${level} ${className}`}
        target='_self'
        data-header-secondlvl-button=''
        href={fullLink}>
        {image && <div className='header-menu-submenu-image' style={{ backgroundImage: `url('${image}')` }}></div>}
        {title}
      </a>
      <ul
        className={`header-menu-submenu-list header-menu-submenu-list--lvl${level} ${className}`}
        data-header-secondlvl-wrapper=''>
        <HeaderSubMenuBack value={title} level={level} />
        {children}
      </ul>
    </li>
  );
};

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
                            href='/de/architektenservice-old'>
                            {t("headerNav.service.value")}
                          </a>
                        </li>
                        <SubMenuLink
                          title={t("headerNav.service.items.architectService.value")}
                          link='/de/architektenservice'
                          image='https://www.soprema.ch/files/resize/outside/50-50-architect-991e9a3a0ec20538df23ef0f5faa8b24_63a38401c2ef4c15b0f0517af57d7f8d.webp'
                          level='2'
                        />
                        <SubMenuLink
                          title={t("headerNav.service.items.trainingCourses.value")}
                          link={t("headerNav.service.items.trainingCourses.link")}
                          image='https://www.soprema.ch/files/resize/outside/50-50-icon-schulung_c91db75368b7bc1053e8a63a6a5a57cb.webp'
                          level='2'
                        />
                        <SubMenuLink
                          title={t("headerNav.service.items.guarantees.value")}
                          link={t("headerNav.service.items.guarantees.link")}
                          image='https://www.soprema.ch/files/resize/outside/50-50-30415-709f4959719e6501e35518b16fc847d1_759fff657e3903bd80671aa28a31f8f8.webp'
                          level='2'
                        />
                        <SubMenu
                          title={t("headerNav.service.items.documentDownload.value")}
                          link={t("headerNav.service.items.documentDownload.link")}
                          image='https://www.soprema.ch/files/resize/outside/50-50-icon-download_df6df2dbe4445ca92c40b38fc85f467d.webp'
                          level='2'>
                          <SubMenuLink
                            title={t("headerNav.service.items.documentDownload.value")}
                            link={t("headerNav.service.items.documentDownload.link")}
                            level='3'
                          />
                          <SubMenuLink
                            title={t("headerNav.service.items.documentDownloadSupport.value")}
                            link={t("headerNav.service.items.documentDownloadSupport.link")}
                            level='3'
                          />
                        </SubMenu>
                        <SubMenu
                          title={t("headerNav.service.items.systemFinder.value")}
                          link={t("headerNav.service.items.systemFinder.link")}
                          image='https://www.soprema.ch/files/resize/outside/50-50-icon-system_1cc22276b889573c277f0d301371d960.webp'
                          level='2'>
                          <SubMenuLink
                            title={t("headerNav.service.items.systemFinderOverview.value")}
                            link={t("headerNav.service.items.systemFinderOverview.link")}
                            level='3'
                          />
                          <SubMenuLink
                            title={t("headerNav.service.items.bitumenMembranesSystemFinder.value")}
                            link={t("headerNav.service.items.bitumenMembranesSystemFinder.link")}
                            level='3'
                          />
                          <SubMenuLink
                            title={t("headerNav.service.items.plasticTracksSystemFinder.value")}
                            link={t("headerNav.service.items.plasticTracksSystemFinder.link")}
                            level='3'
                          />
                          <SubMenuLink
                            title={t("headerNav.service.items.liquidPlasticsSystemFinder.value")}
                            link={t("headerNav.service.items.liquidPlasticsSystemFinder.link")}
                            level='3'
                          />
                        </SubMenu>
                        <SubMenuLink
                          title={t("headerNav.service.items.serviceOfferings.value")}
                          link={t("headerNav.service.items.serviceOfferings.link")}
                          image='https://www.soprema.ch/files/resize/outside/50-50-30413-08e478f0a12093f672f5f2e1f4d6790b_debd8976fa7b675d00c54d1e8396741b.webp'
                          level='2'
                        />
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
                            href='#'>
                            {t("headerNav.product.value")}
                          </a>
                        </li>
                        <SubMenu
                          title={t("headerNav.product.items.seal.value")}
                          link={t("headerNav.product.items.seal.link")}
                          image='https://www.soprema.ch/files/resize/outside/50-50-30433_7998501b9fbf3b5a32a07b9fce9d3940.webp'
                          level={2}>
                          <HeaderSubMenuBack value={t("headerNav.product.items.abdichtung.value")} level='3' />
                          <SubMenuLink
                            title={t("headerNav.product.items.abdichtung.items.bitumendichtungsbahnen.value")}
                            link='/de/abdichtungssysteme-bitumen'
                            level={3}
                          />
                          <SubMenuLink
                            title={t("headerNav.product.items.abdichtung.items.fluessigkunststoffe.value")}
                            link='/de/fluessigkunststoff'
                            level={3}
                          />
                          <SubMenuLink
                            title={t("headerNav.product.items.abdichtung.items.kunststoffdichtungsbahnen.value")}
                            link='/de/kunststoffdichtungsbahnen'
                            level={3}
                          />
                        </SubMenu>
                        <SubMenuLink
                          title={t("headerNav.product.items.thermalInsulation.value")}
                          link={t("headerNav.product.items.thermalInsulation.link")}
                          image='https://www.soprema.ch/files/resize/outside/50-50-30436_1808a6a3f56eed7bfda6866f86dc8a92.webp'
                          level={2}
                        />
                        <SubMenuLink
                          title={t("headerNav.product.items.hoehensicherungssysteme.value")}
                          link='/de/absturzsicherungen'
                          image='https://www.soprema.ch/files/resize/outside/50-50-chut-quand-tu-tombes_c61fcd26378b636191efe3e3f9590c55.webp'
                          level={2}
                        />
                        <SubMenuLink
                          title={t("headerNav.product.items.ingenieurbau.value")}
                          link='/de/ingenieurbau'
                          image='https://www.soprema.ch/files/resize/outside/50-50-30444_da920933b76a6a04e9a4ba1be20f2f05.webp'
                          level={2}
                        />
                        <SubMenuLink
                          title={t("headerNav.product.items.ecoProdukte.value")}
                          link='/de/sortiment/eco-produkte'
                          image='https://www.soprema.ch/files/resize/outside/50-50-eco-product_690eac3b8aa39cfc21cf82a65c4f8a7c.webp'
                          level={2}
                        />
                        <SubMenuLink
                          title={t("headerNav.product.items.begruenung.value")}
                          link='/de/begruenung'
                          image='https://www.soprema.ch/files/resize/outside/50-50-30448_c93f369db92e4661d17a3d781169e526.webp'
                          level={2}
                        />
                        <SubMenuLink
                          title={t("headerNav.product.items.premiumClassSysteme.value")}
                          link='/de/sortiment/premium-class-systeme'
                          image='https://www.soprema.ch/files/resize/outside/50-50-path-8855-2x_2bf175a21e38011b92c77882165a96d3.webp'
                          level={2}
                        />
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
                            href='/de/soprema'>
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
                            href='#'>
                            <div
                              className='header-menu-submenu-image'
                              style={{
                                backgroundImage:
                                  "url('https://www.soprema.ch/files/resize/outside/50-50-30426_bab25d684ad6bca63a285bcb29d3a4ad.webp')",
                              }}></div>
                            Unternehmen
                          </a>
                          <ul
                            className='header-menu-submenu-list header-menu-submenu-list--lvl2'
                            data-header-secondlvl-wrapper=''>
                            <HeaderSubMenuBack value={t("headerNav.Soprema.value")} level='3' />
                            <li className='header-menu-submenu-element header-menu-submenu-element--head header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--head header-menu-submenu-link--lvl3'
                                href='#'>
                                Unternehmen
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href='/de/ueber-soprema'>
                                Über SOPREMA
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href='/de/soprema-weltweit'>
                                SOPREMA Weltweit
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href='/de/geschichte'>
                                Geschichte SOPREMA
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href='/de/unternehmen/unser-team'>
                                Unser Team
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href='/de/unternehmen/sponsoring'>
                                Sponsoring
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href='/de/jobsiere'>
                                Jobs &amp; Karriere
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href='/de/bauarena'>
                                Standort Bauarena Volketswil
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href='/de/soprema-videos'>
                                Soprema Videos
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
                            href='#'>
                            <div
                              className='header-menu-submenu-image'
                              style={{
                                backgroundImage:
                                  "url('https://www.soprema.ch/files/resize/outside/50-50-group-1802-2x_1ebf1aaac45b72fd3f9bb0c1843e092a.webp')",
                              }}></div>
                            Referenzen
                          </a>
                          <ul
                            className='header-menu-submenu-list header-menu-submenu-list--lvl2'
                            data-header-secondlvl-wrapper=''>
                            <HeaderSubMenuBack value={t("headerNav.Soprema.value")} level='3' />
                            <li className='header-menu-submenu-element header-menu-submenu-element--head header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--head header-menu-submenu-link--lvl3'
                                href='#'>
                                Referenzen
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href='/de/soprema/referenzen/alle-referenzen'>
                                alle Referenzen
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href='/de/bitumendichtungsbahnen'>
                                Bitumendichtungsbahnen
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href='/de/kunststoffdichtungsbahnen_1'>
                                Kunststoffdichtungsbahnen
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href='/de/flussigkunststoff'>
                                Flüssigkunststoff
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href='/de/waermedaemmung'>
                                Wärmedämmung
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href='/de/begrunung'>
                                Begrünung
                              </a>
                            </li>
                            <li className='header-menu-submenu-element header-menu-submenu-element--lvl3'>
                              <a
                                className='header-menu-submenu-link header-menu-submenu-link--lvl3'
                                target='_self'
                                href='/de/absturzsicherheit'>
                                Absturzsicherheit
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
