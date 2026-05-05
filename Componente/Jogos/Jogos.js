import dados from "./Jogos.json" with {type: "json"};

export const criaCard = (nome, desconto, url) => {
    const card = document.createElement("div");

    card.classList.add("game-card");

    const imagem = document.createElement("div");
    imagem.classList.add("game-img");

    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.setAttribute("width", "200px");

    imagem.appendChild(img);

    const titulo = document.createElement("h3");
    titulo.textContent = nome;

    const p = document.createElement("p");
    p.textContent = desconto;

    card.appendChild(imagem);
    card.appendChild(titulo);
    card.appendChild(p);

    return card;
};

export const criaSecaoJogos = () => {
    const css = document.createElement('link');
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("href", "/Componente/Jogos/secao-jogo.css");
    document.head.appendChild(css);

    const secao = document.createElement('section');
    secao.classList.add('games');

    const h2 = document.createElement('h2');
    h2.textContent = "Jogos em Destaque";

    const div = document.createElement('div');
    div.classList.add('game-grid');
    div.setAttribute("id", "cardsGrid");

    secao.appendChild(h2);
    secao.appendChild(div);
    dados.forEach((jogo) => {
        div.appendChild(criaCard(jogo.titulo, jogo.descricao,jogo.url_imagem))
    });

    return secao;
};

