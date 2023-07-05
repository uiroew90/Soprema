import { h, Fragment } from 'preact';
import { Link } from 'preact-router';
import { useEffect, useState } from 'preact/hooks';

import Breadcrumb from '../sections/Breadcrumb';
import Title from '../sections/Title';
import Callout from '../sections/Callout';

export default () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/Demodia/Soprema/projects/courses/data/courses.json')
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  return (
    <Fragment>
      <Breadcrumb links={[{ href: '/', text: 'Home' }, { href: '/packs', text: 'Firmenkurse' }, { text: 'Kursliste' }]} />

      <Title text="Kursliste" />

      <Callout />

      {/* Render courses here using the `courses` state variable */}
    </Fragment>
  );
};
