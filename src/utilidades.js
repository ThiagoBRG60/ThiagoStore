export const catalogo = [
  {
    id: "1",
    marca: "Playstation 4",
    nome: "Minecraft",
    preco: 150,
    imagem: "jogo-1.jpg",
    playstation: true,
  },
  {
    id: "2",
    marca: "Playstation 4",
    nome: "God Of War 4",
    preco: 80,
    imagem: "jogo-2.jpg",
    playstation: true,
  },
  {
    id: "3",
    marca: "Playstation 4",
    nome: "Assassins Creed Valhalla",
    preco: 200,
    imagem: "jogo-3.jpg",
    playstation: true,
  },
  {
    id: "4",
    marca: "Playstation 4",
    nome: "Cyberpunk",
    preco: 200,
    imagem: "jogo-4.jpg",
    playstation: true,
  },
  {
    id: "5",
    marca: "Playstation 4",
    nome: "Far Cry 6",
    preco: 130,
    imagem: "jogo-5.jpg",
    playstation: true,
  },
  {
    id: "6",
    marca: "Playstation 4",
    nome: "Grand Theft Auto 5",
    preco: 100,
    imagem: "jogo-6.jpg",
    playstation: true,
  },
  {
    id: "7",
    marca: "Playstation 4",
    nome: "Call Of Duty Black Ops 4",
    preco: 80,
    imagem: "jogo-7.jpg",
    playstation: true,
  },
  {
    id: "8",
    marca: "Playstation 4",
    nome: "Need For Speed Heat",
    preco: 150,
    imagem: "jogo-8.jpg",
    playstation: true,
  },
  {
    id: "9",
    marca: "Playstation 4",
    nome: "Resident Evil 4",
    preco: 230,
    imagem: "jogo-9.jpg",
    playstation: true,
  },
  {
    id: "10",
    marca: "Playstation 4",
    nome: "Spider Man: Miles Morales",
    preco: 180,
    imagem: "jogo-10.jpg",
    playstation: true,
  },
  {
    id: "11",
    marca: "Playstation 4",
    nome: "Death Stranding",
    preco: 130,
    imagem: "jogo-11.jpg",
    playstation: true,
  },
  {
    id: "12",
    marca: "Playstation 4",
    nome: "Horizon Forbidden West",
    preco: 150,
    imagem: "jogo-12.jpg",
    playstation: true,
  },
  {
    id: "13",
    marca: "Playstation 4",
    nome: "Ghost Of Tsushima",
    preco: 120,
    imagem: "jogo-13.jpg",
    playstation: true,
  },
  {
    id: "14",
    marca: "Playstation 4",
    nome: "Red Dead Redepmtion 2",
    preco: 100,
    imagem: "jogo-14.jpg",
    playstation: true,
  },
  {
    id: "15",
    marca: "Xbox One",
    nome: "Mortal Kombat 11",
    preco: 90,
    imagem: "jogo-15.jpg",
    playstation: false,
  },
  {
    id: "16",
    marca: "Xbox One",
    nome: "Battlefield 5",
    preco: 220,
    imagem: "jogo-16.jpg",
    playstation: false,
  },
  {
    id: "17",
    marca: "Xbox One",
    nome: "Guardians Of The Galaxy",
    preco: 180,
    imagem: "jogo-17.jpg",
    playstation: false,
  },
  {
    id: "18",
    marca: "Xbox One",
    nome: "Fifa 23",
    preco: 280,
    imagem: "jogo-18.jpg",
    playstation: false,
  },
  {
    id: "19",
    marca: "Xbox One",
    nome: "The Witcher 3",
    preco: 120,
    imagem: "jogo-19.jpg",
    playstation: false,
  },
  {
    id: "20",
    marca: "Xbox One",
    nome: "The Quarry",
    preco: 250,
    imagem: "jogo-20.jpg",
    playstation: false,
  },
  {
    id: "21",
    marca: "Xbox One",
    nome: "It Takes Two",
    preco: 100,
    imagem: "jogo-21.jpg",
    playstation: false,
  },
  {
    id: "22",
    marca: "Xbox One",
    nome: "Lego DC Super Villains",
    preco: 40,
    imagem: "jogo-22.jpg",
    playstation: false,
  },
  {
    id: "23",
    marca: "Xbox One",
    nome: "Star Wars Jedi Fallen Order",
    preco: 100,
    imagem: "jogo-23.jpg",
    playstation: false,
  },
  {
    id: "24",
    marca: "Xbox One",
    nome: "Forza Horizon 5",
    preco: 250,
    imagem: "jogo-24.jpg",
    playstation: false,
  },
  {
    id: "25",
    marca: "Xbox One",
    nome: "No Mans Sky",
    preco: 100,
    imagem: "jogo-25.jpg",
    playstation: false,
  },
  {
    id: "26",
    marca: "Xbox One",
    nome: "Minecraft Dungeons",
    preco: 70,
    imagem: "jogo-26.jpg",
    playstation: false,
  },
  {
    id: "27",
    marca: "Xbox One",
    nome: "A Way Out",
    preco: 80,
    imagem: "jogo-27.jpg",
    playstation: false,
  },
  {
    id: "28",
    marca: "Xbox One",
    nome: "Sekiro Shadows Die Twice",
    preco: 250,
    imagem: "jogo-28.jpg",
    playstation: false,
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
  localStorage.removeItem(chave);
}

export function desenharProdutoNoCarrinhoSimples(
  idProduto,
  idContainerHtml,
  quantidadeProduto
) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById(idContainerHtml);

  const elementoArticle = document.createElement("article");
  const articleClasses = [
    "flex",
    "bg-slate-900",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-96",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  const cartaoProdutoCarrinho = `
        <img src="./Assets/${produto.imagem}" alt="Carrinho: ${produto.nome}" class="h-32 rounded-lg"/>
        <div class="p-2 flex flex-col justify-between">
            <p class="text-slate-200 text-base">${produto.nome}</p>
            <p class="text-slate-200 text-base">${produto.marca}</p>
            <p class="text-green-700 text-lg">R$${produto.preco}</p>
        </div>
        <div class='flex text-slate-200 items-end absolute bottom-0 right-2 text-lg'>
            <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
    </div>`;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}
