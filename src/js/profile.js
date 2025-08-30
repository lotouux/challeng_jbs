document.addEventListener('DOMContentLoaded', () => {

    // Dados do gráfico de exemplo
    const chartData = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Vendas por Mês',
            backgroundColor: 'rgba(217, 61, 0, 0.8)',
            borderColor: 'rgb(217, 61, 0)',
            data: [50, 75, 100, 120, 110, 140],
            borderRadius: 8,
            borderSkipped: false,
        }]
    };

    // Configurações do gráfico
    const chartConfig = {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2.5,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#555',
                        font: {
                            family: 'Poppins'
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        color: '#555',
                        font: {
                            family: 'Poppins'
                        }
                    }
                }
            }
        }
    };

    // Renderiza o gráfico
    const userProgressChart = new Chart(
        document.getElementById('userProgressChart'),
        chartConfig
    );

    // Dados de conquistas para o modal e geração dinâmica
    const achievements = {
        vendedor_mes: {
            title: 'Vendedor do Mês',
            description: 'Parabéns por atingir a maior performance de vendas no último mês.',
            date: 'Conquistado em: 15 de Julho, 2025',
            iconClass: 'bi-trophy-fill',
            iconColor: '#D93D00',
            unlocked: true,
        },
        vendas_5_estrelas: {
            title: 'Vendas 5 Estrelas',
            description: 'Você alcançou a marca de 100 vendas com nota 5 estrelas. Excelente!',
            date: 'Conquistado em: 28 de Junho, 2025',
            iconClass: 'bi-star-fill',
            iconColor: '#D96300',
            unlocked: true,
        },
        conquista_bloqueada: {
            title: 'Conquista Bloqueada',
            description: 'Continue se dedicando para desbloquear novas conquistas.',
            date: 'Data de desbloqueio: N/A',
            iconClass: 'bi-lock-fill',
            iconColor: '#6c757d',
            unlocked: false,
        },
        conquista_bloqueada_2: {
            title: 'Vencedor do Evento',
            description: 'Ganhou o evento de vendas do primeiro semestre de 2025.',
            date: 'Data de desbloqueio: N/A',
            iconClass: 'bi-award-fill',
            iconColor: '#D93D00',
            unlocked: false,
        }
    };

    // Referência ao contêiner de conquistas
    const achievementsContainer = document.getElementById('achievements-container');
    const modal = document.getElementById('achievementModal');
    const overlay = document.getElementById('overlay');
    const closeModalBtn = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalDate = document.getElementById('modal-date');
    const modalIcon = document.getElementById('modal-icon');

    // Função para gerar as conquistas dinamicamente
    const renderAchievements = () => {
        // Limpa o contêiner antes de adicionar novos elementos
        achievementsContainer.innerHTML = '';

        // Itera sobre as conquistas e adiciona apenas as desbloqueadas
        for (const [id, achievement] of Object.entries(achievements)) {
            if (achievement.unlocked) {
                const achievementItem = document.createElement('div');
                achievementItem.className = 'achievement-item text-center';
                achievementItem.setAttribute('data-id', id);

                achievementItem.innerHTML = `
                            <div class="icon-box" style="background-color: ${achievement.iconColor}; color: #fff;">
                                <i class="bi ${achievement.iconClass}"></i>
                            </div>
                            <p class="achievement-description mt-2">${achievement.title}</p>
                        `;

                achievementsContainer.appendChild(achievementItem);
            }
        }
    };

    // Função para mostrar o modal
    const showModal = (achievementId) => {
        const achievement = achievements[achievementId];
        if (achievement) {
            modalTitle.textContent = achievement.title;
            modalDesc.textContent = achievement.description;
            modalDate.textContent = achievement.date;
            modalIcon.innerHTML = `<i class="bi ${achievement.iconClass}" style="color: ${achievement.iconColor};"></i>`;
            modal.classList.add('show');
            overlay.classList.add('show');
        }
    };

    // Adiciona evento de clique no contêiner de conquistas
    achievementsContainer.addEventListener('click', (event) => {
        // Encontra o item de conquista clicado
        const item = event.target.closest('.achievement-item');
        if (item) {
            const achievementId = item.getAttribute('data-id');
            showModal(achievementId);
        }
    });

    // Função para fechar o modal
    const hideModal = () => {
        modal.classList.remove('show');
        overlay.classList.remove('show');
    };

    // Adiciona evento de clique no botão de fechar e no overlay
    closeModalBtn.addEventListener('click', hideModal);
    overlay.addEventListener('click', hideModal);

    // Renderiza as conquistas ao carregar a página
    renderAchievements();
});