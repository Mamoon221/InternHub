import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React from 'react';
import Login from './pages/Login';

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
