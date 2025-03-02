import {JSX, useState, useEffect, ReactElement, ChangeEvent, useRef, MutableRefObject} from 'react';

import currencies from '../currencies.json';
import {CurrencyInterface} from "../interfaces/currency";
// import FormInput from "./common/FormInput.tsx";

function CurrencyConverter(): ReactElement {
    const [currencyFrom, setCurrencyFrom] = useState<string>('USD');
    const [currencyTo, setCurrencyTo] = useState<string>('CAD');
    const amount: MutableRefObject<number> = useRef<number>(0);
    // const [errors, setErrors] = useState<string[]>([]);
    // const [showErrors, setShowErrors] = useState<boolean>(false);
    // const [isLoading, setIsLoading] = useState<boolean>(false);


    useEffect((): void => {
        console.log(amount);
        // console.log(process.env.REACT_APP_CURRENCY_EXCHANGE_HOST);
    },[amount]);

    const handleCurrencySwitch = (): void => {
        setCurrencyFrom(currencyTo);
        setCurrencyTo(currencyFrom);
    };
    
    // const handleConversion = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    //     e.preventDefault();
    //     setErrors([]);
    //
    //     if (!amount.current) {
    //        setErrors(errors => [...errors, 'Please enter an amount']);
    //        setShowErrors(true);
    //     }
    //
    //     if (isNaN(amount.current)) {
    //         setErrors(errors => [...errors, 'Amount entered must be a number']);
    //         setShowErrors(true);
    //     }
    //
    //     setIsLoading(true);
    //
    //     axios.get(`https://currency-exchange.p.rapidapi.com/exchange`, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'X-RapidAPI-Host': process.env.REACT_APP_CURRENCY_EXCHANGE_HOST ? process.env.REACT_APP_CURRENCY_EXCHANGE_HOST : '',
    //             'X-RapidAPI-Key': process.env.REACT_APP_CURRENCY_EXCHANGE_API_KEY ? process.env.REACT_APP_CURRENCY_EXCHANGE_API_KEY : ''
    //         },
    //         params: {
    //             from: currencyFrom,
    //             to: currencyTo
    //         }
    //     }).then((response: AxiosResponse) => {
    //         setIsLoading(false);
    //         setExchangeRate(response.data);
    //     }).then(() => {
    //         setExchangedAmount(exchangeRate * amount.current);
    //     }).catch((err: AxiosError) => {
    //         setIsLoading(false);
    //         console.log(err);
    //     });
    // };

    return (
        <>
            <div className="bg-white rounded-4xl p-6 shadow-md mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center md:flex">
                <form>
                        {/*{errors.length !== 0 && showErrors ? (*/}
                        {/*    <>*/}
                        {/*        <div onClick={() => setShowErrors(false)}>*/}
                        {/*            <>*/}
                        {/*                {errors.map((error: string, i: number): JSX.Element =>*/}
                        {/*                    <p key={i}>*/}
                        {/*                        { error }*/}
                        {/*                    </p>*/}
                        {/*                )}*/}
                        {/*            </>*/}
                        {/*        </div>*/}
                        {/*    </>*/}
                        {/*) : ''}*/}
                    <div className="block md:flex">
                        <div className="">
                            {/*<label>Amount</label>*/}
                            {/*<FormInput type="number" placeholder="0" setAmount={setAmount}/>*/}
                        </div>

                        <div className="border-gray-500 rounded ">
                            <label>From</label>
                            <select defaultValue={`${currencyFrom}`} onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrencyFrom(e.target.value)}>
                                {currencies.map((currency: CurrencyInterface, i: number) =>
                                    <>
                                        {currency.code === currencyFrom ? (
                                            <option defaultValue="i" key={i} value={currency.code}>{currency.name}</option>
                                        ) : (
                                            <option key={i} value={currency.code}>{currency.name}</option>
                                        )}
                                    </>
                                )}
                            </select>
                        </div>

                        <div className="" onClick={ handleCurrencySwitch }>
                            <i className="fa-solid fa-arrow-right-arrow-left text-blue-400"></i>
                        </div>

                        <div>
                            <label>To</label>
                            <select defaultValue={`${currencyTo}`} onChange={(e: ChangeEvent<HTMLSelectElement>): void => setCurrencyTo(e.target.value)}>
                                {currencies.map((currency: CurrencyInterface, i: number): JSX.Element =>
                                    <>
                                        {currency.code === currencyTo ? (
                                            <option selected key={i} value={currency.code}>{currency.name}</option>
                                        ) : (
                                            <option key={i} value={currency.code}>{currency.name}</option>
                                        )}
                                    </>
                                )}
                            </select>
                        </div>
                    </div>

                    {/*{isLoading ? (*/}
                    {/*    <div>*/}
                    {/*        <div>*/}
                    {/*            <span className="visually-hidden">Loading...</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*) : ''}*/}

                    <div>
                        {/*<button className="" onClick={handleConversion} type="submit">*/}
                        {/*    Convert*/}
                        {/*</button>*/}
                    </div>

                    {/*{ exchangedAmount ? (*/}
                    {/*    <div>*/}
                    {/*        { formatCurrency(amount.current) } {currencyFrom} = { formatCurrency(exchangedAmount) } {currencyTo}*/}
                    {/*    </div>*/}
                    {/*) : ''}*/}
                </form>
            </div>
        </>
    ); 
}

export default CurrencyConverter;