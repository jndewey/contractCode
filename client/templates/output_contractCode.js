Template.output_contractCode.helpers({
  deal: function() {
  var contract = Contracts.findOne(this._id);
  return contract;
}
});