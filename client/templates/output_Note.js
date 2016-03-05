Template.output_3.helpers({
  deal: function() {
  var contract = Contracts.findOne(this._id);
  return contract;
}
});

Template.output_3.events({
'click #uploadCode': function(e) {
    e.preventDefault();
    var contract = Contracts.findOne(this._id);
    Router.go('ethereum3', contract);
  }
});
