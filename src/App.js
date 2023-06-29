import { Col, Container } from "react-bootstrap";
import "./App.css";
import Charts from "./components/Charts";
import Test from "./components/Graph1";
import NavigationExample from "./components/siedbar";
import Topbar from "./components/TopBar";
import { useEffect } from "react";
function App() {
  return (
    <>
      <Topbar />
      <Container
        fluid
        className="w-100 p-0 m-0 d-flex"
        style={{ position: "relative" }}
      >
        <Col c style={{ position: "relative" }}>
          <div
            className="mt-5 pt-2"
            style={{ position: "fixed", left: 0, top: 0 }}
          >
            <NavigationExample />
          </div>
        </Col>
        <Container
          fluid
          className="w-100 p-0 m-0 d-flex align-items-end justify-content-end flex-column pe-4"
        >
          <Charts />
        </Container>
      </Container>
    </>
  );
}

export default App;
