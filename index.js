//Import required Modules
var rlSync = require('readline-sync');
var fileOpt = require('./fileOptions');
var dirOpt = require('./dirOptions');

//Options for basic menu
var options = ['File Options', 'Directory Options'];
do {
  var index = rlSync.keyInSelect(options, 'Select option?');
  var opt = parseInt(index);

   switch (index) {
     case 0 : 
              //Move to File Options Menu
              fileOpt.FileOptions();                
              break;
     case 1 : 
              //Move to Dir Options Menu
              dirOpt.DirOptions(); 
              break;
     default:
              console.log('Bye Bye!');
   }
} while (index >= 0);
