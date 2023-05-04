import React from 'react';
import { useRouteError } from 'react-router-dom';
import error404 from './assets/images/error.jpg';
import { Card } from 'react-bootstrap';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
           <Card.Img style={{height:'1000px'}} src={error404}></Card.Img>
            <p className='text-center'>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
};

export default ErrorPage;