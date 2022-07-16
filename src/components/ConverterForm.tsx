import React, {useState, useEffect, ReactElement, MouseEvent} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ConverterForm(): ReactElement {
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
        }).then((response) => {
            console.log(response);
            // return response.json();
        }).then(() => {
            // setCurrencyFrom() 
        }).catch((err) => {
            console.log(err);
        })    
    };

    return (
        <>
            <Container>
                <Row>
                    <Col lg={6} style={{ margin: '0 auto' }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="currencyFrom">
                                <Form.Label>Currency From</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="currencyTo">
                                <Form.Label>Currency To</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="amount">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control /> 
                            </Form.Group>
                            
                            <Button onClick={handleConversion} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    ); 
}

export default ConverterForm;