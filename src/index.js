import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/style.css"
import { Layout, MainPage } from "./content/import_ts"
import { Route, Routes, HashRouter } from 'react-router-dom';
import { data } from "./data";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout header={data.header} footer={data.footer}/>}>
          <Route index element={<MainPage data={data.mainPage} />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode >
);


