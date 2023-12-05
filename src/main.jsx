/*import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home2.jsx";
import { About } from "./components/About.jsx";
import { Tours } from "./components/Tours.jsx";
import { Tour } from "./components/Tour.jsx";
import { Contact } from "./components/Contact.jsx";


const router = createBrowserRouter([
  {
    path: "/traveller/",
    element: <App />,
    children: [
      {
        path: "/traveller/",
        element: <Home />,
      },
      {
        path: "/traveller/about",
        element: <About />,
      },
      {
        path: "/traveller/tours",
        element: <Tours />,
      },
      {
        path: "/traveller/tour/:id",
        element: <Tour />,
      },
      {
        path: "/traveller/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />
 
);