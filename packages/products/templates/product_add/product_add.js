Template.ProductAdd.events({
	'click [data-schema-key=barcode]': function(){
		Barcode.scan(function(result){
			$('[data-schema-key=barcode]').val(result.text);
		}, function(error){
			console.log(error);
		});
	},
});

Template.ProductAdd.onCreated(function(){
	IonLoading.show();
	this.subscribe('markets', () => IonLoading.hide());
});
