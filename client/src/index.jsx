import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './utils/style/GlobalStyle'
import Home from '../src/pages/Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Home />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
