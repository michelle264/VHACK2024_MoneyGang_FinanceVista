import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarHome from './components/NavBar/navbarHome';
import CoverPage from './components/Homepage/cover';
import NavBarReal from './components/NavBar/navbarReal';
import Course from './components/education/course';
import CourseDetail from './components/education/courseDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavbarHome />
              <CoverPage />
            </>
          }
        />

        <Route
          path="/course"
          element={
            <>
              <NavBarReal />
              <Course />
            </>
          }
        />  

<Route
          path="/details"
          element={
            <>
              <NavBarReal />
              <CourseDetail />
            </>
          }
        />  

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
