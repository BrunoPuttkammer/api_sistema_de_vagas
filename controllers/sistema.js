import Vaga from '../models/Vaga.js';

const adicionarVaga = async (req, res) => {
    const { titulo, descricao, cargo, cidade, salario } = req.body;

    try {
        const novaVaga = await Vaga.create({ titulo, descricao, cargo, cidade, salario });
        res.status(201).send({ mensagem: 'Vaga adicionada!', vaga: novaVaga });
    } catch (error) {
        console.error(error);
        res.status(500).send({ mensagem: "Erro ao criar vaga" });
    }
};

const listarVagas = async (req, res) => {
    console.log('Requisição recebida para listar vagas');
    try {
        const vagas = await Vaga.findAll();
        console.log('Vagas encontradas:', vagas);
        res.status(200).send(vagas.map(vaga => vaga.dataValues));
    } catch (error) {
        console.error('Erro ao listar vagas:', error);
        res.status(500).send({ mensagem: 'Erro ao listar vagas' });
    }
};

const detalhesVaga = async (req, res) => {
    const { id } = req.params;
    try {
        const vaga = await Vaga.findByPk(id);
        if (!vaga) {
            return res.status(404).send({ mensagem: 'Vaga não encontrada' });
        }
        res.status(200).send(vaga.dataValues);
    } catch (error) {
        console.error(error);
        res.status(500).send({ mensagem: 'Erro ao buscar vaga' });
    }
};

const atualizarVaga = async (req, res) => {
    const { id } = req.params;
    const { titulo, descricao, cargo, cidade, salario } = req.body;

    try {
        const vaga = await Vaga.findByPk(id);
        if (!vaga) {
            return res.status(404).send({ mensagem: 'Vaga não encontrada' });
        }

        vaga.titulo = titulo;
        vaga.descricao = descricao;
        vaga.cargo = cargo;
        vaga.cidade = cidade;
        vaga.salario = salario;

        await vaga.save();
        res.status(200).send({ mensagem: 'Vaga atualizada!', vaga: vaga.dataValues });
    } catch (error) {
        console.error(error);
        res.status(500).send({ mensagem: 'Erro ao atualizar vaga' });
    }
};

const removerVaga = async (req, res) => {
    const { id } = req.params;
    try {
        const vaga = await Vaga.findByPk(id);
        if (!vaga) {
            return res.status(404).send({ mensagem: 'Vaga não encontrada' });
        }

        await vaga.destroy();
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).send({ mensagem: 'Erro ao remover vaga' });
    }
};

const listarPorCargo = async (req, res) => {
    const { cargo } = req.params;
    try {
        const vagas = await Vaga.findAll({ where: { cargo } });
        res.status(200).send(vagas.map(vaga => vaga.dataValues));
    } catch (error) {
        console.error(error);
        res.status(500).send({ mensagem: 'Erro ao listar vagas por cargo' });
    }
};

const listarPorLocalizacao = async (req, res) => {
    const { cidade } = req.params;
    try {
        const vagas = await Vaga.findAll({ where: { cidade } });
        res.status(200).send(vagas.map(vaga => vaga.dataValues));
    } catch (error) {
        console.error(error);
        res.status(500).send({ mensagem: 'Erro ao listar vagas por cidade' });
    }
};

export { listarVagas, listarPorCargo, adicionarVaga, detalhesVaga, atualizarVaga, removerVaga, listarPorLocalizacao };
