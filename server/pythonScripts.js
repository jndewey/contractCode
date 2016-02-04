Meteor.methods({

 'python': function() {
      var childProcess = Meteor.npmRequire("child_process"),
      Fiber = Meteor.npmRequire('fibers');
      new Fiber(function(){
      console.log('test python file');
      var file_path = "/Users/josiasdewey/projects/contractCode/test.py";
        childProcess.exec("python " + file_path, function (error, stdout, stderr) {
        if (error) console.log(error);
        if (stdout) console.log(stdout);
        if (stderr) console.log(stderr);
    });
}).run();
    },


'python2': function() {

var PythonShell = Meteor.npmRequire('python-shell');
var fut = new Future();
PythonShell.defaultOptions = { scriptPath: '/Users/josiasdewey/projects/contractCode/' };
PythonShell.run('test.py', function (err, result) {
  if (err) throw err;
  console.log('finished');
  fut ["return"] (result);
  // fut.return(result);
	});
	return fut.wait();
		}

});