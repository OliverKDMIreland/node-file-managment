//Import required Modules
var DirFunc = require('./dirFunctions');
var rlSync = require('readline-sync');

//Custom module to print menu for Directory operations
module.exports.DirOptions = function() {
var options = ['View Dir Contents',  'Create Dir','Move Directory'];
do {
  var index = rlSync.keyInSelect(options, 'Select option?');
  var opt = parseInt(index);

   switch (index) {
     case 0 :  
              //Reads all files in a directory and prints their size           
              DirFunc.readDir(); 
              break;

     case 1 : 
             //Creates a new directory
             DirFunc.newDir();
              break;
     case 2:
            //Moves a directory from one location to another
            DirFunc.moveDir();
            break;        
     default:
              console.log('Back to main menu..');
   }
} while (index >= 0);

};