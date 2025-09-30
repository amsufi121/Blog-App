import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
