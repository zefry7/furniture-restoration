import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/style.css"
import { Layout, MainPage } from "./content/import_ts"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { data } from "./data";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout header={data.header} footer={data.footer}/>}>
          <Route index element={<MainPage data={data.mainPage} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
);


