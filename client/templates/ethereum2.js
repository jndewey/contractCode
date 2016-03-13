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
  var _contractcontent = contract_string; //sets response from contract to the string output of our contractCode object
  var contractSource = 'contract mortal { address owner; function mortal() { owner = msg.sender; } function kill() { if (msg.sender == owner) suicide(owner); } } contract contractCode is mortal { string contractCodeObject; function contractCode(string _contractcontent) public { contractCodeObject = _contractcontent; } function returnContract() constant returns (string) { return contractCodeObject; } }'; // source code ready for compilation
  var contractCompiled = web3.eth.compile.solidity(contractSource); // produces compiled code
  var code = contractCompiled.contractCode.code; // creates variable for raw compiled code
  var abi = contractCompiled.contractCode.info.abiDefinition; // creates variable for ABI
  var MyContract = web3.eth.contract(abi);
  var myContractInstance = MyContract.new(_contractcontent, {data: code, gas: 1000000, from: mySenderAddress}, function(e, contract){
    if(!e) {

      if(!contract.address) {
        console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
        Session.set('contractHash', contract.transactionHash);

      } else {
        console.log("Contract mined! Address: " + contract.address);
        Session.set('contractAddress', contract.address);
      }

    }
  });
  Session.set('ABI', abi);
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