import express from 'express';
import router from './routes/sistema.js';
import database from './database.js';
import Vaga from './models/Vaga.js';

const app = express();

app.use(express.json());
app.use('/vagas', router);

const iniciarAplicacao = async () => {
    try {
        await database.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        await Vaga.sync();
        console.log('Modelo Vaga sincronizado com sucesso.');

        app.listen(3000, () => {
            console.log('Servidor iniciado na porta 3000');
        });
    } catch (error) {
        console.error('Erro ao iniciar a aplicação:', error);
    }
};

iniciarAplicacao();
