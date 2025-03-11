import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Communication from "./components/classes/english-communication/Communication";
import Frontend from "./components/classes/web-dev-frontend/Frontend";
import ProfDevelopment from "./components/classes/prof-development/ProfDevelopment";
import WordPress from "./components/classes/wordpress/WordPress";
import PageNotFound from "./components/page-not-found/PageNotFound";
import XwaveDigital from './components/classes/xwave-digital/XwaveDigital';
import ClassDetail from "./components/class-detail/ClassDetail";
import AppLayout from "./components/app-layout/AppLayout";
import Classwork from "./Tabs/class-work/Classwork";
import People from "./Tabs/people/People";
import Stream from "./Tabs/stream/Stream";
import Home from "./components/home/Home";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout><Outlet /></AppLayout>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/people",
          element: <People />
        },
        {
          path: "/stream",
          element: <Stream />
        },
        {
          path: "class-work/:classId",
          element: <Classwork />
        },
        {
          path: "/class-detail/:classId",
          element: <ClassDetail />
        },
        {
          path: "/english-communication",
          element: <Communication />
        },
        {
          path: "/web-dev-frontend",
          element: <Frontend />
        },
        {
          path: "/prof-development",
          element: <ProfDevelopment />
        },
        {
          path: "/wordpress",
          element: <WordPress />
        },
        {
          path: "/xwave-digital",
          element: <XwaveDigital />
        },
        {
          path: "*",
          element: <PageNotFound />
        }
      ]
    }
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;