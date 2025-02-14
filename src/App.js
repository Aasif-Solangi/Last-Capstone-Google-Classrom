import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Communication from './components/english-communication/Communication';
import InstructionsTabs from './components/instruction-tabs/InstructionTabs';
import StudentWork from './components/instruction-tabs/student-work/StudentWork';
import Instructions from './components/instruction-tabs/instructions/Instructions';
import ClassDetail from "./components/class-detail/ClassDetail";
import AppLayout from "./components/app-layout/AppLayout";
import Classwork from "./Tabs/class-work/Classwork";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import People from './Tabs/people/People';
import Stream from "./Tabs/stream/Stream";
import Home from './components/home/Home';
import PageNotFound from './components/page-not-found/PageNotFound';

function App() {
  return (
    <Router>
      <AppLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/class-work" element={<Classwork />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/class-detail/:id" element={<ClassDetail />} />
        <Route path="/instructionTabs" element={<InstructionsTabs />} />
        <Route path="/class-detail" element={<ClassDetail />} />
        <Route path="/student-work" element={<StudentWork />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="/english-communication" element={<Communication />} />
      </Routes>
    </Router>
  );
}

export default App;