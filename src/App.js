import React, { useState } from "react";
import "./App.css";
import { Alert } from "./Componens/Alert";
import Navbar from "./Componens/Navbar";
import Textarea from "./Componens/Textarea";

function App() {
  const [mode, setmode] = useState("#fff");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null)
    }, 1500);
  };

  const toggleTheme = (theme) => {
    setmode(theme);
  };
  const Theme = {
    backgroundColor: mode,
    color: mode==="#fff" ? "#000" : "#FFF",
    height : window.innerWidth < 992 ? "fit-content" : "100vh"
  }

  return (
    <div style={Theme}>

      <Navbar
        title="TextHandler"
        about="About us"
        mode={mode}
        toggleMode={toggleTheme}
        setAlert={showAlert}
      />

      <Alert alert={alert} />

      <div className="container">
        <Textarea setAlert={showAlert} mode={mode}/>
      </div>
    </div>
  );
}

export default App;
