const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produto.controller');

// Rotas
router.get('/produtos', produtoController.listarProdutos);
router.get('/produtos/:idOuNome', produtoController.buscarProduto);
router.post('/produtos', produtoController.cadastrarProduto);
router.put('/produtos/:id', produtoController.atualizarProduto);
router.delete('/produtos/:id', produtoController.deletarProduto);

module.exports = router;
