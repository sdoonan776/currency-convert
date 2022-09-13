import React, {useState, useEffect, ReactElement, MouseEvent} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios, { AxiosError, AxiosResponse } from 'axios';

import styles from '../styles/components/CurrencyConverter.module.scss';

function CurrencyConverter(): ReactElement {
    const [currencyFrom, setCurrencyFrom] = useState<string>('');
    const [currencyTo, setCurrencyTo] = useState<string>('');
    const [currencyValue, setCurrencyValue] = useState<number>(0);

    useEffect(() => {
    });
    
    const handleConversion = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        axios.post('https://community-neutrino-currency-conversion.p.rapidapi.com/convert', {
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '25c4e740demsh5ccf7fc1d6ae68cp173e85jsna94415c52dc7',
                'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
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
            <Container>
                <Row>
                    <Col lg={8} className={styles.converterCol}>
                        <Card>
                            <h2>Choose a Currency to Convert</h2>
                            <Form>
                                <Container>
                                    <Row className={styles.converterForm}>
                                        <Form.Group className="mb-3" controlId="amount">
                                            <Form.Label>Amount</Form.Label>
                                            <Form.Control/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="currencyFrom">
                                            <Form.Label>Currency From</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option value=""></option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="currencyTo">
                                            <Form.Label>Currency To</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option value=""></option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Button onClick={handleConversion} variant="primary" type="submit">
                                            Convert
                                        </Button>
                                    </Row>
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