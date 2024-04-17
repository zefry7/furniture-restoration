import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/style.css"
import { Layout, MainPage, MasterClassPage } from "./content/import_ts"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { data } from "./data";

const root = ReactDOM.createRoot(document.getElementById('root'));

const url = window.location.pathname.split("/")

if(url.length <= 2) {
  window.location.href += "/"
  console.log(123)
}

root.render(
  <React.StrictMode>
    <BrowserRouter basename={`${url[1]}/`}>
      <Routes>
        <Route path="/" element={<Layout data={data.layout}/>}>
          <Route index element={<MainPage data={data.mainPage} />} />
          <Route path="master-class" element={<MasterClassPage data={data.masterClassPage} />} />
        </Route>
      </Routes>
    </BrowserRouter >
  </React.StrictMode >
);


