import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/style.css"
import { AboutUs, Layout, MainPage, MasterClassPage, Workshop } from "./content/import_ts"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { data } from "./data";
import { showObserver } from './styles/script/showObserver';

const root = ReactDOM.createRoot(document.getElementById('root'));

const url = window.location.pathname.split("/")

if (url.length <= 2) {
  window.location.href += "/"
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


