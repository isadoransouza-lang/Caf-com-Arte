let imagem = ["c.expre.jpg", "c.am.jpg", "capp.jpg", "latt.jpg", "moch.jpg", "atto.jpg", "OIP.webp", "affog.webp", "queijo.jpg", "frango.png"];
let texto = ["Café Expresso", "Café Americano", "Cappuccino", "Latte (Café com leite)","Mocha", "Macchiato", "Café Gelado (Iced Coffee)",
    "Affogato", "Café com Pão de Queijo(Combo Especial do Dia)", "Macchiato com Torta de Frango(Combo Especial do Dia)"
 ];
let peq = ["Bebida curta e intensa, feita sob alta pressão. Tem sabor forte e marcante, ideal para quem gosta de café puro.",
     "É o expresso diluído em água quente, ficando mais suave e com maior volume.",
      "Mistura de café expresso, leite vaporizado e espuma. Cremoso e equilibrado, é um dos mais populares.",
    "Tem mais leite do que café, ficando mais suave e levemente adocicado.",
"Combina café, leite e chocolate. Ideal para quem gosta de bebidas doces.",
"Expresso com um toque de leite ou espuma. Mantém o sabor forte, mas um pouco suavizado.", "Servido frio com gelo, é refrescante e pode ser adoçado ou combinado com leite.",
"Sobremesa italiana com uma bola de sorvete (geralmente baunilha) “afogada” em café expresso quente.", "O café da sua preferencia com um delicioso pão de queijo.", 
"Um delicioso macchiato com um torta de frango incrivel."];
let preco = ["R$ 4,00 a R$ 8,00", "R$5,00 a R$ 10,00", "R$8,00 a R$ 15,00", "R$7,00 a R$ 14,00", "R$10,00 a R$ 18,00", "R$R$ 7,00 a R$ 12,00",
    "R$8,00 a R$ 16,00", "R$ 12,00 a R$ 20,00", "R$ 15,00 a R$ 17,00", "R$ 25,00 a R$ 32,00"
];
let compra = ["A vista no pix ou cartão", "A vista no pix ou cartão", "A vista no pix ou cartão", "A vista no pix ou cartão", 
    "A vista no pix ou cartão","A vista no pix ou cartão", "A vista no pix ou cartão", "A vista no pix ou cartão", "A vista no pix ou cartão", "A vista no pix ou cartão"];
let i 
function criarCard() {
    let conta = document.querySelector('.conta');

    for (i = 0; i < texto.length; i++) {
        conta.innerHTML += `<div class="conteiner" id="conteiner">
            <img src="${imagem[i]}" alt="brasas">
            <p class="texto-pequeno">${texto[i]}</p>
            <p class="pequeno">${peq[i]}</p>
            <p class="Preço">${preco[i]}</p>
            <p class="Preço-pagamento">${compra[i]}</p>

            <button type="button">Comprar</button>

        </div>`
    }
}
criarCard()