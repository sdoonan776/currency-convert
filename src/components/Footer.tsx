import React, {ReactElement} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

function Footer(): ReactElement {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/home">Active</Nav.Link>
                                <Nav.Link eventKey="link-1">Link</Nav.Link>
                                <Nav.Link eventKey="link-2">Link</Nav.Link>
                            </Nav>
                        </Col>
                        <Col lg={4}>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/home">Active</Nav.Link>
                                <Nav.Link eventKey="link-1">Link</Nav.Link>
                                <Nav.Link eventKey="link-2">Link</Nav.Link>
                            </Nav>
                        </Col>
                        <Col lg={4}>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/home">Active</Nav.Link>
                                <Nav.Link eventKey="link-1">Link</Nav.Link>
                                <Nav.Link eventKey="link-2">Link</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    ); 
}

export default Footer;
