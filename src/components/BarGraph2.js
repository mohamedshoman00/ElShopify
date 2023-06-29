import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import BarItem from "./BarItem";
import { Container } from "react-bootstrap";

const BarGraph2 = () => {
  return (
    <>
      <Container fluid className="p-0 m-0 ms-3 d-flex mt-2 flex-column pe-2">
        <BarItem wid="90%" val="1" />
        <BarItem wid="90%" val="1" />
        <BarItem wid="90%" val="1" />
        <BarItem wid="90%" val="1" />
      </Container>
    </>
  );
};

export default BarGraph2;
