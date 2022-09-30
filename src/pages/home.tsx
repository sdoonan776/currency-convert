import React, {ReactElement} from 'react';
import HeroBanner from "../components/HeroBanner";
import CurrencyConverter from "../components/CurrencyConverter";

function Home (): ReactElement {
    return (
        <>
            <HeroBanner/>
            <CurrencyConverter/>
        </>
    );
};

export default Home;