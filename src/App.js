import React from 'react';
import './App.css';
import Radiometers from './pages/Radiometers';
import Home from './pages/Home';
import Data from './pages/Data';
import { Routes, Route } from "react-router-dom"


function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="radiometers" element={ <Radiometers/> } />
                <Route path="data" element={ <Data/> } />
            </Routes>
        </div>   
    )
}
  
export default App