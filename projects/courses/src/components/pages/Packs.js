import { h, Fragment } from 'preact';
import { Link } from 'preact-router';
import { useEffect, useState } from 'preact/hooks';

import Breadcrumb from '../sections/Breadcrumb';
import Title from '../sections/Title';
import Callout from '../sections/Callout';

export default () => {
  const [packs, setPacks] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/Demodia/Soprema/projects/courses/data/packs.json')
      .then(response => response.json())
      .then(data => setPacks(data));
  }, []);

  return (
    <Fragment>
      <Breadcrumb links={[{ href: '/', text: 'Home' }, { text: 'Firmenkurse' }]} />

      <Title text="Firmenkurse" />

      <Callout />

      {/* Render packs here using the `packs` state variable */}
    </Fragment>
  );
};
