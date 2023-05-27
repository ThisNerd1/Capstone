import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import GiftLists from './pages/GiftLists';
import AccountPage from './pages/AccountPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './pages/NavBar';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import EditList from './pages/EditList';
import Download from './pages/Download';
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteList from './pages/DeleteList';
import AddTo from './pages/AddTo';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <div className="App">

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gifts" element={<GiftLists />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/createAcc' element={<CreateAccount />} />
        <Route path='/edit' element={<EditList />} />
        <Route path='/delete' element={<DeleteList />} />
        <Route path='/download' element={<Download />} />
        <Route path='/add' element={<AddTo />} />
      </Routes>
    </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
