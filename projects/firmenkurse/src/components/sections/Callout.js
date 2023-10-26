import React from "react";
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation();

  return (
    <div className='mega-row cms-row'>
      <div className='container container-medium'>
        <div className='row'>
          <div className='col col-sm-8'>
            <div className='text-element noresize'>
              <h2>{t("callout.title")}</h2>
              <p>{t("callout.content")}</p>
            </div>
          </div>
          <div className='col col-sm-4'>
            <div className='push push--theme-green noresize'>
              <div
                className='push-wrapper'
                style={{
                  backgroundImage:
                    "url('https://www.soprema.ch/files/resize/outside/400-400-dl-2x_c54e0a3d392335451150669b08b66c66.webp')",
                }}>
                <div className='push-content wysiwyg'>
                  <p className='title-lvl-3'>{t("callout.assetName")}</p>
                  <p>
                    <a className='button' href={t("callout.buttonLink")} target='_blank' rel='noopener'>
                      {t("callout.buttonText")}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
