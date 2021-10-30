import React from "react";

export const Alert = (props) => {
  const zIndex = {
    padding: "10px",
    position: "fixed",
    width: "100%"
  }
  return (
    props.alert && 
    <div className="alert alert-warning alert-dismissible fade show " role="alert" style={zIndex}>
        <strong>{props.alert.type} {props.alert.msg}</strong> 
      </div>
  );
};
