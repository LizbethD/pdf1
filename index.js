const { createInvoice } = require("./createInvoice.js");

const invoice = {
  shipping: {
    name: "Lizbeth Gonzalez",
    address: "Athenas 2, Colonia Deportiva",
    city: "Dolores",
    state: "GTO",
    country: "MEX",
    postal_code: 37800
  },
  items: [
    {
      item: "Yo antes de ti",
      description: "Jojo Moyes",
      quantity: 1,
      amount: 42000
    },
    {
      item: "El Alquimista",
      description: "Paulo Cohelo",
      quantity: 3,
      amount: 150000
    },
    {
      item: "Oscuros",
      description: "Lauren Kate ",
      quantity: 1,
      amount: 23000
    },
    {
      item: "Affter ",
      description: "Anna Todd",
      quantity: 2,
      amount: 45000
    }
  ],
  subtotal: 260000,
  paid: 20000,
  invoice_nr: 2535
};

createInvoice(invoice, "invoice.pdf");
