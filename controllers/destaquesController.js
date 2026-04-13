import express from 'express';
const router = express.Router();


router.get("/destaques", (req, res) => {
    const destaque = [
        {
        img : "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png",
        nome: "1. Interstellar",
        descricao : "Astronautas buscam um novo lar para salvar a humanidade."
        },
        {
        img : "https://cdn.awsli.com.br/1982/1982647/produto/324136810/a1z543w2wvl-_ac_uf1000-1000_ql80_-photoroom-m0gwclwufk.png",
        nome: "2. Rei Leão",
        descricao : "A origem de Mufasa é revelada, mostrando sua jornada de um jovem leão órfão até se tornar um grande rei."
        },
        {
        img : "https://cinema10.com.br/upload/filmes/filmes_12235_0782168.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg",
        nome: "3. Pé Pequeno",
        descricao : "Um jovem yeti descobre que humanos existem e tenta provar isso ao seu povo."
        },
        {
        img : "https://images.ctfassets.net/4cd45et68cgf/5ubPW3UKcPpDwThgu4X01O/7556b6756fcb6168b11caab885117e24/PT-BR_CARAMELO_Main-Key-Art_Dupla_Vertical_4x5_sRGB_PRE.jpg?w=2000",
        nome: "4. Caramelo",
        descricao : "Um jovem tem sua vida transformada ao criar um forte vínculo com um cachorro, descobrindo o verdadeiro significado de amizade e companheirismo."
        }
    ];
    res.render("destaques", { 
        destaque : destaque
    });
});

export default router;