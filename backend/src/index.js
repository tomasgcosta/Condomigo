const express = require("express");
const { createApartment, getApartments, getApartmentsByCondoId } = require("./services/apartments");
const { createCondo, getCondos } = require("./services/condos");
const { ObjectId } = require("mongodb");
const { createRentee } = require("./services/rentees");
const { createInvoiceForApartment, payInvoice, getInvoicesByCondo } = require("./services/invoices");
const app = express();

const PORT = 3060;

app.use(express.json());
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// --- 
// V1.0 - Exclusive for testing / Not distributed in the final app!
app.post('/api/:id/apartment', async (req, res) => {
    try {
        const condoId = req.params.id;
        const { rentee, location, floor, door } = req.body;

        const apartment = await createApartment(condoId, req.body);
        

        return res.status(200).json({ _id: apartment.insertedId, rentee, location, floor, door });
    } catch (err) {
        console.log(err);
    }
});


app.post('/api/condo', async (req, res) => {
    try {
        const { name, location, price, url } = req.body
        const condo = await createCondo(req.body)

        return res.status(201).json({ _id: condo.insertedId, name, location, price, url })

    }
    catch (err) {
        console.log(err)
    }
})

app.post('/api/rentee', async (req, res) => {
    try {
        const { name, payment, email, cellphone } = req.body
        const rentee = await createRentee(req.body)

        return res.status(201).json({ name, payment, email, cellphone })

    }
    catch (err) {
        console.log(err)
    }
})

// ---

// CRIAR ENDPOINTS PARA RECIBOS

// Criar recibo para o apartmento
app.post('/api/apartment/invoice/:id', async (req, res) => {
    try {
        const apartment = req.params.id
        const invoice = await createInvoiceForApartment(apartment)

        return res.status(201).json(invoice)
    }
    catch (err) {
        console.log(err)
    }
})

app.get('/api/condos', async (req, res) => {
    try {
        const condos = await getCondos()
        return res.status(200).json(condos)
    }
    catch (err) {
        console.log(err)
    }
})

app.get('/api/apartments', async (req, res) => {
    try {
        const apartments = await getApartments()
        return res.status(200).json(apartments)
    }
    catch (err) {
        console.log(err)
    }
})

// Encontrar os apartamentos de um condo
app.get('/api/:id/apartments', async (req, res) => {
    try {
        const condoId = req.params.id
        const apartments = await getApartmentsByCondoId(condoId)

        return res.status(200).json({ _id: condoId, apartments })

    }
    catch (err) {
        console.log(err)
    }
})

// Consultar recibos por condo
app.get('/api/condo/invoice/:id', async (req, res) => {
    try {
        const condoId = req.params.id;
        const invoices = await getInvoicesByCondo(condoId);

        return res.status(200).json(invoices)
    }
    catch (err) {
        console.log(err)
    }
})

app.patch('/api/invoice/:id', async (req, res) => {
    try {
        const invoiceId = req.params.id
        const invoice = await payInvoice(invoiceId)

        return res.status(200).json(invoice)

    }
    catch (err) {
        console.log(err)
    }
})


