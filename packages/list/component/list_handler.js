/* jshint esnext: true */

ListHandler = class {
  constructor(list = {}){
    this.list = list;
  }

  addProduct(product){
    const marketPrice =  _.find(product.prices, (price) => {
      return price.market === this.list.market;
    });
    const alreadyInList = this.hasProduct(product);

    if(!alreadyInList){
      product.quantity = 1;
      product.price = marketPrice && marketPrice.price;

      delete product.prices;

      Lists.update(this.list._id, {
        $addToSet: {
          products: product
        }
      });
    } else {
      this.incProductQuantity(product, +1);
    }
  }

  hasProduct(product){
    return _.find(this.list.products, function(listProduct){
      return listProduct._id === product._id;
    }) || false;
  }

  incProductQuantity(product, modifier){
    const productIndex = this.getProductIndex(product);

    return Lists.update(this.list._id, {
      $inc: {
        [`products.${productIndex}.quantity`]: modifier,
      },
    });
  }

  updateProductQuantity(product, quantity){
    const productIndex = this.getProductIndex(product);

    return Lists.update(this.list._id, {
      $set: {
        [`products.${productIndex}.quantity`]: quantity,
      },
    });
  }

  getProductIndex(product){
    if(!product._id) {
      throw new Error('[ListHandler#getProductIndex] There\'s no product id');
    }

    return _.findIndex(this.list.products, (listProduct) => {
      return listProduct._id === product._id;
    });
  }
};
