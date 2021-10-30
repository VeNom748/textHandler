import React, { useState } from "react";

export default function Textarea(props) {
  const [text, settext] = useState("");

  const updateText = (e) => {
    settext(e.target.value);
  };

  const handleupEvent = (e) => {
    e.preventDefault();
    if (text !== "") {
      let newtext = text.toUpperCase();
      settext(newtext);
    } else {
      props.setAlert(
        "Please type somthing in textbox in order to perform this task",
        "Warning"
      );
    }
  };

  const handledownEvent = (e) => {
    e.preventDefault();
    if (text !== "") {
      let newtext = text.toLowerCase();
      settext(newtext);
    } else {
      props.setAlert(
        "Please type somthing in textbox in order to perform this task",
        "Warning"
      );
    }
  };

  const handleclearEvent = (e) => {
    e.preventDefault();
    if (text !== "") {
      settext("");
    } else {
      props.setAlert(
        "Please type somthing in textbox in order to perform this task",
        "Warning"
      );
    }
  };


  const handleCopy = (e) => {
    e.preventDefault();
      var text = document.getElementById("exampleFormControlTextarea1");
      text.select();
      document.execCommand("copy");
      props.setAlert("Copied", "Success");
    
  };


  return (
    <div >
      <form>
        <div className="form-group">
          <h2 className="mt-3 mb-3">Enter the Text to Analyze</h2>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={updateText}
          ></textarea>
          <div className="convertBtns">
            <button
              className="btn btn-primary  mt-3 mb-3 me-3"
              onClick={handleupEvent}
            >
              Convert to UpperCase
            </button>
            <button
              className="btn btn-secondary  mt-3 mb-3 me-3"
              onClick={handledownEvent}
            >
              Convert to LowerCase
            </button>

            <button
              className="btn btn-success  mt-3 mb-3 me-3"
              onClick={handleCopy}
            >
              Copy Text
            </button>
            <button
              className="btn btn-danger  mt-3 mb-3 me-3"
              onClick={handleclearEvent}
            >
              Clear Text
            </button>
          </div>
        </div>
      </form>
      <div className="container">
        <h2>Your Text Summary</h2>
        <p>
          {text.length > 0 ? text.split(" ").length : "0"} Words , {text.length}{" "}
          Characters
        </p>
        <p>{0.008 * text.split(" ").length} minute to read</p>
        <h3>Preview</h3>
        <p className="mb-0 pb-3">{text !== "" ? text : "Enter your text....."}</p>
      </div>
    </div>
  );
}
