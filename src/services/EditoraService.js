const pool = require('../config/database');

async function listarEditoras() {
  const [editoras] = await pool.query('SELECT * FROM Editoras');
  return editoras;
}

async function adicionarEditora(Editora) {
  const { nome, endereco, numeroTelefone } = Editora;
  // Você vai criar o INSERT INTO abaixo.
  const [results] = await pool.query('INSERT INTO editoras (nome, endereco, telefone) VALUES (?, ?, ?)', [nome, endereco, numeroTelefone]);
  return results.insertId;
}

async function atualizarEditora(id, Editora) {
  const { nome, endereco, numeroTelefone } = Editora;
  // Você vai criar o UPDATE abaixo.
  await pool.query('UPDATE editoras SET nome = ?, endereco = ?, telefone = ? WHERE id = ?', [nome, endereco, numeroTelefone, id]);
}

async function deletarEditora(id) {
  // Você vai criar o DELETE abaixo.
  await pool.query('DELETE FROM editoras WHERE id = ?', [id]);
}

module.exports = {
  listarEditoras,
  adicionarEditora,
  atualizarEditora,
  deletarEditora
};