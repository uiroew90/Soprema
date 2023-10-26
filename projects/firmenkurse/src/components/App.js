import React, { StrictMode, useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { LanguageProvider } from "../providers/LanguageContext";

import CorporateHeader from "./sections/CorporateHeader";
import CorporateFooter from "./sections/CorporateFooter";

import Home from "./pages/Home";
import Packs from "./pages/Packs";
import Courses from "./pages/Courses";
import Overview from "./pages/Overview";
import Checkout from "./pages/Checkout";
import Thanks from "./pages/Thanks";

import i18n from "../utils/i18nSetup";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hash, setHash] = useState(window.location.hash);
  const [courses, setCourses] = useState([]);
  const [packs, setPacks] = useState([]);

  // Initialize selectedCourses with IDs from local storage
  const [selectedCourses, setSelectedCourses] = useState(() => {
    const savedCourses = localStorage.getItem("selectedCourses");
    return savedCourses ? JSON.parse(savedCourses) : [];
  });

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("selectedCourses", JSON.stringify(selectedCourses));
    } catch (error) {
      console.error("Could not set item in localStorage: ", error);
    }
  }, [selectedCourses]);

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLanguage(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/Demodia/Soprema@main/projects/firmenkurse/assets/data/courses/${currentLanguage}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data.filter((course) => course.enable));

        // Map the placeholder IDs to actual course objects
        if (selectedCourses.length > 0) {
          const updatedCourses = selectedCourses.map((selected) => {
            const found = data.find((course) => course.id === selected.id);
            return found ? { ...found, comment: selected.comment } : selected;
          });
          setSelectedCourses(updatedCourses);
        }
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        // TODO: Handle the error in UI
      });

    fetch(`https://cdn.jsdelivr.net/gh/Demodia/Soprema@main/projects/firmenkurse/assets/data/packs/${currentLanguage}.json`)
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

    setIsLoading(false);
  }, [currentLanguage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleRemoveCourse = (courseToRemove) => {
    setSelectedCourses(selectedCourses.filter((course) => course.id !== courseToRemove.id));
  };

  const handleCourseComment = (courseToComment, comment) => {
    const updatedCourses = selectedCourses.map((course) => {
      if (course.name === courseToComment.name && course.category === courseToComment.category) {
        return { ...course, comment };
      } else {
        return course;
      }
    });
    setSelectedCourses(updatedCourses);
    localStorage.setItem("selectedCourses", JSON.stringify(updatedCourses));
  };

  return (
    <StrictMode>
      <LanguageProvider>
        <CorporateHeader />
        <main className="container-fluid page-content-cms" id="role-main">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/packs" element={<Packs packs={packs} courses={courses} setSelectedCourses={setSelectedCourses} />} />
              <Route path="/courses" element={<Courses courses={courses} selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />} />
              <Route path="/overview" element={<Overview selectedCourses={selectedCourses} handleRemoveCourse={handleRemoveCourse} handleCourseComment={handleCourseComment} />} />
              <Route path="/checkout" element={<Checkout selectedCourses={selectedCourses} />} />
              <Route path="/thanks" element={<Thanks />} />
            </Routes>
          </Router>
        </main>
        <CorporateFooter />
      </LanguageProvider>
    </StrictMode>
  );
};

export default App;
