[MD5](https://en.wikipedia.org/wiki/MD5) message digest cryptographic
hash function algorithm from [CryptoJS](https://code.google.com/p/crypto-js/),
packaged for Meteor.

Dependency
----------
- [`jparker:crypto-core`](https://github.com/p-j/meteor-crypto-core).

Install
-------

Inside your project folder run
```
$ meteor add jparker:crypto-md5
```

The following method under the CryptoJS namespace will now be available
on **both the client and server**:

`CryptoJS.MD5(message)`

If [`jparker:crypto-hmac`](https://github.com/p-j/meteor-crypto-hmac) is also
installed, the following method will also be available:

`CryptoJS.HmacMD5(message, key)`


Usage
-------
MD5 digest of a string:
```javascript
CryptoJS.MD5('Message').toString()
// '4c2a8fe7eaf24721cc7a9f0175115bd4'
```

MD5 HMAC of a string, given a passphrase:
```javascript
CryptoJS.HmacMD5('Message', 'Secret Passphrase').toString()
// '5e03d0c1b42ef0b7e61fb333f3993949'
```

See also
--------
The CryptoJS project lives at <https://code.google.com/p/crypto-js/> and the documentation for MD5 is at <https://code.google.com/p/crypto-js/#MD5>.

Related packages
----------------

- [`jparker:crypto-hmac`](https://github.com/p-j/meteor-crypto-hmac)
- [`jparker:crypto-sha1`](https://github.com/p-j/meteor-crypto-sha1)
- [`jparker:crypto-sha256`](https://github.com/p-j/meteor-crypto-sha256)
- [`jparker:crypto-base64`](https://github.com/p-j/meteor-crypto-base64)
- [`jparker:crypto-aes`](https://github.com/p-j/meteor-crypto-aes)