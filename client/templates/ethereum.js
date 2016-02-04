Template.ethereum.helpers({

  setConnection: function() {
     web3 = new Web3(new Web3.providers.HttpProvider('http://65.34.183.153:8545'));
    console.log(web3);
  },
  balance: function() {
  var coin = '0xf0c5cef39b17c213cfe090a46b8c7760ffb7928a';
  var balance = web3.eth.getBalance(coin);
  return balance;
  },
  HashTest: function() {
    var str = web3.sha3("Some ASCII string to be hashed");
    return str;
  },
  current: function() {
    var str = web3.currentProvider.host;
    return str;
  },
  Web3Version: function() {
    var version = web3.version.api;
    return version;
  }, 
 Web3ClientVersion: function() {
   var version = web3.version.ethereum;
    return version;
  },
  defaultAccount: function() {
   var account = '0xf0c5cef39b17c213cfe090a46b8c7760ffb7928a';
    return account;
  },
  accounts: function() {
    var accounts = web3.eth.accounts;
    return accounts;
  },
  gasprice: function() {
    var gasPrice = web3.eth.gasPrice;
    var price = gasPrice.toString(10);
    return price;
  },
  encrypt: function() {
   var pass = 'passphrase';
   Meteor.call('createKeys', pass, function (error, result) {
   Session.set('keys', result);
    }); 
   var keys = Session.get('keys');
   var privateKey = keys[0];
   var publicKey = keys[1]; 
   var message = "Need this to be secret";
   Meteor.call('encrypt', message, publicKey, function (error, result) {
    Session.set('message', result);
  });
    var content = Session.get('message');
    var objects = {
      publicKey: publicKey,
      privateKey: privateKey,
      message: content,
      passphrase: pass
    };
    testObject = Objects.insert(objects);
    console.log(testObject);
    Session.set('Object', testObject);
  }

});

Template.ethereum.events({
  'click .find': function(e) {
    e.preventDefault();
    var address = document.getElementsByName("address")[0].value;
    var abi = Session.get('ABI');
    var MyContract = web3.eth.contract(abi);
    var myContractInstance = MyContract.at(address);
    var object = myContractInstance.greet();
    Session.set('contractObject', object);
    Router.go('document');
  },

  'click .decrypt': function(e) {
    e.preventDefault();
    var object_id = Session.get('Object');
    var object = Objects.findOne({_id: object_id});
    Router.go('decrypt', object);
  },

  'click .python2': function() {
    Meteor.call('python2', function(err, result){
          console.log(result);
        });
  }

});
