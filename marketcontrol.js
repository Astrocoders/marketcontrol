Products = new Mongo.Collection('products');
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
    type: [new SimpleSchema({
      market: {
        type: String,
        label: 'Supermercado'
      },
      price: {
        type: Number,
        decimal: true,
        label: 'Preço'
      }
    })]
  }
}));

Products.initEasySearch('name');

if (Meteor.isClient) {

Template.ProductSearch.events({
  'click .product-listed': function(){

  }
});

Template.ProductSearch.helpers({
  
});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}