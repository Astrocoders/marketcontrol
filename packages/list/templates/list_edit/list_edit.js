/* jshint esnext: true*/

Template.ListEdit.events({
  'click #scan-product'(event, tmpl){
    Barcode.scan(function(result){
      // TODO: Check if all subs are ready
      const product = Products.findOne({ barcode: result.text });
      if(product){
        tmpl.ListHandler.addProduct(product);
      } else {
        console.log('Must invoke a modal do create a new product');
      }
    }, function(error){
      console.log(arguments);
    });
  },

  'click .button-product-qty'(event, tmpl){
    IonPopup.prompt({
      title: 'Quantidade',
      template: 'Quantos você está levando?',
      okText: 'Ok',
      inputType: 'number',
      inputPlaceholder: this.quantity,
      cancelText: 'Cancelar',
      onOk: (event, val) => {
        tmpl.ListHandler.updateProductQuantity(this, Number(val));
      }
    });
  },
});

Template.ListEdit.helpers({
  list(){
    return Lists.findOne();
  }
});

Template.ListEdit.onCreated(function(){
  const listId = Router.current().params._id;
  this.listId = listId;
  this.list = {};
  this.subscribe('listEdit', listId, () => {
    this.list = Lists.findOne();
    this.ListHandler = new ListHandler(this.list);
  });
  this.subscribe('products');
});


Template.ListEdit.onRendered(function(){

});
