import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import User from "./pages/User.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/User" element={<User />} />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/User" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
