Classes.after.update(function (userId, doc, fieldNames, modifier, options) {
  if (fieldNames[0] === 'submitted' && doc.students.length === doc.submitted) {
    createGraph();
  }
}, {fetchPrevious: false});

function createGraph() {
  console.log("Class is full! Generating output now...");
  // compute scores for every pair of students in the class

  // make a graph out of these scores

  // create a page with that graph as output

  // send email to teacher for confirmation with link
}
