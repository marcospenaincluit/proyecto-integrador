function getIndex(req, res){
    res.json({
        msj: "Bienvenido al sistema Gastronomia Río Tercero - API",
        endpints: {
            GET: "/riotercero/shops/",
            GET2: "/riotercero/shops/:id",
            POST: "/riotercero/shops/new",
            DELETE: "/riotercero/shops/:id",
            PATCH: "/riotercero/shops/:id"
        },
        copyrigth: "Diego Nivoli"
    });
}

module.exports = { getIndex };