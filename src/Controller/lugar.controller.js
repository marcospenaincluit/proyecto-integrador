const {} = require('../Services/lugar.services');

    async function addTrek(req,res){
        res.json({
            msj: "Entro por add"
        })



    }


    async function getTrek(req,res){
        res.json({
            msj: "Entro por get"
        })



    }


    async function updateTrek(req,res){
        res.json({
            msj: "Entro por update"
        })



    }


    async function deleteTrek(req,res){
        res.json({
            msj: "Entro por delete"
        })




    }

module.exports= {addTrek,getTrek,updateTrek,deleteTrek};