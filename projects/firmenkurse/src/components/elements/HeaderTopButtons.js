import React from "react";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./LanguageSwitcher";

export default () => {
  const { t } = useTranslation();

  return (
    <ul className="header-top-menu" data-header-nav="">
      <LanguageSwitcher />
    </ul>
  );
};
