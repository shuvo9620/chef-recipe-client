import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Image, Container } from 'react-bootstrap';
import profile_img from '../../../assets/images/profile.png'

const Header = () => {
    const signedIn = true;
    const userName = "Shuvo";
    return (
        <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#">Chef Recipe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto d-flex">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            {signedIn ?
                                <Image style={{ height: '40px' }} src={profile_img} roundedCircle title={userName} className="flex-grow-1" />
                                :
                                <Button variant="outline-success">Login</Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </Container>
    );
};

export default Header;