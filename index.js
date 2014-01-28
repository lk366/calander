//variables
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var tasks = new Array();
var fs = require("fs")  


//do some stuff
  console.log("Make a selection:");
  console.log("Press 1 to add tasks");
  console.log("Press 2 to print tasks");

   rl.setPrompt('\n');
    rl.prompt(); //wait for the user to input something


       

       //loop starts here - reads the line
       rl.on('line', function(line) {   

          //case statement
          //take out the if below and remove its closing bracket
          //case 1: 
          //case 2:

          
          switch (line)
          {
        
          case "1":
          console.log("please enter tasks")
            tasks.push(line);
            break;
          case "2":
             for(var count=0; count < tasks.length; count++){
                  console.log(tasks[count]);
                  fs.appendFile('tasks.txt', tasks[count] + '\n', function (err) {
                      if(err){
                        console.log(err);
                      }
                   });
               }
              break;

            default:
              console.log("Please input a valid option.")
        
          }



 rl.prompt();
         }) .on("close" , function() {
          console.log("Goodbye,have a great day!")
          process.exit(0);
        });
