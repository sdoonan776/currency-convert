import React, {ReactElement, useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from '../styles/components/Footer.module.scss';

function Footer(): ReactElement {
    const [date, setDate] = useState<number>(0);

    useEffect(() => {
        setDate(new Date().getFullYear());
    }, [date]);

    return (
        <>
            <footer className={styles.footer}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <p className={styles.footerText}>
                                { date } Currency Convert &copy; All Rights Reserved
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    ); 
}

export default Footer;
