Package.describe({
	summary: 'MD5 algorithm for CryptoJS, standard secure algorithms',
	version: '3.1.2',
	git: 'https://github.com/p-j/meteor-crypto-md5.git'
});

Package.on_use(function (api) {
	api.versionsFrom('METEOR@0.9.0');
	api.use('jparker:crypto-core@3.1.2', ['client', 'server']);
	api.imply('jparker:crypto-core', ['client', 'server']);

	api.add_files('lib/md5.js', ['client', 'server']);
});

Package.on_test(function (api) {
	api.use(['jparker:crypto-core', 'jparker:crypto-md5', 'tinytest']);

	api.add_files('tests/tests.js', ['client', 'server']);
});