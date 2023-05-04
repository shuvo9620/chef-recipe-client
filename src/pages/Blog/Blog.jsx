import React from 'react';
import ReactToPdf from 'react-to-pdf';
import { Card, Button } from 'react-bootstrap';

const Blog = () => {
    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [8.27, 11.69],
        scale: 0.5
    };

    const divStyle = {
        backgroundColor: '#F7CAC9',
        padding: '20px'
    };

    return (
        <div className='mt-5 w-75 mx-auto' style={divStyle}>
            <div ref={ref}>
                <Card className="mt-4">
                    <Card.Header>
                        Q. Tell us the differences between uncontrolled and controlled components.
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            A. Uncontrolled components manage their own state and behavior internally and are self-contained, while controlled components rely on external state management and behavior control and receive their state and behavior as props from a parent component. Controlled components are more flexible and suitable for complex forms, data grids, and interactive visualizations.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mt-4">
                    <Card.Header>
                        Q. How to validate React props using PropTypes?
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            A. To validate React props using PropTypes, define a 'propTypes' object that specifies the expected types and shapes of the props, use your component and pass in the props, and React will validate that the props match the expected types and shapes.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mt-4">
                    <Card.Header>
                        Q.  Tell us the difference between nodejs and express js.
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            A.  Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a framework for building web applications in Node.js. Node.js provides the foundation for building server-side applications in JavaScript, while Express.js builds on top of Node.js by providing an easy-to-use set of features for building web applications.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mt-4">
                    <Card.Header>
                        Q.  What is a custom hook, and why will you create a custom hook?
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            A.  A custom hook is a reusable function in React that allows you to share logic between multiple components. It can be used to avoid code duplication, abstract complex logic, or encapsulate stateful logic that needs to be shared between multiple components.
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
            <div className='mt-3 text-center'>
                <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} x={.5} y={.5} scale={0.8}>
                    {({ toPdf }) => (
                        <Button onClick={toPdf}>Generate pdf</Button>
                    )}
                </ReactToPdf>
            </div>
        </div>
    );
};

export default Blog;
