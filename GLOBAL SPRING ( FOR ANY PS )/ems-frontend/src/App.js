  import React from "react";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import HomePage from "./components/HomePage";
  import EmployeeFormPage from "./components/EmployeeFormPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

  function App() {
    return (
        <BrowserRouter>
        <HeaderComponent />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/employees" element={<HomePage />} />
            <Route path="/add-employee" element={<EmployeeFormPage />} />
            <Route path="/edit-employee/:id" element={<EmployeeFormPage />} />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
    );
  }

  export default App;
