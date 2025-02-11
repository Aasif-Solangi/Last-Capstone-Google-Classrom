import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AppLayout from "./components/app-layout/AppLayout";
import People from './Tabs/people/People';
import Classwork from "./Tabs/class-work/Classwork";
import Stream from "./Tabs/stream/Stream";
import ClassDetail from "./components/class-detail/ClassDetail";
import Home from "./components/home/Home";

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
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
