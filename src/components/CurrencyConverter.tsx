import React, {useState, useEffect, ReactElement, MouseEvent, ChangeEvent, MouseEventHandler} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Spinner from'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import axios, { AxiosError, AxiosResponse } from 'axios';

import styles from '../styles/components/CurrencyConverter.module.scss';

import currencies from '../currencies.json';
import {CurrencyInterface} from "../interfaces/currency";
import {formatCurrency} from "../utils/helpers";
import {isNumber} from "util";

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
        // console.log(currencies[0]);
    },[currencyFrom, currencyTo]);

    const handleCurrencySwitch = (): void => {
        setCurrencyFrom(currencyTo);
        setCurrencyTo(currencyFrom);
    };
    
    const handleConversion = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
        await e.preventDefault();
        await setErrors([]);

        if (!amount && typeof(amount) !== 'number') {
           setErrors(errors => [...errors, 'Please enter an amount']);
           setShowErrors(true);
        }

        if (amount && typeof(amount) === 'number') {
            setErrors(errors => [...errors, 'Amount entered must be a number']);
            setShowErrors(true);
        }

        setIsLoading(true);

        await axios.get(`https://currency-exchange.p.rapidapi.com/exchange`, {
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': '25c4e740demsh5ccf7fc1d6ae68cp173e85jsna94415c52dc7',
                'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
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
        console.log(exchangeRate);
        // setExchangedAmount(exchangeRate * amount);
    };

    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg={8} className={styles.converterCol}>
                        <Card className={styles.converterCard}>
                            <Form>
                                <Container>
                                    <h2>Choose a Currency to Convert</h2>
                                        {errors.length !== 0 && showErrors ? (
                                            <>
                                                <Alert key="danger" onClose={() => setShowErrors(false)} variant="danger" dismissible>
                                                    <>
                                                        {errors.map((error: string, i: number) =>
                                                            <p key={i}>
                                                                { error }
                                                            </p>
                                                        )}
                                                    </>
                                                </Alert>
                                            </>
                                        ) : ''}
                                    <div className={styles.converterForm}>
                                        <Form.Group className={`${styles.formGroup}`} controlId="amount">
                                            <Form.Label>Amount</Form.Label>
                                            <Form.Control type="number" placeholder="Enter Currency Amount" onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(Number(e.target.value))}/>
                                        </Form.Group>

                                        <Form.Group className={`${styles.formGroup}`} controlId="currencyFrom">
                                            <Form.Label>From</Form.Label>
                                            <Form.Select defaultValue={`${currencyFrom}`} onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrencyFrom(e.target.value)}>
                                                {currencies.map((currency: CurrencyInterface, i: number) =>
                                                    <>
                                                        {currency.code === currencyFrom ? (
                                                            <option selected key={i} value={currency.code}>{currency.name}</option>
                                                        ) : (
                                                            <option key={i} value={currency.code}>{currency.name}</option>
                                                        )}
                                                    </>
                                                )}
                                            </Form.Select>
                                        </Form.Group>

                                        <div className={styles.switchButton} onClick={ handleCurrencySwitch }>
                                            <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                        </div>

                                        <Form.Group className={`${styles.formGroup}`} controlId="currencyTo">
                                            <Form.Label>To</Form.Label>
                                            <Form.Select defaultValue={`${currencyTo}`} onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrencyTo(e.target.value)}>
                                                {currencies.map((currency: CurrencyInterface, i: number) =>
                                                    <>
                                                        {currency.code === currencyTo ? (
                                                            <option selected key={i} value={currency.code}>{currency.name}</option>
                                                        ) : (
                                                            <option key={i} value={currency.code}>{currency.name}</option>
                                                        )}
                                                    </>
                                                )}
                                            </Form.Select>
                                        </Form.Group>
                                    </div>

                                    {isLoading ? (
                                        <div className={styles.spinner}>
                                            <Spinner animation="border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </Spinner>
                                        </div>
                                    ) : ''}

                                    <div>
                                        <Button className={styles.submitButton} onClick={handleConversion} type="submit">
                                            Convert
                                        </Button>
                                    </div>

                                    { exchangedAmount ? (
                                        <div className={styles.exchangedSection}>
                                            { formatCurrency(amount) } {currencyFrom} = { formatCurrency(exchangedAmount) } {currencyTo}
                                        </div>
                                    ) : ''}
                                </Container>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    ); 
}

export default CurrencyConverter;