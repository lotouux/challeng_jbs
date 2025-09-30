// Exemplo de como o link de Configurações deve ser tratado:
// Se o nome da página (config.html) for 'config' ou 'configuracoes', ele ativa o link.
if (linkPage === 'configuracoes' && currentPage.startsWith('config')) {
    link.classList.add('active');
}