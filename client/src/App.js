import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/Homepage";
import PhoneDisplayAllPage from "./pages/PhoneDisplayAll";
import PhoneDisplaySingle from "./pages/PhoneDisplaySingle";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<PhoneDisplayAllPage />} />
        <Route path="/phones/:id" element={<PhoneDisplaySingle />} />
      </Routes>
    </div>
  );
}

export default App;
