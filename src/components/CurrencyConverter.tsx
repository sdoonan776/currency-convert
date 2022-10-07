import React, {useState, useEffect, ReactElement, MouseEvent, ChangeEvent} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios, { AxiosError, AxiosResponse } from 'axios';

import styles from '../styles/components/CurrencyConverter.module.scss';

import currencies from '../currencies.json';
import {CurrencyInterface} from "../interfaces/currency";
import {Alert} from "react-bootstrap";

interface RateItem {
    name: string
    rate: number
}

function CurrencyConverter(): ReactElement {
    const [currencyFrom, setCurrencyFrom] = useState<string>('USD');
    const [currencyTo, setCurrencyTo] = useState<string>('USD');
    const [amount, setAmount] = useState<number>(0);
    const [errors, setErrors] = useState<string[]>([]);
    const [showErrors, setShowErrors] = useState<boolean>(false);
    const [currencyRates, setCurrencyRates] = useState<string[]>([]);
    const [currencyFromRate, setCurrencyFromRate] = useState<number>(0);
    const [currencyToRate, setCurrencyToRate] = useState<number>(0);
    const [exchangedAmount, setExchangedAmount] = useState<number>(0);

    useEffect(() => {
        axios.get(`https://currencyscoop.p.rapidapi.com/latest`, {
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': '25c4e740demsh5ccf7fc1d6ae68cp173e85jsna94415c52dc7',
                'X-RapidAPI-Host': 'currencyscoop.p.rapidapi.com'
            }
        }).then((response: AxiosResponse) => {
            return response.data.response.rates;
        }).then((response: string[]) => {
            setCurrencyRates(response);
        }).catch((err: AxiosError) => {
            console.log(err);
        });

    },[]);

    const handleCurrencySwitch = (): void => {
        setCurrencyFrom(currencyFrom);
        setCurrencyTo(currencyTo);
    };
    
    const handleConversion = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
        await e.preventDefault();
        await setErrors([]);
        await setExchangedAmount(0);
        await setCurrencyToRate(0);

        if (!amount) {
           setErrors(errors => [...errors, 'Please enter an amount']);
           setShowErrors(true);
        }

        // setCurrencyToRate(Number(Object.entries(response).filter(rate => rate[0] === currencyTo)[0][1]));

        setCurrencyToRate(Number(Object.entries(currencyRates).filter(rate => rate[0] === currencyTo)[0][1]));

        setExchangedAmount(amount * currencyToRate);
        // console.log(exchangedAmount);

        // let currentRate = ratesArray.map((rate) => rate).filter((name: string) => name === currencyFrom);

        // console.log(currentRate);

        // ratesArray.map((key, rate) => {
        // });

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
                                        {errors.length !== 0 && showErrors ?
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
                                        : ''}
                                    <div className={styles.converterForm}>
                                        <Form.Group className={`${styles.formGroup}`} controlId="amount">
                                            <Form.Label>Amount</Form.Label>
                                            <Form.Control type="number" placeholder="Enter Currency Amount" onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(Number(e.target.value))}/>
                                        </Form.Group>

                                        <Form.Group className={`${styles.formGroup}`} controlId="currencyFrom">
                                            <Form.Label>From</Form.Label>
                                            <Form.Select defaultValue={currencyFrom} onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrencyFrom(e.target.value)}>
                                                {currencies.map((currency: CurrencyInterface, i: number) =>
                                                    <option key={i} value={currency.code}>{currency.name}</option>
                                                )}
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className={styles.formGroup}>
                                            <div className={styles.switchButton} onClick={handleCurrencySwitch}>
                                                <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                            </div>
                                        </Form.Group>

                                        <Form.Group className={`${styles.formGroup}`} controlId="currencyTo">
                                            <Form.Label>To</Form.Label>
                                            <Form.Select defaultValue={currencyTo} onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrencyTo(e.target.value)}>
                                                {currencies.map((currency: CurrencyInterface, i: number) =>
                                                    <option key={i} value={currency.code}>{currency.name}</option>
                                                )}
                                            </Form.Select>
                                        </Form.Group>
                                    </div>

                                    <div>
                                        <Button onClick={handleConversion} variant="primary" type="submit">
                                            Convert
                                        </Button>
                                    </div>
                                    {exchangedAmount ?
                                        <div>
                                            { exchangedAmount }
                                        </div>
                                    : ''}
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