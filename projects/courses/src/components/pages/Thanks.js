import { h, Fragment } from 'preact';

import Breadcrumb from '../sections/Breadcrumb';
import Title from '../sections/Title';

export default () => (
  <Fragment>
    <Breadcrumb links={[{ href: '/', text: 'Home' }, { href: '/packs', text: 'Firmenkurse' }, { href: '/courses', text: 'Kursliste' }, { href: '/overview', text: 'Übersicht' }, { href: '/checkout', text: 'Formular' }, { text: 'Bestätigung' }]} />

    <Title text="Bestätigung" />

    <div class="mega-row cms-row vertical-spacing-bottom">
      <div class="container container-medium">
        <div class="row">
          <div class="col col-sm-12">
            <div class="text-element noresize">
              <h2>Danke für Ihre Anfrage!</h2>
              <p>Wir haben Ihre Anfrage erhalten und werden Sie in Kürze kontaktieren.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
