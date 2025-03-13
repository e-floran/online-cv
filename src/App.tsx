import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import Skills from "./pages/Skills.tsx";
import Education from "./pages/Education.tsx";
import Experience from "./pages/Experience.tsx";
import "./App.css";
import Contact from "./components/Contact.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
        </Routes>
        <Contact />
      </Router>
    </div>
  );
}

export default App;
