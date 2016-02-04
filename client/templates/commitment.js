Borrowers = new Mongo.Collection(null);
Guarantors = new Mongo.Collection(null);

Template.commitment.events({

  'click .borrower': function(e) {
    e.preventDefault();
    var name = {};
    name.name = document.getElementsByName("borrower_name")[0].value;
    Borrowers.insert(name); //Inserting into the client side collection
    alert(name.name + ' ' + 'Added');
  },

  'click .guarantor': function(e) {
    e.preventDefault();
    var name = {};
    name.name = document.getElementsByName("guarantors")[0].value;
    Guarantors.insert(name); //Inserting into the client side collection
    alert(name.name + ' ' + 'Added');
  },

  'click .doc': function(e) {
    e.preventDefault();
    var borrowerNameArray = Borrowers.find({}, {fields: {name: 1, _id: 0}}).fetch();
    var borrowerName = [];
    function pushName(array) {
      for (i = 0; i < array.length; i++) { 
        borrowerName.push(array[i].name);
      }
    };
    var guarantorNameArray = Guarantors.find({}, {fields: {name: 1, _id: 0}}).fetch();
    var guarantorName = [];
    function pushNameGuarantor(array) {
      for (i = 0; i < array.length; i++) { 
        guarantorName.push(array[i].name);
      }
    };
    pushName(borrowerNameArray);
    pushNameGuarantor(guarantorNameArray);
    var contracts = {
      form_source: 'CLTR01',
      commitment_date: document.getElementsByName("commitment_date")[0].value,
      borrower_name: borrowerName,
      borrower_address_line1: document.getElementsByName("borrower_address_line1")[0].value,
      borrower_address_line2: document.getElementsByName("borrower_address_line2")[0].value,
      borrower_contact: document.getElementsByName("borrower_contact")[0].value,
      borrower_state: document.getElementsByName("borrower_state")[0].value,
      borrower_type: document.getElementsByName("borrower_type")[0].value,
      property_address: document.getElementsByName("property_address")[0].value,
      loan_amount_written: document.getElementsByName("loan_amount_written")[0].value,
      loan_amount: document.getElementsByName("loan_amount")[0].value,
      LTV_written: document.getElementsByName("LTV_written")[0].value,
      LTV: document.getElementsByName("LTV")[0].value,
      DSCR: document.getElementsByName("DSCR")[0].value,
      property_type: document.getElementsByName("property_type")[0].value,
      property_description: document.getElementsByName("property_description")[0].value,
      lender: document.getElementsByName("lender")[0].value,
      guarantors: document.getElementsByName("guarantors")[0].value,
      limited: document.getElementsByName("limited")[0].value,
      cap_amount: document.getElementsByName("cap_amount")[0].value,
      cap_percent_written: document.getElementsByName("cap_percent_written")[0].value,
      cap_percentage: document.getElementsByName("cap_percentage")[0].value,
      term_written: document.getElementsByName("term_written")[0].value,
      term: document.getElementsByName("term")[0].value,
      extend: document.getElementsByName("extend")[0].value,
  };
    contracts._id = Contracts.insert(contracts);
    alert("Contract Saved");
    Borrowers.remove({});
    Guarantors.remove({});
    Router.go('output_2', contracts);
  }
});