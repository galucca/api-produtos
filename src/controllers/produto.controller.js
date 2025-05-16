const Produto = require('../models/produto');

// [GET] Listar todos os produtos
async function listarProdutos(req, res) {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
}

// [GET] Buscar produto por ID ou nome
async function buscarProduto(req, res) {
  const { idOuNome } = req.params;

  try {
    let produto;

    if (idOuNome.match(/^[0-9a-fA-F]{24}$/)) {
      produto = await Produto.findById(idOuNome); // busca por ID
    } else {
      produto = await Produto.findOne({ nome: idOuNome }); // busca por nome
    }

    if (!produto) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    res.json(produto);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar o produto' });
  }
}

// [POST] Cadastrar novo produto
async function cadastrarProduto(req, res) {
  try {
    const novoProduto = new Produto(req.body);
    await novoProduto.save();
    res.status(201).json(novoProduto);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao cadastrar o produto' });
  }
}

// [PUT] Atualizar um produto
async function atualizarProduto(req, res) {
  const { id } = req.params;

  try {
    const produtoAtualizado = await Produto.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    if (!produtoAtualizado) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    res.json(produtoAtualizado);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao atualizar o produto' });
  }
}

// [DELETE] Remover um produto
async function deletarProduto(req, res) {
  const { id } = req.params;

  try {
    const produtoRemovido = await Produto.findByIdAndDelete(id);

    if (!produtoRemovido) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    res.json({ mensagem: 'Produto removido com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar o produto' });
  }
}

module.exports = {
  listarProdutos,
  buscarProduto,
  cadastrarProduto,
  atualizarProduto,
  deletarProduto
};
