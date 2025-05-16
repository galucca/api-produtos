# 🛍️ API de Produtos - Loja de Departamentos

Este projeto é uma API RESTful desenvolvida em Node.js com MongoDB que permite realizar o **CRUD completo** de produtos de uma loja de departamentos.

## 🚀 Visão Geral

A API permite:
- 📋 Listar todos os produtos
- 🔍 Buscar um produto por **ID** ou **nome**
- ➕ Cadastrar um novo produto
- 🛠️ Atualizar os dados de um produto existente
- ❌ Deletar um produto do banco

---

## ⚙️ Tecnologias Utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Dotenv
- Nodemon
- Postman (para testes)

---

## 🗃️ Estrutura dos Produtos

Cada produto contém os seguintes campos:

```json
{
  "nome": "string",
  "descricao": "string",
  "cor": "string",
  "peso": "number",
  "tipo": "string",
  "preco": "number",
  "dataCadastro": "date (gerado automaticamente)"
}
```
## 📥 Instalação e Execução Local

Clone o repositório:

```
git clone https://github.com/galucca/api-produtos.git
```
```
cd api-produtos
```

### Instale as dependências:

```
npm install
```
### Configure o .env:

```
MONGO_URI=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/produtos?retryWrites=true&w=majority
PORT=3000
```
### Inicie o servidor:
```
npm run dev
```
## 🌐 Endpoints da API

| Método | Rota                      | Descrição                    |
| ------ | ------------------------- | ---------------------------- |
| GET    | `/api/produtos`           | Lista todos os produtos      |
| GET    | `/api/produtos/:idOuNome` | Busca produto por ID ou nome |
| POST   | `/api/produtos`           | Cadastra um novo produto     |
| PUT    | `/api/produtos/:id`       | Atualiza um produto          |
| DELETE | `/api/produtos/:id`       | Remove um produto            |

#### Teste todos os endpoints com o Postman ou Insomnia.

#### ☁️ Deploy

A API está hospedada e funcional em:
http...

## 👨‍💻 Desenvolvido por Gabriel Lucca
