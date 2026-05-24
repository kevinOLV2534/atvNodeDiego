import  Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Sinopse = connection.define('sinopses',{
    imagem:{
        type: Sequelize.STRING,
        allowNull: false
    },
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    sinopse:{
        type: Sequelize.STRING,
        allowNull: false
    },
    autorId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Sinopse.sync({force: false})

export default Sinopse;