Template.student.events({
  'click #submit': function () {
    var kid = $('#studentname').val();
	var email = $('#studentemail').val();
	var level = $('comfort').val();
	var f1 = $('friend1').val();
	var f2 = $('friend2').val();
	var f3 = $('friend3').val();
	var k1 = $('known1').val();
	var k2 = $('known2').val();
	var k3 = $('known3').val();
	var d1 = $('dislike1').val();
	var d2 = $('dislike2').val();
	var d3 = $('dislike3').val();
	console.log(email);
  }
});
