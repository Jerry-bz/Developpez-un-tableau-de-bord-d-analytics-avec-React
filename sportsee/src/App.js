import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import React from "react";

/**
 *  Component that allows site navigation
 * @Component App 
 * @returns {JSX.component}
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
