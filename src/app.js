const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const livroRoutes = require('./routes/livroRoutes');
const autorRoutes = require('./routes/autorRoutes');
const editoraRoutes = require('./routes/editoraRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Suas rotas
app.use('/api/livros', livroRoutes); // Livros
app.use('/api/autores', autorRoutes); // Autores
app.use('/api/editoras', editoraRoutes); // Editoras

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
