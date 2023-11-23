//import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountries, getActivities } from "../../redux/actions";

import style from "./Landing.module.css";

const Landing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);
  return (
    <div className={style.Landing}>
      <img
        src="https://i.pinimg.com/originals/11/7a/7e/117a7ebb9c27b1e7cf6c925c86c1955f.jpg"
        alt="background"
      />
      <button>
        <Link to="/home">Ingresar</Link>
      </button>
    </div>
  );
};

export default Landing;
