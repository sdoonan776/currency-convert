import React, {ReactElement} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CurrencyConverter from './components/CurrencyConverter';

function App(): ReactElement {
    return (
        <>
            <div className="App">
                <Header/>
                <CurrencyConverter/>
                <Footer/>
            </div>
        </>
    );
}

export default App;
