const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const produtoRoutes = require('./routes/produto.routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rota para a raiz "/"
app.get('/', (req, res) => {
  res.send('🚀 API de Produtos está no ar!');
});

// Rotas da API
app.use('/api', produtoRoutes);

// Conexão com o MongoDB e inicialização do servidor
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  });
});
