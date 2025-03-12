import { JSX } from 'react';
import HeroBanner from "../components/HeroBanner";
import CurrencyConverter from "../components/CurrencyConverter";
import ExchangeRates from "../components/ExchangeRates";
import SiteLayout from "../layouts/SiteLayout";

function Home (): JSX.Element {
    return (
        <>
            <SiteLayout>
                <HeroBanner/>
                <CurrencyConverter/>
                <ExchangeRates/>
            </SiteLayout>
        </>
    );
};

export default Home;