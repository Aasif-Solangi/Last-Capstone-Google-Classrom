import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import AppLayout from "./components/app-layout/AppLayout";
import Dashboard from "./components/dash-board/Dashboard";
import People from './Tabs/people/People';
import Classwork from "./Tabs/class-work/Classwork";
import Stream from "./Tabs/stream/Stream";
import Home from "./components/home/Home";
import ClassDetail from "./components/class-detail/ClassDetail";

function App() {
  return (
    <Router>
      <AppLayout />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/people" element={<People />} />
        <Route path="/class-work" element={<Classwork />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/class-detail" element={<ClassDetail />} />
        <Route path="/home" element={<Home />} />

      </Routes>
      <Home />
    </Router>
  );
}

export default App;
