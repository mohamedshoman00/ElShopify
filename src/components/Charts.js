import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import SingleChart from "./SingleChart";
import Graph1 from "./Graph1";
import Graph2 from "./Graph2";
import { useState } from "react";
import DateBtnToday from "./DateBtnToday";
import CompareBtn from "./CompareBtn";
import OnlineStoreRate from "./OnlineStoreRate";
import DeadTemp from "./DeadTemp";
import BarGraph1 from "./BarGraph1";
import BarGraph2 from "./BarGraph2";
import BarGraph3 from "./BarGraph3";
import BarItem from "./BarItem";
import BarGraph0 from "./BarGraph0";

const Charts = () => {
  const today = new Date(new Date().setHours(0, 0, 0, 0));
  const yesterday = new Date(
    new Date(new Date().setDate(today.getDate() - 1)).setHours(0, 0, 0, 0)
  );

  const ranges = [
    {
      title: "Today",
      alias: "today",
      period: {
        since: today,
        until: today,
      },
    },
    {
      title: "Yesterday",
      alias: "yesterday",
      period: {
        since: yesterday,
        until: yesterday,
      },
    },
    {
      title: "Last 7 days",
      alias: "last7days",
      period: {
        since: new Date(
          new Date(new Date().setDate(today.getDate() - 7)).setHours(0, 0, 0, 0)
        ),
        until: yesterday,
      },
    },
    {
      title: "Last 30 days",
      alias: "last30days",
      period: {
        since: new Date(
          new Date(new Date().setDate(today.getDate() - 30)).setHours(
            0,
            0,
            0,
            0
          )
        ),
        until: yesterday,
      },
    },
    {
      title: "Last 90 days",
      alias: "last90days",
      period: {
        since: new Date(
          new Date(new Date().setDate(today.getDate() - 90)).setHours(
            0,
            0,
            0,
            0
          )
        ),
        until: yesterday,
      },
    },
    {
      title: "Last month",
      alias: "lastmonth",
      period: {
        since: new Date(
          new Date(new Date().setDate(today.getDate() - 30)).setHours(
            0,
            0,
            0,
            0
          )
        ),
        until: yesterday,
      },
    },
    {
      title: "Last year",
      alias: "lastyear",
      period: {
        since: new Date(
          new Date(new Date().setDate(today.getDate() - 365)).setHours(
            0,
            0,
            0,
            0
          )
        ),
        until: yesterday,
      },
    },
  ];
  const [activeDateRange, setActiveDateRange] = useState(ranges[0]);

  const EEData = [{ name: "Ele", data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] }];
  const [graphData, setGraphData] = useState([
    { name: "Jun 19", data: [1, 10, 30, 50, 1, 1, 1, 70, 1, 100] },
    { name: "Jun 20", data: [1, 10, 0, 0, 0, 15, 0, 0, 0, 0] },
  ]);

  const dailyData = [
    { date: "2023-06-01", value: 10 },
    { date: "2023-06-02", value: 20 },
    { date: "2023-06-03", value: 15 },
    { date: "2023-06-04", value: 25 },
    { date: "2023-06-05", value: 30 },
    { date: "2023-06-06", value: 35 },
    { date: "2023-07-01", value: 50 },
    { date: "2023-07-02", value: 40 },
    { date: "2023-07-03", value: 45 },
    { date: "2023-07-04", value: 55 },
    { date: "2023-07-05", value: 60 },
    { date: "2023-07-06", value: 65 },
    { date: "2024-01-01", value: 100 },
    { date: "2024-02-01", value: 110 },
    { date: "2024-03-01", value: 120 },
    { date: "2024-04-01", value: 130 },
    { date: "2024-05-01", value: 140 },
    { date: "2024-06-01", value: 150 },
  ];
  // console.log(activeDateRange);
  // return Days From range
  const startTime = new Date(activeDateRange.period.since);
  const endTime = new Date(activeDateRange.period.until);
  const [labels, setLabels] = useState([]);
  useEffect(() => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const diff = (end - start) / (1000 * 60 * 60 * 24); // difference in days

    const newLabels = [];
    for (let i = 0; i <= diff; i++) {
      const date = new Date(start.getTime() + i * 24 * 60 * 60 * 1000);
      newLabels.push(date.toLocaleDateString());
    }

    setLabels(newLabels);
  }, [activeDateRange]);
  // console.log(labels);
  //////////////////////////////////////

  const dataList = [
    // row 1
    {
      id: 1,
      title: "Total Sales",
      format: "AED 0.00 -",
      gData: [
        { name: "Jun 19", data: [1, 10, 30, 50, 1, 1, 1, 70, 1, 100] },
        { name: "Jun 20", data: [15, 0, 0, 0, 0, 100, 0, 0, 0, 0] },
      ],
      child: <Graph1 graphData={graphData} />,
    },
    {
      title: "Returning customer rate",
      format: "16.13% -",
      child: <Graph2 />,
    },
    {
      title: "Average order value",
      format: "AED 0.00 -",
      child: <Graph1 graphData={graphData} />,
    },
    // row 2
    {
      title: "Online store sessions",
      format: "20 -",
      child: <Graph1 graphData={graphData} />,
    },
    {
      title: "Total orders",
      format: "34 -",
      child: <Graph1 graphData={graphData} />,
    },
    {
      title: "Sales by channel",
      // format: "E£0.00",
      child: <BarGraph1 graphData={graphData} />,
    },
    // row 3
    {
      title: "Online store conversion rate",
      format: "0% -",
      child: <OnlineStoreRate />,
    },
    {
      title: "Top selling products",
      // format: "E£0.00",
      child: <BarGraph2 />,
    },
    {
      title: "Customer analysis",
      // format: "E£0.00",
      child: <DeadTemp />,
    },
    // row 4
    {
      title: "Sales attributed to marketing",
      // format: "AED0.00 -",
      child: <DeadTemp />,
    },
    {
      title: "Sessions by location",
      // format: "E£0.00",
      child: <BarGraph2 />,
    },
    {
      title: "Sessions by device type",
      // format: "E£0.00",
      child: <BarGraph3 />,
    },
    // row 5
    {
      title: "Total Sales",
      // format: "AED0.00 -",
      child: <DeadTemp />,
    },
    {
      title: "Sales by channel",
      // format: "E£0.00",
      child: <DeadTemp />,
    },
    {
      title: "Online store conversion rate",
      // format: "E£0.00",
      child: <DeadTemp />,
    },
    // row 6
    {
      title: "Session by traffic source",
      // format: "AED0.00 -",
      child: <BarGraph0 wid="80%" val="20" />,
    },
    {
      title: "Sales by traffic source",
      format: "E£0.00",
      child: <BarGraph0 wid="50%" val="5" />,
    },
    {
      title: "Online store conversion rate",
      // format: "E£0.00",
      child: <DeadTemp />,
    },
    // row 7
    {
      title: "Total Sales",
      // format: "AED0.00 -",
      child: <DeadTemp />,
    },
    {
      title: "Sales by channel",
      // format: "E£0.00",
      child: <DeadTemp />,
    },
  ];

  return (
    <Container
      fluid
      className="p-4 m-0 col-10 mb-2 pe-0 ps-5 d-flex flex-wrap justify-content-center"
      style={{ background: "#f1f2f4", minHeight: "100vh", width: "88%" }}
    >
      <Container fluid className="p-0 m-0 w-100 p-2 px-4">
        <div className="head d-flex justify-content-between align-items-center">
          <h1 className="w-100 fs-4">Analytics</h1>
          <div className="head-side d-flex align-items-center gap-4">
            <p className="m-0">Customize</p>
            <p className="d-flex align-items-center justify-content-center gap-2 m-0">
              <i className="fa-solid fa-expand me-1"></i> Fullscreen
            </p>
          </div>
        </div>
      </Container>
      <Container
        fluid
        className="p-2 px-4 m-0 w-100 d-flex justify-content-between align-items-center"
      >
        <div className="d-flex gap-4 ms-1">
          <DateBtnToday
            today={today}
            yesterday={yesterday}
            activeDateRange={activeDateRange}
            setActiveDateRange={setActiveDateRange}
            ranges={ranges}
          />
          <CompareBtn />
        </div>
        <div className="d-flex gap-3 justify-content-end align-items-center">
          <div className="d-flex gap-2 justify-content-center align-items-center">
            <input type="checkbox" className="mt-1" style={{ width: "15px" }} />
            <p className="p-0 m-0">Auto-refresh</p>
          </div>
          <i
            className="fa-solid fa-circle-question"
            style={{
              fontSize: "18px",
            }}
          ></i>
        </div>
      </Container>
      <Container
        fluid
        className="p-0 m-0 w-100 d-flex flex-wrap justify-content-start"
      >
        {dataList.map((ele, i) => (
          <SingleChart item={ele} key={i} />
        ))}
        {/* <SingleChart item={dataList[0]} /> */}
        {/* row 1 */}
        {/* <SingleChart titles={dataList[0]}> */}
        {/* <Graph1 graphData={graphData} /> */}
        {/* </SingleChart> */}
        {/* <SingleChart>
          <Graph2 />
        </SingleChart>
        <SingleChart graphData={graphData}>
          <Graph1 graphData={graphData} />
        </SingleChart> */}
        {/* row 2 */}
        {/* <SingleChart>
          <OnlineStoreRate />
        </SingleChart>
        <SingleChart graphData={EEData}>
          <Graph1 graphData={EEData} />
        </SingleChart>
        <SingleChart graphData={EEData}>
          <Graph1 graphData={EEData} />
        </SingleChart> */}
        {/* row 3 */}
        {/* <SingleChart>
          <DeadTemp />
        </SingleChart>
        <SingleChart>
          <DeadTemp />
        </SingleChart>
        <SingleChart>
          <DeadTemp />
        </SingleChart> */}
        {/* row 4 */}
        {/* <SingleChart>
          <DeadTemp />
        </SingleChart>
        <SingleChart>
          <DeadTemp />
        </SingleChart>
        <SingleChart>
          <DeadTemp />
        </SingleChart> */}
        {/* row 5 */}
        {/* <SingleChart>
          <DeadTemp />
        </SingleChart>
        <SingleChart>
          <DeadTemp />
        </SingleChart>
        <SingleChart>
          <DeadTemp />
        </SingleChart> */}
        {/* row 6 */}
        {/* <SingleChart>
          <DeadTemp />
        </SingleChart>
        <SingleChart>
          <DeadTemp />
        </SingleChart>
        <SingleChart>
          <DeadTemp />
        </SingleChart> */}
        {/* row 7 */}
        {/* <SingleChart>
          <DeadTemp />
        </SingleChart>
        <SingleChart>
          <DeadTemp />
        </SingleChart> */}
      </Container>
    </Container>
  );
};

export default Charts;
