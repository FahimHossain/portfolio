import React from 'react';
import './../css/main.css';
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>
                        <ul className="menu">
                            <li><Link to ="/Home">Home</Link></li>
                            <li><Link to ="/About">About</Link></li>
                            <li><Link to ="/Contact">Contact</Link></li>
                            <li><Link to ="/Photography">Photography</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            {/* <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Fahim Hossain</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="menu">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                    <Nav.Link href="#Photography">Link</Nav.Link>

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar> */}
        </div>
        
    )
}