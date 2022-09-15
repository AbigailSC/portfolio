import { Routes, Route } from "react-router-dom";
import { DetailProject } from "./components/DetailProject/DetailProject";
import { About } from "./components/About/About";
import { Home } from "./components/Home/Home";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/aboutMe" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/:name" element={<DetailProject />} />
    </Routes>
  );
}

export default App;
