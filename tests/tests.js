var C = CryptoJS;
Tinytest.add('MeteorCryptoMD5 - Vector 1', function(t) {
	t.equal(
		C.MD5('').toString(),
		'd41d8cd98f00b204e9800998ecf8427e'
	);
});

Tinytest.add('MeteorCryptoMD5 - Vector 2', function(t) {
	t.equal(
		C.MD5('a').toString(),
		'0cc175b9c0f1b6a831c399e269772661'
	);
});

Tinytest.add('MeteorCryptoMD5 - Vector 3', function(t) {
	t.equal(
		C.MD5('abc').toString(),
		'900150983cd24fb0d6963f7d28e17f72'
	);
});

Tinytest.add('MeteorCryptoMD5 - Vector 4', function(t) {
	t.equal(
		C.MD5('message digest').toString(),
		'f96b697d7cb7938d525a2f31aaf161d0'
	);
});

Tinytest.add('MeteorCryptoMD5 - Vector 5', function(t) {
	t.equal(
		C.MD5('abcdefghijklmnopqrstuvwxyz').toString(),
		'c3fcd3d76192e4007dfb496cca67e13b'
	);
});

Tinytest.add('MeteorCryptoMD5 - Vector 6', function(t) {
	t.equal(
		C.MD5('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789').toString(),
		'd174ab98d277d9f5a5611c2c9f419d9f'
	);
});

Tinytest.add('MeteorCryptoMD5 - Vector 7', function(t) {
	t.equal(
		C.MD5('12345678901234567890123456789012345678901234567890123456789012345678901234567890').toString(),
		'57edf4a22be3c955ac49da2e2107b67a'
	);
});

Tinytest.add('MeteorCryptoMD5 - Update And Long Message', function(t) {
	var md5 = C.algo.MD5.create();
	for (var i = 0; i < 100; i++) {
		md5.update('12345678901234567890123456789012345678901234567890');
	}

	t.equal(
		md5.finalize().toString(),
		'7d017545e0268a6a12f2b507871d0429'
	);
});

Tinytest.add('MeteorCryptoMD5 - Clone', function(t) {
	var md5 = C.algo.MD5.create();

	t.equal(
		md5.update('a').clone().finalize().toString(),
		C.MD5('a').toString()
	);
	t.equal(
		md5.update('b').clone().finalize().toString(),
		C.MD5('ab').toString()
	);
	t.equal(
		md5.update('c').clone().finalize().toString(),
		C.MD5('abc').toString()
	);
});

Tinytest.add('MeteorCryptoMD5 - Input Integrity', function(t) {
	var message = C.lib.WordArray.create([0x12345678]);

	var expected = message.toString();

	C.MD5(message);

	t.equal(
		message.toString(),
		expected
	);
});

Tinytest.add('MeteorCryptoMD5 - Helper', function(t) {
	t.equal(
		C.MD5('').toString(),
		C.algo.MD5.create().finalize('').toString()
	);
});

Tinytest.add('MeteorCryptoMD5 - HMAC Helper', function(t) {
	t.equal(
		C.HmacMD5('Hi There', C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).toString(),
		C.algo.HMAC.create(C.algo.MD5, C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).finalize('Hi There').toString()
	);
});
