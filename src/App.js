import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import AppLayout from "./components/app-layout/AppLayout";
import Dashboard from "./components/dash-board/Dashboard";
import People from './Tabs/people/People';
import Classwork from "./Tabs/class-work/Classwork";

function App() {
  return (
    <Router>
      <AppLayout />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/people" element={<People />} />
      </Routes>
      <Classwork />
    </Router>
  );
}

export default App;
