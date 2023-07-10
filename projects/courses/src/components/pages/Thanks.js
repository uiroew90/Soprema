import { h } from 'preact';

import PageWrapper from '../PageWrapper';

export default () => {
  const crumb = {
    home: { href: '/', text: 'Home' },
    packs: { href: '/packs', text: 'Firmenkurse' },
    courses: { href: '/courses', text: 'Kursliste' },
    overview: { href: '/overview', text: 'Übersicht' },
    checkout: { href: '/checkout', text: 'Formular' },
    current: { text: 'Bestätigung' },
  };

  return (
    <PageWrapper breadcrumbLinks={[crumb.home, crumb.packs, crumb.courses, crumb.overview, crumb.checkout, crumb.current]} titleText="Bestätigung">
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
    </PageWrapper>
  );
};
