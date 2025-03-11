import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  return (
    <Router>
      <AppLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/class-work/:classId" element={<Classwork />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/class-detail/:classId" element={<ClassDetail />} />
        <Route path="/english-communication" element={<Communication />} />
        <Route path="/web-dev-frontend" element={<Frontend />} />
        <Route path="/prof-development" element={<ProfDevelopment />} />
        <Route path="/wordpress" element={<WordPress />} />
        <Route path="/xwave-digital" element={<XwaveDigital />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;