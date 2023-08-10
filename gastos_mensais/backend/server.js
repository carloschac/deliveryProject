const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors()); // Use o middleware cors

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost', // ou o endereço do servidor MySQL
  user: 'root',
  password: '32686642',
  database: 'gastos_mensais',
});

// Rota para obter todos os gastos (Read/GET)
app.get('/gastos', (req, res) => {
  const sql = 'SELECT * FROM gastos';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao obter os gastos.' });
    }

    res.json(results);
  });
});

// Rota para adicionar um novo gasto (Create/POST)
app.post('/gastos', (req, res) => {
  const { descricao, valor, parcelado, parcelas, data_lancamento, valor_inicial, mes_id } = req.body;

  const sql = 'INSERT INTO gastos (descricao, valor, parcelado, parcelas, data_lancamento, valor_inicial, mes_id) VALUES (?, ?, ?, ?, ?, ?, ?)';

  connection.query(sql, [descricao, valor, parcelado, parcelas, data_lancamento, valor_inicial, mes_id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao adicionar o gasto.' });
    }

    res.json({ id: result.insertId, mensagem: 'Gasto adicionado com sucesso!' });
  });
});

// Rota para editar um gasto existente (Update/PUT)
app.put('/gastos/:id', (req, res) => {
  const { id } = req.params;
  const { descricao, valor, parcelado, parcelas, data_lancamento, valor_inicial, mes_id } = req.body;

  const sql = 'UPDATE gastos SET descricao=?, valor=?, parcelado=?, parcelas=?, data_lancamento=?, valor_inicial=?, mes_id=? WHERE id=?';

  connection.query(sql, [descricao, valor, parcelado, parcelas, data_lancamento, valor_inicial, mes_id, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao atualizar o gasto.' });
    }

    res.json({ mensagem: 'Gasto atualizado com sucesso!' });
  });
});

// Rota para excluir um gasto (Delete/DELETE)
app.delete('/gastos/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM gastos WHERE id=?';

  connection.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao excluir o gasto.' });
    }

    res.json({ mensagem: 'Gasto excluído com sucesso!' });
  });
});

// Iniciar o servidor
const port = 3000; // ou qualquer outra porta de sua preferência

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// Rota para adicionar um novo mês (Create/POST)
app.post('/meses', (req, res) => {
  const { mes, valor_inicial, ano_referencia} = req.body;

  const sql = 'INSERT INTO mes (mes, valor_inicial, ano_referencia) VALUES (?, ?, ?)';

  connection.query(sql, [mes, valor_inicial, ano_referencia], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao adicionar o mês.' });
    }

    res.json({ id: result.insertId, mensagem: 'Mês adicionado com sucesso!' });
  });
});

// Rota para obter a lista de meses (Read/GET)
app.get('/meses', (req, res) => {

  const sql = 'SELECT * FROM mes';


  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Erro na query:', err); // Adicione esta linha
      return res.status(500).json({ error: 'Erro ao obter a lista de meses.' });
    }


    res.json(results);
    console.log(results);
  });
});


// Rota para excluir um mês (Delete/DELETE)
app.delete('/meses/:id', (req, res) => {
  const { id } = req.params;

  console.log(id);

  const sql = 'DELETE FROM mes WHERE id = ?';

  connection.query(sql, [id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao excluir o mês.' });
    }

    res.json({ mensagem: 'Mês excluído com sucesso!' });
  });
});


app.get('/testdb', (req, res) => {
  const sql = 'SELECT 1 as result';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao testar a conexão com o banco de dados.' });
    }

    res.json({ message: 'Conexão com o banco de dados bem-sucedida!', result: results[0].result });
  });
});
