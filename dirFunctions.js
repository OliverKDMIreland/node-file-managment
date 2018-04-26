//Import required Modules
const fs = require('fs');
var rlSync = require('readline-sync');
const chalk = require('chalk');
const log = require('simple-node-logger').createSimpleLogger('project.log');
var move = require('file-move');

//Creates a new directory
module.exports.newDir = function ( filename ){
  //Input name of dir to create
	var newDir = rlSync.question('Name of Dir to create: ');
	if (!fs.existsSync(newDir)){
    fs.mkdirSync(newDir);
    console.log(chalk.green('Directory Created: '+newDir));
    //logs sucessful creation
    log.info('User Created Directory: ' ,newDir);
	} else{
		console.log(chalk.red('Directory already exists!!'));
    //logs failure to create dir
		log.info('Error! user tried to create a direcotry which already exists:  ' ,newDir);
	}};

//Moves a directory from one place to another
module.exports.moveDir = function ( filename) {
  //Input file to move and where to move
  var CurrentPath = rlSync.question('Path of Dir to move: ');
  var NewPath = rlSync.question('New Path to move Dir to: ');
  if (fs.existsSync(CurrentPath)){
  move(CurrentPath, NewPath, function (err) { 
      //logs sucessful move   
      log.info('User moved Directory:  ' ,CurrentPath +' To: ' ,NewPath);
    }) 
    console.log(chalk.green('Directory Moved!'));
    } else {
    console.log(chalk.red('Cannot move Directory, Does not exist!!'));
    //logs fairlure to move directory
     log.info('User moved Directory:  ' ,CurrentPath +' To: ' ,NewPath);
  }};

//Reads all contents within a directory and prints out the size of contents
module.exports.readDir = function () {
  //Input name of Dir to read
    var readDir = rlSync.question('Name of Directory to read: ');
   fs.readdirSync(readDir).forEach(file => {
  console.log(file);
  //logs user reads contents of dir
  log.info('User read contents of:  ' ,readDir);
})
};


