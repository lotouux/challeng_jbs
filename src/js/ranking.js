document.addEventListener('DOMContentLoaded', () => {
    const rankingTable = document.getElementById('ranking-table');
    const filterContainer = document.getElementById('ranking-filters');

    // --- DADOS MOCKADOS ---
    const rankingData = {
        atual: [
            { pos: '1º', name: 'João', points: 1675, sales: 300, quality: '98%', avatar: 'men/32.jpg' },
            { pos: '2º', name: 'Maria', points: 1450, sales: 280, quality: '95%', avatar: 'women/44.jpg' },
            { pos: '46º', name: 'Você', points: 370, sales: 85, quality: '88%', avatar: 'women/91.jpg', highlight: true }
        ],
        agosto: [
            { pos: '1º', name: 'Maria', points: 1800, sales: 320, quality: '99%', avatar: 'women/44.jpg' },
            { pos: '2º', name: 'João', points: 1750, sales: 310, quality: '97%', avatar: 'men/32.jpg' },
            { pos: '50º', name: 'Você', points: 350, sales: 80, quality: '85%', avatar: 'women/91.jpg', highlight: true }
        ],
        julho: [
            { pos: '1º', name: 'Carlos', points: 1900, sales: 350, quality: '99%', avatar: 'men/33.jpg' },
            { pos: '2º', name: 'Maria', points: 1700, sales: 300, quality: '96%', avatar: 'women/44.jpg' },
            { pos: '55º', name: 'Você', points: 320, sales: 75, quality: '84%', avatar: 'women/91.jpg', highlight: true }
        ],
        setembro: [
            { pos: '1º', name: 'João', points: 1850, sales: 330, quality: '99%', avatar: 'men/32.jpg' },
            { pos: '2º', name: 'Ana', points: 1600, sales: 290, quality: '94%', avatar: 'women/45.jpg' },
            { pos: '48º', name: 'Você', points: 360, sales: 82, quality: '87%', avatar: 'women/91.jpg', highlight: true }
        ]
    };

    // --- FUNÇÕES DE RENDERIZAÇÃO ---
    const renderers = {
        standard: (data) => {
            const headers = ['Posição', 'Usuário', 'Pontuação', 'Vendas (Un)', 'Qualidade (%)'];
            const body = data.map(user => `
                <tr class="${user.highlight ? 'user-highlight' : ''}">
                    <td><span class="rank-badge">${user.pos}</span></td>
                    <td>
                        <div class="d-flex align-items-center">
                            <img src="https://randomuser.me/api/portraits/${user.avatar}" alt="${user.name}" class="rounded-circle me-3" width="40">
                            <span>${user.name}</span>
                        </div>
                    </td>
                    <td class="text-center fw-bold">${user.points}</td>
                    <td class="text-center">${user.sales}</td>
                    <td class="text-center">${user.quality}</td>
                </tr>`).join('');
            return `<thead class="table-light"><tr>${headers.map(h => `<th scope="col" class="${h !== 'Usuário' && h !== 'Posição' ? 'text-center' : ''}">${h}</th>`).join('')}</tr></thead><tbody>${body}</tbody>`;
        }
    };

    // --- LÓGICA PRINCIPAL E EVENTOS ---
    const updateView = (target) => {
        const { action, filterType } = target.dataset;

        // Gerencia estado 'active' dos botões
        filterContainer.querySelectorAll('.btn, .dropdown-item').forEach(btn => btn.classList.remove('active'));
        const parentBtn = target.closest('.dropdown')?.querySelector('.btn') || target;
        parentBtn.classList.add('active');

        // Reseta texto dos botões de dropdown
        document.getElementById('filter-historico').textContent = 'Histórico';
        if (parentBtn.id === 'filter-historico') parentBtn.textContent = target.textContent;
        
        // Renderiza a tabela correta
        if (action === 'filter') {
            rankingTable.innerHTML = renderers.standard(rankingData[filterType]);
        }
    };
    
    filterContainer.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.dataset.action === 'filter') {
            updateView(e.target);
        }
    });

    updateView(document.getElementById('filter-atual'));
});