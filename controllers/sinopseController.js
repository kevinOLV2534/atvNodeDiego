import express from 'express';
const router = express.Router();

router.get("/sinopse", (req, res) => {
    const sinopse = [
        {   
            imagem: "https://www.gamereactor.pt/media/16/supermariogalaxy_4831683b.jpg",
            titulo: "Super Mario Galaxy: O Filme",
            sinopse: "Mario embarca em uma jornada intergaláctica quando uma ameaça cósmica coloca em risco não apenas o Reino dos Cogumelos, mas todo o universo. Ao lado de novos aliados, como a misteriosa Rosalina e os pequenos Lumas, ele atravessa galáxias cheias de desafios, planetas com gravidade instável e inimigos poderosos. Enquanto enfrenta Bowser, que agora possui um plano ainda mais ambicioso, Mario precisa descobrir sua própria coragem e aprender a confiar no desconhecido para salvar a Princesa Peach e restaurar o equilíbrio do cosmos."

        },
        {   
            imagem: "https://i.ytimg.com/vi/M8fr7801VwQ/maxresdefault.jpg",
            titulo: "Mortal Kombat 2",
            sinopse: "Após os eventos do primeiro torneio, os guerreiros da Terra são convocados para uma batalha ainda mais mortal. Com a ameaça de invasão do Outworld se intensificando, novos lutadores entram em cena, incluindo figuras lendárias como Kitana e Johnny Cage. Enquanto Liu Kang treina para se tornar o verdadeiro campeão, forças sombrias lideradas por Shao Kahn colocam o destino da humanidade em jogo. Entre lutas brutais e alianças inesperadas, os combatentes precisam superar seus limites para impedir a destruição do mundo."
        },
        {   
            imagem: "https://rollingstone.com.br/wp-content/uploads/2024/02/duna-parte-2-com-timothee-chalamet-e-zendaya-estreia-nos-cinemas-brasileiros-foto-divulgacaowarner-bros-pictures.jpg",
            titulo: "Duna 2",
            sinopse: "Paul Atreides continua sua jornada em Arrakis, agora mais integrado ao povo Fremen e cada vez mais próximo de cumprir seu destino profético. Enquanto domina as tradições do deserto e fortalece sua liderança, ele planeja uma vingança contra aqueles que destruíram sua família. Ao lado de Chani e dos guerreiros Fremen, Paul enfrenta o poder do Império e das casas rivais, enquanto lida com visões de um futuro incerto. A luta pelo controle da especiaria se torna uma guerra épica que pode mudar o destino de toda a galáxia."
        },
        {   
            imagem: "https://legadodamarvel.com.br/wp-content/uploads/2025/11/homem-aranha-um-novo-dia-2-cenas-do-trailer-proemtem-chocar-os-fas-legadodamarvel.webp",
            titulo: "Homem-Aranha: Um Novo Dia",
            sinopse: "Após eventos que mudaram completamente sua vida, Peter Parker tenta reconstruir sua identidade enquanto equilibra os desafios de ser um jovem comum e o herói mascarado de Nova York. Enfrentando novos vilões e ameaças cada vez mais perigosas, ele também precisa lidar com perdas pessoais e decisões difíceis que colocam à prova seu senso de responsabilidade. Em meio a conflitos internos e externos, o Homem-Aranha descobre que ser herói vai muito além de poderes — é sobre escolhas, sacrifícios e a coragem de seguir em frente, mesmo quando tudo parece perdido."
        }

    ];
    res.render("sinopse", { sinopse });
});

export default router;