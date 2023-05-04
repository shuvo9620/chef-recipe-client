import { Form, Button, Container } from 'react-bootstrap';

function NewsLetter() {
  return (
    <Container className="text-center">
      <h3>Subscribe to our Newsletter</h3>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter your email address</Form.Label>
          <Form.Control className='mb-3' type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Subscribe
        </Button>
      </Form>
    </Container>
  );
}

export default NewsLetter;
