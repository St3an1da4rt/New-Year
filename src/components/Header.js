import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <div class="header">
            <a href="/">aaa</a>
        </div>
      <Routes>
        <Route path="one" element={<PageOne />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);