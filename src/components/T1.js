import React from "react";
import ReactDOM from "react-dom/client";
// import * as V from "victory";
import {
  VictoryArea,
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryPolarAxis,
  VictoryTheme,
} from "victory";
const T1 = () => {
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 15000 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];
  return (
    <>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" },
          }}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
          ]}
        />
      </VictoryChart>
    </>
  );
};

export default T1;
