import React from "react";
import Contact from "./Contact/Contact";
import { Routes, Router, Route, Link, Navigate } from "react-router-dom";
import Layouts from "./../Layouts";
import "./Nav.css";
const LazyAbout = React.lazy(() => import("./Aboutus/AboutUs"));
const home = Layouts

export default function About() {
  return (
    <nav className="navMain">
      <div className="navStructure">
        <div className="navLinks">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="aboutus">معلومات عنا</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="Contact">اتصل بنا</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <Routes>
            <Route path="/" element={<Navigate to="home" />}></Route>
            <Route
              path="aboutus"
              element={
                <React.Suspense fallback="hi">
                  <LazyAbout />
                </React.Suspense>
              }
            />
            <Route path="Contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="ThemeLight"></div>
      </div>
    </nav>
  );
}
