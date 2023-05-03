import React, { lazy, Suspense } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LazyCardImg = lazy(() => import('react-bootstrap/CardImg'));

const ChefsCard = ({ chef }) => {
  const { id, name, experience, recipes, likes, picture } = chef;
  console.log(id);
  return (
    <Container>
      <Card>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyCardImg style={{height: '300px'}} variant="top" src={picture} />
        </Suspense>
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>
            <p>Years of experience: {experience}</p>
            <p>Number of recipes: {recipes}</p>
            <p>Likes: {likes}</p>
          </Card.Text>
          <Link to={`/chef/${id}`}>
            <Button variant="primary">View Recipes</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ChefsCard;