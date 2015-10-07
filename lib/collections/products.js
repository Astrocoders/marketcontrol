Products = new Mongo.Collection('products');

let PricesSchema = new SimpleSchema({
  market: {
    type: String,
    label: 'Supermercado'
  },
  price: {
    type: Number,
    decimal: true,
    label: 'Preço'
  }
});

Products.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: 'Nome',
    index: 1
  },

  barcode: {
    type: String,
    label: 'Código de barras',
    optional: true,
    index: 1
  },

  prices: {
    label: 'Preços',
    type: [PricesSchema]
  }
}));

Products.initEasySearch('name');