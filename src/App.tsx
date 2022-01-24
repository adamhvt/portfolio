import React from 'react';
import {
  BrowserRouter,

  Route, Routes
} from "react-router-dom";
import './App.scss';
import Contact from './Components/Contact/Contact';
import CV from './Components/CV/CV';
import Footer from './Components/Footer/Footer';
import './Components/Header/Header';
import Header from './Components/Header/Header';
import HeaderMobile from './Components/HeaderMobile/HeaderMobile';
import Introduction from './Components/Introduction/Introduction';

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
        <Footer></Footer>
        <HeaderMobile></HeaderMobile>
      </div>
    </BrowserRouter>
  );
}

export default App;
