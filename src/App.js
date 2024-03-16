import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarHome from './components/NavBar/navbarHome';
import NavBarLoginRegister from './components/NavBar/navbarLoginRegister';
import CoverPage from './components/Homepage/cover';
import NavBarReal from './components/NavBar/navbarReal';
import Course from './components/education/course';
import CourseDetail from './components/education/courseDetails';
import About from './components/about/about';
import Login from './components/Login/login';
import Register from './components/Register/register';

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

<Route
          path="/about"
          element={
            <>
              <NavBarReal />
              <About />
            </>
          }
        />  

<Route
          path="/login"
          element={
            <>
              <NavBarLoginRegister />
              <Login />
            </>
          }
        /> 

<Route
          path="/register"
          element={
            <>
              <NavBarLoginRegister />
              <Register />
            </>
          }
        /> 

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
