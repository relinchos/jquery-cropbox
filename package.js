Package.describe({
  name: "relinchos:jquery-cropbox",
  summary: "jquery-crobox",
  version: "0.3.6",
  git: 'https://github.com/relinchos/jquery-cropbox',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
  api.imply('jquery', 'client');
  api.addFiles([
    'jquery-cropbox/jquery.cropbox.js',
  ], 'client'
  );
});