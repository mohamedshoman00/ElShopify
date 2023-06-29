import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import BarItem from "./BarItem";
import { Container } from "react-bootstrap";

const BarGraph1 = () => {
  return (
    <>
      <Container fluid className="p-0 m-0 ms-3 d-flex mt-2 flex-column pe-2">
        <BarItem wid="75%" val="AED 100k" />
        <BarItem wid="50%" val="AED 100k" />
        <BarItem wid="25%" val="AED 100k" />
        <BarItem wid="10%" val="AED 100k" />
      </Container>
    </>
  );
};

export default BarGraph1;
