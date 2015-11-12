Meteor.startup(function () {
  if (Students.find().count() === 0) {
    console.log("Database has no students!");
  }
});
