document.addEventListener('DOMContentLoaded', () => {

    // Elementos dos contadores
    const semanalConcluidasEl = document.getElementById('semanal-concluidas');
    const semanalTotalEl = document.getElementById('semanal-total');
    const semanalProgressEl = document.getElementById('semanal-progress');
    const mensalConcluidasEl = document.getElementById('mensal-concluidas');
    const mensalTotalEl = document.getElementById('mensal-total');
    const mensalProgressEl = document.getElementById('mensal-progress');
    const doneColumn = document.getElementById('done-cards');

    //Calcula o total de missões e as concluídas, e atualiza os contadores e barras de progresso.
    function updateMissionStats() {
        const allMissions = document.querySelectorAll('.mission-card');
        const doneMissions = doneColumn.querySelectorAll('.mission-card');

        let totalSemanal = 0, concluidasSemanal = 0;
        let totalMensal = 0, concluidasMensal = 0;

        // Calcula o total de cada tipo de missão na página
        allMissions.forEach(card => {
            if (card.dataset.type === 'semanal') totalSemanal++;
            if (card.dataset.type === 'mensal') totalMensal++;
        });

        // Calcula o total de concluídas
        doneMissions.forEach(card => {
            if (card.dataset.type === 'semanal') concluidasSemanal++;
            if (card.dataset.type === 'mensal') concluidasMensal++;
        });

        // Atualiza os contadores semanais
        const percSemanal = totalSemanal > 0 ? Math.round((concluidasSemanal / totalSemanal) * 100) : 0;
        semanalConcluidasEl.textContent = concluidasSemanal;
        semanalTotalEl.textContent = totalSemanal;
        semanalProgressEl.style.width = `${percSemanal}%`;
        semanalProgressEl.textContent = `${percSemanal}%`;
        semanalProgressEl.setAttribute('aria-valuenow', percSemanal);
        
        // Atualiza os contadores mensais
        const percMensal = totalMensal > 0 ? Math.round((concluidasMensal / totalMensal) * 100) : 0;
        mensalConcluidasEl.textContent = concluidasMensal;
        mensalTotalEl.textContent = totalMensal;
        mensalProgressEl.style.width = `${percMensal}%`;
        mensalProgressEl.textContent = `${percMensal}%`;
        mensalProgressEl.setAttribute('aria-valuenow', percMensal);
    }

    /**
     * Aplica ou remove o estilo de "concluído" de um card.
     * @param {HTMLElement} card - O card da missão.
     * @param {boolean} isDone - Verdadeiro se o card está na coluna "Feito".
     */
    function updateCardAppearance(card, isDone) {
        if (isDone) {
            card.classList.add('done');
        } else {
            card.classList.remove('done');
        }
    }

    // Inicializa o Kanban
    const todoCards = document.getElementById('todo-cards');
    const doingCards = document.getElementById('doing-cards');
    const doneCards = document.getElementById('done-cards');

    const sortableOptions = {
        group: 'kanban',
        animation: 150,
        ghostClass: 'sortable-ghost',
        // Evento disparado ao soltar um card
        onEnd: function (evt) {
            const card = evt.item; // O card que foi movido
            const toColumn = evt.to; // A coluna de destino

            // Verifica se o card foi movido para a coluna "Feito"
            const isDone = toColumn.id === 'done-cards';
            
            // Atualiza a aparência do card (riscado/não riscado)
            updateCardAppearance(card, isDone);
            
            // Recalcula e atualiza os contadores
            updateMissionStats();
        },
    };

    if (todoCards && doingCards && doneCards) {
        new Sortable(todoCards, sortableOptions);
        new Sortable(doingCards, sortableOptions);
        new Sortable(doneCards, sortableOptions);
    }
    
    // Roda a função uma vez no início para calcular o estado inicial
    function initializeBoard() {
        const allCards = document.querySelectorAll('.mission-card');
        allCards.forEach(card => {
            const isDone = card.closest('.kanban-cards').id === 'done-cards';
            updateCardAppearance(card, isDone);
        });
        updateMissionStats();
    }
    
    initializeBoard();
});