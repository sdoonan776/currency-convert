// import {useEffect, useState} from "react";
// import {formatCurrency} from "../utils/helpers";
//
//
// function useConversion(): number | Error
// {
//     const [exchangeRate, setExchangeRate] = useState<number>(0);
//     const [errors, setErrors] = useState<string[]>([]);
//
//     useEffect(()  => {
//         setErrors([]);
//         const exchangedCurrency: Promise<number> = async () => {
//             const response: Response = await fetch('https://currency-exchange.p.rapidapi.com/exchange', {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }
//             });
//             return
//         }
//         return exchangedCurrency;
//     }, [exchangeRate]);
//
// }
//
// export default useConversion;