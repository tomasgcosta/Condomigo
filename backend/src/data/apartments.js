const { ObjectId } = require("mongodb");
const { getMongoCollection } = require("./db");
const { findCondoById, findCondos } = require("./condos");

let collection = "apartments";

// ----
// V1.0 - Exclusive for testing in MongoDB & Insomnia
async function insertApartment(condoId, information) {
  const { rentee, location, floor, door } = information;
  const apartments = await getMongoCollection(collection);
  const condos = await getMongoCollection("condos");
  const rentees = await getMongoCollection("rentees");

  const renteeInfo = await rentees.findOne({ _id: new ObjectId(rentee) });

  const renteeId = renteeInfo._id;

  const apartment = await apartments.insertOne({
    condoId: new ObjectId(condoId),
    renteeId: new ObjectId(renteeId),
    location,
    floor,
    door,
  });

  await condos.updateOne(
    { _id: new ObjectId(condoId) },
    { $push: { apartments: apartment.insertedId } }
  );

  return apartment;
}
//----

async function findApartmentsById(id) {
  const apartments = await getMongoCollection(collection);
  return await apartments.findOne({ _id: new ObjectId(id) });
}

async function findApartments() {
  const apartments = await getMongoCollection(collection);
  return await apartments.find().toArray();
}

async function findApartmentsByLocation(location) {
  const apartments = await getMongoCollection(collection);
  return await apartments.find({ location: location }).toArray();
}

async function findApartmentsByCondoId(condoId) {
  const apartments = await getMongoCollection(collection);
  const apartment = await apartments.find({ condoId: new ObjectId(condoId) }).toArray();
  return apartment;
}

module.exports = {
  findApartments,
  findApartmentsById,
  findApartmentsByLocation,
  insertApartment,
  findApartmentsByCondoId,
};
