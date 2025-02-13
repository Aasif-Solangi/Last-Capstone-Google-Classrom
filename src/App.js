import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import ClassDetail from "./components/class-detail/ClassDetail";
import AppLayout from "./components/app-layout/AppLayout";
import Classwork from "./Tabs/class-work/Classwork";
import People from './Tabs/people/People';
import Stream from "./Tabs/stream/Stream";
import Home from './components/home/Home';

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
        <Route path="/class-detail" element={<ClassDetail />} />
      </Routes>
    </Router>
  );
}

export default App;