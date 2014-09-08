Package.describe({
	summary: 'MD5 algorithm for CryptoJS, standard secure algorithms',
	version: '3.1.2-1',
	git: 'https://github.com/p-j/meteor-crypto-md5'
});

Package.on_use(function (api) {
	api.versionsFrom('METEOR@0.9.0');
	api.use('jparker:meteor-crypto-base@3.1.2-1', ['client', 'server']);
	api.imply('jparker:meteor-crypto-base', ['client', 'server']);

	api.add_files('md5.js', ['client', 'server']);
});

Package.on_test(function (api) {
	api.use(['jparker:meteor-crypto-base', 'jparker:meteor-crypto-md5', 'tinytest']);

	api.add_files('crypto-md5_tests.js', ['client', 'server']);
});