import {useState, useEffect, ReactElement, MouseEvent, ChangeEvent} from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

import currencies from '../currencies.json';
import {CurrencyInterface} from "../interfaces/currency";
import {formatCurrency} from "../utils/helpers";

function CurrencyConverter(): ReactElement {
    const [currencyFrom, setCurrencyFrom] = useState<string>('USD');
    const [currencyTo, setCurrencyTo] = useState<string>('CAD');
    const [amount, setAmount] = useState<number>(0);
    const [errors, setErrors] = useState<string[]>([]);
    const [showErrors, setShowErrors] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [exchangeRate, setExchangeRate] = useState<number>(0);
    const [exchangedAmount, setExchangedAmount] = useState<number>(0);

    useEffect(() => {
        // console.log(process.env.REACT_APP_CURRENCY_EXCHANGE_HOST);
    },[]);

    const handleCurrencySwitch = (): void => {
        setCurrencyFrom(currencyTo);
        setCurrencyTo(currencyFrom);
    };
    
    const handleConversion = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();
        setErrors([]);

        if (!amount) {
           setErrors(errors => [...errors, 'Please enter an amount']);
           setShowErrors(true);
        }

        if (typeof(amount) !== 'number') {
            setErrors(errors => [...errors, 'Amount entered must be a number']);
            setShowErrors(true);
        }

        setIsLoading(true);

        axios.get(`https://currency-exchange.p.rapidapi.com/exchange`, {
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Host': process.env.REACT_APP_CURRENCY_EXCHANGE_HOST ? process.env.REACT_APP_CURRENCY_EXCHANGE_HOST : '',
                'X-RapidAPI-Key': process.env.REACT_APP_CURRENCY_EXCHANGE_API_KEY ? process.env.REACT_APP_CURRENCY_EXCHANGE_API_KEY : ''
            },
            params: {
                from: currencyFrom,
                to: currencyTo
            }
        }).then((response: AxiosResponse) => {
            setIsLoading(false);
            setExchangeRate(response.data);
        }).then(() => {
            setExchangedAmount(exchangeRate * amount);
        }).catch((err: AxiosError) => {
            setIsLoading(false);
            console.log(err);
        });
    };

    return (
        <>
            <div className={'container-xl mx-auto'}>
                <div className={'row'}>
                    <div className="">
                        <div className="">
                            <form>
                                <div className={'container'}>
                                    <h2>Choose a Currency to Convert</h2>
                                        {errors.length !== 0 && showErrors ? (
                                            <>
                                                <div key="danger" onClick={() => setShowErrors(false)}>
                                                    <>
                                                        {errors.map((error: string, i: number) =>
                                                            <p key={i}>
                                                                { error }
                                                            </p>
                                                        )}
                                                    </>
                                                </div>
                                            </>
                                        ) : ''}
                                    <div className="">
                                        <div className="">
                                            <label>Amount</label>
                                            <input type="number" placeholder="Enter Currency Amount" onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(Number(e.target.value))}/>
                                        </div>

                                        <div className="">
                                            <label>From</label>
                                            <select defaultValue={`${currencyFrom}`} onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrencyFrom(e.target.value)}>
                                                {currencies.map((currency: CurrencyInterface, i: number) =>
                                                    <>
                                                        {currency.code === currencyFrom ? (
                                                            <option selected key={i} value={currency.code}>{currency.name}</option>
                                                        ) : (
                                                            <option key={i} value={currency.code}>{currency.name}</option>
                                                        )}
                                                    </>
                                                )}
                                            </select>
                                        </div>

                                        <div className="" onClick={ handleCurrencySwitch }>
                                            <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                        </div>

                                        <div className="">
                                            <label>To</label>
                                            <select defaultValue={`${currencyTo}`} onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrencyTo(e.target.value)}>
                                                {currencies.map((currency: CurrencyInterface, i: number) =>
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

                                    {isLoading ? (
                                        <div className="">
                                            <div>
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>
                                    ) : ''}

                                    <div>
                                        <button className="" onClick={handleConversion} type="submit">
                                            Convert
                                        </button>
                                    </div>

                                    { exchangedAmount ? (
                                        <div className="">
                                            { formatCurrency(amount) } {currencyFrom} = { formatCurrency(exchangedAmount) } {currencyTo}
                                        </div>
                                    ) : ''}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ); 
}

export default CurrencyConverter;