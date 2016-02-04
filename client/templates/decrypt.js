Template.decrypt.helpers({
  message: function() {
  var Obj = Objects.findOne(this._id);
  var message = Obj.message;
  var privateKey = Obj.privateKey;
  Meteor.call('decrypt', message, privateKey, function (error, result) {
    Session.set('readable', result);
  });
  var content = Session.get('readable'); 
  return content;
},

 raw: function() {
  var Obj = Objects.findOne(this._id);
  var message = Obj.message;
  return message;
},

 key: function() {
  var Obj = Objects.findOne(this._id);
  var message = Obj.privateKey;
  return message;
},

});