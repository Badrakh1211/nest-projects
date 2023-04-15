import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Choose from './game';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Easy from './easy'
import Normal from './normal'
import Hard from './hard'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='/game' element={<Choose />}></Route>
          <Route path='/easy' element={<Easy />}></Route>
          <Route path='/normal' element={<Normal />}></Route>
          <Route path='/hard' element={<Hard />}></Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
