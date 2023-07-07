import { h, Fragment } from 'preact';
import { Link } from 'preact-router';

import Breadcrumb from '../sections/Breadcrumb';
import Title from '../sections/Title';
import Callout from '../sections/Callout';

export default () => (
  <Fragment>
    <Breadcrumb links={[{ href: '/', text: 'Home' }, { text: 'Firmenkurse' }]} />

    <Title text="Firmenkurse" />

    <Callout />

    <div class="mega-row cms-row vertical-spacing-bottom">
      <div class="container container-medium">
        <div class="row">
          <div class="col col-sm-12">
            <div class="guides noresize" style="">
              <div class="guides-wrapper custom-guides-wrapper">
                <div class="guides-element custom-guides-element span-4">
                  <div class="small-tule small-tule--light small-tule--image-link">
                    <Link href="/courses" class="small-tule-wrapper">
                      <div class="small-tule-container">
                        <div class="small-tule-content wysiwyg">
                          <h3 class="small-tule-title">Flüssigkunststoffe</h3>
                          <ul>
                            <li>Nach Abschluss des Kurses ist jeder Teilnehmer in der Lage, den Untergrund zu beurteilen und die richtige Grundierung einzusetzen.</li>
                            <li>Nach Abschluss des Kurses ist jeder Teilnehmer in der Lage, Detailabdichtungen mit Flüssigkunststoff auszuführen.</li>
                            <li>Nach Abschluss des Kurses ist jeder Teilnehmer in der Lage, Detailabdichtungen und kleinere Flächenbeschichtungen mit Alsan PMMA selbstständig auszuführen.</li>
                            <li>Nach Abschluss des Kurses ist jeder Teilnehmer in der Lage, verschiedene dekorative Oberflächen mit Alsan PMMA Produkten zu gestalten.</li>
                          </ul>
                          <p class="small-tule-button small-tule--custom-button">&nbsp;</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div class="guides-element custom-guides-element span-4">
                  <div class="small-tule small-tule--light small-tule--image-link">
                    <Link href="/courses" class="small-tule-wrapper">
                      <div class="small-tule-container">
                        <div class="small-tule-content wysiwyg">
                          <h3 class="small-tule-title">Bituminös</h3>
                          <ul>
                            <li>Jede/r Teilnehmer/in lernt die Verlegerichtlinien der Bitumen Abdichtungen kennen und die wichtigsten Verarbeitungspunkte und Details selbstständig auszuführen.</li>
                            <li>Jede/r Teilnehmer/in lernt die Verlegerichtinien der verschiedenen Bewegungsfugenbänder kennen und die wichtigsten Verarbeitungspunkte und Details selbstständig auszuführen.</li>
                          </ul>
                          <p class="small-tule-button small-tule--custom-button">&nbsp;</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div class="guides-element custom-guides-element span-4">
                  <div class="small-tule small-tule--light small-tule--image-link">
                    <Link href="/courses" class="small-tule-wrapper">
                      <div class="small-tule-container">
                        <div class="small-tule-content wysiwyg">
                          <h3 class="small-tule-title">Höhensicherungssysteme</h3>
                          <ul>
                            <li>Vorschriftsgemässe und korrekte Montage von Grün und Soprasafe Höhensicherungen. Nach Abschluss der Schulung wird ein Zertifikat ausgestellt, welches den Teilnehmer berechtigt, die Grün- und Soprasafe-Systeme zu montieren.</li>
                            <li>Vorschriftsgemässe Planung von Höhensicherungen.</li>
                          </ul>
                          <p class="small-tule-button small-tule--custom-button">&nbsp;</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
