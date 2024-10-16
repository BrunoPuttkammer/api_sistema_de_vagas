import express from 'express';
import {adicionarVaga, listarVagas, detalhesVaga, atualizarVaga, removerVaga, listarPorCargo, listarPorLocalizacao} from '../controllers/sistema.js';

const router = express.Router();

router.post('/', adicionarVaga);
router.get('/', listarVagas);
router.get('/:id', detalhesVaga);
router.put('/:id', atualizarVaga);
router.delete('/:id', removerVaga);
router.get('/cargo/:cargo', listarPorCargo);
router.get('/localizacao/:cidade', listarPorLocalizacao);

export default router;
