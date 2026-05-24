import { Sequelize, STRING } from "sequelize";
import connection from "../config/sequelize-config.js";

const Autor = connection.define('autor', {
    nomeAutor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idadeAutor: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

Autor.sync({force: false});
export default Autor;