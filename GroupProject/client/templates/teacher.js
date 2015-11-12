Template.teacher.helpers({

});

Template.teacher.events({
  "click #createClass": function (event) {
    var className = $("#className").val();
    var teacherEmail = $("#teacherEmail").val();
    var groupSize = $("#groupSize").val();
    var isChecked = $("#randomize").is(':checked');

    var reader = new FileReader();
      // Read file into memory as UTF-8
    reader.readAsText($("#classData").prop("files")[0]);

    reader.onload = function(event) {
      var classID = Classes.insert({
        name: className,
        email: teacherEmail,
        groupSize: groupSize,
        submitted: 0,
        preferences: {
          randomize: isChecked
        },
        students: []
      });

      var csv = event.target.result;
      var allTextLines = csv.split(/\r\n|\n/);
      var studentIDs = [];
      for (var i=0; i < allTextLines.length; i++) {
          var data = allTextLines[i].split(',');
          var student = {
            name: data[0],
            classID: classID,
            grade: parseInt(data[1]),
            friends: [],
            dislike: [],
          };
          var id = Students.insert(student);
          studentIDs.push(id);
      }

      Classes.update(classID, {$addToSet: {students: {$each: studentIDs}}});
      console.log("finished creating class!");
      Router.go('/thankyou');
    };

    reader.onerror = function(evt) {
      if(evt.target.error.name == "NotReadableError") {
          alert("Canno't read file !");
      }
    };
  }
});
