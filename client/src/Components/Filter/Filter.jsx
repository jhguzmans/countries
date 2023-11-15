import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { filter_activity, filter_continent } from "../../redux/actions";
const URL = `http://localhost:3001/activities`;

const Filter = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const filtered = useSelector((state) => state.filtered);
  const sorted = useSelector((state) => state.sorted);
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    const getActivities = async () => {
      try {
        const { data } = await axios.get(URL);
        setActivities(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getActivities();
  }, []);

  let activitiesArr = [];
  for (let i = 0; i < activities.length; i++) {
    activitiesArr.push(activities[i].name);
  }

  const handleSelectActivity = (event) => {
    const selectedActivity = event.target.value;
    if (!sorted[0]) {
      dispatch(filter_activity(selectedActivity, allCountries));
    } else {
      dispatch(filter_activity(selectedActivity, sorted));
    }
  };
  const handleSelectContinent = (event) => {
    const selectedActivity = event.target.value;
    if (!sorted[0]) {
      dispatch(filter_continent(selectedActivity, allCountries));
    } else {
      dispatch(filter_continent(selectedActivity, sorted));
    }
  };

  return (
    <div>
      <label htmlFor="">Filtro por actividad: </label>
      <select id="activities" onChange={handleSelectActivity}>
        {activitiesArr.map((type, i) => (
          <option key={i} value={type}>
            {type}
          </option>
        ))}
      </select>
      <label htmlFor="">Filtro por continente: </label>
      <select id="continent" onChange={handleSelectContinent}>
        <option value="Americas">Americas</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Antarctic">Antartic</option>
        <option value="Africa">Africa</option>
      </select>
    </div>
  );
};

export default Filter;
