document.addEventListener('DOMContentLoaded', () => {

    // Lógica para o estado "ativo" na navegação
    const navLinks = document.querySelectorAll('.nav-link');
    const configButton = document.querySelector('.btn-outline-dark');
    
    // Adiciona o listener para os links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            navLinks.forEach(item => item.classList.remove('active'));
            configButton.classList.remove('active');
            event.currentTarget.classList.add('active');
        });
    });

    // Adiciona o listener para o botão de configurações
    configButton.addEventListener('click', (event) => {
        event.preventDefault();
        navLinks.forEach(item => item.classList.remove('active'));
        configButton.classList.add('active');
    });

    // Gráfico de Linha
    const ctx1 = document.getElementById('linhaChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [
                {
                    label: 'Valor',
                    data: [3000, 3200, 2800, 3500, 4000, 5200],
                    backgroundColor: 'rgba(217, 61, 0, 0.7)',
                    borderColor: '#D93D00',
                    tension: 0.3,
                    fill: false
                },
                {
                    label: 'Unidade',
                    data: [2000, 1800, 2200, 2100, 2300, 1750],
                    backgroundColor: 'rgba(100, 100, 100, 0.7)',
                    borderColor: '#666',
                    tension: 0.3,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'bottom' } },
            scales: {
                y: { beginAtZero: true },
            }
        }
    });

    // Gráfico de Donut
    const ctx2 = document.getElementById('donutChart').getContext('2d');
    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Carne', 'Frango', 'Farofa', 'Outros'],
            datasets: [{
                data: [25, 15, 30, 30],
                backgroundColor: ['#D93D00', '#ff8c42', '#ffaa73', '#d4d4d4']
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'bottom' } }
        }
    });

    //Gráfico de Barras
    const ctx3 = document.getElementById('barraChart').getContext('2d');
    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [
                {
                    label: 'Unidade',
                    data: [2000, 1800, 2200, 2100, 2300, 1750],
                    backgroundColor: 'rgba(217, 61, 0, 0.7)',
                    borderWidth: 1,
                    borderRadius: 14,
                    tension: 0.3,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'bottom' } },
            scales: {
                y: { beginAtZero: true },
            }
        }
    });
});
