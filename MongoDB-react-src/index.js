import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './page';
import Login from './login'
import Profile from './profile'
import Sign from './sign'

import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/instagram' element={<App />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/sign' element={<Sign />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);