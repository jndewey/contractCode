
Template.output_2.helpers({
  deal: function() {
  var contract = Contracts.findOne(this._id);
  return contract;
}
});

Template.output_2.events({
'click #showCode': function(e) {
    e.preventDefault();
    var contract = Contracts.findOne(this._id);
    Router.go('output_contractCode', contract);
  },
'click #uploadCode': function(e) {
    e.preventDefault();
    var contract = Contracts.findOne(this._id);
    Router.go('ethereum2', contract);
  }
});
