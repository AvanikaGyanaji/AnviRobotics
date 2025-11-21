import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./hooks/ScrollToTop";
import { useState } from 'react'
import './App.css'
import { Home } from "./pages/home";
import { Survillance } from "./pages/Survillance";
import { Header } from "./components/Header";

 const App = () => {
  return(
     <>
     
    <Router>
      <ScrollToTop />
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/survillance" element={<Survillance />} />
      </Routes>
      
    </Router>
     
    </>
  );
}
export default App;