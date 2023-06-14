const { ObjectId } = require("mongodb");
const { getMongoCollection } = require("./db");


async function insertInvoiceByApartmentId(apartId) {
    const invoices = await getMongoCollection('invoices');

    const aparts = await getMongoCollection('apartments');
    const apart = await aparts.findOne({ _id: new ObjectId(apartId) });

    const condos = await getMongoCollection('condos');
    const condo = await condos.findOne({ _id: new ObjectId(apart.condoId) });

    const rentees = await getMongoCollection('rentees');
    
    const rentee = await rentees.findOne({ _id: new ObjectId(apart.rentee) });

    const price = condo.price;
    const invoice = {
        apartId: apart._id,
        renteeId: apart.renteeId, 
        price,
        date: new Date(),
        state: false
    };
   

    const result = await invoices.insertOne(invoice);
    return result.insertedId;
}

async function updateInvoice(invoiceId) {
    const invoices = await getMongoCollection('invoices');

    await invoices.updateOne(
        { _id: new ObjectId(invoiceId) },
        { $set: { state: true } }
    );

    const updatedInvoice = await invoices.findOne({ _id: new ObjectId(invoiceId) });
    return updatedInvoice;
}

async function findInvoicesByCondoId(condoId) {
    const condos = await getMongoCollection('condos');
    const invoices = await getMongoCollection('invoices');
  
    const condo = await condos.findOne({ _id: new ObjectId(condoId) });
  
    const apartmentIds = condo.apartments.map(apartmentId => new ObjectId(apartmentId));
  
    const invoicesByCondo = await invoices.find({ apartId: { $in: apartmentIds } }).toArray();
  
    const invoicesWithApartmentInfo = await Promise.all(
      invoicesByCondo.map(async invoice => {
        return {
          _id: invoice._id,
          apartId: invoice.apartId,
          renteeId: invoice.renteeId,
          price: invoice.price,
          date: invoice.date,
          state: invoice.state,
        };
      })
    );
  
    return invoicesWithApartmentInfo;
  }
  

module.exports = {
    insertInvoiceByApartmentId,
    updateInvoice,
    findInvoicesByCondoId,

}
