import React, { useState } from "react";
import { useSpeechSynthesis } from 'react-speech-kit';

export default function Textarea(props) {
  const [text, settext] = useState("");
  const { speak } = useSpeechSynthesis();

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

  const handletcEvent = (e) => {
    e.preventDefault();
    if (text !== "") {
      let newText = text.toLowerCase().split(" ").map((word) => {
        return (word.charAt(0).toUpperCase() + word.slice(1));

      }).join(" ")
      settext(newText);
  
      
    } else {
      props.setAlert(
        "Please type somthing in textbox in order to perform this task",
        "Warning"
      );
    }
  }

  // function for remove extra spaces in text 
  const handleextraspaceEvent = (e) => {
    e.preventDefault();
    if (text !== "") {
      let newtext = text.replace(/\s+/g,' ').trim()
      settext(newtext);
    }
  }

  // handle speak function 
  const handlespeakEvent = (e) => {
    e.preventDefault();
    if (text !== "") {
      speak({ text: text });
    }
  }


  return (
    <div >
      <form>
        <div className="form-group">
          <h2 className="mt-3 mb-3">Enter the Text to Analyze</h2>
          <textarea
            className="form-control"

            id="exampleFormControlTextarea1"
            rows={window.innerWidth < 992 ? "7" : "10"}
            value={text}
            onChange={updateText}
          ></textarea>
          <div className="convertBtns">
            <button
              className={`btn btn-primary ${window.innerWidth < 992 ? "mt-2" : "mt-3"}  me-3`}
              onClick={handleupEvent}
            >
              Convert to UpperCase
            </button>
            <button
              className={`btn btn-secondary ${window.innerWidth < 992 ? "mt-2" : "mt-3"}   me-3`}
              onClick={handledownEvent}
            >
              Convert to LowerCase
            </button>
            <button
              className={`btn btn-dark ${window.innerWidth < 992 ? "mt-2" : "mt-3"}   me-3`}
              onClick={handletcEvent}
            >
              Title Case
            </button>
            <button
              className={`btn btn-info ${window.innerWidth < 992 ? "mt-2" : "mt-3"}   me-3`}
              onClick={handleextraspaceEvent}
            >
              To Remove extra Spaces 
            </button>

            <button
              className={`btn btn-warning ${window.innerWidth < 992 ? "mt-2" : "mt-3"}   me-3`}
              onClick={handlespeakEvent}
            >
              Speak
            </button>

            <button
              className={`btn btn-success ${window.innerWidth < 992 ? "mt-2" : "mt-3"}   me-3`}
              onClick={handleCopy}
            >
              Copy Text
            </button>
            <button
              className={`btn btn-danger ${window.innerWidth < 992 ? "mt-2" : "mt-3"}   me-3`}
              onClick={handleclearEvent}
            >
              Clear Text
            </button>
          </div>
        </div>
      </form>
      <div className="container mt-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/)
            .filter((e) => {
            return e.length !== 0
          }).length} Words , {text.length}{" "}
          Characters
        </p>
        <p>{0.008 * text.split(" ").length} minute to read</p>
        <h3>Preview</h3>
        <p className="mb-0 pb-3">{text !== "" ? text : "Enter your text....."}</p>
      </div>
    </div>
  );
}
