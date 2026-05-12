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

const paginaJogoHTMl = () => {
    const obj = document.createElement('section');
    obj.innerHTML = `<section class="jogo">
        <div class="jogo-content">            
            <div class="jogo-info">
                <h1>NOME DO JOGO</h1>
                <p>DESCRIÇÃO DO JOGO</p>
                <button class="cta">Comprar NOME DO JOGO</button>
            </div>        
            <div class="jogo-imagem">
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg" alt="NOME DO JOGO">
            </div>
        </div>
    </section>`
    return obj
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

const rotas = {
    "/": () => {
        root.appendChild(initApp());
    },
    "/Loja": () => {
        root.appendChild(initApp());
    },
    "/Comunidade": () => {
        root.appendChild(criaHeader());
        root.appendChild(Jogos.criaHero());
    },
    "/Jogos": (id) => {
                let jogo = Jogos.encontrarJogo(id);

        root.appendChild(criaHeader());
        root.appendChild(Jogos.criaSecaoJogoPrincipal(jogo.titulo, jogo.descricao, jogo.url_imagem  ));
        root.appendChild(criaFooter());
    },
    "/Sobre": () => {
        root.appendChild(criaHeader());
        root.appendChild(
            criaHero("Sobre", "A STEAM é uma plataforma")
        );
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