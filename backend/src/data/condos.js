const { ObjectId } = require("mongodb");
const { getMongoCollection } = require("./db");

let collection = "condos"

// ----
// V1.0 - Exclusive for testing in MongoDB & Insomnia
async function insertCondo(information) {
    const condos = await getMongoCollection(collection)
    return await condos.insertOne(information)
}

//----

async function findCondos() {
    const condos = await getMongoCollection(collection)
    return await condos.find().toArray()
}

async function findCondoById(id) {
    const condos = await getMongoCollection("condos");
    const condo = await condos.findOne({ _id: new ObjectId(id) });
    return condo;
  }


module.exports = {
    findCondos,
    findCondoById,
    insertCondo,

}