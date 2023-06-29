import React from "react";
import { Container } from "react-bootstrap";
import Graph1 from "./Graph1";
import reportImg from "../assets/images/ReportMinor.svg";
import { RiBarChartBoxFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const SingleChart = ({ item, children }) => {
  return (
    <Container
      fluid
      className="col-4 m-0 px-0 ps-4 col-lg-4 col-md-6 col-sm-12 mb-4"
      style={{ height: "400px" }}
    >
      <Container
        fluid
        className="p-3 ps-0 m-0 my-2"
        style={{
          boxShadow: "inset 0px 0px 10px -7px rgba(0,0,0,1)",
          borderRadius: "15px",
          background: "#fff",
          boxSizing: "border-box",
          // maxHeight: "397px",
          height: "100%",
        }}
      >
        <div className="content ms-3 d-flex justify-content-between align-items-center pt-2">
          <div>
            <h2 className="fs-6 mb-2">{item?.title}</h2>
            {item.format && <h4 className="fs-5">{item?.format}</h4>}
          </div>
          <motion.div
            className="report d-flex justify-content-start align-items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <RiBarChartBoxFill />
            <p className="m-0">View Report</p>
          </motion.div>
        </div>
        {item.child}
      </Container>
    </Container>
  );
};

export default SingleChart;
