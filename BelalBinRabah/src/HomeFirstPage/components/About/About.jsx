import React from "react";
import Contact from "./Contact/Contact";
import { Routes, Router, Route, Link } from "react-router-dom";
import "./About.css";
const LazyAbout = React.lazy(() => import("./About/AboutUs"));

export default function About() {
  return (
    <>
      <div>
        <h1>This is the home page</h1>
        <Link to='/'>Click to view our page</Link>
        <Link to="Contact">Wana Make a quick call📞🤙</Link>
      </div>
      <div>
        <Routes>
          <Route
            path='/'
        </Routes>
      </div>
    </>
  );
}
// import React from 'react'
// const LazyAbout = React.lazy(() => import('./About/About'))
// import {Routes, Router, Route, Link} from 'react-router-dom'
// import "./Comp1.css"

// export default function Comp1() {
//   return (
//     <>
//     <div>
//       <h1>This is the home page</h1>
//       <Link to="/">Click to view our about page</Link>
//       <Link to="Login">Click to view our contact page</Link>
//     </div>
//         <Routes>
//           <Route
//             path='/'
//             element={
//               <React.Suspense fallback="hi">
//                 <LazyAbout/>
//               </React.Suspense>
//             }/>
//           <Route path='Login' element={<Login/>}/>
//         </Routes>
//     </>
//   )
// }
