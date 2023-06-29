import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Graph2 = () => {
  const [state, setstate] = useState({
    options: {
      chart: {
        id: "apexchart-example",
        zoom: {
          enabled: false,
        },
        // dropShadow: {
        //   enabled: true,
        //   color: "#000",
        //   top: 18,
        //   left: 7,
        //   blur: 10,
        //   opacity: 0.2,
        // },
        toolbar: {
          show: false,
        },
        // stacked: true,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#7153ee", "#9E9E9E"],
      stroke: {
        show: true,

        curve: "smooth",
        // lineCap: "butt",
        // colors: ["red", "green", "blue"],
        width: 2,
        dashArray: 0,
        // width: 1,
      },
      fill: {
        // type: "gradient",
        // gradient: {
        //   shadeIntensity: 1,
        //   inverseColors: false,
        //   opacityFrom: 1,
        //   opacityTo: 0,
        //   stops: [0, 90, 100],
        // },
      },
      // grid: {
      //   borderColor: "#e7e7e7",
      //   row: {
      //     colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      //     opacity: 0.5,
      //   },
      // },
      // markers: {
      //   size: 0,
      // },
      xaxis: {
        // categories: [
        //   "1:00AM",
        //   "2:00AM",
        //   "3:00AM",
        //   "4:00AM",
        //   "5:00AM",
        //   "6:00AM",
        //   "7:00AM",
        //   "8:00AM",
        //   "9:00AM",
        //   "10:00AM",
        //   "11:00AM",
        //   "12:00PM",
        // ],
      },
      legend: {
        // position: "top",
        horizontalAlign: "right",
        // floating: true,
        // offsetY: -25,
        // offsetX: -5,
      },
    },
    series: [
      {
        name: "Jun 19",
        data: [0, 40, 35, 50, 49, 60, 70, 91, 125, 0, 0, 0],
      },
    ],
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  });
  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="area"
      width="100%"
      height="300px"
    />
  );
};

export default Graph2;
