document.addEventListener('DOMContentLoaded', () => {

    const performanceChartCtx = document.getElementById('performanceChart').getContext('2d');
    new Chart(performanceChartCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Vendas (Milhares)',
                data: [15, 12, 18, 20, 25, 17, 22, 19, 23, 26, 21, 28],
                backgroundColor: 'rgba(217, 61, 0, 0.8)',
                borderColor: '#D93D00',
                borderWidth: 1,
                borderRadius: 8,
                hoverBackgroundColor: 'rgba(217, 61, 0, 1)',
                hoverBorderColor: '#D93D00'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `Vendas: ${context.raw}k`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#666',
                        font: {
                            family: 'Poppins'
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.08)'
                    },
                    ticks: {
                        color: '#666',
                        font: {
                            family: 'Poppins'
                        },
                        callback: function (value) {
                            return value + 'k';
                        }
                    }
                }
            }
        }
    });

});