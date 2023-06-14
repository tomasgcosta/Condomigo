const { insertInvoiceByApartmentId, updateInvoice, findInvoicesByCondoId } = require("../data/invoices");

async function createInvoiceForApartment(apartId) {
    return await insertInvoiceByApartmentId(apartId)
}

async function payInvoice(invoiceId) {
    return await updateInvoice(invoiceId)
}

async function getInvoicesByCondo(condoId) {
    return await findInvoicesByCondoId(condoId)
}

module.exports = {
    createInvoiceForApartment,
    payInvoice,
    getInvoicesByCondo,

}
