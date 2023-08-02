import React from "react";
import { useTranslation } from "react-i18next";

import RouteWrapper from "../RouteWrapper";

export default () => {
  const { t } = useTranslation();

  const crumb = {
    home: { href: "/", text: t("breadcrumbs.home") },
    packs: { href: "/packs", text: t("breadcrumbs.packs") },
    courses: { href: "/courses", text: t("breadcrumbs.courses") },
    overview: { href: "/overview", text: t("breadcrumbs.overview") },
    checkout: { href: "/checkout", text: t("breadcrumbs.checkout") },
    current: { text: t("breadcrumbs.thanks") },
  };

  return (
    <RouteWrapper
      breadcrumbLinks={[crumb.home, crumb.packs, crumb.courses, crumb.overview, crumb.checkout, crumb.current]}
      titleText={t("routeThanks.title")}>
      <div className='mega-row cms-row vertical-spacing-bottom'>
        <div className='container container-medium'>
          <div className='row'>
            <div className='col col-sm-12'>
              <div className='text-element noresize'>
                <h2>{t("routeThanks.header")}</h2>
                <p>{t("routeThanks.message")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RouteWrapper>
  );
};
