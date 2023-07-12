import { h, render } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Router } from "preact-router";

import AsyncComponent from "./components/AsyncComponent";

const AsyncHome = AsyncComponent(() => import("./components/pages/Home"));
const AsyncPacks = AsyncComponent(() => import("./components/pages/Packs"));
const AsyncCourses = AsyncComponent(() => import("./components/pages/Courses"));
const AsyncOverview = AsyncComponent(() => import("./components/pages/Overview"));
const AsyncCheckout = AsyncComponent(() => import("./components/pages/Checkout"));
const AsyncThanks = AsyncComponent(() => import("./components/pages/Thanks"));

const App = () => {
  const [courses, setCourses] = useState([]);
  const [packs, setPacks] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState(() => {
    const savedCourses = localStorage.getItem("selectedCourses");
    return savedCourses ? JSON.parse(savedCourses) : [];
  });

  useEffect(() => {
    localStorage.setItem("selectedCourses", JSON.stringify(selectedCourses));
  }, [selectedCourses]);

  const handleRemoveCourse = (courseToRemove) => {
    setSelectedCourses(selectedCourses.filter((course) => course.name !== courseToRemove.name || course.category !== courseToRemove.category));
  };

  const handleCourseComment = (courseToComment, comment) => {
    setSelectedCourses(
      selectedCourses.map((course) => {
        if (course.name === courseToComment.name && course.category === courseToComment.category) {
          return { ...course, comment };
        } else {
          return course;
        }
      })
    );
  };

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/gh/Demodia/Soprema/projects/courses/data/courses.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setCourses(data.filter((course) => course.enable)))
      .catch((error) => {
        console.error("Error fetching courses:", error);
        // TODO: Handle the error in UI
      });

    fetch("https://cdn.jsdelivr.net/gh/Demodia/Soprema/projects/courses/data/packs.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setPacks(data))
      .catch((error) => {
        console.error("Error fetching packs:", error);
        // TODO: Handle the error in UI
      });
  }, []);

  return (
    <div id="app">
      <Router url={window.location.pathname}>
        <AsyncHome path="/" />
        <AsyncPacks path="/packs" packs={packs} courses={courses} setSelectedCourses={setSelectedCourses} />
        <AsyncCourses path="/courses" courses={courses} selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />
        <AsyncOverview path="/overview" selectedCourses={selectedCourses} handleRemoveCourse={handleRemoveCourse} handleCourseComment={handleCourseComment} />
        <AsyncCheckout path="/checkout" selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />
        <AsyncThanks path="/thanks" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("role-main"));
