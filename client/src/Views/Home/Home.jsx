//import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Cards from "./../../Components/Cards/Cards";
import { getCountries } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  let currentCountries = useSelector((state) => state.currentCountries);
  return <div>{<Cards countries={currentCountries} />}</div>;
};
export default Home;
