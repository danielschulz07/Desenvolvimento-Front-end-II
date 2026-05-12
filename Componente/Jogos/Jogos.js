import dados from "./Jogos.json" with {type: "json"};

export const criaCard = (nome, desconto, url, id) => {
    const card = document.createElement("div");

    card.classList.add("game-card");
    card.setAttribute("href", "/Jogos/" + id);
    card.setAttribute("data-link", true);

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
    div.addEventListener
    div.classList.add('game-grid');
    div.setAttribute("id", "cardsGrid");

    secao.appendChild(h2);
    secao.appendChild(div);
    dados.forEach((jogo) => {
        div.appendChild(criaCard(jogo.titulo, jogo.descricao, jogo.url_imagem, jogo.appid))
    });

    return secao;
};

export let criaSecaoJogoPrincipal = (nomeJogo, descricao, urlImg) => {
    const section = document.createElement("section");
    section.classList.add("jogo");

    const divContent = document.createElement("div");
    divContent.classList.add("jogo-content");

    const divInfo = document.createElement("div");
    divInfo.classList.add("jogo-info");

    const h1 = document.createElement("h1");
    h1.textContent = nomeJogo;
    divInfo.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = descricao;
    divInfo.appendChild(p);

    const btComprarJogo = document.createElement("button");
    btComprarJogo.classList.add("cta");
    btComprarJogo.textContent = "Comprar " + nomeJogo;
    divInfo.appendChild(btComprarJogo);

    divContent.appendChild(divInfo);

    const divImagem = document.createElement("div");
    divImagem.classList.add("jogo-imagem");

    const img = document.createElement("img");
    img.src = urlImg;
    img.alt = "Imagem do jogo " + nomeJogo;
    divImagem.appendChild(img);

    divContent.appendChild(divImagem);

    section.appendChild(divContent);

    return section;
}




export let encontrarJogo = (id) => {
    return dados.find(jogo => {return jogo.appid == id})
}