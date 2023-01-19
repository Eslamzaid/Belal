import React from "react";
import Contact from "./Contact/Contact";
import { Routes, Router, Route, Link } from "react-router-dom";
import "./Nav.css";
const LazyAbout = React.lazy(() => import("./Aboutus/AboutUs"));

export default function About() {
  return (
    <nav className="navMain">
      <div className="navStructure">
        <div className="navLinks">
          <Link to="/">معلومات عنا</Link>
          <Link to="Contact">اتصل بنا</Link>
        </div>
        <div className="">
          <Routes>
            <Route
              path="/"
              element={
                <React.Suspense fallback="hi">
                  <LazyAbout />
                </React.Suspense>
              }
            />
            <Route path="Contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="ThemeLight">
        </div>
      </div> 
    </nav>
  );
}
