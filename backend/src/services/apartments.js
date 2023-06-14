const { findApartments, insertApartment, findApartmentsByCondoId } = require("../data/apartments");


async function getApartments() {
    return await findApartments()
}

async function createApartment(condo, information) {
    const apartment = await insertApartment(condo, information)
    return apartment
}
async function getApartmentsByCondoId(condoId){
    const apartments = await findApartmentsByCondoId(condoId)
    return apartments
}

module.exports = {
    getApartments,
    createApartment,
    getApartmentsByCondoId,
}