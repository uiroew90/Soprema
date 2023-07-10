import { h } from "preact";
import { Link } from "preact-router";

import PageWrapper from "../PageWrapper";

const Pack = ({ pack, courses, setSelectedCourses }) => {
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
  };

  return (
    <div class="guides-element custom-guides-element span-4">
      <div class="small-tule small-tule--light small-tule--image-link">
        <Link href="/courses" class="small-tule-wrapper" onClick={handleClick} aria-label={`Select courses from ${pack.name}`}>
          <div class="small-tule-container">
            <div class="small-tule-content wysiwyg">
              <h3 class="small-tule-title">{pack.name}</h3>
              <ul>
                {pack.desc.map((desc) => (
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

const Packs = ({ packs, courses, setSelectedCourses }) => {
  const crumb = {
    home: { href: "/", text: "Home" },
    current: { text: "Firmenkurse" },
  };

  return (
    <PageWrapper hasCallout="true" breadcrumbLinks={[crumb.home, crumb.current]} titleText="Firmenkurse">
      <div class="mega-row cms-row vertical-spacing-bottom">
        <div class="container container-medium">
          <div class="row">
            <div class="col col-sm-12">
              <div class="guides noresize" style="">
                <div class="guides-wrapper custom-guides-wrapper">
                  {packs.map((pack) => (
                    <Pack key={pack.name} pack={pack} courses={courses} setSelectedCourses={setSelectedCourses} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Packs;
