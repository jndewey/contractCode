
//set homePage as layoutTemplate
Router.configure({
  layoutTemplate: 'homePage'
});
// default load mainPage
Router.route('/', {name: 'mainPage'});
//output_2 is commitment letter template
Router.route('/output_2/:_id', {
  name: 'output_2',

  path: '/output_2/:_id',

  template: 'output_2',
  // returns a null value, and if so, renders the not found template.
  data: function () {
    return Contracts.findOne({_id: this.params._id});
  },
  action: function () {
    // render all templates and regions for this route
    this.render();
  }

});
//ethereum2 uploads commitment template to blockchain
Router.route('/ethereum2/:_id', {
  name: 'ethereum2',

  path: '/ethereum2/:_id',

  template: 'ethereum2',
  // returns a null value, and if so, renders the not found template.
  data: function () {
    return Contracts.findOne({_id: this.params._id});
  },
  action: function () {
    // render all templates and regions for this route
    this.render();
  }

  });
//ethereum3 uploads promissory note template to blockchain
Router.route('/ethereum3/:_id', {
  name: 'ethereum3',

  path: '/ethereum3/:_id',

  template: 'ethereum3',
  // returns a null value, and if so, renders the not found template.
  data: function () {
    return Contracts.findOne({_id: this.params._id});
  },
  action: function () {
    // render all templates and regions for this route
    this.render();
  }

  });

Router.route('/decrypt/:_id', {
  name: 'decrypt',

  path: '/decrypt/:_id',

  template: 'decrypt',
  // returns a null value, and if so, renders the not found template.
  data: function () {
    return Objects.findOne({_id: this.params._id});
  },
  action: function () {
    // render all templates and regions for this route
    this.render();
  }

});

Router.route('/output_3/:_id', {
  name: 'output_3',

  path: '/output_3/:_id',

  template: 'output_3',
  // returns a null value, and if so, renders the not found template.
  data: function () {
    return Contracts.findOne({_id: this.params._id});
  },
  action: function () {
    // render all templates and regions for this route
    this.render();
  }

});

Router.route('/output_contractCode/:_id', {
  name: 'output_contractCode',

  path: '/output_contractCode/:_id',

  template: 'output_contractCode',
  // returns a null value, and if so, renders the not found template.
  data: function () {
    return Contracts.findOne({_id: this.params._id});
  },
  action: function () {
    // render all templates and regions for this route
    this.render();
  }

});

Router.route('/outputCRECAS/:_id', {
  name: 'outputCRECAS',

  path: '/outputCRECAS/:_id',

  template: 'outputCRECAS',
  // returns a null value, and if so, renders the not found template.
  data: function () {
    return Contracts.findOne({_id: this.params._id});
  },
  action: function () {
    // render all templates and regions for this route
    this.render();
  }

});

Router.route('/oldSampleoutput', function () {
  this.render('oldSampleoutput');
});

Router.route('/oldSample', function () {
  this.render('oldSample');
});

Router.route('/startPage2', function () {
  this.render('startPage2');
});

Router.route('/commitment', function () {
  this.render('commitment');
});

Router.route('/sampleNote', function () {
  this.render('sampleNote');
});

Router.route('/creCAS', function () {
  this.render('creCAS');
});

Router.route('/about', function () {
  this.render('about');
});

Router.route('/contact', function () {
  this.render('contact');
});

Router.route('/ethereum', function () {
  this.render('ethereum');
});

Router.route('/document', function () {
  this.render('document');
});

Router.route('/document2', function () {
  this.render('document2');
});





