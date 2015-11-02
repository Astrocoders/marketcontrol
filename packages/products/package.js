Package.describe({
  name: 'app:products',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
    'ecmascript',
    'blaze',
    'meteor-platform',
    'aldeed:collection2',
    'aldeed:autoform',
    'matteodem:easy-search',
    'astrocoders:publish',
    'astrocoders:component',
    'ongoworks:security',
    'app:markets',
  ]);

  api.addFiles([
    'collections/products.js',
  ]);

  api.addFiles([
    'publish/products_publication.js',
    'security/products_security.js',
  ], 'server');

  api.addFiles([
    'component/products_client.js',

    'templates/product_add/product_add.html',
    'templates/product_add/product_add.js',
    'templates/product_edit/product_edit.html',
    'templates/product_search/product_search.html',
  ], 'client');

  api.export([
    'Products',
  ]);

  api.export([
    'ProductsComponent',
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('products');
  api.addFiles('products-tests.js');
});
