Template.ethereum2.helpers({

  setConnection: function() {
    web3 = new Web3(new Web3.providers.HttpProvider('http://65.34.170.14:8545'));
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
  to_string: function() {
  var contract = Contracts.findOne(this._id);
  var string = JSON.stringify(contract); 
  return string;
  },

 compile: function() {
  var contract = Contracts.findOne(this._id); // pulls in instant contractCode object (in the form of DB cursor)
  var contract_string = JSON.stringify(contract); // converts contractCode object into a JSON string
  var mySenderAddress = '0xf0c5cef39b17c213cfe090a46b8c7760ffb7928a'; //sets sender address to default account
  var _greeting = contract_string; //sets response from contract to the string output of our contractCode object
  var greeterSource = 'contract mortal { address owner; function mortal() { owner = msg.sender; } function kill() { if (msg.sender == owner) suicide(owner); } } contract greeter is mortal { string greeting; function greeter(string _greeting) public { greeting = _greeting; } function greet() constant returns (string) { return greeting; } }'; // source code ready for compilation
  var greeterCompiled = web3.eth.compile.solidity(greeterSource); // produces compiled code
  var code = greeterCompiled.greeter.code; // creates variable for raw compiled code
  var abi = greeterCompiled.greeter.info.abiDefinition; // creates variable for ABI
  var MyContract = web3.eth.contract(abi);
  var myContractInstance = MyContract.new(_greeting, {data: code, gas: 1000000, from: mySenderAddress});
  console.log(myContractInstance.transactionHash); // The hash of the transaction, which created the contract
  console.log(myContractInstance.address); // undefined at start, but will be auto-filled later
  console.log(abi);
  Session.set('contractHash', myContractInstance.transactionHash);
  Session.set('contractAddress', myContractInstance.address);
  Session.set('ABI', abi);

  /*var myContractReturned = MyContract.new(_greeting, {
   data: code,
   gas: 300000,
   from: mySenderAddress}, function(err, myContract){
    if(!err) {
       // NOTE: The callback will fire twice
       // Once the contract has the transactionHash property set and once its deployed on an address.

       // e.g. check tx hash on the first call (transaction send)
       if(!myContract.address) {
           console.log(myContract.transactionHash) // The hash of the transaction, which deploys the contract

       // check address on the second call (contract deployed)
       } else {
           console.log(myContract.address) // the contract address
       }

       // Note that the returned "myContractReturned" === "myContract",
       // so the returned "myContractReturned" object will also get the address set.
    }
  });
*/
},
hash: function() {
    var hash = Session.get('contractHash');
    return hash;
  },
address: function() {
    var address = Session.get('contractAddress');
    return address;
  },
abi: function() {
    var abi = Session.get('ABI');
    return abi;
  }

});