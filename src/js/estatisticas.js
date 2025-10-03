document.addEventListener('DOMContentLoaded', () => {

    // --- GRÁFICOS ---

    // Gráfico de Linha: Evolução Mensal
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'],
            datasets: [{
                label: 'Pontos Ganhos',
                data: [500, 750, 1200, 900, 1500, 1300, 1850],
                borderColor: '#D93D00',
                backgroundColor: 'rgba(217, 61, 0, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });

    // Gráfico de Donut: Origem dos Pontos
    const ctxDonut = document.getElementById('donutChart').getContext('2d');
    new Chart(ctxDonut, {
        type: 'doughnut',
        data: {
            labels: ['Vendas', 'Treinamentos', 'Metas de Equipe', 'Missões'],
            datasets: [{
                data: [45, 25, 20, 10],
                backgroundColor: ['#D93D00', '#D96300', '#D98600', '#f5a623'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });

    // Gráfico de Radar: Seu Desempenho vs. Desempenho da Equipe
    const ctxRadar = document.getElementById('radarChart').getContext('2d');
    new Chart(ctxRadar, {
        type: 'radar',
        data: {
            labels: ['Qualidade do Atendimento', 'Vendas', 'Missões Concluídas', 'Proatividade', 'Trabalho em Equipe'],
            datasets: [{
                label: 'Seu Desempenho',
                data: [90, 75, 80, 85, 95],
                backgroundColor: 'rgba(217, 61, 0, 0.2)',
                borderColor: '#D93D00',
                pointBackgroundColor: '#D93D00',
            }, {
                label: 'Média da Equipe',
                data: [80, 70, 75, 70, 85],
                backgroundColor: 'rgba(73, 73, 73, 0.2)',
                borderColor: '#495057',
                pointBackgroundColor: '#495057',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { display: false },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    pointLabels: {
                        font: { size: 12 }
                    }
                }
            },
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });

    // Gráfico de Progresso: Próximo Nível
    const xpAtual = 8450;
    const xpNecessario = 10000;
    const progresso = (xpAtual / xpNecessario) * 100;

    // Atualiza o texto abaixo do gráfico
    const progressText = document.getElementById("progressText");
    if (progressText) {
        progressText.innerText = `${xpAtual} / ${xpNecessario} XP (${progresso.toFixed(1)}%)`;
    }

    const ctxProgress = document.getElementById('progressChart').getContext('2d');
    new Chart(ctxProgress, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [xpAtual, xpNecessario - xpAtual],
                backgroundColor: ["#0d6efd", "#e9ecef"],
                borderWidth: 0
            }]
        },
        options: {
            cutout: "70%",
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            }
        }
    });
});