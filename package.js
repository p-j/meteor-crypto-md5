Package.describe({
  summary: "MD5 algorithm for CryptoJS, standard secure algorithms"
});

Package.on_use(function (api) {
  api.use('crypto-base', ['client', 'server']);
  api.imply('crypto-base', ['client', 'server']);

  api.add_files('md5.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use(['crypto-base', 'crypto-md5', 'tinytest']);

  api.add_files('crypto-md5_tests.js', ['client', 'server']);
});