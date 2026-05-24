import express from "express";
import Autor from "../models/Autor.js";

const router = express.Router()

router.get("/Autor", function(req, res){
    Autor.findAll().then((consulta)=>{
         res.render("cadastroAutor", {
            consulta: consulta
         })

    }).catch((erro)=>{
        console.log(erro)
    })
   
})

router.post("/Autor/Cadastrar", function(req,res){
    const nomeAutor = req.body.nome
    const idadeAutor = req.body.idade
    Autor.create({
        nomeAutor: nomeAutor,
        idadeAutor: idadeAutor
    }).then(()=>{
        res.redirect("/Autor")
    }).catch((erro)=>{
        console.log(erro)
    })
    
})

router.get("/Autor/Excluir/:id", function(req, res){
    const id = req.params.id
    Autor.destroy({
        where: {
            id: id
        }
    }).then(()=>{
        res.redirect("/Autor")
    }).catch((erro)=>{
        console.log(erro)
    })
})

router.get("/Autor/Alterar/:id", function(req, res){
    const id = req.params.id;
    Autor.findByPk(id).then((consulta)=>{
        res.render("editarAutor",{
            Alterar: consulta
        })
    }).catch((erro)=>{
        console.log(erro)
    })
})

router.post("/Autor/Alterar", function(req, res){
    const id = req.body.id;
    const nomeAutor = req.body.nome;
    const idadeAutor = req.body.idade;
    Autor.update({
        nomeAutor: nomeAutor,
        idadeAutor: idadeAutor
    },
    {
        where:{
            id: id
        }
    }
).then(()=>{
    res.redirect("/Autor")
}).catch((erro)=>{
    console.log(erro)

})
})

export default router;