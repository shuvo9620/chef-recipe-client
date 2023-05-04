import React, { useState } from 'react';
import { Button, Card, Container, Toast } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
const ViewRecipes = () => {
    const data = useLoaderData();
    const [favorite, setFavorite] = useState(null);
    const [showToast, setShowToast] = useState(false);

    const { name, experience, likes, picture, recipes, recipe } = data;
    const handleFavorite = recipeId => {
        setFavorite(recipeId);
        setShowToast(true);
    }

    return (
        <Container>
            <h2>view recipe</h2>
            <Card>
                <Card.Img src={picture}></Card.Img>
                <Card.Title> <span className='fw-b'>Chef Name:</span>{name}</Card.Title>
                <Card.Body>
                    <Card.Text><span className='fw-b'>Chef Experience:</span>{experience}</Card.Text>
                    <Card.Text><span className='fw-b'>Recipes:</span>{recipes}</Card.Text>
                    <Card.Text><span className='fw-b'>Reaction:</span>{likes}</Card.Text>
                </Card.Body>

            </Card>
            <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto mt-4 mb-4">
                {
                    recipe.map(recp => <Card className="text-center">
                        <Card.Body>
                            <Card.Title>{recp.name}</Card.Title>
                            <Card.Img src={recp.food_image}></Card.Img>
                            <Card.Text>
                                {recp.ingredients}
                            </Card.Text>
                            <Card.Text>
                                {recp.cookingMethod}
                            </Card.Text>
                            <Card.Text>
                                <FaThumbsUp></FaThumbsUp> {recp.rating}
                            </Card.Text>
                        </Card.Body>
                        <Button disabled={favorite === recp.id} onClick={() => handleFavorite(recp.id)} variant="success">Favorite</Button>
                    </Card>)

                }
            </div>
            {showToast && <Toast onClose={()=>setShowToast(false)}>
                    <Toast.Header>
                    </Toast.Header>
                    <Toast.Body>Set your favorite done</Toast.Body>
                </Toast>
            }

        </Container>
    );
};

export default ViewRecipes;