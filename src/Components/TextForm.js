import React, { useState, useEffect } from "react";

const TextForm = (props) => {
  const [text, setText] = useState(""); // Default value
  const [showText, setShowText] = useState(""); // To store the text temporarily
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const [timer, setTimer] = useState(null); // State to hold the timer ID

  const handleUPClick = () => {
    // Convert text to upper case
    console.log("Upper case button clicked: " + text);
    let newText = text.toUpperCase(); // Change to upper case
    setText(newText);
    setShowText(newText); // Update the shown text to the new upper-case text
    startTimer(); // Start the timer to clear out the shown text
  };

  const handleLowClick = () => {
    // Convert text to lower case
    console.log("Lower case button clicked: " + text);
    let newText = text.toLowerCase(); // Change to lower case
    setText(newText);
    setShowText(newText); // Update the shown text to the new lower-case text
    startTimer(); // Start the timer to clear out the shown text
  };

  const handleClearClick = () => {
    let newText = ""; //clear the written piece
    setText(newText);
  };

  const handleOnChange = (event) => {
    // Handle text change
    console.log("Text changed: ", event.target.value);
    setText(event.target.value);
    setShowText(event.target.value); // Immediately show what the user is typing.
    startTimer(); // Start the timer to clear the shown text
  };

  const startTimer = () => {
    // Clear the previous timer if it exists
    if (timer) {
      clearTimeout(timer);
    }

    // Set a new timer for 5 minutes (300000 ms)
    const newTimer = setTimeout(() => {
      setShowText(""); // Clear the shown text after 5 minutes
    }, 300000);

    // Update the timer state with the new timer ID
    setTimer(newTimer);
  };

  useEffect(() => {
    // Clear the timeout when the component unmounts or when the timer changes
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  const handleCopy = () => {
    console.log("i am Copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleInverseClick = () => {
    console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
  };

  const undo = () => {
    let item = localStorage.getItem(1, text);
    setText(item);
  };
  const countVowels = () => {
    const vowels = text.match(/[aeiouAEIOU]/g);
    const count = vowels ? vowels.length : 0;
    alert(`Number of vowels: ${count}`);
  };
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <form>
          <h1 className="mt-2">{props.top}</h1>
          <div className="mb-3 mt-4">
            {/* style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "gray" : "white",
            }}*/}

            <textarea
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "gray" : "white",
              }}
              className="form-control"
              id="myBox"
              value={text}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={handleUPClick}
          >
            Convert to upper-case
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleLowClick}
          >
            Convert to lower-case
          </button>

          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={handleClearClick}
          >
            Mamla khatam
          </button>

          <button
            type="submit"
            onClick={speak}
            className="btn btn-warning mx-2 my-2"
          >
            Speak
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={handleCopy}
          >
            Copy text
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={handleInverseClick}
          >
            Inverse Text
          </button>
          <button type="button" className="btn btn-primary mx-2" onClick={undo}>
            Undo
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={countVowels}
          >
            CountVowels
          </button>
        </form>

        {/* Show the text that is currently inputted */}
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your text Summary.</h1>

        <p>
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and{" "}
          {text.replace(/\s+/g, "").length} characters (excluding spaces).
        </p>
        <p>
          Estimated reading time:{" "}
          {text.trim() === ""
            ? 0
            : 0.008 * text.trim().split(/\s+/).length * 60}{" "}
          seconds
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something here to preview it"}</p>
      </div>
    </>
  );
};

export { TextForm };
