Template.oldSample.events({
  'click .doc': function(e) {
    e.preventDefault();
    var doc = {
      borrower: document.getElementsByName("borrower")[0].value,
      address: document.getElementsByName("address")[0].value,
      company: document.getElementsByName("company")[0].value,
      date: document.getElementsByName("date")[0].value,
      lender: document.getElementsByName("lender")[0].value
    };
    Session.set('borrower', doc.borrower);
    Session.set('address', doc.address);
    Session.set('company', doc.company);
    Session.set('date', doc.date);
    Session.set('lender', doc.lender);
    Router.go('oldSampleoutput');
  }
});