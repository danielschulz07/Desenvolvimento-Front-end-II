import * as Jogos from '../../Componente/Jogos/Jogos.js'

const initApp = () => {
    const root = document.getElementById('root')

    const css = document.createElement('link');
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("href", "/Componente/App/style.css");
    document.head.appendChild(css);

    root.appendChild(criaHeader())
    root.appendChild(criaHero())
    root.appendChild(Jogos.criaSecaoJogos())
    root.appendChild(criaFooter())
}

const initJogo = () => {
    const root = document.getElementById('root')

    const css = document.createElement('link');
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("href", "./Componente/App/style.css");
    document.head.appendChild(css);

    root.appendChild(criaHeader())
    root.appendChild(paginaJogo())
    root.appendChild(criaHero())
    root.appendChild(criaFooter())
}

const criaHero = () => {
    const obj = document.createElement('section');
    obj.innerHTML = `<section class="hero">
        <div class="hero-content">
            <h1>Promoção de Verão Steam</h1>
            <p>Milhares de jogos com até 90% de deconto. Não perca essa oportunidade!</p>
            <button class="cta">Explorar Ofertas</button>
        </div>
    </section>`
    return obj
}

const criaFooter = () => {
    const obj = document.createElement('section');
    obj.innerHTML = `<footer>
        <p>Página Desenvolvida para Aula de Front-End II </p>
    </footer>`
    return obj
}

const criaContato = () => {
    const obj = document.createElement('section');
    obj.innerHTML = `<section class="contact">
        <h2>Receba Ofertas Exclusivas</h2>
        <form>
            <input type="text" placeholder="Seu Nome" required>
            <input type="email" placeholder="Seu Email" required>
            <button type="submit">Cadastrar</button>
        </form>
    </section>`
    return obj
}

const criaHeader = () => {
    const header = document.createElement('header')
    const div = document.createElement('div')
    div.classList.add('logo')
    div.textContent = 'STEAM'

    const nav = document.createElement('nav')
    nav.setAttribute('id', 'subnav')

    const a1 = criarLink('Loja', "/Loja")
    const a2 = criarLink('Comunidade', "/Comunidade")
    const a3 = criarLink('Jogos', "/Jogos")
    const a4 = criarLink('Sobre', "/Sobre")
    const a5 = criarLink('Instalar o Steam', "/Instalar")
    a5.classList.add('btn-nav');

    header.appendChild(div)
    header.appendChild(nav)
    nav.appendChild(a1)
    nav.appendChild(a2)
    nav.appendChild(a3)
    nav.appendChild(a4)
    nav.appendChild(a5)

    return header;
}

const paginaJogo = () => {
    const css = document.createElement('link');
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("href", "/Componente/Jogos/secao-jogo.css");
    document.head.appendChild(css);

    const sectionJogo = document.createElement('section');
    sectionJogo.classList.add('jogo');

    const divPrincipal = document.createElement('div');
    divPrincipal.classList.add('jogo-content');

    const divJogo = document.createElement('div');
    divJogo.classList.add('jogo-info');

    const divImagem = document.createElement('div');
    divImagem.classList.add('jogo-imagem');

    const titulo = document.createElement('h1');
    titulo.textContent = "GTA V"

    const descricao = document.createElement('p');
    descricao.textContent = "JOGUIN LEGAL MAN"

    const botao = document.createElement('button');
    botao.classList.add('cta');
    botao.textContent = `Comprar ${"GTA"}`;
    botao.target = '_blank';

    const img = document.createElement('img');
    img.src = "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg"

    divJogo.appendChild(titulo);
    divJogo.appendChild(descricao);
    divJogo.appendChild(botao);

    divImagem.appendChild(img);

    divPrincipal.appendChild(divJogo);
    divPrincipal.appendChild(divImagem);
    sectionJogo.appendChild(divPrincipal);

    return sectionJogo;
}

const criarLink = (texto, link) => {
    const a = document.createElement('a');
    a.textContent = texto;
    a.setAttribute('href', link);
    a.setAttribute('data-link', '');
    return a;
}


document.addEventListener('click', function(event) {
    if(event.target.matches("[data-link]")) {
        event.preventDefault();
        const novoCaminho = event.target.getAttribute("href");
        navegarPara(novoCaminho);
    }
})

window.addEventListener("popstate", function() {
    rednerizandoRotas(window.location.pathname);
})

const criaComunidade = () => {
    const section = document.createElement('section');
    section.classList.add('comunidade');

    const container = document.createElement('div');
    container.classList.add('comunidade-container');

    // Banner
    const banner = document.createElement('div');
    banner.classList.add('comunidade-banner');

    const titulo = document.createElement('h1');
    titulo.textContent = 'Comunidade Steam';

    const descricao = document.createElement('p');
    descricao.textContent =
        'Conheça novos jogadores, participe de discussões, compartilhe capturas de tela, vídeos e avaliações.';

    banner.appendChild(titulo);
    banner.appendChild(descricao);

    // Grid
    const grid = document.createElement('div');
    grid.classList.add('comunidade-grid');

    const cards = [
        {
            titulo: '🎮 Discussões',
            descricao: 'Participe de fóruns sobre seus jogos favoritos.',
            botao: 'Explorar'
        },
        {
            titulo: '📸 Capturas',
            descricao: 'Compartilhe suas melhores screenshots.',
            botao: 'Ver Galeria'
        },
        {
            titulo: '🎥 Vídeos',
            descricao: 'Assista a conteúdos criados pela comunidade.',
            botao: 'Assistir'
        },
        {
            titulo: '🏆 Conquistas',
            descricao: 'Compare suas conquistas com outros jogadores.',
            botao: 'Visualizar'
        },
        {
            titulo: '⭐ Análises',
            descricao: 'Leia avaliações da comunidade Steam.',
            botao: 'Ler Análises'
        }
    ];

    cards.forEach(card => {

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card-comunidade');

        const h2 = document.createElement('h2');
        h2.textContent = card.titulo;

        const p = document.createElement('p');
        p.textContent = card.descricao;

        const button = document.createElement('button');
        button.classList.add('cta');
        button.textContent = card.botao;

        cardDiv.appendChild(h2);
        cardDiv.appendChild(p);
        cardDiv.appendChild(button);

        grid.appendChild(cardDiv);
    });

    container.appendChild(banner);
    container.appendChild(grid);

    section.appendChild(container);

    return section;
};

const criaSobre = () => {

    const section = document.createElement('section');
    section.classList.add('sobre');

    const container = document.createElement('div');
    container.classList.add('sobre-container');

    const titulo = document.createElement('h1');
    titulo.textContent = 'Sobre a Steam';

    const descricao = document.createElement('p');
    descricao.textContent =
        'A Steam é uma plataforma digital de distribuição de jogos desenvolvida pela Valve. Além de comprar e baixar jogos, os usuários podem participar de comunidades, compartilhar conteúdos, conversar com amigos e acompanhar suas conquistas.';

    const subtitulo = document.createElement('h2');
    subtitulo.textContent = 'O que você encontra aqui?';

    const lista = document.createElement('ul');

    const itens = [
        '🎮 Catálogo de milhares de jogos',
        '🛒 Promoções frequentes',
        '👥 Comunidades de jogadores',
        '🏆 Sistema de conquistas',
        '☁️ Salvamento em nuvem',
        '💬 Chat com amigos'
    ];

    itens.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li);
    });

    const botao = document.createElement('button');
    botao.classList.add('cta');
    botao.textContent = 'Conhecer Mais';

    container.appendChild(titulo);
    container.appendChild(descricao);
    container.appendChild(subtitulo);
    container.appendChild(lista);
    container.appendChild(botao);

    section.appendChild(container);

    return section;
};




const rotas = {
    "/": () => {
        root.appendChild(initApp());
    },
    "/Loja": () => {
        root.appendChild(initApp());
    },
    "/Comunidade": () => {
        root.appendChild(criaHeader());
        root.appendChild(criaComunidade());
        root.appendChild(criaFooter());
    },
    "/Jogos": (id) => {
        let jogo = Jogos.encontrarJogo(id);
        root.appendChild(criaHeader());
        root.appendChild(Jogos.criaSecaoJogoPrincipal(jogo.titulo, jogo.descricao, jogo.url_imagem  ));
        root.appendChild(criaFooter());
    },
    "/Sobre": () => {
        root.appendChild(criaHeader());
        root.appendChild(criaSobre());
        root.appendChild(criaFooter());
    },
    "/Instalar": () => {
        root.innerHTML = `<h1>Deu certo o instalador</h1>`;
    },
};


function navegarPara(path) {
    history.pushState({}, "", path);
    rednerizandoRotas(path);
}

function rednerizandoRotas(path) {
    let partes = path.split("/");

    const novoPath = "/" + partes[1];
    const pagina = rotas[novoPath];

    root.innerHTML = "";

    if (pagina) {
        if (partes[1] === "Jogos") {
            const id = partes[2];
            pagina(id);
        } else {
            pagina();
        }
    } else {
        root.innerHTML = `
            <h1>404</h1>
            <p>Página não encontrada.</p>
        `;
    }
}



initApp()
//initJogo()