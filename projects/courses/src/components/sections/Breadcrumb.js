import { h, Fragment } from 'preact';
import { Link } from 'preact-router';

export default ({ links }) => (
  <div class="breadcrumb">
    <div class="breadcrumb-wrapper">
      <p class="breadcrumb-element">
        {links.map((link, index) => (
          <Fragment key={index}>
            {link.href ? <Link href={link.href}>{link.text}</Link> : <span class="active">{link.text}</span>}
            {index < links.length - 1 && <span>&nbsp;&gt;&nbsp;</span>}
          </Fragment>
        ))}
      </p>
    </div>
  </div>
);
