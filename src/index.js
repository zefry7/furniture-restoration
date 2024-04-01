import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/style.css"
import { MainPage }  from "./content/import_file"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


