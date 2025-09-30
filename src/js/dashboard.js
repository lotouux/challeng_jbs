console.log('Dashboard JS rodou');

document.addEventListener('DOMContentLoaded', () => {
    console.log('Timeout e charts dispararam');

    // Esconder o preloader e mostrar o dashboard quando o DOM estiver pronto
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        const dashboard = document.getElementById('dashboard');
        preloader.style.display = 'none';
        dashboard.style.display = 'block';
    }, 3000);

    // Lógica para o estado "ativo" na navegação
    const navLinks = document.querySelectorAll('.nav-link');
    const configButton = document.querySelector('.btn-outline-dark');

    // Adiciona o listener para os links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            navLinks.forEach(item => item.classList.remove('active'));
            if (configButton) {
                configButton.classList.remove('active');
            }
            event.currentTarget.classList.add('active');
        });
    });

    // Gráfico de Linha: Vendas R$/Unidades
    const ctxLinha = document.getElementById('linhaChart').getContext('2d');
    new Chart(ctxLinha, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Vendas (R$)',
                data: [12000, 15000, 13000, 18000, 20000, 22000],
                borderColor: '#d4724bff',
                backgroundColor: '#c95c3175',
                tension: 0.4,
                fill: true
            }, {
                label: 'Unidades Vendidas',
                data: [50, 65, 55, 70, 80, 90],
                borderColor: 'rgba(73, 73, 73, 1)',
                backgroundColor: 'rgba(70, 70, 70, 0.2)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico de Rosca: Categorias de Produtos
    const ctxDonut = document.getElementById('donutChart').getContext('2d');
    new Chart(ctxDonut, {
        type: 'doughnut',
        data: {
            labels: ['Eletrônicos', 'Móveis', 'Vestuário', 'Alimentos'],
            datasets: [{
                data: [300, 50, 100, 40],
                backgroundColor: [
                    'rgba(255, 214, 152, 0.8)',
                    'rgba(250, 184, 145, 0.8)',
                    '#d97b00ff',
                    '#D93D00'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });

    // Gráfico de Barras: Vendas Mensais (Unidades)
    const ctxBarra = document.getElementById('barraChart').getContext('2d');
    new Chart(ctxBarra, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Unidades Vendidas',
                data: [50, 65, 55, 70, 80, 90],
                backgroundColor: '#D93D00',
                borderColor: '#992c01ff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Gráfico de Barras: Vendas Mensais (R$)
    const ctxBarra2 = document.getElementById('barraChart2').getContext('2d');
    new Chart(ctxBarra2, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Vendas (R$)',
                data: [12000, 15000, 13000, 18000, 20000, 22000],
                backgroundColor: '#d97b00ff',
                borderColor: '#915200ff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // JavaScript para o preloader e o dashboard
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
        // Simular a busca do nome do usuário
        setTimeout(() => {
            const userName = 'Usuário(a)'; // Substuir pelo nome do usuário real
            userNameElement.textContent = userName;
        }, 1000);
    }
});


