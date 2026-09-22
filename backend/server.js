// 1. Importar o Express
const express = require('express');

// 2. Importar o CORS
const cors = require('cors');

// 3. Criar uma aplicação utilizando o Express
const app = express();

// 4. Habilitar o CORS
app.use(cors());

// 5. Habilitar o recebimento de dados em JSON
app.use(express.json());

// 6. Criar uma rota (GET /)
app.get('/', (req, res) => {
  // Retornando informações de um produto em formato JSON
  res.json({
    nome: "Mouse RGB",
    preco: 39.00,
    categoria: "Periferico"
  });
});

// Fazer o servidor funcionar na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});