Template.oldSampleoutput.helpers({
  lender: function() {
  var lender = Session.get('lender');
  return lender;
},
  address: function() {
  var address = Session.get('address');
  return address;
},
 borrower: function() {
  var borrower = Session.get('borrower');
  return borrower;
},
 date: function() {
  var date = Session.get('date');
  return date;
},
 company: function() {
  var company = Session.get('company');
  return company;
}
});