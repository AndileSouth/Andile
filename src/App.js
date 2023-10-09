import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NAVBAR from './components/NAVBAR';
import HOME from './components/HOME';
import SIDENAV from './components/SIDENAV';
import ABOUT from './components/ABOUT';
import SKILLS from './components/SKILLS';
import PROJECTS from './components/PROJECTS';
import CONTACTS from './components/CONTACTS';



function App() {
  return (
    <div className="App">
      <NAVBAR/>
      <SIDENAV/>
      <Routes>
        <Route exact path="/" element={<HOME/>}/>
        <Route path="/ABOUT" element={<ABOUT/>}/>
        <Route path="/SKILLS" element={<SKILLS/>}/>
        <Route path="/PROJECTS" element={<PROJECTS/>}/>
        <Route path="/CONTACTS" element={<CONTACTS/>}/>
      </Routes>
    </div>
  );
}

export default App;
