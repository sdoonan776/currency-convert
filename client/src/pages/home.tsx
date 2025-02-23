import React, {ReactElement} from 'react';
import HeroBanner from "../components/HeroBanner";
import CurrencyConverter from "../components/CurrencyConverter";
import ExchangeRates from "../components/ExchangeRates";

function Home (): ReactElement {
    return (
        <>
            <HeroBanner/>
            <CurrencyConverter/>
            <ExchangeRates/>
        </>
    );
};

export default Home;