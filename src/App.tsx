import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home.tsx";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Experience from "./pages/Experience.tsx";
import "./App.css";

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
      </Router>
    </div>
  );
}

export default App;
