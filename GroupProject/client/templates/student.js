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
	}
});

Template.student.events({
  'click #submit': function () {
    var kid = $('#studentName').val();
	var email = $('#studentEmail').val();
	var level = $('comfort').val();
	var f1 = $('friend1').val();
	var k1 = $('known1').val();
	var d1 = $('dislike1').val();
	console.log(email);
  },

  "change #dropdown": function() {
  	var c = Classes.findOne({name: $("#dropdown").val()});
  	console.log(c);
  	Session.set("groupSize", c.groupSize);
  	$("#peopleLists").show();
  	console.log(Session.get("groupSize"));
  }
});
