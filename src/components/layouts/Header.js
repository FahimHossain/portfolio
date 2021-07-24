import React from 'react';
import './../css/main.css';
import {Container, Row, Col} from 'react-bootstrap';
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
        </div>
    )
}