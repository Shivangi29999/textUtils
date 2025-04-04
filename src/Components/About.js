import React from "react";
import { useState } from "react";
const About = (props) => {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setBtnText] = useState("Enable Dark Mode");
  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark mode");
    }
  };

  return (
    <div
      className="accordion accordion-flush mt-30  container"
      id="accordionFlushExample"
      style={myStyle}
    >
      <div className="accordion-item" style={myStyle}>
        <h2 className="my-3">About Us</h2>
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
            style={myStyle}
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body" style={myStyle}>
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> className. This is the
            first item's accordion body.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
            style={myStyle}
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body" style={myStyle}>
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> className. This is the
            second item's accordion body. Let's imagine this being filled with
            some actual content.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
            style={myStyle}
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body" style={myStyle}>
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> className. This is the
            third item's accordion body. Nothing more exciting happening here in
            terms of content, but just filling up the space to make it look, at
            least at first glance, a bit more representative of how this would
            look in a real-world application.
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button
          type="button"
          onClick={toggleStyle}
          className="btn btn-primary my-2 bg-"
        >
          {props.btntext}
        </button>
      </div>
    </div>
  );
};
export { About };
