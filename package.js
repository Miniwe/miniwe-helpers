Package.describe({
  name: 'miniwe:helpers',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Helpers for project using in packages in center project part',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('coffeescript', ['client', 'server']);
  api.addFiles([
    'permissions-helpers.coffee',
    'ir-hooks.coffee'
  ]);

  api.export('PermissionsHelpers', ['client', 'server']);
  api.export('IR_BeforeHooks', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('miniwe:helpers');
  api.addFiles('helpers-tests.coffee');
});
