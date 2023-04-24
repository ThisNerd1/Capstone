import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import GiftLists from './pages/GiftLists';
import AccountPage from './pages/AccountPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Welcome to Noted</h1>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gifts" element={<GiftLists />} />
        <Route path="/account-page" element={<AccountPage />} />
      </Routes>
    </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
