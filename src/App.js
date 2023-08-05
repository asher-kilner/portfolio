import React from "react";
import Header from './component/Header';
import About from  './component/About';
import Projects from './component/Projects';
import Timeline from './component/Timeline';
import Footer from './component/Footer';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="text-gray-400 bg-gray-900">
        <Header/>
        <About/>
        <Projects />
        <Timeline/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
