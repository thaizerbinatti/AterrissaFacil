// Strings destinos
const stringsBotoes = [
    {
        id: 1,
        name: 'Arraial do Cabo',
        description: 'Rio de Janeiro',
        img: 'https://drive.google.com/uc?id=1O111iiK_9JY_QHtO-av1ysp7Rr6wc2Rk',
        price: [499.00],
    },
    {
        id: 2,
        name: 'Bonito',
        description: 'Mato Grosso do Sul',
        img: 'https://drive.google.com/uc?id=1YDiXzi9QzAZTMf0Czi8WX-TBFRRCv4Vq',
        price: [799.00],
    },
    {
        id: 3,
        name: 'Gramado',
        description: 'Rio Grande do Sul',
        img: 'https://drive.google.com/uc?id=1D8OhxjVS2_9p7p8yQvqmB_-fLnEYqZjS',
        price: [499.00],
    },
    {
        id: 4,
        name: 'Lençóis Maranhenses',
        description: 'Maranhão',
        img: 'https://drive.google.com/uc?id=1ZtxHNoPXOMXqbfD7VVWmxo7_iksYIbwX',
        price: [899.00],
    },
    {
        id: 5,
        name: 'Chapada Diamantina',
        description: 'Bahia',
        img: 'https://drive.google.com/uc?id=1H3kdf1OR3sya0qQvbv7_4KCjRsCSj-We',
        price: [699.00],
    },
    {
        id: 6,
        name: 'Campos do Jordão',
        description: 'São Paulo',
        img: 'https://drive.google.com/uc?id=1tcbufq2j9PaRvChFbICuCau0WMIvkc3j',
        price: [499.00],
    },
    {
        id: 7,
        name: 'Tokyo',
        description: 'Japão',
        img: 'https://drive.google.com/uc?id=1sMiO0mvJ0Ol7Ua59dkFvQEK2vaMjfRH2',
        price: [3999.00],
    },
    {
        id: 8,
        name: 'Bali',
        description: 'Indonésia',
        img: 'https://drive.google.com/uc?id=1sO1dPpTqNVSWYYyY6tA2yBMqIHrvHQvX',
        price: [2899.00],
    },
    {
        id: 9,
        name: 'Atenas',
        description: 'Grécia',
        img: 'https://drive.google.com/uc?id=1cWeJ3ZdIzUeG67fgaq4VT9r0za_TFfKL',
        price: [2999.00],
    },
    {
        id: 10,
        name: 'Nova York',
        description: 'Estados Unidos',
        img: 'https://drive.google.com/uc?id=1qDFgEyy4h_E5uwLtuG1LplE1WSpIkxel',
        price: [1899.00],
    },
    {
        id: 11,
        name: 'Santorini',
        description: 'Grécia',
        img: 'https://drive.google.com/uc?id=1B245mi_YVk79lGbcsP0M5NVMB_obD1Uz',
        price: [3999.00],
    },
    {
        id: 12,
        name: 'Quioto',
        description: 'Japão',
        img: 'https://drive.google.com/uc?id=1YFJ0cQpqCxoz3CtR3AJXPJIWMr7swVuP',
        price: [4999.00],
    }
];

// Criar card
function criarCard(stringBotao) {
    // Card
    const card = document.createElement('div');
    card.classList.add('card', 'card-carrinho');
    card.style.backgroundColor = '#001A24'
    card.style.color = '#fff'
    card.style.border = '1px solid #ccc';
    card.style.padding = '10px';
    card.style.marginLeft = '30px'
    card.style.marginBottom = '10px';
    card.style.width = '200px';

    // Img
    const img = document.createElement('img');
    img.classList.add('img-carrinho');
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.marginBottom = '10px';
    img.src = stringBotao.img;
    img.alt = stringBotao.name;

    // Nome do destino
    const destinoName = document.createElement('h5');
    destinoName.classList.add('destino-name');
    destinoName.style.fontSize = '18px';
    destinoName.style.marginBottom = '5px';
    destinoName.textContent = stringBotao.name;

    // País/estado
    const estadoDesc = document.createElement('p');
    estadoDesc.classList.add('estado-desc');
    estadoDesc.style.fontSize = '14px';
    estadoDesc.style.marginBottom = '5px';
    estadoDesc.textContent = stringBotao.description;

    // Preços
    const valorPrice = document.createElement('h5');
    valorPrice.classList.add('valor-price');
    valorPrice.style.fontSize = '16px';
    valorPrice.style.fontWeight = 'bold';
    valorPrice.style.marginBottom = '5px';
    valorPrice.textContent = `R$ ${stringBotao.price}`;

    // Botão excluir
    const botaoExcluir = document.createElement('button');
    botaoExcluir.classList.add('botao-excluir');
    botaoExcluir.style.backgroundColor = '#e74c3c';
    botaoExcluir.style.color = '#fff';
    botaoExcluir.style.border = 'none';
    botaoExcluir.style.padding = '5px';
    botaoExcluir.style.fontSize = '14px';
    botaoExcluir.style.cursor = 'pointer';
    botaoExcluir.textContent = 'Excluir';

    // Remover
    botaoExcluir.addEventListener('click', () => {
        card.remove();
    });

    // Adicionar os elementos ao card
    card.appendChild(img);
    card.appendChild(destinoName);
    card.appendChild(estadoDesc);
    card.appendChild(valorPrice);
    card.appendChild(botaoExcluir);

    // Adicionar o card ao contêiner
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.appendChild(card);
}

// Adicionar evento de clique a cada botão de 1 a 12
for (let i = 1; i <= 12; i++) {
    const botao = document.getElementById(i.toString());

    // Adicionar evento de clique a cada botão
    botao.addEventListener('click', () => {
        criarCard(stringsBotoes[i - 1]);
    });
}