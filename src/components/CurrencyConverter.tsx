import React, {useState, useEffect, ReactElement, MouseEvent} from 'react';
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
    const [currencyValue, setCurrencyValue] = useState<number>(0);

    useEffect(() => {
    });

    const handleCurrencyTo = (e: MouseEvent<HTMLButtonElement>): void => {

    };
    
    const handleConversion = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        axios.get('https://currency-converter114.p.rapidapi.com/', {
            'params': {
                fromCurrency: currencyFrom,
                toCurrency: currencyTo,
                amount: currencyValue
            },
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '25c4e740demsh5ccf7fc1d6ae68cp173e85jsna94415c52dc7',
                'X-RapidAPI-Host': 'currency-converter114.p.rapidapi.com'
            }
        }).then((response: AxiosResponse) => {
            console.log(response);
            // return response.json();
        }).then(() => {
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
                                            <Form.Control type="number" placeholder="Enter Currency Amount"/>
                                        </Form.Group>

                                        <Form.Group className={`${styles.formGroup}`} controlId="currencyFrom">
                                            <Form.Label>From</Form.Label>
                                            <Form.Select aria-label="Currency from select">
                                                {currencies.map((currency: CurrencyInterface) =>
                                                    <option value={currency.code}>{currency.name}</option>
                                                )}
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className={`${styles.formGroup}`} controlId="currencyTo">
                                            <Form.Label>To</Form.Label>
                                            <Form.Select aria-label="Currency to Select">
                                                {currencies.map((currency: CurrencyInterface) =>
                                                    <option value={currency.code}>{currency.name}</option>
                                                )}
                                                <option value=""></option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>

                                    <div>
                                        <Button onClick={handleConversion} variant="primary" type="submit">
                                            Convert
                                        </Button>
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