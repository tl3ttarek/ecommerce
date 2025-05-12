import { Container } from "react-bootstrap";

function Contact() {
  return (
    <Container className="mb-5">
      <h1 className="text-center mt-3">Contact Us</h1>
      <hr />
      <div className="d-flex justify-content-center">
        <form style={{ width: "300px" }}>
          <div className="mb-3">
            <label htmlFor="exampleInputText" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputText"
              aria-describedby="emailHelp"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter Your Message"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Contact;
