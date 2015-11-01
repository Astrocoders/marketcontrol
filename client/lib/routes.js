Router.map(function(){
  this.route('/', {
    template: 'ProductSearch',
    layoutTemplate: 'layout'
  });

  this.route('/product/insert', {
    name: 'productInsert',
    template: 'ProductAdd',
    layoutTemplate: 'layout'
  });
});
