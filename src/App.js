import "./App.css";
import { Navbar } from "./Components/Navbar";
import { TextForm } from "./Components/TextForm";
import { Thanks } from "./Components/Thanks";
import { useState, useEffect } from "react";
import { Alert } from "./Components/Alert";
//import { About } from "./Components/About";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, typ: type });
  };

  // Clear alert after 3 seconds
  useEffect(() => {
    if (alert) {
      const timerId = setTimeout(() => {
        setAlert(null);
      }, 3000);
      return () => clearTimeout(timerId);
    }
  }, [alert]);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042723"; // Dark mode background
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = "textUtils-Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f8f9fa"; // Light mode background
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      document.title = "textUtils-Light mode";
    }
  };

  const togglePinkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#FFC0CB"; // Pink mode background
      document.body.style.color = "white";
      showAlert("Pink mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f8f9fa"; // Light mode background
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        home="Home"
        mode={mode}
        toggleMode={toggleMode}
        le
        togglePinkMode={togglePinkMode}
      />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes>  
          <Route  
            exact  
            path="/"  
            element={<TextForm top={"Enter Your Text Here"} mode={mode} />}  
          />  
          <Route exact path="/about" element={<About />} />  
        </Routes> */}

        {/* Keeping the TextForm component here */}

        <TextForm top={"Enter Your Text Here"} mode={mode} />
      </div>
      <Thanks thanks="Thank you for using our solution!!!!" />
      {/* </Router> */}
    </>
  );
}

export default App;
