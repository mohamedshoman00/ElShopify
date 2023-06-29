import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import BarItem from "./BarItem";
import { Container } from "react-bootstrap";

const BarGraph3 = () => {
  return (
    <>
      <Container fluid className="p-0 m-0 ms-3 d-flex mt-2 flex-column pe-2">
        <BarItem wid="80%" val="16" />
        <BarItem wid="40%" val="4" />
      </Container>
    </>
  );
};

export default BarGraph3;
