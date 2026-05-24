import express  from "express";
import Autor from "../models/Autor.js";
import Sinopse from "../models/Sinopse.js";
import  Model  from "sequelize";
const router = express.Router();

router.get("/sinopse", (req, res) => {
   Promise.all([
    Sinopse.findAll({
        include: [
            {
                model: Autor,
                required: true
            },
        ],
   }),
    Autor.findAll(),
   ]).then(([
    sinopse,autor
   ])=>{
    res.render("sinopse", {
        sinopse: sinopse,
        autor: autor
    })
   }).catch((error) =>{
    console.log(error)
   })
});

router.post("/sinopse/Cadastrar", function(req,res){
    const url = req.body.url;
    const titulo = req.body.titulo;
    const sinopse = req.body.sinopse;
    const autorId = req.body.autorId;
    Sinopse.create({
        imagem: url,
        titulo: titulo,
        sinopse: sinopse,
        autorId: autorId
    }).then(()=>{
        res.redirect("/sinopse")
    }).catch((error)=>{
        console.log(error)
    })
    
})

router.get("/sinopse/Excluir/:id", function(req, res){
    const id = req.params.id
    Sinopse.destroy({
        where: {
            id: id
        }
    }).then(()=>{
        res.redirect("/sinopse")
    }).catch((error)=>{
        console.log(error)
    })
})

router.get("/sinopse/Editar/:id", function(req, res) {
    const id = req.params.id;
    Promise.all([
        Sinopse.findByPk(id),
        Autor.findAll(),
    ]).then(([sinopse, autor]) => {

        res.render("editarSinopse", {
            sinopse: sinopse,
            autor: autor
        });
    })
    .catch((erro) => {
        console.log(erro);
        res.send("Erro ao carregar os dados");
    });
});

router.post("/sinopse/Editar", function(req, res){
    const id = req.body.id
    const url = req.body.url;
    const titulo = req.body.titulo;
    const sinopse = req.body.sinopse;
    const autorId = req.body.autorId;

    Sinopse.update({
        imagem: url,
        titulo: titulo,
        sinopse: sinopse,
        autorId: autorId
    },
    {
        where:
        {
            id: id
        }
    }).then(()=>{
    res.redirect("/sinopse")
    }).catch((erro)=>{
    console.log(erro)
    })
})

export default router;