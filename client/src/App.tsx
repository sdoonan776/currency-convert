import { JSX } from 'react';
import Header from './components/partials/Header.tsx';
import Footer from './components/partials/Footer.tsx';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import About from './pages/about';
import Contact from './pages/contact';
import Services from "./pages/services.tsx";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer/>
            </div>
        </>
    );
};

export default App;
