import React, {ReactElement} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import styles from '../styles/components/Header.module.scss';

function Header(): ReactElement {
    return (
        <>
            <header className={styles.mainHeader}>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="/">Currency Convert</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                           <Nav>
                               <Nav.Link href="/login">Login</Nav.Link>
                               <Nav.Link href="/register">Register</Nav.Link>
                           </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    ); 
}

export default Header;
