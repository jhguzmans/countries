const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Activity", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificult: {
      type: DataTypes.INTEGER,
      validate: {
        isIn: {
          args: [[1, 2, 3, 4, 5]], // Valores permitidos
          msg: "La dificultad debe estar entre 1 y 5",
        },
      },
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    season: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [["Verano", "Otoño", "Invierno", "Primavera"]], // temporadas permitidas
          msg: "La temporada no es permitida",
        },
      },
    },
  });
};
