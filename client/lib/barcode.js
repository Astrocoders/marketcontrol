Barcode = {};

Barcode.scan = function(success, error){
  if(Meteor.isCordova){
    cordova.plugins.barcodeScanner.scan(success, error);
  } else {
    error();
  }
};
