Session.set("groupSize", 0);

Template.student.helpers({
	classes: function() {
		var classes = Classes.find().fetch();
		var classNames = [];
		for (var i =0; i < classes.length; i++) {
			classNames.push(classes[i].name);
		}
		return classNames;
	},

	groupSize: function() {
		var indices = [];
		for (var i = 1; i <= Session.get("groupSize"); i++) {
			indices.push(i);
		}
		return indices;
	},

	students: function() {
		return Session.get("students");
	}
});

Template.student.events({
	'click #submit': function () {
		var kid = $('#studentName').val();
		var email = $('#studentEmail').val();
		var c = Classes.findOne({name: $("#dropdown").val()});
		var friends = [];
		$(".friends").each(function(index, element) {
			var value = $(element).val();
			if (value !== "----") {
				var stu = Students.findOne({name: value, classID: c._id});
				friends.push(stu._id);
			}	
		});
		var dislikes = [];
		$(".dislikes").each(function(index, element) {
			var value = $(element).val();
			if (value !== "----") {
				var stu = Students.findOne({name: value, classID: c._id});
				dislikes.push(stu._id);
			}
		});

		var stu = Students.findOne({name: kid, classID: c._id});
		Students.update(stu._id, {$set: {email: email}});
		Students.update(stu._id, {$addToSet: {friends: {$each: friends}}});
		Students.update(stu._id, {$addToSet: {dislike: {$each: dislikes}}});
	},

	"change #dropdown": function() {
		if ($("#dropdown").val() === "----") {
			$("#peopleLists").hide();
			return;
		}
		var c = Classes.findOne({name: $("#dropdown").val()});
		Session.set("groupSize", c.groupSize);
		var students = [];
		for (var i = 0; i < c.students.length; i ++) {
			students.push(Students.findOne(c.students[i]).name);
		}
		Session.set("students", students);
		$("#peopleLists").show();
	},

	"change #friends": function() {
		var s = Students.findOne({name: $("#friends").val()});
		Session.set("friends", s.name )
	},

	"change #enemies": function() {
		var s = Students.findOne({name: $("#friends").val()});
	}

});
