//import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <img
        src="https://i.pinimg.com/originals/11/7a/7e/117a7ebb9c27b1e7cf6c925c86c1955f.jpg"
        alt="background"
      />
      <button>
        <Link to="/home">Home</Link>
      </button>
    </div>
  );
};

export default Landing;
