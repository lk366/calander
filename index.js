//variables
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var tasks = new Array();
var fs = require("fs")  


//do some stuff
  console.log("Menu:");
  console.log("");
  console.log("");

   rl.setPrompt('Enter the list of tasks\n');
    rl.prompt(); //wait for the user to input something


       

       //loop starts here - reads the line
       rl.on('line', function(line) {   

          

          if (line== "print" || line=="PRINT") {
             for(var count=0; count < tasks.length; count++){
                console.log(tasks[count]);
                fs.appendFile('tasks.txt', tasks[count] + '\n', function (err) {
                    if(err){
                      console.log(err);
                    }
                 });
             }
          }
          else{
            tasks.push(line);
          }
  
       
  
     

 

        rl.prompt();
         }) .on("close" , function() {
          console.log("Goodbye,have a great day!")
          process.exit(0);
        });
