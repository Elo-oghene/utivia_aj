import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Header from "./components/Header";
import Home from './pages/Home/Home';
import School from './pages/schools/School';
import Header from "./components/Header";





function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/sch" element = {<School/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;
