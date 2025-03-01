// import {useEffect, useState} from "react";
// import {formatCurrency} from "../utils/helpers";


// function useConversion(): number | Error
// {
    // const [exchangeRate, setExchangeRate] = useState<number>(0);
    // const [errors, setErrors] = useState();

    // useEffect((): void => {
    //     fetch(`https://currency-exchange.p.rapidapi.com/exchange`, {
    //         headers: {
    //             'X-RapidAPI-Host': process.env.REACT_APP_CURRENCY_EXCHANGE_HOST,
    //             'X-RapidAPI-Key': process.env.REACT_APP_CURRENCY_EXCHANGE_API_KEY
    //         }
    //     })
    //     .then((response: Response): Promise<number> => response.json())
    //     .then((data: number): void => setExchangeRate(data))
    //     .catch((error: Error): void => {
    //         setErrors(error);
    //         return errors;
    //     });
    // }, []);

    // return exchangeRate;
// }

// export default useConversion;