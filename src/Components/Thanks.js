import React from "react";

const Thanks = (props) => {
  return (
    <div>
      <div
        className="card mx-auto "
        style={{
          height: "30px",
          width: "500px",
          padding: "20px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <p className="card-text">{props.thanks}</p>
      </div>
    </div>
  );
};

export { Thanks };
