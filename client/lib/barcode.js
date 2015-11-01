Barcode = {};

Barcode.scan = function(success, error){
  cordova.plugins.barcodeScanner.scan(success, error);
}