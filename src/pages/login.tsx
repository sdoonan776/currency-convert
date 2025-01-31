import React, {ReactElement} from 'react';
import HeroBanner from "../components/HeroBanner";
import CurrencyConverter from "../components/CurrencyConverter";
import { Col, Container, Row } from 'react-bootstrap';

function Login (): ReactElement {
    return (
        <>
            <Container>
                <Row>
                    <Col style={{margin: 'auto'}} xl={6}>
                        <form action="" method="post">
                            <div className="form-group">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword">Password</label>
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label className="form-check-label"><input type="checkbox" /> Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>
                    </Col>
                </Row>     
            </Container>
        </>
    );
};

export default Login;