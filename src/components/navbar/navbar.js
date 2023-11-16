import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
const SELECTED_STYLE = {
  transform: "scale(1.1)",
  color: "#58A4B0"
}
const PROJECT_PATH = "/projects";
const HOME_PATH = "/"; 
const EXPERIENCE_PATH = "/experience";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to={HOME_PATH} style={location.pathname === HOME_PATH ? SELECTED_STYLE : {}} > Home </Link>
        <Link to={PROJECT_PATH} style={location.pathname === PROJECT_PATH ? SELECTED_STYLE : {}}> Projects </Link>
        <Link to={EXPERIENCE_PATH} style={location.pathname === EXPERIENCE_PATH ? SELECTED_STYLE : {}}> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;