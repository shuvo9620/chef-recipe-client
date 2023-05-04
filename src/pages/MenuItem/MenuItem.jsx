import React, { Suspense, lazy } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
const LazyCardImg = lazy(() => import('react-bootstrap/CardImg'));

const MenuItem = ({ menu }) => {
    const { recipe } = menu;
    return (
        <Container>
            {
                recipe.map(recp => <Card className='mb-4'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyCardImg style={{ height: '300px' }} variant="top" src={recp.food_image} />
                    </Suspense>
                    <Card.Body>
                        <Card.Title>Name: {recp.name}</Card.Title>
                        <Button variant="primary">Buy Food</Button>
                    </Card.Body>
                </Card>)
            }

        </Container>
    );
};

export default MenuItem;