import React from "react";
import { Link, useNavigate } from "react-router-dom";

import RouteWrapper from "../RouteWrapper";

const Pack = ({ pack, courses, setSelectedCourses }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const selectedCourses = pack.items
      .map((item) => {
        const matchingCourse = courses.find((course) => course.name === item.item);
        if (!matchingCourse) {
          console.error(`No course found matching item ${item.item} in pack ${pack.name}`);
        }
        return matchingCourse;
      })
      .filter(Boolean);
    setSelectedCourses(selectedCourses);

    // Navigate to the courses page
    navigate("/courses");
  };

  return (
    <div className='guides-element custom-guides-element span-4'>
      <div className='small-tule small-tule--light small-tule--image-link'>
        <Link
          to='/courses'
          className='small-tule-wrapper'
          onClick={handleClick}
          aria-label={`Select courses from ${pack.name}`}>
          <div className='small-tule-container'>
            <div className='small-tule-content wysiwyg'>
              <h3 className='small-tule-title'>{pack.name}</h3>
              <ul>
                {pack.desc.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <p className='small-tule-button small-tule--custom-button'>&nbsp;</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const crumb = {
  home: { href: "/", text: "Home" },
  current: { text: "Firmenkurse" },
};

export default ({ packs, courses, setSelectedCourses }) => (
  <RouteWrapper hasCallout='true' breadcrumbLinks={[crumb.home, crumb.current]} titleText='Firmenkurse'>
    <div className='mega-row cms-row vertical-spacing-bottom'>
      <div className='container container-medium'>
        <div className='row'>
          <div className='col col-sm-12'>
            <div className='guides noresize'>
              <div className='guides-wrapper custom-guides-wrapper'>
                {packs.map((pack) => (
                  <Pack key={pack.name} pack={pack} courses={courses} setSelectedCourses={setSelectedCourses} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </RouteWrapper>
);
