import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Analyze from "./pages/Analyze";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/upload" element={<Upload />} />

        <Route path="/analyze" element={<Analyze />} />

        <Route path="/result" element={<Result />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
