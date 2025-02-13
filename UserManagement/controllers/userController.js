const userModel = require('../models/userModel');

const createUser = (req, res) => {
    //Aqui, dados de usúario seriam processados e salvos 
    const newUser = req.body; // Simula salvar os dados 
    res.send(`Usúario ${newUser.name} criado com sucesso!´);
}