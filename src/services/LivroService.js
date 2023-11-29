const pool = require('../config/database');

async function listarLivros() {
    const [results] = await pool.query('SELECT * FROM livros');
    return results;
}

async function adicionarLivro(livro) {
    const { titulo, autor, editora, dataPublicacao } = livro;
    const [results] = await pool.query('INSERT INTO livros (titulo, autor, editora, dataPublicacao) VALUES (?, ?, ?, ?)', [titulo, autor, editora, dataPublicacao]);
    return results.insertId;
}

async function atualizarLivro(id, livro) {
    const { titulo, autor, editora, dataPublicacao } = livro;
    await pool.query('UPDATE livros SET titulo = ?, autor = ?, editora = ?, dataPublicacao = ? WHERE id = ?', [titulo, autor, editora, dataPublicacao, id]);
}

async function deletarLivro(id) {
    await pool.query('DELETE FROM livros WHERE id = ?', [id]);
}

module.exports = {
    listarLivros,
    adicionarLivro,
    atualizarLivro,
    deletarLivro
};