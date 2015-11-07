Meteor.publish('students', function() {
    return Students.find();
});

Meteor.publish('classes', function() {
    return Classes.find();
});
