import React, {ReactElement} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CurrencyConverter from './components/CurrencyConverter';
import HeroBanner from './components/HeroBanner';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

function App(): ReactElement {
    return (
        <>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Footer/>
            </div>
        </>
    );
};

export default App;
