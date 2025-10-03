document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    const chartTitle = document.getElementById('chart-title');
    const filterButtons = document.querySelectorAll('.card .btn-outline-primary'); 
    const monthSelects = document.querySelectorAll('.month-select');
    const applyComparison = document.getElementById('apply-comparison');
    const mensalButton = document.getElementById('filter-mensal');
    const comparativoButton = document.getElementById('filter-comparativo');

    Chart.register(ChartDataLabels);

    const labels = ['Produtividade e Criatividade', 'Percentual de Meta Atingida', 'Taxa de Conversão', 'Novos Clientes Adquiridos', 'Aumento de Vendas', 'Índice de Satisfação do Cliente', 'Retenção de Clientes'];

    const dataAnual = {
        labels: labels,
        values: [65, 30, 50, 40, 15, 85, 70],
        label: 'Resultados Anuais de Performance',
        color: '#D93D00'
    };

    const dataMensalJulho = {
        labels: labels,
        values: [75, 45, 60, 50, 20, 90, 80],
        label: 'Performance Mensal (Julho)',
        color: '#D93D00'
    };

    const dataComparativoInitial = {
        labels: labels,
        values1: [50, 20, 40, 30, 10, 80, 60],
        values2: [75, 45, 60, 50, 20, 90, 80],
        label1: 'Junho',
        label2: 'Julho',
        color1: '#D93D00',
        color2: '#FF7F50'
    };

    const performanceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dataAnual.labels,
            datasets: [{
                label: dataAnual.label,
                data: dataAnual.values,
                backgroundColor: dataAnual.color,
                borderRadius: 4,
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Percentual (%)'
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    display: false
                },
                datalabels: {
                    anchor: 'end',
                    align: 'right',
                    formatter: (value) => value + '%',
                    color: '#495057', 
                    font: {
                        weight: 'bold'
                    }
                }
            }
        }
    });

    function updateChart(mode, data) {
        performanceChart.options.plugins.datalabels.display = (mode !== 'comparativo');
        performanceChart.options.plugins.legend.display = (mode === 'comparativo');
        performanceChart.data.labels = data.labels;

        if (mode === 'comparativo') {
            performanceChart.data.datasets = [{
                label: data.label1,
                data: data.values1,
                backgroundColor: data.color1,
                borderRadius: 4
            }, {
                label: data.label2,
                data: data.values2,
                backgroundColor: data.color2,
                borderRadius: 4
            }];
            chartTitle.textContent = `${data.label1} vs. ${data.label2}`;
        } else {
            performanceChart.data.datasets = [{
                label: data.label,
                data: data.values,
                backgroundColor: data.color,
                borderRadius: 4
            }];
            chartTitle.textContent = data.label;
        }

        performanceChart.update();
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const mode = this.getAttribute('data-mode');
            if (mode === 'anual') {
                document.querySelectorAll('.card .btn-outline-primary').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                updateChart('anual', dataAnual);
                mensalButton.textContent = 'Mensal';
                comparativoButton.textContent = 'Comparativo';
            }
        });
    });

    monthSelects.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const monthName = this.textContent;

            document.querySelectorAll('.card .btn-outline-primary').forEach(btn => btn.classList.remove('active'));
            mensalButton.classList.add('active');

            mensalButton.textContent = monthName;
            comparativoButton.textContent = 'Comparativo';

            const newData = { ...dataMensalJulho, label: `Performance Mensal (${monthName})` };
            updateChart('mensal', newData);
        });
    });

    applyComparison.addEventListener('click', function () {
        const month1 = document.getElementById('mes1-comparativo').options[document.getElementById('mes1-comparativo').selectedIndex].text;
        const month2 = document.getElementById('mes2-comparativo').options[document.getElementById('mes2-comparativo').selectedIndex].text;

            document.querySelectorAll('.card .btn-outline-primary').forEach(btn => btn.classList.remove('active'));
            comparativoButton.classList.add('active');

        comparativoButton.textContent = `Comparativo (${month1} vs ${month2})`;
        mensalButton.textContent = 'Mensal';

        const newComparisonData = { 
            ...dataComparativoInitial, 
            label1: month1, 
            label2: month2,
        };

        updateChart('comparativo', newComparisonData);
    });
});