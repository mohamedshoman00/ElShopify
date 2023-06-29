import React from "react";
import { Container } from "react-bootstrap";

const DeadTemp = () => {
  return (
    <Container
      fluid
      className="p-0 ps-4 pt-3 d-flex justify-content-center align-items-center h-75"
    >
      <h6 className="w-100 p-3 px-0 text-center">
        There was no data found for this date range.
      </h6>
    </Container>
  );
};

export default DeadTemp;
