Markets = new Mongo.Collection('markets');

Markets.attachSchema({
  name: {
    type: String,
    label: 'Nome',
  },
});
