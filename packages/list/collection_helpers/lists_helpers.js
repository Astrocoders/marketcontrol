Lists.helpers({
  amount(){
    if(!_.isEmpty(this.products)){
      return _.reduce(this.products, function(total, product){
        return total + (product.price * product.quantity);
      }, 0);
    } else {
      return 0;
    }
  }
});
