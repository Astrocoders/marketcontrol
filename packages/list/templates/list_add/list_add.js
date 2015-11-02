Template.ListAdd.helpers({
  markets: function(){
    return Markets.find().map(function(market){
      return {
        label: market.name,
        value: market._id
      };
    });
  }
});

Template.ListAdd.onCreated(function(){
  IonLoading.show();

  this.subscribe('markets', () => IonLoading.hide());
});
