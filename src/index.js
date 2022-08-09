import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/index.css';

import AppHeader from "./Components/HeaderComponent/AppHeader"

export default function App() {
  return (
    <BrowserRouter>
    <AppHeader/>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);