import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  const changeTheme = (e) => {
    if (e.target.name === "#282727de") {
      props.toggleMode("#282727de");
    } else if (e.target.name === "#fff") {
      props.toggleMode("#fff");
    }else if (e.target.name === "#00001c") {
      props.toggleMode("#00001c");
    }else if (e.target.name === "#7a7b81") {
      props.toggleMode("#7a7b81");
    }else if (e.target.name === "#083429") {
      props.toggleMode("#083429");
    }else if (e.target.name === "#6a0000") {
      props.toggleMode("#6a0000");
    }else if (e.target.name === "#ff8801") {
      props.toggleMode("#ff8801");
    }else if (e.target.name === "#00a9e3") {
      props.toggleMode("#00a9e3");
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg  navbar-${
        props.mode === "dark" ? "light" : "dark"
      } bg-${props.mode === "dark" ? "light" : "dark"}`}
    >
      <div className="container-fluid">
          <a className="navbar-brand" href="/">
        <h3 className="mb-0">
            {props.title}
        </h3>
          </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
          </ul>

          <button
            type="button"
            className="btn me-3 ps-2 pe-2 border border-light mb-2"
            style={{ backgroundColor: "#000068", color: "white" }}
            onClick={changeTheme}
            name="#00001c"
          >
            Theme1
          </button>
          <button
            type="button"
            className="btn btn-secondary me-3  ps-2 pe-2 border border-light mb-2"
            onClick={changeTheme}
            name="#7a7b81"
          >
            Theme2
          </button>
          <button
            type="button"
            className="btn btn-success me-3  ps-2 pe-2 border border-light mb-2"
            onClick={changeTheme}
            name="#083429"
          >
            Theme3 
          </button>
          <button
            type="button"
            className="btn btn-danger me-3  ps-2 pe-2 border border-light mb-2"
            onClick={changeTheme}
            name="#6a0000"
          >
            Theme4
          </button>
          <button
            type="button"
            className="btn btn-warning me-3  ps-2 pe-2 border border-light mb-2"
            onClick={changeTheme}
            name="#ff8801"
          >
            Theme5
          </button>
          <button
            type="button"
            className="btn btn-info me-3  ps-2 pe-2 border border-light mb-2"
            onClick={changeTheme}
            name="#00a9e3"
          >
            Theme6
          </button>
          <button
            type="button"
            className="btn btn-light me-3  ps-2 pe-2 border border-light mb-2"
            onClick={changeTheme}
            name="#fff"
          >
            Theme7
          </button>
          <button
            type="button"
            className="btn btn-dark me-3  ps-2 pe-2 border border-light mb-2"
            style={{ backgroundColor: "#282727de", color: "white" }}
            onClick={changeTheme}
            name="#282727de"
          >
            Theme8
          </button>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "TextHandlersD",
  about: "About",
};

export default Navbar;
