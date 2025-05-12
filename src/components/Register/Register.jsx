import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  return (
    <Container className="mb-5">
      <h1 className="text-center mt-3">Register</h1>
      <hr />
      <Form className="m-auto" style={{ width: "300px" }}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <p>
          Already has an account?{" "}
          <Link style={{ color: "#21e1ff" }} to={"/login"}>
            Login
          </Link>
        </p>
        <div className="text-center">
          <Button variant="dark" type="submit">
            Register
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Register;
