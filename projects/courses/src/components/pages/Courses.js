import { h, Fragment } from 'preact';
import { Link } from 'preact-router';

import Breadcrumb from '../sections/Breadcrumb';
import Title from '../sections/Title';
import Callout from '../sections/Callout';

export default () => (
  <Fragment>
    <Breadcrumb links={[{ href: '/', text: 'Home' }, { href: '/packs', text: 'Firmenkurse' }, { text: 'Kursliste' }]} />

    <Title text="Kursliste" />

    <Callout />
  </Fragment>
);
