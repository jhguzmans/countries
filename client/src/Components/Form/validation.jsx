const validation = (activityData, errors, setErrors, event) => {
  switch (event.target.name) {
    case "name":
      if (
        !activityData.name ||
        activityData.name.length < 3 ||
        activityData.name.length > 25
      ) {
        setErrors({
          ...errors,
          name: "El nombre no es valido. Debe contener máximo 25 carácteres y mínimo 3",
        });
      } else {
        setErrors({
          ...errors,
          name: "",
        });
      }
      break;
    case "dificult":
      if (
        !activityData.dificult ||
        activityData.dificult < 1 ||
        activityData.dificult > 5
      ) {
        setErrors({
          ...errors,
          dificult: "La dificultad de la actividad debe estar entre 1 y 5",
        });
      } else {
        setErrors({
          ...errors,
          dificult: "",
        });
      }
      break;

    case "duration":
      if (activityData.duration > 49 || activityData.duration < 1) {
        setErrors({
          ...errors,
          duration: "la duración debe estar entre 1 y 48 horas",
        });
      } else {
        setErrors({
          ...errors,
          duration: "",
        });
      }
      break;
    case "season":
      if (!activityData.season || activityData.season == "seleccionar") {
        setErrors({
          ...errors,
          season: "Por favor seleccione una temporada",
        });
      } else {
        setErrors({
          ...errors,
          season: "",
        });
      }
      break;
    default:
      setErrors({
        ...errors,
      });
      break;
  }
};
export default validation;
