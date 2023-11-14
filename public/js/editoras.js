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