import React from "react";

const Callout = () => (
  <div className="mega-row cms-row">
    <div className="container container-medium">
      <div className="row">
        <div className="col col-sm-8">
          <div className="text-element noresize">
            <h2>Kursangebote</h2>
            <p>Sie sind interessiert an einem Kurs für Ihre Mitarbeitenden?</p>
            <p>Wählen Sie mit wenigen Klicks aus, welche Kombination aus Kursen für Sie und Ihr Unternehmen am Meisten Sinn machen.</p>
          </div>
        </div>
        <div className="col col-sm-4">
          <div className="push push--theme-green noresize">
            <div className="push-wrapper" style={{ backgroundImage: "url('https://www.soprema.ch/files/resize/outside/400-400-dl-2x_c54e0a3d392335451150669b08b66c66.webp')" }}>
              <div className="push-content wysiwyg">
                <p className="title-lvl-3">KURSBROSCHÜRE 2023</p>
                <p>
                  <a className="button" href="https://www.soprema.ch/files/2023-schulungsbroschuere-de_d71c998ecd7145324fe1b919058924d0.pdf" target="_blank" rel="noopener">
                    Herunterladen
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

export default Callout;
