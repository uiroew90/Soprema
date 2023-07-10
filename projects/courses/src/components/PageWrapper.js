import { h, Fragment } from 'preact';
import Breadcrumb from './sections/Breadcrumb';
import Title from './sections/Title';
import Callout from './sections/Callout';

const PageWrapper = ({ hasCallout = 'false', breadcrumbLinks, titleText, children }) => (
  <Fragment>
    <Breadcrumb links={breadcrumbLinks} />
    <Title text={titleText} />
    {hasCallout === 'true' && <Callout />}
    {children}
  </Fragment>
);

export default PageWrapper;
