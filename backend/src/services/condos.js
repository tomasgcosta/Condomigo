const { insertCondo, findCondos } = require("../data/condos");


async function createCondo(information) {
    return await insertCondo(information)
}

async function getCondos(){
    return await findCondos()
}

module.exports = {
    createCondo,
    getCondos,

}