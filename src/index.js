import React, { createContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/style.css"
import { AboutUs, Layout, MainPage, MasterClassPage, Workshop } from "./content/import_ts"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { data } from "./data";

const root = ReactDOM.createRoot(document.getElementById('root'));

const url = window.location.pathname.split("/")

if (url.length <= 2) {
  window.location.href += "/"
  console.log(123)
}

export const UserContext = createContext()

root.render(
  <UserContext.Provider value={data}>
    <BrowserRouter basename={`${url[1]}/`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="master-class" element={<MasterClassPage />} />
          <Route path='about-us' element={<AboutUs data={data.aboutUs} />} />
          <Route path='workshop' element={<Workshop />} />
        </Route>
      </Routes>
    </BrowserRouter >
  </UserContext.Provider>
);


