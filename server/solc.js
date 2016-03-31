Meteor.methods({

     'compile': function(input, options) {
      var solc = Meteor.npmRequire('solc');
      var codeInput = input;
      const promise = solc.compile(codeInput, options);
      console.log(promise);
      return Promise.await(promise);
    }

  });


