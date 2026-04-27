import Main from "./Components/main.js";
import Email from "./Components/email.js";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    
      <div className="MainWrapper">  
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/email" element={<Email />} />
          </Routes>
      </div>
    
  );
}
