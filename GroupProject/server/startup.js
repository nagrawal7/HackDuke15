Meteor.startup(function () {
  if (Students.find().count() === 0) {
    Students.insert({
      name: "John Smith",
      grade: 100,
      email: "",
      comfort: -1
    });
  }
});
