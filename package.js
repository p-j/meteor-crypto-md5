Package.describe({
	summary: 'MD5 algorithm for CryptoJS, standard secure algorithms',
	version: '0.1.0',
	git: 'https://github.com/p-j/meteor-crypto-md5.git'
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@0.9.1.1');

	api.use('jparker:crypto-core@0.1.0', ['client', 'server']);

	api.imply('jparker:crypto-core', ['client', 'server']);

	api.addFiles('lib/md5.js', ['client', 'server']);
});

Package.onTest(function (api) {
	api.use([
    'jparker:crypto-core@0.1.0',
    'jparker:crypto-md5@0.1.0',
    'jparker:crypto-hmac@0.1.0',
    'tinytest'
  ], ['client', 'server']);

	api.addFiles('tests/tests.js', ['client', 'server']);
});