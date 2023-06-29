import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import BarItem from "./BarItem";
import { Container } from "react-bootstrap";

const BarGraph0 = ({ wid, val }) => {
  return (
    <>
      <Container fluid className="p-0 m-0 ms-3 d-flex mt-2 flex-column pe-2">
        <BarItem wid={wid} val={val} />
      </Container>
    </>
  );
};

export default BarGraph0;
