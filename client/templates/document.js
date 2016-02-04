Template.document.helpers({

  deal: function() {
    var string = Session.get('contractObject');
    var object = JSON.parse(string);
    return object;
  }

});