const { insertRentee } = require("../data/rentees");

async function createRentee(information) {
    return await insertRentee(information)
}

module.exports = {
    createRentee,
}