import { Container, Row, Col, Card } from "react-bootstrap";
import books from "../data";

const SingleBook = (prop) => (
  <Container>
    <Row>
      <Col xs={12} md={6}>
        {books.slice(prop.number, 1).map((book) => (
          <Card id={book.asin} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={book.img}style={{ width: "18rem" }} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.category}</Card.Text>
              <Card.Text>{book.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Row>
  </Container>
);

export default SingleBook;
