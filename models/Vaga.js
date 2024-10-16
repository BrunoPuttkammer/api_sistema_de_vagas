import { DataTypes } from 'sequelize';
import database from '../database.js';

const Vaga = database.define('Vaga', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    salario: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'vagas',
});

const syncModel = async () => {
    try {
        await Vaga.sync();
        console.log('Modelo Vaga sincronizado com sucesso.');
    } catch (error) {
        console.error('Erro ao sincronizar o modelo Vaga:', error);
    }
};

syncModel();

export default Vaga;