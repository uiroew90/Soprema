import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default ({ links }) => (
  <div className='breadcrumb'>
    <div className='breadcrumb-wrapper'>
      <p className='breadcrumb-element'>
        {links.map((link, index) => (
          <Fragment key={index}>
            {link.href ? <Link to={link.href}>{link.text}</Link> : <span className='active'>{link.text}</span>}
            {index < links.length - 1 && <span>&nbsp;&gt;&nbsp;</span>}
          </Fragment>
        ))}
      </p>
    </div>
  </div>
);
