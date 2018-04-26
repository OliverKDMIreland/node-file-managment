//Import required Modules
const fs = require('fs');
var rlSync = require('readline-sync');
var addLineNumbers = require('add-line-numbers')
const chalk = require('chalk');
const log = require('simple-node-logger').createSimpleLogger('project.log');
var move = require('file-move');
const currentdir = './';

//Reads a file and displays contents & size
module.exports.readFile = function ( filename ) {
  //Input name of file to read
  var readFile = rlSync.question('Name of file to read: ');
  if (fs.existsSync(readFile)){
	var buf = fs.readFileSync('./'+readFile, "utf8");  
  	console.log('\n'+buf);
    //Gets size of files in mb
    var size = fs.statSync(readFile)
    var fileSizeInBytes = size["size"]
    var fileSizeInMegabytes = fileSizeInBytes / 1000000.0
    console.log(chalk.yellow('Size of file is: ',fileSizeInMegabytes, 'mb'));
    //logs that user read file
  	log.info('User read file:  ' ,readFile);
	} else{
		console.log(chalk.red('File does not exist!!'));
    //logs error when reading file
    log.info('ERROR! ' ,readFile, ' does not exist! User tried to read');
	}};

//Lists all files in directory & size of file
module.exports.listFiles = function(){
	fs.readdirSync(currentdir).forEach(file => {
    //Gets size of files in mb
    var size = fs.statSync(file)
    var fileSizeInBytes = size["size"]
    var fileSizeInMegabytes = fileSizeInBytes / 1000000.0
  	console.log(file , chalk.yellow(fileSizeInMegabytes, 'mb'));    
		})
    //logs that user listed all files
    log.info('Listed all files in:  ' ,currentdir);
};

//Creates a new file
module.exports.newFile = function ( filename ){
  //Input of file to create
	var newFile = rlSync.question('Name of  new File: ');
	 if (!fs.existsSync(newFile)){
	fs.writeFileSync(newFile);
	console.log(chalk.green('File created: '+newFile));
  //logs user created file
	log.info('User created file:  ' ,newFile);
	} else{
		console.log(chalk.red('File already exists!!'));
    //logs if creation error
    log.info('ERROR! ' ,newFile, ' already exists, Cannot create');
	}};

//Deletes a file
module.exports.delFile = function ( filename ){
  //Input file name to delete
	var delFile = rlSync.question('Name of file to Delete: ');
	if (fs.existsSync(delFile)){
	fs.unlinkSync(delFile);
	console.log(chalk.green('File Deleted: '+delFile));
  //logs if file is deleted
	log.info('User deleted file:  ' ,delFile);
	} else{
		console.log(chalk.red('File does not exist!!'));
    //logs if delete error
    log.info('ERROR! ' ,delFile, ' does not exist, Cannot delete');
	}};

//Moves a file from one place to another
module.exports.moveFile = function ( filename) {
  //Input for path to move and where to move
  var CurrentPath = rlSync.question('Path of file to move: ');
  var NewPath = rlSync.question('New Path to move to: ');
  if (fs.existsSync(CurrentPath)){
  move(CurrentPath, NewPath, function (err) {   	
      //logs is moved sucessfully
      log.info('User moved file:  ' ,CurrentPath +' To: ' ,NewPath);
    })
 console.log(chalk.green('File Moved!'));
}     else {
    console.log(chalk.red('Cannot move file, Does not exist!!'));
    //logs if there was an error moving file
    log.info('ERROR! Directory ' ,CurrentPath, ' does not exist, Cannot move');
  }};

//Copies a file with or without line files
module.exports.copyFileFunc = function () {
//Input name of file to copy
var copyFile = rlSync.question('Name of file to copy: ');
//Standard copy of line numbers
var options = ['Standard Copy', 'Add line numbers'];

  var index = rlSync.keyInSelect(options, 'Select option?');
  var opt = parseInt(index);
  //console.log('Ok, ' + options[index] + ' choosen !!' + index);

   switch (index) {
     case 0 :   
              let cpName = 'copy_'+copyFile;      
              fs.copyFileSync(copyFile, cpName);
              console.log(chalk.green('Copied File: ' + copyFile+ ' To ' +cpName)); 
              //logs is standard copy  
              log.info('User coppied standard file:  ' ,copyFile, ' to ' ,cpName);           
              break;
     case 1 : 
              //TO DO: When run says file not found??
              // copyFile = addLineNumbers(copyFile);
              // let cpNumName = 'NumberLines_'+copyFile; 
              // fs.copyFileSync(copyFile, cpNumName); 
              console.log(chalk.green('Unfortuantely this doesnt work just yet :( '));
              //logs if added numbers when coppied
              log.info('User coppied file with numbers:  ' ,copyFile, 'to ' ,cpNumName);                      
              break;
     
     default:
              console.log('Back to main menu');
   }};