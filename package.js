Package.describe({
  name: "relinchos:jquery-cropbox",
  summary: "jquery-crobox ",
  version: "0.0.2",
  documentation:null
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