import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import AppLayout from "./components/app-layout/AppLayout";
import Dashboard from "./components/dash-board/Dashboard";
import People from "./components/people/People";

function App() {
 
  return (
    <>
      <AppLayout />
      <Dashboard />
      <People />
    </>
  );
}

export default App;
