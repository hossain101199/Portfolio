import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WORK" element={<Work />} />
        <Route path="/ABOUT" element={<About />} />
        <Route path="/BLOGS" element={<Blogs />} />

        <Route path="/CONTACT" element={<Contact />} />
        {/* <Route path="/RESUME" element={<Resume />} /> */}
      </Routes>
    </div>
  );
}

export default App;
