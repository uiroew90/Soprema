import { h } from 'preact';
import { Link } from 'preact-router';
import { useState, useRef, useEffect } from 'preact/hooks';
import Breadcrumb from '../sections/Breadcrumb';
import Title from '../sections/Title';
import Callout from '../sections/Callout';

const Course = ({ course, selected, toggleCourse }) => (
  <button class={`custom-item-toggle flush ${selected ? 'is-active' : ''}`} onClick={() => toggleCourse(course)} aria-label={`Toggle selection for ${course.name}`}>
    <div class="custom-item-toggle__icon"></div>
    <h3>{course.name}</h3>
    <p>{course.desc}</p>
  </button>
);

const Category = ({ category, courses, selectedCourses, toggleCourse }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.scrollHeight);
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setHeight(!isOpen ? ref.current.scrollHeight : 0);
  };

  const countSelectedCourses = () => {
    return courses.filter(course => selectedCourses.includes(course)).length;
  };

  return (
    <div class={`accordion-element ${isOpen ? 'is-active' : ''}`}>
      <div class="accordion-wrapper">
        <button type="button" class="accordion-title text-uppercase" aria-expanded={isOpen} id={`title__collapse__${category}`} aria-controls="accordion-1" onClick={toggleOpen}>
          {category}{' '}
          <span class="active-count">
            ({countSelectedCourses()} / {courses.length})
          </span>
        </button>
        <div class="accordion-container" style={{ height: `${height}px` }}>
          <div class="accordion-content wysiwyg" aria-labelledby={`title__collapse__${category}`} ref={ref}>
            <div class="collapse-content-wrapper">
              {courses.map(course => (
                <Course key={course.name} course={course} selected={selectedCourses.includes(course)} toggleCourse={toggleCourse} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Courses = ({ courses, selectedCourses, setSelectedCourses }) => {
  const categories = courses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  const toggleCourse = course => {
    if (!selectedCourses.includes(course)) {
      console.error(`Course ${course.name} not found in selected courses`);
      return;
    }
    setSelectedCourses(selectedCourses.filter(c => c !== course));
  };

  return (
    <div>
      <Breadcrumb links={[{ href: '/', text: 'Home' }, { href: '/packs', text: 'Firmenkurse' }, { text: 'Kursliste' }]} />
      <Title text="Kursliste" />
      <Callout />
      <div class="mega-row cms-row vertical-spacing-bottom">
        <div class="container container-medium">
          <div class="row">
            <div class="col col-sm-12">
              <div class="accordion">
                <div class="accordion-main-wrapper">
                  {Object.entries(categories).map(([category, courses]) => (
                    <Category key={category} category={category} courses={courses} selectedCourses={selectedCourses} toggleCourse={toggleCourse} />
                  ))}
                </div>
              </div>
            </div>
            <div class="col col-sm-12">
              <div class="wysiwyg text-right">
                <Link href="/overview" class="button">
                  Kurse hinzufügen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
