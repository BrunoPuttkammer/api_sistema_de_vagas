//const conexao = new pg.Client("postgresql://bruno:2clpNRH66szJWIm4yYHw9w@senai-api-1688.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full")
import { Sequelize } from 'sequelize';

const database = new Sequelize('postgresql://bruno:2clpNRH66szJWIm4yYHw9w@senai-api-1688.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full');

const testConnection = async () => {
    try {
        await database.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
};

testConnection();

export default database;
