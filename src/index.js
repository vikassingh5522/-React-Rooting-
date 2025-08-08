import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';

import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import GitHub from './component/GitHub/GitHub';
import User from './component/User/User';
import { createRoutesFromElements, Route } from 'react-router-dom';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       { index: true, element: <Home /> },   
//       { path: 'about', element: <About /> }, 
//       { path: 'contact', element: <Contact /> }, 
//       { path: 'gitHub', element: <GitHub /> }, 
//     ],
//   },
// ]);

// ---- another way to define routes ----

const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route 
      // loader is used to fetch data before rendering the component
      // this is useful for data fetching in server-side rendering or static site generation
      // here we are fetching data from GitHub API
      loader={() => {
        return fetch('https://api.github.com/users/vikassingh5522')
          .then(response => response.json())
          .catch(error => console.error('Error fetching GitHub data:', error));
      }}
      // this is used to pass data to the component
      path="gitHub" 
      element={<GitHub />} />
       <Route path="user/:userid" element={<User />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
