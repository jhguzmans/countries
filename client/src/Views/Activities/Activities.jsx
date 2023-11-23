import Form from "../../Components/Form/Form";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCountries,
  getActivities,
  deleteActivity,
} from "../../redux/actions";
import styles from "./Activities.module.css";

const Activities = () => {
  const activities = useSelector((state) => state.activities);
  const [formCreate, setFormCreate] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();
  const handleCreate = () => {
    setFormCreate(!formCreate);
  };
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch, showMessage]);
  const handleDelete = async (id) => {
    dispatch(deleteActivity(id));

    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div>
      {showMessage && (
        <div className={styles.message}>
          Mensaje emergente: Actividad eliminada con éxito
        </div>
      )}

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dificultad</th>
            <th>Duración</th>
            <th>Temporada</th>
            <th>Países</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {activities &&
            activities[0] &&
            activities.map((activity) => (
              <tr key={activity.id}>
                <td>{activity.name}</td>
                <td>{activity.dificult}</td>
                <td>{activity.duration}</td>
                <td>{activity.season}</td>

                <td>
                  {activity.Countries &&
                    activity.Countries.map((country) => country.name).join(
                      ", "
                    )}
                </td>
                <td>
                  <button onClick={() => handleDelete(activity.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button className={styles.button} onClick={handleCreate}>
        {formCreate ? "Ocultar Formulario" : "Crear nueva actividad"}
      </button>
      {formCreate && <Form />}
    </div>
  );
};
export default Activities;
