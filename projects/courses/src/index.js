import React, { StrictMode, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import CorporateHeader from "./components/sections/CorporateHeader";

// Routes
import Home from "./components/pages/Home";
import Packs from "./components/pages/Packs";
import Courses from "./components/pages/Courses";
import Overview from "./components/pages/Overview";
import Checkout from "./components/pages/Checkout";
import Thanks from "./components/pages/Thanks";

// Internationalization
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import de from "./locales/de";
import en from "./locales/en";
import fr from "./locales/fr";
import it from "./locales/it";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: de,
      en: en,
      fr: fr,
      it: it,
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

const App = () => {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

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
      <CorporateHeader />
      <main className="container-fluid page-content-cms" id="role-main">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packs" element={<Packs packs={packs} courses={courses} setSelectedCourses={setSelectedCourses} />} />
            <Route path="/courses" element={<Courses courses={courses} selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />} />
            <Route path="/overview" element={<Overview selectedCourses={selectedCourses} handleRemoveCourse={handleRemoveCourse} handleCourseComment={handleCourseComment} />} />
            <Route path="/checkout" element={<Checkout selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
