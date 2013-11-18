Tinytest.add('MeteorCryptoMD5 - Simple Test', function (test) {
  test.equal(
    CryptoJS.MD5("Message").toString(),
    '4c2a8fe7eaf24721cc7a9f0175115bd4',
    'MD5 digest'
  );
/* TODO run only if crypto-hmac is installed
    test.equal(
    CryptoJS.HmacMD5("Message", "Secret Passphrase").toString(),
    '5e03d0c1b42ef0b7e61fb333f3993949',
    'MD5 HMAC of a string, given a passphrase'
  );
*/
});
