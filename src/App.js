import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstructionsTabs from './components/instruction-tabs/InstructionTabs';
import StudentWork from './components/instruction-tabs/student-work/StudentWork';
import Instructions from './components/instruction-tabs/instructions/Instructions';
import ClassDetail from "./components/class-detail/ClassDetail";
import AppLayout from "./components/app-layout/AppLayout";
import Classwork from "./Tabs/class-work/Classwork";
import People from './Tabs/people/People';
import Stream from "./Tabs/stream/Stream";
import Home from './components/home/Home';
import Communication from './components/classes/english-communication/Communication';
import Frontend from './components/classes/web-dev-frontend/Frontend';
import ProfDevelopment from './components/classes/prof-development/ProfDevelopment';
import WordPress from './components/classes/wordpress/WordPress';
import XwaveDigital from './components/classes/xwave-digital/XwaveDigital';
import PageNotFound from './components/page-not-found/PageNotFound';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <Router>
      <AppLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/class-work" element={<Classwork />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/class-detail/:classId" element={<ClassDetail />} />
        <Route path="/instructionTabs" element={<InstructionsTabs />} />
        <Route path="/student-work" element={<StudentWork />} />
        <Route path="/instructions" element={<Instructions />} />
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
