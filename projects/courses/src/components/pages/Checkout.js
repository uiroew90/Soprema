import { h, Fragment } from 'preact';
import { Link } from 'preact-router';

import Breadcrumb from '../sections/Breadcrumb';
import Title from '../sections/Title';

export default () => (
  <Fragment>
    <Breadcrumb links={[{ href: '/', text: 'Home' }, { href: '/packs', text: 'Firmenkurse' }, { href: '/courses', text: 'Kursliste' }, { href: '/overview', text: 'Übersicht' }, { text: 'Formular' }]} />

    <Title text="Formular Firmenkurse" />

    <div class="mega-row cms-row vertical-spacing-bottom">
      <div class="container container-medium">
        <div class="row">
          <div class="col col-sm-12">
            <div class="text-element noresize">
              <h2>Kursübersicht</h2>
              <ul class="mini-overview list-none">
                <li>
                  <h4>Montage von Höhensicherung HSS Grün & Soprasafe</h4>
                  <p>"Comment comes here"</p>
                </li>
                <li>
                  <h4>Planung von Höhensicherungen</h4>
                </li>
              </ul>
              <p>Bitte füllen Sie das folgende Formular aus.</p>
            </div>
          </div>
          <div class="col col-sm-12">
            <form name="form-course-order" class="std-form mb-0">
              <div class="form-display-column">
                <h2 class="form-display-column-title">Kontaktdaten</h2>
                <div class="form-display-column-wrapper">
                  <div class="form-group form-group--type-text">
                    <div class="form-label-container">
                      <label class="control-label required" for="form-course-order_firma">
                        Firma
                      </label>
                    </div>
                    <input type="text" id="form-course-order_firma" name="form-course-order[firma]" required="required" class="form-control" />
                  </div>
                  <div class="form-group form-group--type-text">
                    <div class="form-label-container">
                      <label class="control-label required" for="form-course-order_name">
                        Name
                      </label>
                    </div>
                    <input type="text" id="form-course-order_name" name="form-course-order[name]" required="required" class="form-control" />
                  </div>
                  <div class="form-group form-group--type-text">
                    <div class="form-label-container">
                      <label class="control-label required" for="form-course-order_vorname">
                        Vorname
                      </label>
                    </div>
                    <input type="text" id="form-course-order_vorname" name="form-course-order[vorname]" required="required" class="form-control" />
                  </div>
                  <div class="form-group form-group--type-text">
                    <div class="form-label-container">
                      <label class="control-label" for="form-course-order_strasse">
                        Strasse/Nr.
                      </label>
                    </div>
                    <input type="text" id="form-course-order_strasse" name="form-course-order[strasse]" class="form-control" />
                  </div>
                  <div class="form-group form-group--type-text">
                    <div class="form-label-container">
                      <label class="control-label" for="form-course-order_plzort">
                        PLZ/Ort
                      </label>
                    </div>
                    <input type="text" id="form-course-order_plzort" name="form-course-order[plzort]" class="form-control" />
                  </div>
                  <div class="form-group form-group--type-text">
                    <div class="form-label-container">
                      <label class="control-label" for="form-course-order_telefon">
                        Telefon
                      </label>
                    </div>
                    <input type="text" id="form-course-order_telefon" name="form-course-order[telefon]" class="form-control" />
                  </div>
                  <div class="form-group form-group--type-text">
                    <div class="form-label-container">
                      <label class="control-label" for="form-course-order_fax">
                        Fax
                      </label>
                    </div>
                    <input type="text" id="form-course-order_fax" name="form-course-order[fax]" class="form-control" />
                  </div>
                  <div class="form-group form-group--type-text form-group--type-email">
                    <div class="form-label-container">
                      <label class="control-label required" for="form-course-order_email">
                        E-Mail
                      </label>
                    </div>
                    <input type="email" id="form-course-order_email" name="form-course-order[email]" required="required" class="form-control" />
                  </div>
                  <div class="form-group form-group--type-text form-group--type-textarea">
                    <div class="form-label-container">
                      <label class="control-label required" for="form-course-order_mitteilung">
                        Mitteilung
                      </label>
                    </div>
                    <textarea id="form-course-order_mitteilung" name="form-course-order[mitteilung]" required="required" class="form-control"></textarea>
                  </div>
                </div>
              </div>
              <p class="form-submit-group">
                <button type="submit" class="form-button btn btn-primary btn">
                  Senden
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
