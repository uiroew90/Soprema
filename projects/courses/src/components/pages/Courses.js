import { h, Fragment } from 'preact';
import { Link } from 'preact-router';

import Breadcrumb from '../sections/Breadcrumb';
import Title from '../sections/Title';
import Callout from '../sections/Callout';

export default () => (
  <Fragment>
    <Breadcrumb links={[{ href: '/', text: 'Home' }, { href: '/packs', text: 'Firmenkurse' }, { text: 'Kursliste' }]} />

    <Title text="Kursliste" />

    <Callout />

    <div class="mega-row cms-row vertical-spacing-bottom">
      <div class="container container-medium">
        <div class="row">
          <div class="col col-sm-12">
            <div class="accordion">
              <div class="accordion-main-wrapper">
                <div class="accordion-element" data-more-auto data-mods="show-more">
                  <div class="accordion-wrapper" data-more-group="collapse__Soprema-Bituminöse-Systeme" data-more-element="collapse_content__Soprema-Bituminöse-Systeme">
                    <button type="button" class="accordion-title text-uppercase" data-more-button aria-expanded="true" id="title__collapse__Soprema-Bituminöse-Systeme" aria-controls="accordion-1">
                      Soprema Bituminöse Systeme
                    </button>
                    <div class="accordion-container" data-more-container>
                      <div class="accordion-content wysiwyg" data-more-content aria-labelledby="title__collapse__Soprema-Bituminöse-Systeme">
                        <div class="collapse-content-wrapper">
                          <button class="custom-item-toggle flush">
                            <div class="custom-item-toggle__icon"></div>
                            <h3>Bitumen Praxis Basis Abdichtungen im Bereich Flachdach</h3>
                            <p>Jede/r Teilnehmer/in lernt die Verlegerichtlinien der Bitumen Abdichtungen kennen und die wichtigsten Verarbeitungspunkte und Details selbstständig auszuführen.</p>
                          </button>

                          <button class="custom-item-toggle flush">
                            <div class="custom-item-toggle__icon"></div>
                            <h3>Bewegungsfugenbänder</h3>
                            <p>Jede/r Teilnehmer/in lernt die Verlegerichtinien der verschiedenen Bewegungsfugenbänder kennen und die wichtigsten Verarbeitungspunkte und Details selbstständig auszuführen.</p>
                          </button>

                          <button class="custom-item-toggle flush">
                            <div class="custom-item-toggle__icon"></div>
                            <h3>Bitumen Praxis Plus</h3>
                            <p>Jede/r Teilnehmer/in lernt die Verlegerichtlinien der neuzeitlichen Abdichtungsbahnen und die wichtigsten Verarbeitungstechniken und Details selbstständig auszuführen.</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-element" data-more-auto data-mods="show-more">
                  <div class="accordion-wrapper" data-more-group="collapse__Flag-Kunststoff-Dichtungsbahnen" data-more-element="collapse_content__Flag-Kunststoff-Dichtungsbahnen">
                    <button type="button" class="accordion-title text-uppercase" data-more-button aria-expanded="true" id="title__collapse__Flag-Kunststoff-Dichtungsbahnen" aria-controls="accordion-1">
                      Flag Kunststoff Dichtungsbahnen
                    </button>
                    <div class="accordion-container" data-more-container>
                      <div class="accordion-content wysiwyg" data-more-content aria-labelledby="title__collapse__Flag-Kunststoff-Dichtungsbahnen">
                        <div class="collapse-content-wrapper">
                          <button class="custom-item-toggle flush">
                            <div class="custom-item-toggle__icon"></div>
                            <h3>Flag Praxis Basis Abdichtungen im Bereich Flachdach</h3>
                            <p>Jeder Teilnehmer lernt die Verlegerichtlinien der FLAGON Abdichtungen kennen und die wichtigsten Verarbeitungspunkte und Details selbständig auszuführen.</p>
                          </button>

                          <button class="custom-item-toggle flush">
                            <div class="custom-item-toggle__icon"></div>
                            <h3>Flag Praxis Plus</h3>
                            <p>Jede/r Teilnehmer/in lernt die Verlegerichtlinien der neuzeitlichen TPO Kunststoffabdichtungen kennen, die wichtigsten Verarbeitungspunkte und Details selbständig auszuführen.</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-element" data-more-auto data-mods="show-more">
                  <div class="accordion-wrapper" data-more-group="collapse__Alsan-Flüssigkunststoffe" data-more-element="collapse_content__Alsan-Flüssigkunststoffe">
                    <button type="button" class="accordion-title" data-more-button aria-expanded="true" id="title__collapse__Alsan-Flüssigkunststoffe" aria-controls="accordion-1">
                      Alsan Flüssigkunststoffe
                    </button>
                    <div class="accordion-container" data-more-container>
                      <div class="accordion-content wysiwyg" data-more-content aria-labelledby="title__collapse__Alsan-Flüssigkunststoffe">
                        <div class="collapse-content-wrapper">
                          <button class="custom-item-toggle flush">
                            <div class="custom-item-toggle__icon"></div>
                            <h3>Untergrundvorbereitung und Grundierung</h3>
                            <p>Nach Abschluss des Kurses ist jeder Teilnehmer in der Lage, den Untergrund zu beurteilen und die richtige Grundierung einzusetzen.</p>
                          </button>

                          <button class="custom-item-toggle flush">
                            <div class="custom-item-toggle__icon"></div>
                            <h3>Dichte An-/ Abschlüsse und Detaillösungen</h3>
                            <p>Nach Abschluss des Kurses ist jeder Teilnehmer in der Lage, Detailabdichtungen mit Flüssigkunststoff auszuführen.</p>
                          </button>

                          <button class="custom-item-toggle flush">
                            <div class="custom-item-toggle__icon"></div>
                            <h3>Flächenabdichtung und Beschichtung</h3>
                            <p>Nach Abschluss des Kurses ist jeder Teilnehmer in der Lage, Detailabdichtungen und kleinere Flächenbeschichtungen mit Alsan PMMA selbstständig auszuführen.</p>
                          </button>

                          <button class="custom-item-toggle flush">
                            <div class="custom-item-toggle__icon"></div>
                            <h3>Oberflächengestaltung</h3>
                            <p>Nach Abschluss des Kurses ist jeder Teilnehmer in der Lage, verschiedene dekorative Oberflächen mit Alsan PMMA Produkten zu gestalten.</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-element" data-more-auto data-mods="show-more">
                  <div class="accordion-wrapper" data-more-group="collapse__Prenotec-Flüssigkunststoffe" data-more-element="collapse_content__Prenotec-Flüssigkunststoffe">
                    <button type="button" class="accordion-title text-uppercase" data-more-button aria-expanded="true" id="title__collapse__Prenotec-Flüssigkunststoffe" aria-controls="accordion-1">
                      Prenotec Flüssigkunststoffe
                    </button>
                    <div class="accordion-container" data-more-container>
                      <div class="accordion-content wysiwyg" data-more-content aria-labelledby="title__collapse__Prenotec-Flüssigkunststoffe">
                        <div class="collapse-content-wrapper">
                          <button class="custom-item-toggle flush">
                            <div class="custom-item-toggle__icon"></div>
                            <h3>Dichte An-/ Abschlüsse und Detaillösungen</h3>
                            <p>Das praktische Verarbeiten mit vielen Tipps und Tricks für ein schnelles und sicheres Abdichten.</p>
                          </button>

                          <button class="custom-item-toggle flush">
                            <div class="custom-item-toggle__icon"></div>
                            <h3>Flächenabdichtung und dekorative Beschichtung</h3>
                            <p>Teilnehmer, die diesen Kurs besuchen, sind in der Lage sämtliche Balkonbeschichtungen und Terrassenabdichtungen selbstständig durchzuführen.</p>
                          </button>

                          <button class="custom-item-toggle flush">
                            <div class="custom-item-toggle__icon"></div>
                            <h3>Flächenabdichtung mit Prenopur PMMA</h3>
                            <p>Die Teilnehmer erhalten hilfreiche Tipps und Tricks für die fachgerechte Ausführung. Nach Abschluss des Kurses ist jeder Teilnehmer in der Lage die verschiedenen PMMA Systeme einzubauen.</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-element" data-more-auto data-mods="show-more">
                  <div class="accordion-wrapper" data-more-group="collapse__Höhensicherungen-HSS" data-more-element="collapse_content__Höhensicherungen-HSS">
                    <button type="button" class="accordion-title text-uppercase" data-more-button aria-expanded="true" id="title__collapse__Höhensicherungen-HSS" aria-controls="accordion-1">
                      Höhensicherungen HSS
                    </button>
                    <div class="accordion-container" data-more-container>
                      <div class="accordion-content wysiwyg" data-more-content aria-labelledby="title__collapse__Höhensicherungen-HSS">
                        <div class="collapse-content-wrapper">
                          <button class="custom-item-toggle flush">
                            <div class="custom-item-toggle__icon"></div>
                            <h3>Montage von Höhensicherung HSS Grün & Soprasafe</h3>
                            <p>Vorschriftsgemässe und korrekte Montage von Grün und Soprasafe Höhensicherungen. Nach Abschluss der Schulung wird ein Zertifikat ausgestellt, welches den Teilnehmer berechtigt, die Grün- und Soprasafe-Systeme zu montieren.</p>
                          </button>

                          <button class="custom-item-toggle flush">
                            <div class="custom-item-toggle__icon"></div>
                            <h3>Planung von Höhensicherungen</h3>
                            <p>Vorschriftsgemässe Planung von Höhensicherungen.</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-sm-12">
            <div class="wysiwyg text-right">
              <Link href="/overview" class="button">
                Kurse hinzufügen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
