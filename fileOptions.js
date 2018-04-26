//Import required Modules
var menuFunc = require('./fileFunctions');
var rlSync = require('readline-sync');

//Custom module to print menu for file operations
module.exports.FileOptions = function() {
var options = ['View File', 'Copy File', 'Create File', 'Delete File','Move File','List all Files'];
do {
  var index = rlSync.keyInSelect(options, 'Select option?');
  var opt = parseInt(index);

   switch (index) {
     case 0 :    
              //Reads a given file         
              menuFunc.readFile(); 
              break;
     case 1 :   
              //Calls copyFile menu (Standard or Line number copy)            
              menuFunc.copyFileFunc(); 
              break;
     case 2 : 
             //Creates a new file
             menuFunc.newFile();
              break;
      case 3 :     
              //Deletes a file         
              menuFunc.delFile(); 
              break;
      case 4: 
              //Moves a file 
              menuFunc.moveFile();
              break;
      case 5: 
              //Lists all files in directory & Size
              menuFunc.listFiles();
              break;
     default:
              console.log('Back to main menu..');
   }
} while (index >= 0);

};