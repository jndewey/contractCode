Router.configure({
  layoutTemplate: 'homePage'
});

Router.route('/', {name: 'mainPage'});

Router.route('/oldSampleoutput', function () {
  this.render('oldSampleoutput');
});

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

Router.route('/oldSample', function () {
  this.render('oldSample');
});

Router.route('/startPage2', function () {
  this.render('startPage2');
});

Router.route('/commitment', function () {
  this.render('commitment');
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

Router.route('/bitcoin', function () {
  this.render('bitcoin');
});

Router.route('/ethereum', function () {
  this.render('ethereum');
});

Router.route('/document', function () {
  this.render('document');
});

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

