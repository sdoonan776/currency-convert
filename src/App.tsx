import React, {ReactElement} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CurrencyConverter from './components/CurrencyConverter';
import HeroBanner from './components/HeroBanner';

function App(): ReactElement {
    return (
        <>
            <div className="App">
                <Header/>
                <HeroBanner/>
                <CurrencyConverter/>
                <Footer/>
            </div>
        </>
    );
}

export default App;
