import { h, render } from 'preact';
import { useState } from 'preact/hooks';
import { Router } from 'preact-router';
import Home from './components/pages/Home';
import Packs from './components/pages/Packs';
import Courses from './components/pages/Courses';
import Overview from './components/pages/Overview';
import Checkout from './components/pages/Checkout';
import Thanks from './components/pages/Thanks';

const App = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  return (
    <div id="app">
      <Router>
        <Home path="/" />
        <Packs path="/packs" setSelectedCourses={setSelectedCourses} />
        <Courses path="/courses" selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />
        <Overview path="/overview" selectedCourses={selectedCourses} />
        <Checkout path="/checkout" selectedCourses={selectedCourses} />
        <Thanks path="/thanks" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById('role-main'));
