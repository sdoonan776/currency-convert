import React, {useState, useEffect, ReactElement, MouseEvent, ChangeEvent, FormEvent} from 'react';
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

function CurrencyConverter(): ReactElement {
    const [currencyFrom, setCurrencyFrom] = useState<string>('');
    const [currencyTo, setCurrencyTo] = useState<string>('');
    const [amount, setAmount] = useState<string>('');

    useEffect(() => {
    });

    const handleCurrencySwitch = () => {
        setCurrencyFrom(currencyFrom);
        setCurrencyTo(currencyTo);
    };
    
    const handleConversion = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();

        if(!currencyFrom)

        axios.get(`https://currency-converter114.p.rapidapi.com?fromCurrency=${currencyFrom}&toCurrency=${currencyTo}&amount=${amount}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': '25c4e740demsh5ccf7fc1d6ae68cp173e85jsna94415c52dc7',
                'X-RapidAPI-Host': 'currency-converter114.p.rapidapi.com'
            }
        }).then((response: AxiosResponse) => {
            // console.log(response);
            return response.data;
        }).then((response: AxiosResponse) => {
            console.log(response);
            // setCurrencyFrom() 
        }).catch((err: AxiosError) => {
            console.log(err);
        })    
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
                                    <div className={styles.converterForm}>
                                        <Form.Group className={`${styles.formGroup}`} controlId="amount">
                                            <Form.Label>Amount</Form.Label>
                                            <Form.Control type="number" placeholder="Enter Currency Amount" onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}/>
                                        </Form.Group>

                                        <Form.Group className={`${styles.formGroup}`} controlId="currencyFrom">
                                            <Form.Label>From</Form.Label>
                                            <Form.Select onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrencyFrom(e.target.value)}>
                                                {currencies.map((currency: CurrencyInterface) =>
                                                    <option value={currency.code}>{currency.name}</option>
                                                )}
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className={styles.formGroup}>
                                            <a className={styles.switchButton} onClick={handleCurrencySwitch}>
                                                <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                            </a>
                                        </Form.Group>

                                        <Form.Group className={`${styles.formGroup}`} controlId="currencyTo">
                                            <Form.Label>To</Form.Label>
                                            <Form.Select onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrencyTo(e.target.value)}>
                                                {currencies.map((currency: CurrencyInterface) =>
                                                    <option value={currency.code}>{currency.name}</option>
                                                )}
                                            </Form.Select>
                                        </Form.Group>
                                    </div>

                                    <div>
                                        <Button onClick={handleConversion} variant="primary" type="submit">
                                            Convert
                                        </Button>
                                    </div>
                                    <div>

                                    </div>
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