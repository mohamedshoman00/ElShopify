import React from "react";

const BarItem = ({ wid, val }) => {
  return (
    <div className="w-100 mb-2">
      <h4 className="fs-6 mb-2">title</h4>
      <div className="d-flex align-items-center w-100">
        <div
          className="char"
          style={{ background: `#7153ee`, height: "20px", width: wid }}
        ></div>
        <div className="ms-2">{val}</div>
      </div>
    </div>
  );
};

export default BarItem;
