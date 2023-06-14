const { ObjectId } = require("mongodb");
const { getMongoCollection } = require("./db");

let collection = "rentees"

//---
// V1.0 - Exclusive for testing in MongoDB & Insomnia

async function insertRentee(information){
    const rentees = await getMongoCollection(collection)
    await rentees.insertOne(information)
    return rentees.insertedId
}

//---

async function findRentees(){
    const rentees = await getMongoCollection(collection)
    return await rentees.find().toArray()
}


module.exports = {
    findRentees,
    insertRentee,


}