import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './contact';
import AboutUs from './about';
import Home from './homepage';
import Shop from './Shop';
import Blog from './Blog';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
   <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="blog" element={<Blog />} />
        <Route index element={<Home />}/>
        <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Route>
    </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

