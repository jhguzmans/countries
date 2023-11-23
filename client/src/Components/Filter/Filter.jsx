import { useDispatch, useSelector } from "react-redux";
import {
  filter_activity,
  filter_continent,
  clear_filters,
} from "../../redux/actions";
import { useState, useEffect } from "react";
import styles from "../Filter/Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const filteredActivity = useSelector((state) => state.filteredActivity);
  const filteredContinent = useSelector((state) => state.filteredContinent);
  const sorted = useSelector((state) => state.sorted);
  const activitiesDB = useSelector((state) => state.activities);
  const [activities, setActivities] = useState([]);
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    let newActivities = [];

    if (!filteredContinent[0]) {
      console.log("Entra al if");
      for (let i = 0; i < activitiesDB.length; i++) {
        newActivities.push(activitiesDB[i].name);
      }
    } else {
      console.log("Entra al else");
      newActivities = Array.from(
        new Set(
          filteredContinent
            .flatMap((country) =>
              country.Activities.map((activity) => activity.name)
            )
            .filter(Boolean)
        )
      );
    }

    setActivities(newActivities);
  }, [filteredContinent, allCountries]);

  useEffect(() => {
    const uniqueRegions = new Set();

    if (filteredActivity[0]) {
      filteredActivity.forEach((country) => {
        uniqueRegions.add(country.region);
      });
      setContinents([...uniqueRegions]);
    } else {
      allCountries.forEach((country) => {
        uniqueRegions.add(country.region);
      });
      setContinents([...uniqueRegions]);
    }
  }, [allCountries, filteredActivity]);
  const handleSelectActivity = (event) => {
    const selectedActivity = event.target.value;
    if (filteredContinent && filteredActivity) {
      if (!sorted[0]) {
        dispatch(filter_activity(selectedActivity, allCountries));
      } else {
        dispatch(filter_activity(selectedActivity, sorted));
      }
    }
    if (!filteredContinent[0]) {
      if (!sorted[0]) {
        dispatch(filter_activity(selectedActivity, allCountries));
      } else {
        dispatch(filter_activity(selectedActivity, sorted));
      }
    } else {
      if (!sorted[0]) {
        dispatch(filter_activity(selectedActivity, filteredContinent));
      } else {
        dispatch(filter_activity(selectedActivity, sorted));
      }
    }
  };
  const handleSelectContinent = (event) => {
    const selectedActivity = event.target.value;
    if (filteredContinent && filteredActivity) {
      if (!sorted[0]) {
        dispatch(filter_continent(selectedActivity, allCountries));
      } else {
        dispatch(filter_continent(selectedActivity, sorted));
      }
    }
    if (!filteredActivity[0]) {
      if (!sorted[0]) {
        dispatch(filter_continent(selectedActivity, allCountries));
      } else {
        dispatch(filter_continent(selectedActivity, sorted));
      }
    } else {
      if (!sorted[0]) {
        dispatch(filter_continent(selectedActivity, filteredActivity));
      } else {
        dispatch(filter_continent(selectedActivity, sorted));
      }
    }
  };
  const handleClearFilters = () => {
    dispatch(clear_filters(allCountries));
  };
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="">
        Filtro por actividad:{" "}
      </label>
      <select
        className={styles.select}
        id="activities"
        onChange={handleSelectActivity}
      >
        <option value="Todos">Todos</option>
        {activities.map((type, i) => (
          <option key={i} value={type}>
            {type}
          </option>
        ))}
      </select>
      <label className={styles.label} htmlFor="">
        Filtro por continente:{" "}
      </label>
      <select
        className={styles.select}
        id="continent"
        onChange={handleSelectContinent}
      >
        <option value="Todos">Todos</option>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
      <button className={styles.button} onClick={handleClearFilters}>
        Limpiar Filtros
      </button>
    </div>
  );
};

export default Filter;
