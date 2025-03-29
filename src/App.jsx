import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/AppSidebar";
import SearchMaterials from "./components/pages/SearchMaterials";
import Home from "./components/pages/Home";
import ListMaterials from "./components/pages/ListMaterials";
import MaterialManager from "./components/pages/MaterialManager";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list-materials" element={<ListMaterials />} />
            <Route path="/search" element={<SearchMaterials />} />
            <Route path="/materials" element={<MaterialManager />} />
            <Route path="*" element={<div>404: Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
