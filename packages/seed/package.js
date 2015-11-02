Package.describe({
  name: 'app:seed',
  version: '0.0.1',
  debugOnly: true,
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('seed.js');
  api.export('Seed', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('app:seed');
  api.addFiles('seed-tests.js');
});
