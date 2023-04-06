import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home';
import School from './pages/schools/School';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/sch" element = {<School/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App;
