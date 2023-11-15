const validation = (userData, errors, setErrors, event) => {
  const regexImage = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  switch (event.target.name) {
    case "image":
      if (!userData.image || !regexImage.test(userData.image)) {
        setErrors({
          ...errors,
          image: "El enlace ingresado no corresponde a una URL",
        });
      } else {
        setErrors({
          ...errors,
          image: "",
        });
      }
      break;
    case "name":
      if (
        !userData.name ||
        userData.name.length < 3 ||
        userData.name.length > 25
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
    case "life":
      if (!userData.life || userData.life < 20 || userData.life > 100) {
        setErrors({
          ...errors,
          life: "La vida debe estar entre 20 y 100",
        });
      } else {
        setErrors({
          ...errors,
          life: "",
        });
      }
      break;

    case "attack":
      if (userData.attack < 10 || userData.attack > 70) {
        setErrors({
          ...errors,
          attack: "El ataque debe estar entre 10 y 70",
        });
      } else {
        setErrors({
          ...errors,
          attack: "",
        });
      }
      break;

    case "defense":
      if (
        !userData.defense ||
        userData.defense < 50 ||
        userData.defense > 100
      ) {
        setErrors({
          ...errors,
          defense: "La defensa debe estar entre 50 y 100",
        });
      } else {
        setErrors({
          ...errors,
          defense: "",
        });
      }
      break;

    case "speed":
      if (userData.speed < 5 || userData.speed > 50) {
        setErrors({
          ...errors,
          speed: "La velocidad debe estar entre 5 y 50",
        });
      } else {
        setErrors({
          ...errors,
          speed: "",
        });
      }
      break;

    case "height":
      if (userData.height < 50 || userData.height > 200) {
        setErrors({
          ...errors,
          height: "La altura debe estar entre 50 y 200 centimetros",
        });
      } else {
        setErrors({
          ...errors,
          height: "",
        });
      }
      break;

    case "weight":
      if (userData.weight < 50 || userData.weight > 150) {
        setErrors({
          ...errors,
          weight: "El peso debe estar entre 50 a 150 kilogramos",
        });
      } else {
        setErrors({
          ...errors,
          weight: "",
        });
      }
      break;

    case "typeNames1":
      if (userData.typeNames1 < 50 || userData.typeNames1 > 150) {
        setErrors({
          ...errors,
          typeNames1: "El peso debe estar entre 50 a 150 kilogramos",
        });
      } else {
        setErrors({
          ...errors,
          typeNames1: "",
        });
      }
      break;

    case "typeNames2":
      if (userData.typeNames2 < 50 || userData.typeNames2 > 150) {
        setErrors({
          ...errors,
          typeNames2: "El peso debe estar entre 50 a 150 kilogramos",
        });
      } else {
        setErrors({
          ...errors,
          typeNames2: "",
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
