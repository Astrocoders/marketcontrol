Router.map(function(){
  this.route('/', {
    name: 'home',
    template: 'ProductSearch',
    layoutTemplate: 'layout',
  });

  this.route('/product/add', {
    name: 'productInsert',
    template: 'ProductAdd',
    layoutTemplate: 'layout',
  });

  this.route('/lists', {
    name: 'listsView',
    template: 'ListsView',
    layoutTemplate: 'layout',
  });

  this.route('/list/add', {
    name: 'listAdd',
    template: 'ListAdd',
    layoutTemplate: 'layout',
  });

  this.route('/list/edit/:_id', {
    name: 'listEdit',
    template: 'ListEdit',
    layoutTemplate: 'layout',
  });
});
