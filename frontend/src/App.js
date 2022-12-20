import React from 'react';
import { Route, Routes } from 'react-router-dom';

import "./assets/global.css"
import Navbar from './components/ui/Navbar';
import Home from './views/home/Home';
import Login from './views/login/Login';
import MotoPanel from './views/motoPanel/MotoPanel';
import GeneralPanel from './views/panel/GeneralPanel';
import CategoryPanel from './views/categoryPanel/CategoryPanel';


function App() {
    return (
        <Routes>
            <Route element={<Navbar />}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<h1 className='container'>Quienes Somos</h1>} />
                <Route path='/services' element={<h1 className='container'>Servicios</h1>} />
                <Route path='/mision' element={<h1 className='container'>Mision</h1>} />
                <Route path='/vision' element={<h1 className='container'>Vision</h1>} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/panel' element={<GeneralPanel />} />
            <Route path='/motoPanel' element={<MotoPanel />} />
            <Route path='/categoryPanel' element={<CategoryPanel />} />
        </Routes>
    )
}

export default App;