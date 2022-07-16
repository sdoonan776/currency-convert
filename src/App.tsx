import React, {ReactElement} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ConverterForm from './components/ConverterForm';
import './App.css';

function App(): ReactElement {
    return (
        <>
            <div className="App">
                <Header/>
                <ConverterForm/>    
                <Footer/>
            </div>
        </>
    );
}

export default App;
