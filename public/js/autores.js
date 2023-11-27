addBookBtn.addEventListener("click", function() {
    bookPopup.classList.add("show");
    bookPopup.classList.remove("hidden");
});

// Fechar popup
closePopupBtn.addEventListener("click", function() {
    bookPopup.classList.add("hidden");
    bookPopup.classList.remove("show");
    limparFormulario();
});

function displayAutores(autores) {
    const tbody = document.getElementById("listaAutores");
    tbody.innerHTML = ""; // Limpar a tabela

    autores.forEach(autor => {
        const row = tbody.insertRow();

        const nomeCell = row.insertCell(0);
        nomeCell.textContent = autor.nome;

        const biografiaCell = row.insertCell(1);
        biografiaCell.textContent = autor.biografia;

        const dataNascCell = row.insertCell(2);
        dataNascCell.textContent = new Date(autor.dataNascimento).toLocaleDateString();

        const actionsCell = row.insertCell(3);
        actionsCell.innerHTML = `<button class="icon-btn-edit" onclick='editarAutor(${JSON.stringify(autor)})'>
        <i class="fas fa-edit"></i> Editar
    </button>
    <button class="icon-btn-delete" onclick="deleteAutor(${autor.id})">
    <i class="fas fa-trash"></i> Excluir
    </button>`;
    });
}