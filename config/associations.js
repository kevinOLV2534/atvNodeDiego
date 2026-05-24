import Sinopse from "../models/Sinopse.js";
import Autor from "../models/Autor.js";

const associations = () => {
    Autor.hasMany(Sinopse, {
        foreignKey: "autorId"
    });

    Sinopse.belongsTo(Autor, {
        foreignKey: "autorId"
    })
}

export default associations;