function setupMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenuDropdown = document.getElementById('mobileMenuDropdown');

    if (!hamburgerBtn || !mobileMenuDropdown) {
        console.error('Mobile menu elements not found!');
        return;
    }

    const menuLinks = mobileMenuDropdown.querySelectorAll('a');

    // Abre ou fecha ao clicar no botão
    hamburgerBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        mobileMenuDropdown.classList.toggle('show');
    });

    document.addEventListener('click', function (e) {
        if (mobileMenuDropdown.classList.contains('show') &&
            !mobileMenuDropdown.contains(e.target) &&
            !hamburgerBtn.contains(e.target)) {
            mobileMenuDropdown.classList.remove('show');
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuDropdown.classList.remove('show');
        });
    });
}

function setActiveLink() {
    // 1. Obtém o nome base do arquivo atual
    const path = window.location.pathname;
    let currentPage = path.split('/').pop().split('.')[0];

    // Se a página for a raiz (ex: 'index.html' ou URL base)
    if (currentPage === '' || currentPage === 'index') {
        currentPage = 'dashboard';
    }

    if (currentPage === 'config') {
        currentPage = 'configuracoes';
    }

    if (currentPage === 'form') {
        currentPage = 'premios';
    }

    if (currentPage === 'conquista') {
        currentPage = 'conquistas';
    }

    if (currentPage === 'performance') {
        currentPage = 'performance';
    }

    if (currentPage === 'avaliation') {
        currentPage = 'avaliacoes';
    }

    // 3. Encontra todos os links da Navbar
    const allLinks = document.querySelectorAll('.top-bar .nav-link');

    allLinks.forEach(link => {
        // Remove a classe 'active' de TODOS os links antes de re-adicionar
        link.classList.remove('active');

        // 4. Obtém o valor do atributo data-page
        const linkPage = link.getAttribute('data-page');

        // 5. Compara e Adiciona 'active'
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });


}

function loadNavbar() {
    const placeholder = document.getElementById('navbar-placeholder');
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'navbar.html', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            placeholder.innerHTML = xhr.responseText;

            // 1. GARANTE QUE O MOBILE MENU FUNCIONE
            setupMobileMenu();

            // 2. GARANTE QUE O LINK ATIVO SEJA DESTACADO
            setActiveLink();

        } else {
            console.error('Erro ao carregar a navbar:', xhr.statusText);
        }
    };

    xhr.send();
}


// Executa a função para carregar a Navbar quando a página abrir
loadNavbar();
