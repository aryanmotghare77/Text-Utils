import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";
import Alert from "./components/Alert";
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type, // Fixed key name
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000); // Auto-dismiss after 3 seconds
  };

  const closeAlert = () => {
    setAlert(null); // Manually hide the alert
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "Text Utils - Dark Mode"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      // document.title = "Text Utils - Light Mode"
    }
  };



  return (
    <>
        <Navbar
          title="TextUtils2"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
      <BrowserRouter>
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
