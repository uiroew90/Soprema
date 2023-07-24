import React from "react";
import { Link } from "react-router-dom";
import i18n from "i18next";

import LanguageSwitcher from "../elements/LanguageSwitcher";

const CorporateHeader = () => {
  return (
    <header className="header" id="role-banner" data-newheader role="banner">
      <div className="header-wrapper">
        <div className="header-logo">
          <a className="header-logo-wrapper" href="/de/">
            <img src="https://www.soprema.ch/files/resize/outside/200-200-logo-web_9e746a81662d1d01e8b543665902fb3e.webp" alt="accessibility.back_to_home" loading="lazy" />
          </a>
        </div>

        <div className="header-container">
          <div className="header-menu" data-header-wrapper>
            <nav className="header-menu-container">
              <ul className="header-top-menu" data-header-nav>
                <li className="header-top-element">
                  <button className="header-top-link" data-header-search-btn type="button">
                    <i className="ic ic-search"></i> Suche
                  </button>
                </li>
                <li className="header-top-element">
                  <a className="header-top-link" href="https://www.soprema.ch/de/presse/aktuell" target="_self">
                    <div className="header-top-image" style={{ backgroundImage: "url('https://www.soprema.ch/files/resize/outside/50-50-press-2x_013643d7df009440e1a015aa8c76b9df.webp')" }}></div>
                    Presse
                  </a>
                </li>
                <li className="header-top-element">
                  <a className="header-top-link" href="https://www.soprema.ch/de/kontaktformular" target="_self">
                    <div className="header-top-image" style={{ backgroundImage: "url('https://www.soprema.ch/files/resize/outside/50-50-30429_5fd9ce7604a16bc7a95e1d0efea8a60f.webp')" }}></div>
                    Kontakt
                  </a>
                </li>
                <LanguageSwitcher />
              </ul>
              <ul className="header-menu-list" data-header-nav>
                <li className="header-menu-element" data-header-menu>
                  <button className="header-menu-link" data-header-menu-button type="button">
                    Service
                  </button>
                  <div className="header-menu-submenu" data-header-menu-wrapper>
                    <div className="header-menu-submenu-content" data-header-menu-content>
                      <ul className="header-menu-submenu-list">
                        <li className="header-menu-submenu-element header-menu-submenu-element--lvl2 header-menu-submenu-element--back header-menu-submenu-element--top">
                          <button className="header-menu-submenu-back" data-header-back type="button">
                            Menu
                          </button>
                        </li>
                        <li className="header-menu-submenu-element header-menu-submenu-element--head header-menu-submenu-element--lvl2">
                          <a className="header-menu-submenu-link header-menu-submenu-link--head header-menu-submenu-link--lvl2" href="https://www.soprema.ch/de/architektenservice-old">
                            Service
                          </a>
                        </li>
                        <li className="header-menu-submenu-element header-menu-submenu-element--lvl2" data-header-secondlvl>
                          <a className="header-menu-submenu-link header-menu-submenu-link--lvl2" href="https://www.soprema.ch/de/architektenservice" target="_self">
                            <div className="header-menu-submenu-image" style={{ backgroundImage: "url('https://www.soprema.ch/files/resize/outside/50-50-architect-991e9a3a0ec20538df23ef0f5faa8b24_63a38401c2ef4c15b0f0517af57d7f8d.webp')" }}></div>
                            Architektenservice
                          </a>
                        </li>
                        <li className="header-menu-submenu-element header-menu-submenu-element--lvl2" data-header-secondlvl>
                          <a className="header-menu-submenu-link header-menu-submenu-link--lvl2" href="https://www.soprema.ch/de/garantieleistungen" target="_self">
                            <div className="header-menu-submenu-image" style={{ backgroundImage: "url('https://www.soprema.ch/files/resize/outside/50-50-30415-709f4959719e6501e35518b16fc847d1_759fff657e3903bd80671aa28a31f8f8.webp')" }}></div>
                            Garantien
                          </a>
                        </li>
                        <li className="header-menu-submenu-element header-menu-submenu-element--lvl2" data-header-secondlvl>
                          <a className="header-menu-submenu-link header-menu-submenu-link--lvl2" data-header-secondlvl-button href="https://www.soprema.ch/de/dokumente" target="_self">
                            Download
                          </a>
                          <ul className="header-menu-submenu-list header-menu-submenu-list--lvl2" data-header-secondlvl-wrapper>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3 header-menu-submenu-element--back header-menu-submenu-element--top">
                              <button className="header-menu-submenu-back" data-header-back type="button">
                                Service
                              </button>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--head header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--head header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/dokumente">
                                Download
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/dokumente/download" target="_self">
                                Dokumente
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/documentation/search-strict-product?language=de" target="_self">
                                Download-Support
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="header-menu-submenu-element header-menu-submenu-element--lvl2" data-header-secondlvl>
                          <a className="header-menu-submenu-link header-menu-submenu-link--lvl2" href="https://www.soprema.ch/de/schulungen" target="_self">
                            Schulungen
                          </a>
                        </li>
                        <li className="header-menu-submenu-element header-menu-submenu-element--lvl2" data-header-secondlvl>
                          <a className="header-menu-submenu-link header-menu-submenu-link--lvl2" data-header-secondlvl-button href="#" target="_self">
                            Systemfinder
                          </a>
                          <ul className="header-menu-submenu-list header-menu-submenu-list--lvl2" data-header-secondlvl-wrapper>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3 header-menu-submenu-element--back header-menu-submenu-element--top">
                              <button className="header-menu-submenu-back" data-header-back type="button">
                                Service
                              </button>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--head header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--head header-menu-submenu-link--lvl3" href="#">
                                Systemfinder
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/selection-guide" target="_self">
                                Systemfinder-Übersicht
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/guide-solutions/systemfinder-bitumenbahnen" target="_self">
                                Systemfinder Bitumenbahnen
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/guide-solutions/systemfinder-kunststoffbahnen" target="_self">
                                Systemfinder Kunststoffbahnen
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/guide-solutions/systemfinder-fluessigkunststoffe" target="_self">
                                Systemfinder Flüssigkunststoffe
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/dachrechner" target="_self">
                                Dachrechner
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="header-menu-submenu-element header-menu-submenu-element--lvl2" data-header-secondlvl>
                          <a className="header-menu-submenu-link header-menu-submenu-link--lvl2" href="https://www.soprema.ch/de/serviceleistungen" target="_self">
                            <div className="header-menu-submenu-image" style={{ backgroundImage: "url('https://www.soprema.ch/files/resize/outside/50-50-30413-08e478f0a12093f672f5f2e1f4d6790b_debd8976fa7b675d00c54d1e8396741b.webp')" }}></div>
                            Serviceleistungen
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="header-menu-element" data-header-menu>
                  <button className="header-menu-link" data-header-menu-button type="button">
                    Produkte
                  </button>
                  <div className="header-menu-submenu" data-header-menu-wrapper>
                    <div className="header-menu-submenu-content" data-header-menu-content>
                      <ul className="header-menu-submenu-list">
                        <li className="header-menu-submenu-element header-menu-submenu-element--lvl2 header-menu-submenu-element--back header-menu-submenu-element--top">
                          <button className="header-menu-submenu-back" data-header-back type="button">
                            Menu
                          </button>
                        </li>
                        <li className="header-menu-submenu-element header-menu-submenu-element--head header-menu-submenu-element--lvl2">
                          <a className="header-menu-submenu-link header-menu-submenu-link--head header-menu-submenu-link--lvl2" href="#">
                            Produkte
                          </a>
                        </li>
                        <li className="header-menu-submenu-element header-menu-submenu-element--lvl2" data-header-secondlvl>
                          <a className="header-menu-submenu-link header-menu-submenu-link--lvl2" data-header-secondlvl-button href="https://www.soprema.ch/de/abdichtungssysteme-bitumen" target="_self">
                            <div className="header-menu-submenu-image" style={{ backgroundImage: "url('https://www.soprema.ch/files/resize/outside/50-50-30433_7998501b9fbf3b5a32a07b9fce9d3940.webp')" }}></div>
                            Abdichtung
                          </a>
                          <ul className="header-menu-submenu-list header-menu-submenu-list--lvl2" data-header-secondlvl-wrapper>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3 header-menu-submenu-element--back header-menu-submenu-element--top">
                              <button className="header-menu-submenu-back" data-header-back type="button">
                                Produkte
                              </button>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--head header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--head header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/abdichtungssysteme-bitumen">
                                Abdichtung
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/abdichtungssysteme-bitumen" target="_self">
                                Bitumendichtungsbahnen
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/fluessigkunststoff" target="_self">
                                Flüssigkunststoffe
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/kunststoffdichtungsbahnen" target="_self">
                                Kunststoffdichtungsbahnen
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="header-menu-submenu-element header-menu-submenu-element--lvl2" data-header-secondlvl>
                          <a className="header-menu-submenu-link header-menu-submenu-link--lvl2" href="https://www.soprema.ch/de/waermedaemmung-soprema" target="_self">
                            <div className="header-menu-submenu-image" style={{ backgroundImage: "url('https://www.soprema.ch/files/resize/outside/50-50-30436_1808a6a3f56eed7bfda6866f86dc8a92.webp')" }}></div>
                            Wärmedämmungen
                          </a>
                        </li>
                        <li className="header-menu-submenu-element header-menu-submenu-element--lvl2" data-header-secondlvl>
                          <a className="header-menu-submenu-link header-menu-submenu-link--lvl2" href="https://www.soprema.ch/de/absturzsicherungen" target="_self">
                            <div className="header-menu-submenu-image" style={{ backgroundImage: "url('https://www.soprema.ch/files/resize/outside/50-50-chut-quand-tu-tombes_c61fcd26378b636191efe3e3f9590c55.webp')" }}></div>
                            Höhensicherungssysteme
                          </a>
                        </li>
                        <li className="header-menu-submenu-element header-menu-submenu-element--lvl2" data-header-secondlvl>
                          <a className="header-menu-submenu-link header-menu-submenu-link--lvl2" href="https://www.soprema.ch/de/ingenieurbau" target="_self">
                            <div className="header-menu-submenu-image" style={{ backgroundImage: "url('https://www.soprema.ch/files/resize/outside/50-50-30444_da920933b76a6a04e9a4ba1be20f2f05.webp')" }}></div>
                            Ingenieurbau
                          </a>
                        </li>
                        <li className="header-menu-submenu-element header-menu-submenu-element--lvl2" data-header-secondlvl>
                          <a className="header-menu-submenu-link header-menu-submenu-link--lvl2" href="https://www.soprema.ch/de/sortiment/eco-produkte" target="_self">
                            <div className="header-menu-submenu-image" style={{ backgroundImage: "url('https://www.soprema.ch/files/resize/outside/50-50-eco-product_690eac3b8aa39cfc21cf82a65c4f8a7c.webp')" }}></div>
                            ECO Produkte
                          </a>
                        </li>
                        <li className="header-menu-submenu-element header-menu-submenu-element--lvl2" data-header-secondlvl>
                          <a className="header-menu-submenu-link header-menu-submenu-link--lvl2" href="https://www.soprema.ch/de/begruenung" target="_self">
                            <div className="header-menu-submenu-image" style={{ backgroundImage: "url('https://www.soprema.ch/files/resize/outside/50-50-30448_c93f369db92e4661d17a3d781169e526.webp')" }}></div>
                            Begrünung
                          </a>
                        </li>
                        <li className="header-menu-submenu-element header-menu-submenu-element--lvl2" data-header-secondlvl>
                          <a className="header-menu-submenu-link header-menu-submenu-link--lvl2" href="https://www.soprema.ch/de/sortiment/premium-class-systeme" target="_self">
                            <div className="header-menu-submenu-image" style={{ backgroundImage: "url('https://www.soprema.ch/files/resize/outside/50-50-path-8855-2x_2bf175a21e38011b92c77882165a96d3.webp')" }}></div>
                            PREMIUM-CLASS Systeme
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="header-menu-element" data-header-menu>
                  <button className="header-menu-link" data-header-menu-button type="button">
                    Soprema
                  </button>
                  <div className="header-menu-submenu" data-header-menu-wrapper>
                    <div className="header-menu-submenu-content" data-header-menu-content>
                      <ul className="header-menu-submenu-list">
                        <li className="header-menu-submenu-element header-menu-submenu-element--lvl2 header-menu-submenu-element--back header-menu-submenu-element--top">
                          <button className="header-menu-submenu-back" data-header-back type="button">
                            Menu
                          </button>
                        </li>
                        <li className="header-menu-submenu-element header-menu-submenu-element--head header-menu-submenu-element--lvl2">
                          <a className="header-menu-submenu-link header-menu-submenu-link--head header-menu-submenu-link--lvl2" href="https://www.soprema.ch/de/soprema">
                            Soprema
                          </a>
                        </li>
                        <li className="header-menu-submenu-element header-menu-submenu-element--lvl2" data-header-secondlvl>
                          <a className="header-menu-submenu-link header-menu-submenu-link--lvl2" data-header-secondlvl-button href="#" target="_self">
                            <div className="header-menu-submenu-image" style={{ backgroundImage: "url('https://www.soprema.ch/files/resize/outside/50-50-30426_bab25d684ad6bca63a285bcb29d3a4ad.webp')" }}></div>
                            Unternehmen
                          </a>
                          <ul className="header-menu-submenu-list header-menu-submenu-list--lvl2" data-header-secondlvl-wrapper>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3 header-menu-submenu-element--back header-menu-submenu-element--top">
                              <button className="header-menu-submenu-back" data-header-back type="button">
                                Soprema
                              </button>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--head header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--head header-menu-submenu-link--lvl3" href="#">
                                Unternehmen
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/ueber-soprema" target="_self">
                                Über SOPREMA
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/soprema-weltweit" target="_self">
                                SOPREMA Weltweit
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/geschichte" target="_self">
                                Geschichte SOPREMA
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/unternehmen/unser-team" target="_self">
                                Unser Team
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/unternehmen/sponsoring" target="_self">
                                Sponsoring
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/jobsiere" target="_self">
                                Jobs &amp; Karriere
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/bauarena" target="_self">
                                Standort Bauarena Volketswil
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/soprema-videos" target="_self">
                                Soprema Videos
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="header-menu-submenu-element header-menu-submenu-element--lvl2" data-header-secondlvl>
                          <a className="header-menu-submenu-link header-menu-submenu-link--lvl2" data-header-secondlvl-button href="#" target="_self">
                            <div className="header-menu-submenu-image" style={{ backgroundImage: "url('https://www.soprema.ch/files/resize/outside/50-50-group-1802-2x_1ebf1aaac45b72fd3f9bb0c1843e092a.webp')" }}></div>
                            Referenzen
                          </a>
                          <ul className="header-menu-submenu-list header-menu-submenu-list--lvl2" data-header-secondlvl-wrapper>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3 header-menu-submenu-element--back header-menu-submenu-element--top">
                              <button className="header-menu-submenu-back" data-header-back type="button">
                                Soprema
                              </button>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--head header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--head header-menu-submenu-link--lvl3" href="#">
                                Referenzen
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/soprema/referenzen/alle-referenzen" target="_self">
                                alle Referenzen
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/bitumendichtungsbahnen" target="_self">
                                Bitumendichtungsbahnen
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/kunststoffdichtungsbahnen_1" target="_self">
                                Kunststoffdichtungsbahnen
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/flussigkunststoff" target="_self">
                                Flüssigkunststoff
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/waermedaemmung" target="_self">
                                Wärmedämmung
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/begrunung" target="_self">
                                Begrünung
                              </a>
                            </li>
                            <li className="header-menu-submenu-element header-menu-submenu-element--lvl3">
                              <a className="header-menu-submenu-link header-menu-submenu-link--lvl3" href="https://www.soprema.ch/de/absturzsicherheit" target="_self">
                                Absturzsicherheit
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <button className="header-burger" data-header-burger type="button" aria-label="accessibility.menu.open">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </div>
      <div className="header-search" data-header-search>
        <button className="header-search-close" data-header-search-close type="button">
          <i className="ic ic-close"></i>
        </button>
        <div className="bannerv4 bannerv4--size-full-height bannerv4--search-oui bannerv4--image-cover">
          <div className="bannerv4-wrapper">
            <video className="bannerv4-video" playsInline muted loop autoPlay poster="https://www.soprema.ch/files/thumbnail-image2_7bb22fa15ff7c078d88381fc152c76fb.jpg">
              <source src="https://soprema-cms.s3.eu-west-3.amazonaws.com/site_8/306abafb1388b1413ed37b8d5a5ac6bd.mp4?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIATPX2NE5VDLG6MVAH%2F20230630%2Feu-west-3%2Fs3%2Faws4_request&amp;X-Amz-Date=20230630T090809Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=1200&amp;X-Amz-Signature=a89691e70f706870b2d2959f843e69187880f6e344aa5ef47c2d2269b222d4ff" type="video/mp4" />
            </video>
            <div className="bannerv4-container">
              <div className="bannerv4-content wysiwyg">
                <p className="title-lvl-4" style={{ textAlign: "center" }}>
                  &nbsp;
                </p>
                <p className="title-lvl-1" style={{ textAlign: "center" }}>
                  SO STARK.
                  <br />
                  SOPREMA.
                </p>
              </div>
              <div className="search-banner">
                <div className="search-banner-container">
                  <form className="search-banner-form" data-mods="autocomplete" method="GET" action="https://www.soprema.ch/de/search">
                    <div className="search-banner-input-wrapper">
                      <input className="search-banner-input" name="query" data-autocomplete-input type="text" aria-label="Nach Produkten, Marken oder Suchbegriffen suchen..." autoComplete="off" placeholder="Nach Produkten, Marken oder Suchbegriffen suchen..." />
                      <button className="search-banner-button" type="submit">
                        Finden
                      </button>
                    </div>
                    <div className="search-banner-results" data-autocomplete-wrapper></div>
                  </form>
                  <div className="search-banner-terms">
                    <a className="search-banner-terms-word" href="https://www.soprema.ch/de/gamme/abdichtung/bitumendichtungsbahnen">
                      Bitumendichtungsbahnen
                    </a>
                    <a className="search-banner-terms-word" href="https://www.soprema.ch/de/gamme/abdichtung/kunststoffdichtungsbahnen">
                      Kunststoffdichtungsbahnen
                    </a>
                    <a className="search-banner-terms-word" href="https://www.soprema.ch/de/fluessigkunststoff">
                      Flüssigkunststoffe
                    </a>
                    <a className="search-banner-terms-word" href="https://www.soprema.ch/de/gamme/daemmstoffe">
                      Dämmstoffe
                    </a>
                    <a className="search-banner-terms-word" href="https://www.soprema.ch/de/gamme/dachbegruenung">
                      Begrünung
                    </a>
                    <a className="search-banner-terms-word" href="https://www.soprema.ch/de/gamme/produkte-hoehensicherungssysteme">
                      Höhensicherungssysteme
                    </a>
                  </div>
                </div>
                <div className="search-banner-actions">
                  <a className="search-banner-actions-button" href="https://www.soprema.ch/de/sostark">
                    Gesamten Unternehmensfilm anschauen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CorporateHeader;
