import { h, Fragment } from 'preact';
import { Link } from 'preact-router';

import Breadcrumb from '../sections/Breadcrumb';
import Title from '../sections/Title';
import Callout from '../sections/Callout';

const Pack = ({ pack, courses, setSelectedCourses }) => {
  const handleClick = () => {
    const selectedCourses = pack.items.map(item => {
      return courses.find(course => course.name === item.item);
    });
    setSelectedCourses(selectedCourses);
  };

  return (
    <div class="guides-element custom-guides-element span-4">
      <div class="small-tule small-tule--light small-tule--image-link">
        <Link href="/courses" class="small-tule-wrapper" onClick={handleClick}>
          <div class="small-tule-container">
            <div class="small-tule-content wysiwyg">
              <h3 class="small-tule-title">{pack.name}</h3>
              <ul>
                {pack.desc.map(desc => (
                  <li>{desc}</li>
                ))}
              </ul>
              <p class="small-tule-button small-tule--custom-button">&nbsp;</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const Packs = ({ packs, courses, setSelectedCourses }) => (
  <Fragment>
    <Breadcrumb links={[{ href: '/', text: 'Home' }, { text: 'Firmenkurse' }]} />

    <Title text="Firmenkurse" />

    <Callout />

    <div class="mega-row cms-row vertical-spacing-bottom">
      <div class="container container-medium">
        <div class="row">
          <div class="col col-sm-12">
            <div class="guides noresize" style="">
              <div class="guides-wrapper custom-guides-wrapper">
                {packs.map(pack => (
                  <Pack pack={pack} courses={courses} setSelectedCourses={setSelectedCourses} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Packs;
