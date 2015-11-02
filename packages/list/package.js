Package.describe({
  name: 'app:lists',
  version: '0.0.1',
  summary: 'MarketControl Lists component',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'underscore@1.0.4',
    'mixmax:underscore-updates@0.2.3',
    'ongoworks:security@1.3.0',
    'astrocoders:publish',
    'astrocoders:component',
    'mongo',
    'blaze',
    'meteor-platform',
    'jquery',
    'aldeed:autoform',
    'aldeed:collection2@2.5.0',
    'dburles:collection-helpers@1.0.4',
    'app:products',
    'app:markets',
    'meteoric:autoform-ionic@0.1.5',
    'meteoric:ionic@0.1.19',
    'meteoric:ionic-sass@0.3.0',
    'meteoric:ionicons-sass@0.1.7',
    'reactive-var',
    'momentjs:moment@2.10.6',
    'percolate:momentum@0.7.2',
  ]);

  /* both */
  api.addFiles([
    'collections/lists.js',
    'collection_helpers/lists_helpers.js',
  ]);

  /* server */
  api.addFiles([
    'publish/list_add_publication.js',
    'publish/lists_publication.js',
    'security/lists.js'
  ], 'server');

  /* client */
  api.addFiles([
    'component/lists_component.js',
    'component/list_handler.js',

    'templates/list_add/list_add.html',
    'templates/list_add/list_add.js',
    'templates/list_add/list_add_autoform.js',

    'templates/list_edit/list_edit.html',
    'templates/list_edit/list_edit.js',

    'templates/lists/lists.html',
    'templates/lists/lists.js',
  ], 'client');

  api.export([
    'Lists',
  ]);

  api.export([
    'ListComponent',
  ], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('app:list');
  api.addFiles('list-tests.js');
});
