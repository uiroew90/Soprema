import React from "react";

const Title = ({ text }) => (
  <div className="mega-row cms-row bg-grey-full vertical-spacing-bottom">
    <div className="container">
      <div className="row">
        <div className="col col-sm-12">
          <div className="text-element noresize">
            <h1 className="title-lvl-1">{text}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Title;
