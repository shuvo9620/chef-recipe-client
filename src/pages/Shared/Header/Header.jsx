import React from 'react';
import { Navbar, Nav, Button, Image, Container, Carousel } from 'react-bootstrap';
import profile_img from '../../../assets/images/profile.png'
import img1 from '../../../assets/images/1.jpg'
import img2 from '../../../assets/images/2.jpg'
import img3 from '../../../assets/images/3.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    const signedIn = false;
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
                            <Link to='/login'>
                                <Button variant="outline-success">Login</Button>
                            </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className='mt-4 mb-5'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded"
                            style={{ height: "80vh" }}
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption className='text-warning'>
                            <h3>Delicious Recipe 1</h3>
                            <p>Get inspired with our collection of mouth-watering dishes.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded"
                            style={{ height: "80vh" }}
                            src={img2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Healthy Recipe 2</h3>
                            <p>Discover our selection of nutritious and delicious meals.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded"
                            style={{ height: "80vh" }}
                            src={img3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Elevate Your Cooking Game</h3>
                            <p>Learn new techniques and recipes from our team of experts.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>
    );
};

export default Header;