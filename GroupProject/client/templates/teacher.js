// counter starts at 0
Session.setDefault('counter', 0);

Template.teacher.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.teacher.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});
