Lists = new Mongo.Collection('lists');

const ListProductSchema = new SimpleSchema({
  _id: {
    type: SimpleSchema.RegEx.Id,
  },

  name: {
    type: String,
  },

  price: {
    type: Number,
    decimal: true,
  },

  barcode: {
    type: String,
  },

  quantity: {
    type: Number,
  },
});

Lists.attachSchema({
  name: {
    type: String,
    label: 'Nome',
  },

  products: {
    type: [ListProductSchema],
    label: 'Produtos',
    optional: true,
  },

  market: {
    type: SimpleSchema.RegEx.Id,
    label: 'Supermercado',
  },

  createdAt: {
    type: Date,
    autoValue: function(){
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    },
  },
});
