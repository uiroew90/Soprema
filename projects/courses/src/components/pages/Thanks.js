import React from "react";

import RouteWrapper from "../RouteWrapper";

const crumb = {
  home: { href: "/", text: "Home" },
  packs: { href: "/packs", text: "Firmenkurse" },
  courses: { href: "/courses", text: "Kursliste" },
  overview: { href: "/overview", text: "Übersicht" },
  checkout: { href: "/checkout", text: "Formular" },
  current: { text: "Bestätigung" },
};

export default () => (
  <RouteWrapper
    breadcrumbLinks={[crumb.home, crumb.packs, crumb.courses, crumb.overview, crumb.checkout, crumb.current]}
    titleText='Bestätigung'>
    <div className='mega-row cms-row vertical-spacing-bottom'>
      <div className='container container-medium'>
        <div className='row'>
          <div className='col col-sm-12'>
            <div className='text-element noresize'>
              <h2>Danke für Ihre Anfrage!</h2>
              <p>Wir haben Ihre Anfrage erhalten und werden Sie in Kürze kontaktieren.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </RouteWrapper>
);
