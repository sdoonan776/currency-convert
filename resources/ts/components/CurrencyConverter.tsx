import {JSX, useState, useEffect, ReactElement, ChangeEvent, useRef, MutableRefObject, ReactNode} from 'react';

// import currencies from '../../../database/currencies.json';
import {CurrencyInterface} from "../interfaces/currency";
import FormInput from "./ui/FormInput";
import FormButton from "./ui/FormButton";
import {FaExchangeAlt} from "react-icons/fa";

function CurrencyConverter(): ReactElement {
    const [currencyFrom, setCurrencyFrom] = useState<string>('USD');
    const [currencyTo, setCurrencyTo] = useState<string>('CAD');
    const amount: MutableRefObject<number> = useRef<number>(0);
    // const [errors, setErrors] = useState<string[]>([]);
    // const [showErrors, setShowErrors] = useState<boolean>(false);


    useEffect((): void => {
        console.log('Currency To ' + currencyTo);
        console.log('Currency From ' + currencyFrom);
    },[currencyTo, currencyFrom]);

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
    //
    //
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
                    <div className="mb-6">
                        <h3 className="text-2xl font-md">Convert Your Currency</h3>
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
                        <FormInput type="number" placeholder="0" amount={amount.current} label="Amount" />
                    </div>
                    <div className="block space-x-2 md:flex">

                        <div className="flex flex-col border p-4 border-gray-500 rounded ">
                            <label className="mb-2">From</label>
                            <select className="cursor-pointer" defaultValue={`${currencyFrom}`} onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrencyFrom(e.target.value)}>
                                {props.currencies.map((currency: CurrencyInterface, i: number): ReactNode =>
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

                        <div className="flex items-center" onClick={ handleCurrencySwitch }>
                            <FaExchangeAlt className="text-blue-400 text-2xl cursor-pointer" />
                        </div>

                        <div className="flex flex-col border border-gray-500 rounded p-4">
                            <label>To</label>
                            <select className="cursor-pointer" defaultValue={`${currencyTo}`} onChange={(e: ChangeEvent<HTMLSelectElement>): void => setCurrencyTo(e.target.value)}>
                                {props.currencies.map((currency: CurrencyInterface, i: number): ReactNode =>
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

                    <div>
                        <FormButton name="Convert"/>
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