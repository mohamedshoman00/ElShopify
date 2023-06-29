import React from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

const OnlineStoreRate = () => {
  return (
    <Container fluid className=" p-0 pt-2 mt-2">
      <ListGroup>
        <ListGroupItem className="d-flex justify-content-between align-items-center pb-4">
          <div>
            <h4>Added to Cart</h4>
            <h6>0 sessions</h6>
          </div>
          <div>
            <h6>0.00%</h6>
          </div>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between align-items-center pb-4">
          <div>
            <h4>Added to Cart</h4>
            <h6>0 sessions</h6>
          </div>
          <div>
            <h6>0.00%</h6>
          </div>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between align-items-center pb-4">
          <div>
            <h4>Added to Cart</h4>
            <h6>0 sessions</h6>
          </div>
          <div>
            <h6>0.00%</h6>
          </div>
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
};

export default OnlineStoreRate;
