import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './Components/Header/Header';
import Header from './Components/Header/Header';
import HeaderMobile from './Components/HeaderMobile/HeaderMobile';
import Introduction from './Components/Introduction/Introduction';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import CV from './Components/CV/CV';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <main>
          <Routes>
            <Route path="/" element={<Introduction />}></Route>
            <Route path="/cv" element={<CV />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </main>
        <HeaderMobile></HeaderMobile>
      </div>
    </BrowserRouter>
  );
}

export default App;
