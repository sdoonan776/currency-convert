import React, {ReactElement} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

import styles from '../styles/components/Header.module.scss';

function Header(): ReactElement {
    return (
        <>
            <header className={styles.mainHeader}>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Currency Convert</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    ); 
}

export default Header;
