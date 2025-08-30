/*
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // impede recarregar a página

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    //Valida no futuro com backend
    if (email && password) {
        // Redireciona para o dashboard
        window.location.href = "dashboard.html";
    } else {
        // Mostra mensagem de erro
        document.getElementById("error-message").classList.remove("d-none");
    }
});
*/

// Simulação do login
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o envio real do formulário
    window.location.href = "../html/dashboard.html"; // Redireciona para o dashboard
});