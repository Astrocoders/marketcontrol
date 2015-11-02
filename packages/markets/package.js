Package.describe({
  name: 'app:markets',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
    'ecmascript',
    'mongo',
    'astrocoders:publish',
    'ongoworks:security@1.3.0',
    'aldeed:collection2@2.5.0',
  ]);

  api.addFiles([
    'collections/markets.js',
  ]);

  api.addFiles([
    'publish/markets_publication.js',
    'security/markets_security.js'
  ], 'server');

  api.export('Markets');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('app:markets');
  api.addFiles('markets-tests.js');
});
