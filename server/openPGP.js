  Meteor.methods({
     'encrypt': function(message, publicKey) {
      Future = Npm.require("fibers/future");
      var future = new Future();
      var openpgp = Meteor.npmRequire('openpgp');
      var message = message;
      var key = publicKey;
      var publicKey = openpgp.key.readArmored(key);
      openpgp.encryptMessage(publicKey.keys, "hello").then(function(pgpMessage) {
        console.log(pgpMessage);
        var message = pgpMessage;
        future ["return"] (message)
        });
      return future.wait();
    },

    'createKeys' : function(pass) {
      Future = Npm.require("fibers/future");
      var future = new Future();
      var openpgp = Meteor.npmRequire('openpgp');
      var passphrase = 'passphrase';
      var options = {
      numBits: 2048,
      userId: 'Jon Smith <jon.smith@example.org>',
      passphrase: passphrase,
      };
      openpgp.generateKeyPair(options).then(function(keypair) {
          var privkey = keypair.privateKeyArmored;
          var pubkey = keypair.publicKeyArmored;
          console.log(privkey);
          console.log(pubkey);
          var keyPair = [privkey, pubkey];
          future ["return"] (keyPair)
          });
      return future.wait();
    },

     'decrypt': function(message, privateK) {
      Future = Npm.require("fibers/future");
      var future = new Future();
      var openpgp = Meteor.npmRequire('openpgp');
      var pgpMessage = message;
      pgpMessage = openpgp.message.readArmored(pgpMessage);
      var key = privateK;
      var privateKey = openpgp.key.readArmored(key).keys[0];
      privateKey.decrypt('passphrase');
      openpgp.decryptMessage(privateKey, pgpMessage).then(function(plaintext) {
        console.log(plaintext);
        var plaintext = plaintext;
        future ["return"] (plaintext)
        });
      return future.wait();
    }

  });