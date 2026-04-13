import express from 'express';
const router = express.Router();

router.get("/perfil", (req, res) => {
    const user = {
        nome : "Henrique Santos", 
        email : "henrique@gmail.com", 
        img : "./img/img-perfil.avif",
        endereco: "Rua Exemplo, 123 - São Paulo/SP"
    }
    res.render("perfil", {
        user : user
    });
});

export default router;